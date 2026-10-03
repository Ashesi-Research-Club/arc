import type { APIRoute } from 'astro';

export const prerender = false;

// Eagerly import all HTML slide files in src/slides/ as raw text
const rawSlides = import.meta.glob('/src/slides/**/*.html', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function findMatchingSlide(requestPath: string): string | null {
  const cleanPath = requestPath.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (!cleanPath) return null;

  for (const [filePath, content] of Object.entries(rawSlides)) {
    const baseName = filePath.split('/').pop()?.replace(/\.html$/, '').toLowerCase() || '';

    // Direct match (e.g., "arc-general-meeting" or "03-10-26")
    if (baseName === cleanPath || baseName === cleanPath.replace(/\//g, '-')) {
      return content;
    }

    // Match dd/mm/yy or dd/mm/yyyy against dd-mm-yy / dd-mm-yyyy
    const pathParts = cleanPath.split('/');
    if (pathParts.length === 3) {
      const [d, m, y] = pathParts;
      const yShort = y.length === 4 ? y.slice(2) : y;
      const yFull = y.length === 2 ? `20${y}` : y;

      const altKeys = [
        `${d}-${m}-${yShort}`,
        `${d}-${m}-${yFull}`,
        `${yFull}-${m}-${d}`,
        `${d}_${m}_${yShort}`,
      ];

      if (altKeys.includes(baseName)) {
        return content;
      }
    }
  }

  return null;
}

export const GET: APIRoute = async ({ params }) => {
  const pathParam = params.path || '';
  const content = findMatchingSlide(pathParam);

  if (content) {
    return new Response(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }

  return new Response('Slide deck not found', { status: 404 });
};
