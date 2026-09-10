import type { APIRoute } from 'astro';
import { saveCategory, deleteCategory, verifyPasscode } from '../../../lib/admin';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload = await request.json();
    const { passcode, action, id, name, description } = payload;

    if (!verifyPasscode(passcode)) {
      return new Response(JSON.stringify({ success: false, error: 'Unauthorized: Invalid Editorial Passcode' }), { status: 401 });
    }

    if (action === 'delete') {
      if (!id) {
        return new Response(JSON.stringify({ success: false, error: 'Category ID is required for deletion' }), { status: 400 });
      }
      const res = await deleteCategory(id);
      return new Response(JSON.stringify(res), { status: res.success ? 200 : 400 });
    }

    if (!id || !name) {
      return new Response(JSON.stringify({ success: false, error: 'Category ID and Name are required' }), { status: 400 });
    }

    const res = await saveCategory({ id: id.trim().toLowerCase(), name: name.trim(), description: (description || '').trim() });
    return new Response(JSON.stringify(res), { status: res.success ? 200 : 400 });
  } catch (err: any) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
};
