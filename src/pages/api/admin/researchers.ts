import type { APIRoute } from 'astro';
import { saveResearcher, verifyPasscode } from '../../../lib/admin';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload = await request.json();
    const { passcode, ...researcherInput } = payload;

    if (!verifyPasscode(passcode)) {
      return new Response(JSON.stringify({ success: false, error: 'Unauthorized: Invalid Editorial Passcode' }), { status: 401 });
    }

    const res = await saveResearcher(researcherInput);
    return new Response(JSON.stringify(res), { status: res.success ? 200 : 400 });
  } catch (err: any) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
};
