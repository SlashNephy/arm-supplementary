import { decompress } from 'fzstd'
import { z } from 'zod'

import { UserAgent } from './constant.ts'

const schema = z.object({
  license: z.object({
    name: z.string(),
    url: z.url(),
  }),
  repository: z.url(),
  scoreRange: z.object({
    minInclusive: z.number(),
    maxInclusive: z.number(),
  }),
  lastUpdate: z.string(),
  data: z
    .object({
      sources: z.url().array(),
      title: z.string(),
      type: z.union([
        z.literal('TV'),
        z.literal('MOVIE'),
        z.literal('OVA'),
        z.literal('ONA'),
        z.literal('SPECIAL'),
        z.literal('UNKNOWN'),
      ]),
      episodes: z.number(),
      status: z.union([z.literal('FINISHED'), z.literal('ONGOING'), z.literal('UPCOMING'), z.literal('UNKNOWN')]),
      animeSeason: z.object({
        season: z.union([
          z.literal('SPRING'),
          z.literal('SUMMER'),
          z.literal('FALL'),
          z.literal('WINTER'),
          z.literal('UNDEFINED'),
        ]),
        year: z.number().optional(),
      }),
      picture: z.url(),
      thumbnail: z.url(),
      duration: z.object({
        value: z.number(),
        unit: z.literal('SECONDS'),
      }).optional(),
      score: z.object({
        arithmeticGeometricMean: z.number(),
        arithmeticMean: z.number(),
        median: z.number(),
      }).optional(),
      synonyms: z.string().array(),
      studios: z.string().array(),
      producers: z.string().array(),
      relatedAnime: z.url().array(),
      tags: z.string().array(),
    })
    .array(),
})

export type AnimeOfflineDatabase = z.infer<typeof schema>
export type AnimeOfflineDatabaseEntry = AnimeOfflineDatabase['data'][0]

export const fetchAnimeOfflineDatabase = async (): Promise<AnimeOfflineDatabase> => {
  const response = await fetch(
    'https://github.com/manami-project/anime-offline-database/releases/download/latest/anime-offline-database-minified.json.zst',
    {
      headers: {
        'User-Agent': UserAgent,
      },
    },
  )

  const arrayBuffer = await response.arrayBuffer()
  const compressed = new Uint8Array(arrayBuffer)
  const decompressed = decompress(compressed)
  const json = JSON.parse(new TextDecoder().decode(decompressed))

  return await schema.parseAsync(json)
}
