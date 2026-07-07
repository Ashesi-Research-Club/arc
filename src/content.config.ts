import { defineCollection, reference, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

export const CATEGORIES = [
  'computer-science',
  'engineering',
  'business',
  'social-sciences',
  'humanities',
  'interdisciplinary',
  'other',
] as const;

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(CATEGORIES),
    writtenBy: z.string(),
    researcher: reference('researchers'),
    publishedDate: z.coerce.date(),
    featured: z.boolean().default(false),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
    featuredImage: z.string().optional(),
    collaborators: z.string().optional(),
    fundingSource: z.string().optional(),
    status: z.enum(['published', 'draft']).default('published'),
  }),
});

const researchers = defineCollection({
  loader: file('./src/content/researchers.json'),
  schema: z.object({
    firstName: z.string(),
    lastName: z.string(),
    name: z.string(),
    program: z.string(),
    yearOfStudy: z.string(),
    bio: z.string(),
    interests: z.array(z.string()).default([]),
    status: z.enum(['active', 'alumni', 'inactive']).default('active'),
    avatar: z.string().optional(),
  }),
});

const team = defineCollection({
  loader: file('./src/content/team.json'),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    year: z.string(),
    specialization: z.string(),
    description: z.string(),
    order: z.number(),
    isActive: z.boolean().default(true),
  }),
});

export const collections = { articles, researchers, team };
