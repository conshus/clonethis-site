import { defineCollection, z } from 'astro:content';

const starter = defineCollection({
  type: 'content',
  schema: z.object({
    isComingSoon: z.boolean(),
    name: z.string(),
    summary: z.string(),
    status: z.string().optional(),
    repo: z.string().url().optional(),
    instructions: z.string().url().optional(),
    updates: z.string().url(),
  }),
});

export const collections = { starter };
