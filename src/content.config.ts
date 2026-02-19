import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const writings = defineCollection({
  loader: glob({ pattern: '**/[^_]*.(md|mdx)', base: './content/writings' }),
  schema: z.object({
    title: z.string(),
    date: z.union([
      z.date(),
      z.string(),
    ]).optional(),
    updated: z.union([
      z.date(),
      z.string(),
    ]).optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
    private: z.boolean().default(false),
  }),
})

export const collections = { writings }
