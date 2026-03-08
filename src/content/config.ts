import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
    summary: z.string().optional(),
    section: z.enum(['dev', 'life', 'mgmt', 'ideas', 'knowledge', 'science']),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
    summary: z.string().optional(),
  }),
});

export const collections = { blog, pages };
