import { UserAgent } from './constant'

export type ArmEntry = {
  mal_id?: number
  anilist_id?: number
  annict_id?: number
  syobocal_tid?: number

  // extended
  anidb_id?: number
  animeplanet_id?: string
  anisearch_id?: number
  kitsu_id?: number
  livechart_id?: number
  notify_id?: string
}

export const fetchArm = async (sha?: string): Promise<ArmEntry[]> => {
  const { default: fetch } = await import('node-fetch')
  const response = await fetch(`https://raw.githubusercontent.com/kawaiioverflow/arm/${sha ?? 'master'}/arm.json`, {
    headers: {
      'User-Agent': UserAgent,
    },
  })
  const json = await response.json()
  return json as ArmEntry[]
}
