export const formatDate = (d: Date | string) => {
  const dateObj = typeof d === 'string' ? new Date(d) : d;
  return dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

export const minutes = (item: { excerpt?: string; body?: string }) => {
  const text = item.body || item.excerpt || '';
  const words = text.trim().split(/\s+/).length;
  return Math.max(3, Math.ceil(words / 150));
};
