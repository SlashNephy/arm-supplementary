import { z } from 'zod'

import { UserAgent } from './constant.ts'

const schema = z.object({
  license: z.object({
    name: z.string(),
    url: z.string(),
  }),
  repository: z.string(),
  lastUpdate: z.string(),
  data: z
    .object({
      sources: z.string().array(),
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
      picture: z.string(),
      thumbnail: z.string(),
      synonyms: z.string().array(),
      relations: z.string().array(),
      tags: z.string().array(),
    })
    .array(),
})

export type AnimeOfflineDatabase = z.infer<typeof schema>
export type AnimeOfflineDatabaseEntry = AnimeOfflineDatabase['data'][0]

export const fetchAnimeOfflineDatabase = async (): Promise<AnimeOfflineDatabase> => {
  const response = await fetch(
    'https://raw.githubusercontent.com/manami-project/anime-offline-database/master/anime-offline-database-minified.json',
    {
      headers: {
        'User-Agent': UserAgent,
      },
    },
  )
  const json = await response.json()

  return await schema.parseAsync(json)
}
