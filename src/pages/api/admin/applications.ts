import type { APIRoute } from 'astro';
import { updateApplicationStatus, verifyPasscode } from '../../../lib/admin';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload = await request.json();
    const { passcode, applicationId, status } = payload;

    if (!verifyPasscode(passcode)) {
      return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), { status: 401 });
    }

    const res = await updateApplicationStatus(applicationId, status);
    return new Response(JSON.stringify(res), { status: res.success ? 200 : 400 });
  } catch (err: any) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
};
