import type { APIRoute } from 'astro';
import { incrementClaps } from '../../lib/supabase';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { articleId } = await request.json();
    if (!articleId) {
      return new Response(JSON.stringify({ success: false, error: 'Article ID required' }), { status: 400 });
    }
    const res = await incrementClaps(articleId);
    return new Response(JSON.stringify(res), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
};
