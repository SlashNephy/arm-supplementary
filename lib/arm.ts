import { UserAgent } from './constant'

export type ArmEntry = {
  mal_id?: number
  anilist_id?: number
  annict_id?: number
  syobocal_tid?: number
}

export const fetchArm = async (): Promise<ArmEntry[]> => {
  const response = await fetch('https://raw.githubusercontent.com/kawaiioverflow/arm/master/arm.json', {
    headers: {
      'User-Agent': UserAgent,
    },
  })
  return await response.json()
}
