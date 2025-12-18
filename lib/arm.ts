import { z } from 'zod'

import { UserAgent } from './constant.ts'

const schema = z
  .object({
    mal_id: z.number().optional(),
    anilist_id: z.number().optional(),
    annict_id: z.number().optional(),
    syobocal_tid: z.number().optional(),

    // extended
    anidb_id: z.number().optional(),
    animeplanet_id: z.string().optional(),
    anisearch_id: z.number().optional(),
    kitsu_id: z.number().optional(),
    livechart_id: z.number().optional(),
    notify_id: z.string().optional(),
  })
  .array()

export type ArmEntry = z.infer<typeof schema>[0]

export const fetchArm = async (sha?: string): Promise<ArmEntry[]> => {
  const response = await fetch(`https://raw.githubusercontent.com/kawaiioverflow/arm/${sha ?? 'master'}/arm.json`, {
    headers: {
      'User-Agent': UserAgent,
    },
  })
  if (!response.ok) {
    throw new Error(`Failed to fetch arm.json: ${response.status} ${response.statusText}`)
  }

  const json = await response.json()

  return await parseArmEntries(json)
}

export async function parseArmEntries(data: unknown): Promise<ArmEntry[]> {
  return await schema.parseAsync(data)
}
