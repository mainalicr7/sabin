import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const disciplineIds = ['product', 'design', 'content', 'data', 'sales', 'motion', 'ai'] as const;

// One MDX file in src/content/work = one case study page.
const work = defineCollection({
  loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string().max(90),
    summary: z.string().min(60).max(200),
    disciplines: z.array(z.enum(disciplineIds)).min(1),
    role: z.string(),
    context: z.string(),
    order: z.number().int(),
    featured: z.boolean().default(false),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    outcome: z.string(),
    stack: z.array(z.string()).default([]),
  }),
});

export const collections = { work };
