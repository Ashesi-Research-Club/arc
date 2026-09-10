import { createClient } from '@supabase/supabase-js';

// Environment variables for Supabase connection
const env = import.meta.env || {};
const processEnv = typeof process !== 'undefined' ? (process.env || {}) : {};

const supabaseUrl = env.PUBLIC_SUPABASE_URL || env.SUPABASE_URL || env.NUXT_PUBLIC_SUPABASE_URL || processEnv.PUBLIC_SUPABASE_URL || processEnv.SUPABASE_URL || processEnv.NUXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = env.PUBLIC_SUPABASE_ANON_KEY || env.SUPABASE_ANON_KEY || env.SUPABASE_KEY || env.NUXT_PUBLIC_SUPABASE_ANON_KEY || processEnv.PUBLIC_SUPABASE_ANON_KEY || processEnv.SUPABASE_ANON_KEY || processEnv.SUPABASE_KEY || processEnv.NUXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

if (supabase) {
  console.log('[SUPABASE DATA LAYER] Connected to live Supabase DB:', supabaseUrl);
} else {
  console.warn('[SUPABASE DATA LAYER] Missing credentials. Operating in local fallback mock mode.');
}

// ==========================================
// TYPE DEFINITIONS
// ==========================================

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Researcher {
  id: string;
  slug: string;
  first_name?: string;
  last_name?: string;
  full_name: string;
  program: string;
  year_of_study: string;
  bio: string;
  avatar_url?: string;
  interests: string[];
  status: string;
}

export interface Article {
  id: string;
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
  tags: string[];
  status: string;
  claps: number;
  researcher?: Researcher;
  category?: Category;
  blocks?: ArticleBlock[];
  translations?: Record<string, { title?: string; excerpt?: string }>;
}

export interface ArticleBlock {
  id: string;
  article_id: string;
  block_type: 'paragraph' | 'heading' | 'pullquote' | 'callout' | 'code' | 'checkpoint' | 'audio' | 'multilingual' | 'image';
  order_index: number;
  data: Record<string, any>;
}

export interface AcademicSession {
  id: string;
  session_label: string;
  start_year: number;
  end_year: number;
  is_current: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  avatar_url?: string;
  specialization: string;
  year_of_study: string;
  role?: string;
  description?: string;
  order_index?: number;
}

export interface ApplicationInput {
  applicant_name: string;
  email: string;
  phone: string;
  program: string;
  year_of_study: string;
  research_advisor?: string;
  research_title: string;
  research_category: string;
  project_stage: string;
  abstract: string;
  real_world_impact: string;
  motivation: string;
  supporting_materials_url?: string;
  consent_given: boolean;
}

// ==========================================
// LOCAL MOCK DATA (OFFLINE FALLBACK)
// ==========================================

const MOCK_CATEGORIES: Category[] = [
  { id: 'computer-science', name: 'Computer Science & AI', description: 'Algorithmic efficiency, computer vision, local AI, and signal intelligence.' },
  { id: 'engineering', name: 'Engineering & Technology', description: 'Hardware innovations, robotics, renewable energy, and telecommunications.' },
  { id: 'business', name: 'Business & Economics', description: 'Market dynamics, financial modeling, entrepreneurship, and African economic policy.' },
  { id: 'interdisciplinary', name: 'Interdisciplinary Studies', description: 'Research bridging tech, ethics, health, design, and social impact.' }
];

const MOCK_RESEARCHERS: Researcher[] = [
  {
    id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
    slug: 'isaac-osei-nyantakyi',
    first_name: 'Isaac',
    last_name: 'Osei Nyantakyi',
    full_name: 'Isaac Osei Nyantakyi',
    program: 'Electrical Engineering',
    year_of_study: 'Faculty',
    bio: 'Ghanaian signal-processing researcher and avid gamer with a master\'s in e-sports management. Did his master\'s and PhD in China and was part of Huawei\'s founding 5G deployment-and-testing team. Believes every project must have real-world impact.',
    interests: ['Signal processing', 'Localization (AOA/TDOA)', 'The ACGA algorithm', 'Renewable energy'],
    status: 'active'
  },
  {
    id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a22',
    slug: 'elijah-boateng',
    first_name: 'Elijah',
    last_name: 'Kwaku Adutwum Boateng',
    full_name: 'Elijah Kwaku Adutwum Boateng',
    program: 'Computer Science',
    year_of_study: 'Graduate · Class of 2023',
    bio: 'Curious and determined Intelligent Computing master\'s student at Ashesi, Class of 2023. Built a 95–96% accurate facial-recognition capstone and now works on low-cost, locally-runnable vision-language models — a "hospital in your pocket" for healthcare in Ghana.',
    interests: ['Machine intelligence', 'Computer vision', 'Facial recognition', 'Vision-language models', 'Low-cost healthcare AI'],
    status: 'active'
  }
];

