import { defineCollection, z } from 'astro:content';

const jobs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    location: z.string(),
    hours: z.string(),
    summary: z.string(),
    order: z.number().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    location: z.string(),
    images: z.array(z.string()),
    order: z.number().optional(),
  }),
});

const team = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string(),
    cert: z.string().optional(),
  }),
});

export const collections = { jobs, projects, team };
