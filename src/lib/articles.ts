export const formatDate = (d: Date | string) => {
  const dateObj = typeof d === 'string' ? new Date(d) : d;
  return dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

export const minutes = (item: { excerpt?: string; body?: string; blocks?: Array<{ data?: Record<string, any> }> }) => {
  let text = item.body || '';

  if (!text && item.blocks && item.blocks.length > 0) {
    const parts: string[] = [];
    for (const b of item.blocks) {
      const d = b.data;
      if (!d) continue;
      if (d.text) parts.push(String(d.text));
      if (d.quote) parts.push(String(d.quote));
      if (d.code) parts.push(String(d.code));
      if (d.english) parts.push(String(d.english));
      if (d.title) parts.push(String(d.title));
      if (d.question) parts.push(String(d.question));
      if (Array.isArray(d.options)) parts.push(d.options.join(' '));
    }
    text = parts.join(' ');
  }

  if (!text) {
    text = item.excerpt || '';
  }

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  // Standard reading speed ~200 wpm, with a 1-minute minimum
  return Math.max(1, Math.ceil(words / 200));
};

