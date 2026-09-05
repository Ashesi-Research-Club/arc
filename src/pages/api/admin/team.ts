import type { APIRoute } from 'astro';
import { saveAcademicSession, saveTeamRole, verifyPasscode } from '../../../lib/admin';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload = await request.json();
    const { passcode, type, data } = payload;

    if (!verifyPasscode(passcode)) {
      return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), { status: 401 });
    }

    if (type === 'session') {
      const res = await saveAcademicSession(data);
      return new Response(JSON.stringify(res), { status: res.success ? 200 : 400 });
    } else if (type === 'role') {
      const res = await saveTeamRole(data);
      return new Response(JSON.stringify(res), { status: res.success ? 200 : 400 });
    }

    return new Response(JSON.stringify({ success: false, error: 'Invalid operation type' }), { status: 400 });
  } catch (err: any) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
};
