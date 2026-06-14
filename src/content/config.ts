import { defineCollection, z } from "astro:content";

const days = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    day: z.number(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    coverImage: z.string().optional(),
    location: z.string().optional(),
  }),
});

export const collections = { days };
