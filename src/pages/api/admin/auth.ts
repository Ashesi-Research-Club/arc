import type { APIRoute } from 'astro';
import { verifyPasscode } from '../../../lib/admin';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { passcode } = await request.json();
    const isValid = verifyPasscode(passcode);
    
    if (!isValid) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid Editorial Passcode' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
};
