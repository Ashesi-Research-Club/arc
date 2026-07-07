import { getCollection, type CollectionEntry } from 'astro:content';
import { readTime } from './categories';

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

export const minutes = (a: CollectionEntry<'articles'>) => readTime(a.body ?? '');

/* Published articles, newest first. */
export async function publishedArticles() {
  const all = await getCollection('articles', ({ data }) => data.status === 'published');
  return all.sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf());
}
