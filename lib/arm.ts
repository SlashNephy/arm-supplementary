import { UserAgent } from './constant'

export type ArmEntry = {
  mal_id?: number
  anilist_id?: number
  annict_id?: number
  syobocal_tid?: number
}

export const fetchArm = async (): Promise<ArmEntry[]> => {
  const { default: fetch } = await import('node-fetch')
  const response = await fetch('https://raw.githubusercontent.com/kawaiioverflow/arm/master/arm.json', {
    headers: {
      'User-Agent': UserAgent,
    },
  })
  const json = await response.json()
  return json as ArmEntry[]
}
