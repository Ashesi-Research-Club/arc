import { supabase, type Article, type Researcher, type ArticleBlock, type ApplicationInput } from './supabase';

const DEFAULT_PASSCODE = 'ashesi-edit-2026';

export function getAdminPasscode(): string {
  const envCode = (import.meta.env && import.meta.env.ADMIN_PASSCODE) || 
                  (typeof process !== 'undefined' && process.env.ADMIN_PASSCODE);
  return envCode || DEFAULT_PASSCODE;
}

export function verifyPasscode(code: string): boolean {
  return code === getAdminPasscode();
}

export interface SaveArticleInput {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  category_id: string;
  researcher_id: string;
  written_by: string;
  published_date: string;
  featured: boolean;
  featured_image?: string;
  collaborators?: string;
  funding_source?: string;
  audio_url?: string;
  audio_duration?: string;
  status: string;
  blocks: {
    block_type: string;
    order_index: number;
    data: Record<string, any>;
  }[];
}

export async function saveArticle(input: SaveArticleInput): Promise<{ success: boolean; id?: string; error?: string }> {
  if (!supabase) {
    return { success: false, error: 'Supabase client is not connected' };
  }

  try {
    const articlePayload = {
      slug: input.slug,
      title: input.title,
      excerpt: input.excerpt,
      category_id: input.category_id,
      researcher_id: input.researcher_id,
      written_by: input.written_by,
      published_date: input.published_date,
      featured: input.featured,
      featured_image: input.featured_image || null,
      collaborators: input.collaborators || null,
      funding_source: input.funding_source || null,
      audio_url: input.audio_url || null,
      audio_duration: input.audio_duration || null,
      status: input.status || 'published'
    };

    let articleId = input.id;

    if (articleId) {
      const { error } = await supabase.from('articles').update(articlePayload).eq('id', articleId);
      if (error) {
        if (error.message.includes('audio_duration') || error.message.includes('audio_url')) {
          // Retry without audio columns if schema in Supabase does not have them yet
          const fallbackPayload = { ...articlePayload };
          delete (fallbackPayload as any).audio_url;
          delete (fallbackPayload as any).audio_duration;
          const { error: err2 } = await supabase.from('articles').update(fallbackPayload).eq('id', articleId);
          if (err2) return { success: false, error: err2.message };
        } else {
          return { success: false, error: error.message };
        }
      }
    } else {
      const { data, error } = await supabase.from('articles').insert([articlePayload]).select('id').single();
      if (error) {
        if (error.message.includes('audio_duration') || error.message.includes('audio_url')) {
          const fallbackPayload = { ...articlePayload };
          delete (fallbackPayload as any).audio_url;
          delete (fallbackPayload as any).audio_duration;
          const { data: d2, error: err2 } = await supabase.from('articles').insert([fallbackPayload]).select('id').single();
          if (err2) return { success: false, error: err2.message };
          articleId = d2.id;
        } else {
          return { success: false, error: error.message };
        }
      } else {
        articleId = data.id;
      }
    }

    // Replace blocks for this article
    if (articleId && input.blocks) {
      await supabase.from('article_blocks').delete().eq('article_id', articleId);

      if (input.blocks.length > 0) {
        const blocksPayload = input.blocks.map((b, idx) => ({
          article_id: articleId,
          block_type: b.block_type,
          order_index: idx + 1,
          data: b.data
        }));
        const { error: blockErr } = await supabase.from('article_blocks').insert(blocksPayload);
        if (blockErr) console.error('Failed to insert article blocks:', blockErr.message);
      }
    }

    return { success: true, id: articleId };
  } catch (err: any) {
    return { success: false, error: err.message || 'Server error saving article' };
  }
}

export async function deleteArticle(articleId: string): Promise<{ success: boolean; error?: string }> {
  if (!supabase) return { success: false, error: 'Supabase client not connected' };
  const { error } = await supabase.from('articles').delete().eq('id', articleId);
  if (error) return { success: false, error: error.message };
  return { success: true };
}