const MOCK_SESSIONS: AcademicSession[] = [
  { id: '2025-2026', session_label: '2025/2026 Session', start_year: 2025, end_year: 2026, is_current: true },
  { id: '2024-2025', session_label: '2024/2025 Session', start_year: 2024, end_year: 2025, is_current: false },
  { id: '2023-2024', session_label: '2023/2024 Session', start_year: 2023, end_year: 2024, is_current: false }
];

const MOCK_TEAM_ROLES_BY_SESSION: Record<string, TeamMember[]> = {
  '2025-2026': [
    { id: 'c01', name: 'Sinam Afi Serwa Ametewee', role: 'Editor-in-Chief', description: 'Leads the editorial desk and writes long-form researcher profiles.', specialization: 'Computer Science', year_of_study: 'Year 3', order_index: 1 },
    { id: 'c02', name: 'Kojo Mensah', role: 'Managing Editor', description: 'Runs the publishing pipeline and commissions the category desks.', specialization: 'Engineering', year_of_study: 'Year 4', order_index: 2 },
    { id: 'c03', name: 'Ama Owusu', role: 'Research Editor', description: 'Fact-checks technical claims and liaises with profiled researchers.', specialization: 'Business', year_of_study: 'Year 3', order_index: 3 },
    { id: 'c04', name: 'Yaw Darko', role: 'Design Lead', description: 'Owns the black-and-white house style and the reading experience.', specialization: 'Interdisciplinary', year_of_study: 'Year 2', order_index: 4 }
  ],
  '2024-2025': [
    { id: 'c05', name: 'Nana Yaw Osei', role: 'President', description: 'Founding Executive Chair and research lead for the 2024/2025 academic session.', specialization: 'Computer Science', year_of_study: 'Class of 2025', order_index: 1 },
    { id: 'c06', name: 'Akosua Bediako', role: 'Vice President', description: 'Head of operations and researcher outreach for 2024/2025.', specialization: 'Engineering', year_of_study: 'Class of 2025', order_index: 2 },
    { id: 'c01', name: 'Sinam Afi Serwa Ametewee', role: 'Managing Editor', description: 'Senior editor overseeing early profile publications.', specialization: 'Computer Science', year_of_study: 'Year 2', order_index: 3 }
  ],
  '2023-2024': [
    { id: 'c05', name: 'Nana Yaw Osei', role: 'Inaugural Club Lead', description: 'Established the Ashesi Research Club charter and initial editorial guidelines.', specialization: 'Computer Science', year_of_study: 'Class of 2025', order_index: 1 }
  ]
};

