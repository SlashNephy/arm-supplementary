import { UserAgent } from './constant.ts'

export type AnimeOfflineDatabase = {
  license: {
    name: string
    url: string
  }
  repository: string
  lastUpdate: string
  data: AnimeOfflineDatabaseEntry[]
}

export type AnimeOfflineDatabaseEntry = {
  sources: string[]
  title: string
  type: 'TV' | 'MOVIE' | 'OVA' | 'ONA' | 'SPECIAL' | 'UNKNOWN'
  episodes: number
  status: 'FINISHED' | 'ONGOING' | 'UPCOMING' | 'UNKNOWN'
  animeSeason: {
    season: 'SPRING' | 'SUMMER' | 'FALL' | 'WINTER' | 'UNDEFINED'
    year?: number
  }
  picture: string
  thumbnail: string
  synonyms: string[]
  relations: string[]
  tags: string[]
}

export const fetchAnimeOfflineDatabase = async (): Promise<AnimeOfflineDatabase> => {
  const { default: fetch } = await import('node-fetch')
  const response = await fetch(
    'https://raw.githubusercontent.com/manami-project/anime-offline-database/master/anime-offline-database-minified.json',
    {
      headers: {
        'User-Agent': UserAgent,
      },
    }
  )
  const json = await response.json()

  return json as AnimeOfflineDatabase
}
