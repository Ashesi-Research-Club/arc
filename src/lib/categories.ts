export const CATEGORY_LABELS: Record<string, string> = {
  'computer-science': 'Computer Science',
  engineering: 'Engineering',
  business: 'Business',
  'social-sciences': 'Social Sciences',
  humanities: 'Humanities',
  interdisciplinary: 'Interdisciplinary',
  other: 'Other',
};

export const label = (category: string) => CATEGORY_LABELS[category] ?? category;

/* Reading time — derived from word count (brief), ~200 wpm. */
export const readTime = (body: string) =>
  Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 200));