const MOCK_ARTICLES: Article[] = [
  {
    id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01',
    slug: 'did-dr-nyantakyi-just-replace-gps',
    title: 'Did Dr. Nyantakyi Just Replace GPS? A Silent Revolution in Signal Tracking',
    excerpt: 'Isaac Osei Nyantakyi blends passion with purpose. From gaming and e-sports management to cutting-edge signal processing research, his work focuses on one core idea: research should solve real-world problems. Through innovations like the ACGA algorithm, he is developing technologies that work even in messy, real-life environments.',
    category_id: 'computer-science',
    researcher_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
    written_by: 'Sinam Afi Serwa Ametewee',
    published_date: '2026-03-13',
    featured: true,
    collaborators: 'Huawei 5G testing team',
    funding_source: 'Self-directed research',
    tags: ['Signal Processing', 'Localization', '5G'],
    status: 'published',
    claps: 42,
    researcher: MOCK_RESEARCHERS[0],
    category: MOCK_CATEGORIES[0],
    blocks: [
      { id: 'b1', article_id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01', block_type: 'paragraph', order_index: 1, data: { text: "Isaac Osei Nyantakyi isn't your typical \"all work, no play\" academic. Right off the bat, he drops this gem:" } },
      { id: 'b2', article_id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01', block_type: 'pullquote', order_index: 2, data: { quote: "One fun thing about me is that I'm an avid gamer. I love video games and have actually created a career path around them. I did a master's in e-sports management, organizing gaming tournaments and helping people from the streets find career paths in gaming.", cite: "Dr. Isaac Nyantakyi" } },
      { id: 'b3', article_id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01', block_type: 'paragraph', order_index: 3, data: { text: "That is incredible! Here's a PhD-level researcher who sees gaming as a real way to uplift and motivate young people, overall turning his hobby into opportunities for others. He's got a full life outside the lab, and that balance probably fuels his drive." } },
      { id: 'b4', article_id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01', block_type: 'heading', order_index: 4, data: { level: 2, text: "Applying Knowledge Is His Guiding Principle" } },
      { id: 'b5', article_id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01', block_type: 'paragraph', order_index: 5, data: { text: "To understand Isaac's research philosophy, we need to understand his guiding principle. What's his guiding principle? He puts it perfectly: \"Application. Every research project I undertake must have a real-world impact… It's a fertile ground to build systems from scratch and create sustainable innovations that actually improve lives.\" It's that same mindset that took him from an undergraduate degree in telecommunications engineering to China for his master's and PhD, where he joined Huawei's early 5G team." } },
      { id: 'b6', article_id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01', block_type: 'pullquote', order_index: 6, data: { quote: "I was part of the founding team working on deployment and testing.", cite: "Dr. Nyantakyi" } },
      { id: 'b7', article_id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01', block_type: 'heading', order_index: 7, data: { level: 2, text: "He Cites A Paper In A Top Journal as His Biggest Milestone" } },
      { id: 'b8', article_id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01', block_type: 'paragraph', order_index: 8, data: { text: "Isaac Osei Nyantakyi isn't one to brag, but when asked about his biggest milestone, he quietly points to something pretty impressive: his paper on the Adaptive Conjugate Gradient Algorithm (ACGA), published in a top journal and already racking up solid citations. This algorithm helps with accurate location tracking, such as finding a lost hiker or guiding autonomous vehicles, like drones in crowded airspace, filling gaps where GPS fails." } },
      { id: 'b9', article_id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01', block_type: 'code', order_index: 9, data: { lang: "python", code: "def acga_localize(signal, antennas):\n    angle = estimate_aoa(signal, antennas)   # Angle of Arrival\n    delay = estimate_tdoa(signal, antennas)  # Time Difference of Arrival\n    return krylov_solve(angle, delay)        # efficient in noise" } },
      { id: 'b10', article_id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01', block_type: 'checkpoint', order_index: 10, data: { question: "How does ACGA relate to GPS?", options: ["ACGA fully replaces GPS everywhere", "ACGA fills the gaps where GPS underperforms", "ACGA only works in clean lab conditions"], correct: 1 } },
      { id: 'b11', article_id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01', block_type: 'audio', order_index: 11, data: { title: "Audio Brief: The ACGA Signal Algorithm Explained", audioUrl: "https://res.cloudinary.com/demo/video/upload/v1689234850/sample_audio.mp3", duration: "03:45" } },
      { id: 'b12', article_id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01', block_type: 'multilingual', order_index: 12, data: { english: "Research must solve real-world problems and uplift local communities.", twi: "Nhwehwɛmu sɔɔso fa nnipa asetena mu nsɛm ho mmoa ma adwuma tu mpon.", french: "La recherche doit résoudre des problèmes concrets et autonomiser les communautés locales." } }
    ]
  },
  {
    id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a02',
    slug: 'from-curiosity-to-impact',
    title: 'From Curiosity To Impact',
    excerpt: 'Curious, determined and ambitious, Elijah Kwaku Adutwum Boateng has made it his mission to utilize computing and intelligent machines to address real-world challenges.',
    category_id: 'engineering',
    researcher_id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a22',
    written_by: 'Ashesi Research Club',
    published_date: '2025-12-03',
    featured: false,
    collaborators: 'University of Ghana & Ashesi AI Lab',
    funding_source: 'Ashesi Provost Office Intern Grant',
    tags: ['Machine Learning', 'Computer Vision', 'Healthcare AI'],
    status: 'published',
    claps: 18,
    researcher: MOCK_RESEARCHERS[1],
    category: MOCK_CATEGORIES[1],
    blocks: [
      { id: 'b20', article_id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a02', block_type: 'paragraph', order_index: 1, data: { text: "Curious, determined and ambitious, Elijah Kwaku Adutwum Boateng has made it his mission to utilize computing and intelligent machines to address real-world challenges. From early collaborations with researchers at Ashesi University and University of Ghana, the Ashesi Class of 2023 alum has continually drawn on the technical foundation he built at the university to solve day-to-day challenges that demand both theory and practical insight." } },
      { id: 'b21', article_id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a02', block_type: 'pullquote', order_index: 2, data: { quote: "My eureka moments mainly arose from discomfort and frustration — like when my phone failed to recognize my face in the middle of the night.", cite: "Elijah Boateng" } },
      { id: 'b22', article_id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a02', block_type: 'heading', order_index: 3, data: { level: 2, text: "A Hospital in Your Pocket: Vision-Language Models" } },
      { id: 'b23', article_id: 'e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a02', block_type: 'paragraph', order_index: 4, data: { text: "Building on his capstone, Elijah is exploring the intersection of vision and language — 'language-vision models' equipped to both see and understand. While acknowledging existing GPT-based systems that perform similar tasks, he notes they are often expensive and inaccessible, motivating him to develop cheaper, smaller, more efficient models that can run locally." } }
    ]
  }
];

// ==========================================
// DATA ACCESS LAYER FUNCTIONS
// ==========================================

export async function getCategories(): Promise<Category[]> {
  if (supabase) {
    const { data, error } = await supabase.from('categories').select('*');
    if (!error && data) return data;
  }
  return MOCK_CATEGORIES;
}

export async function getResearchers(): Promise<Researcher[]> {
  if (supabase) {
    const { data, error } = await supabase.from('researchers').select('*');
    if (!error && data) return data;
  }
  return MOCK_RESEARCHERS;
}

export async function getResearcherBySlug(slug: string): Promise<Researcher | null> {
  if (supabase) {
    const { data, error } = await supabase.from('researchers').select('*').eq('slug', slug).single();
    if (!error && data) return data;
  }
  return MOCK_RESEARCHERS.find(r => r.slug === slug) || null;
}

export async function getArticles(categoryId?: string): Promise<Article[]> {
  if (supabase) {
    let query = supabase
      .from('articles')
      .select('*, researcher:researchers(*), category:categories(*), blocks:article_blocks(*)')
      .order('published_date', { ascending: false });

    if (categoryId && categoryId !== 'all') {
      query = query.eq('category_id', categoryId);
    }
    const { data, error } = await query;
    if (!error && data) {
      data.forEach((article: Article) => {
        if (article.blocks && Array.isArray(article.blocks)) {
          article.blocks.sort((a, b) => (a.order_index || 0) - (b.order_index || 0));
        }
      });
      return data;
    }
  }
  
  if (categoryId && categoryId !== 'all') {
    return MOCK_ARTICLES.filter(a => a.category_id === categoryId);
  }
  return MOCK_ARTICLES;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (supabase) {
    const { data: article, error } = await supabase
      .from('articles')
      .select('*, researcher:researchers(*), category:categories(*)')
      .eq('slug', slug)
      .single();
    
    if (!error && article) {
      const { data: blocks } = await supabase
        .from('article_blocks')
        .select('*')
        .eq('article_id', article.id)
        .order('order_index', { ascending: true });
      
      article.blocks = blocks || [];
      return article;
    }
  }

  const mock = MOCK_ARTICLES.find(a => a.slug === slug);
  return mock || null;
}

export async function getAcademicSessions(): Promise<AcademicSession[]> {
  if (supabase) {
    const { data, error } = await supabase.from('academic_sessions').select('*').order('start_year', { ascending: false });
    if (!error && data) return data;
  }
  return MOCK_SESSIONS;
}

export async function getTeamBySession(sessionId?: string): Promise<{ session: AcademicSession; members: TeamMember[] }> {
  const sessions = await getAcademicSessions();
  const activeSession = sessionId 
    ? sessions.find(s => s.id === sessionId) || sessions[0]
    : sessions.find(s => s.is_current) || sessions[0];

  if (supabase) {
    const { data, error } = await supabase
      .from('team_roles')
      .select('*, member:team_members(*)')
      .eq('session_id', activeSession.id)
      .order('order_index', { ascending: true });

    if (!error && data) {
      const members: TeamMember[] = data.map(row => ({
        id: row.member.id,
        name: row.member.name,
        avatar_url: row.member.avatar_url,
        specialization: row.member.specialization,
        year_of_study: row.member.year_of_study,
        role: row.role,
        description: row.description,
        order_index: row.order_index
      }));
      return { session: activeSession, members };
    }
  }

  const members = MOCK_TEAM_ROLES_BY_SESSION[activeSession.id] || MOCK_TEAM_ROLES_BY_SESSION['2025-2026'];
  return { session: activeSession, members };
}

export async function submitApplication(input: ApplicationInput): Promise<{ success: boolean; id?: string; error?: string }> {
  if (supabase) {
    const { data, error } = await supabase.from('applications').insert([input]).select('id').single();
    if (error) return { success: false, error: error.message };
    return { success: true, id: data.id };
  }
  // Local fallback simulation
  console.log('[SUPABASE MOCK] Application submitted:', input);
  return { success: true, id: `mock-app-${Date.now()}` };
}

export async function subscribeNewsletter(email: string): Promise<{ success: boolean; error?: string }> {
  if (supabase) {
    const { error } = await supabase.from('newsletter_subscribers').insert([{ email }]);
    if (error && error.code !== '23505' && !error.message.includes('unique constraint') && !error.message.includes('already exists')) {
      return { success: false, error: error.message };
    }
    return { success: true };
  }
  console.log('[SUPABASE MOCK] Newsletter subscribed:', email);
  return { success: true };
}

export async function incrementClaps(articleId: string): Promise<{ success: boolean; newClaps?: number }> {
  if (supabase) {
    const { data: current } = await supabase.from('articles').select('claps').eq('id', articleId).single();
    const newCount = (current?.claps || 0) + 1;
    const { error } = await supabase.from('articles').update({ claps: newCount }).eq('id', articleId);
    if (!error) return { success: true, newClaps: newCount };
  }
  const article = MOCK_ARTICLES.find(a => a.id === articleId);
  if (article) {
    article.claps = (article.claps || 0) + 1;
    return { success: true, newClaps: article.claps };
  }
  return { success: true, newClaps: 1 };
}

export async function saveCategory(category: Category): Promise<{ success: boolean; error?: string }> {
  if (supabase) {
    const { error } = await supabase.from('categories').upsert([category]);
    if (error) return { success: false, error: error.message };
    return { success: true };
  }
  const existingIdx = MOCK_CATEGORIES.findIndex(c => c.id === category.id);
  if (existingIdx >= 0) {
    MOCK_CATEGORIES[existingIdx] = category;
  } else {
    MOCK_CATEGORIES.push(category);
  }
  return { success: true };
}

export async function deleteCategory(id: string): Promise<{ success: boolean; error?: string }> {
  if (supabase) {
    // Check if any articles reference this category
    const { data: articles } = await supabase.from('articles').select('id').eq('category_id', id);
    if (articles && articles.length > 0) {
      return { success: false, error: `Cannot delete category: ${articles.length} article(s) are assigned to it.` };
    }
    const { error } = await supabase.from('categories').delete().eq('id', id);
    if (error) return { success: false, error: error.message };
    return { success: true };
  }
  const idx = MOCK_CATEGORIES.findIndex(c => c.id === id);
  if (idx >= 0) {
    MOCK_CATEGORIES.splice(idx, 1);
  }
  return { success: true };
}
