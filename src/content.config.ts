import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const writings = defineCollection({
  loader: glob({ pattern: '**/[^_]*.(md|mdx)', base: './content/writings' }),
  schema: z.object({
    title: z.string(),
    date: z.union([z.date(), z.string()]).optional(),
    updated: z.union([z.date(), z.string()]).optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
    private: z.boolean().default(false),
  }),
})

const albums = defineCollection({
  loader: glob({ pattern: '**.json', base: './content/favorites/albums' }),
  schema: z.record(
    z.object({
      name: z.union([z.string(), z.record(z.string())]),
      releases: z.array(z.object({
        title: z.union([z.string(), z.record(z.string())]),
        url: z.string().optional(),
        cover: z.string().optional(),
        genre: z.string().optional(),
        releasedAt: z.string().optional(),
        rating: z.number().min(1).max(5).optional(),
        tracks: z.array(z.object({ title: z.string(), url: z.string().optional(), preview: z.boolean().optional() })).optional(),
      })),
    }),
  ),
})

export const collections = { writings, albums }