export interface SaveResearcherInput {
  id?: string;
  slug: string;
  first_name?: string;
  last_name?: string;
  full_name: string;
  program: string;
  year_of_study: string;
  bio: string;
  avatar_url?: string;
  interests: string[];
}

export async function saveResearcher(input: SaveResearcherInput): Promise<{ success: boolean; id?: string; error?: string }> {
  if (!supabase) return { success: false, error: 'Supabase client not connected' };
  
  try {
    const payload = {
      slug: input.slug,
      first_name: input.first_name || null,
      last_name: input.last_name || null,
      full_name: input.full_name,
      program: input.program,
      year_of_study: input.year_of_study,
      bio: input.bio,
      avatar_url: input.avatar_url || null,
      interests: input.interests || []
    };

    if (input.id) {
      const { error } = await supabase.from('researchers').update(payload).eq('id', input.id);
      if (error) return { success: false, error: error.message };
      return { success: true, id: input.id };
    } else {
      const { data, error } = await supabase.from('researchers').insert([payload]).select('id').single();
      if (error) return { success: false, error: error.message };
      return { success: true, id: data.id };
    }
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function saveAcademicSession(session: { id: string; session_label: string; start_year: number; end_year: number; is_current: boolean }): Promise<{ success: boolean; error?: string }> {
  if (!supabase) return { success: false, error: 'Supabase client not connected' };
  
  if (session.is_current) {
    // Reset existing current flags
    await supabase.from('academic_sessions').update({ is_current: false }).neq('id', session.id);
  }

  const { error } = await supabase.from('academic_sessions').upsert([session]);
  if (error) return { success: false, error: error.message };
  return { success: true };
}

export async function saveTeamRole(input: {
  id?: string;
  session_id: string;
  name: string;
  avatar_url?: string;
  specialization: string;
  year_of_study: string;
  role: string;
  description: string;
  order_index: number;
}): Promise<{ success: boolean; error?: string }> {
  if (!supabase) return { success: false, error: 'Supabase client not connected' };

  try {
    // Create member if not present or update
    const memberPayload = {
      name: input.name,
      avatar_url: input.avatar_url || null,
      specialization: input.specialization,
      year_of_study: input.year_of_study
    };

    const { data: member, error: memErr } = await supabase.from('team_members').insert([memberPayload]).select('id').single();
    const memberId = member?.id;

    if (!memberId && memErr) return { success: false, error: memErr.message };

    const rolePayload = {
      session_id: input.session_id,
      member_id: memberId,
      role: input.role,
      description: input.description,
      order_index: input.order_index,
      is_executive: true
    };

    if (input.id) {
      const { error } = await supabase.from('team_roles').update(rolePayload).eq('id', input.id);
      if (error) return { success: false, error: error.message };
    } else {
      const { error } = await supabase.from('team_roles').insert([rolePayload]);
      if (error) return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function updateApplicationStatus(id: string, status: string): Promise<{ success: boolean; error?: string }> {
  if (!supabase) return { success: false, error: 'Supabase client not connected' };
  const { error } = await supabase.from('applications').update({ status }).eq('id', id);
  if (error) return { success: false, error: error.message };
  return { success: true };
}

export async function saveCategory(category: { id: string; name: string; description: string }): Promise<{ success: boolean; error?: string }> {
  if (!supabase) return { success: false, error: 'Supabase client not connected' };
  const { error } = await supabase.from('categories').upsert([category]);
  if (error) return { success: false, error: error.message };
  return { success: true };
}

export async function deleteCategory(id: string): Promise<{ success: boolean; error?: string }> {
  if (!supabase) return { success: false, error: 'Supabase client not connected' };
  const { data: articles } = await supabase.from('articles').select('id').eq('category_id', id);
  if (articles && articles.length > 0) {
    return { success: false, error: `Cannot delete category: ${articles.length} article(s) are assigned to it.` };
  }
  const { error } = await supabase.from('categories').delete().eq('id', id);
  if (error) return { success: false, error: error.message };
  return { success: true };
}
