import { writeFile } from 'fs/promises'
import { join } from 'path'
import { cwd } from 'process'

import { fetchAnimeOfflineDatabase } from '../lib/anime-offline-database.ts'

import type { ArmEntry } from '../lib/arm.ts'

const findByPrefix = (array: string[], prefix: string): string | undefined =>
  array.find((x) => x.startsWith(prefix))?.replace(prefix, '')

const tryParseInt = (value?: string): number | undefined => {
  if (value === undefined) {
    return undefined
  }

  const num = parseInt(value, 10)

  return Number.isNaN(num) ? undefined : num
}

const animeOfflineDatabase = async () => {
  const content: string[] = [
    // eslint-disable-next-line @stylistic/quotes
    "import type { ArmEntry } from '../lib/arm'",
    '',
    '// @ts-ignore',
    'export const animeOfflineDatabase: ArmEntry[] = [',
  ]

  const aod = await fetchAnimeOfflineDatabase()
  for (const entry of aod.data.sort((a, b) => a.title.localeCompare(b.title))) {
    const arm: ArmEntry = {
      anidb_id: tryParseInt(findByPrefix(entry.sources, 'https://anidb.net/anime/')),
      anilist_id: tryParseInt(findByPrefix(entry.sources, 'https://anilist.co/anime/')),
      animeplanet_id: findByPrefix(entry.sources, 'https://anime-planet.com/anime/'),
      anisearch_id: tryParseInt(findByPrefix(entry.sources, 'https://anisearch.com/anime/')),
      kitsu_id: tryParseInt(findByPrefix(entry.sources, 'https://kitsu.io/anime/')),
      livechart_id: tryParseInt(findByPrefix(entry.sources, 'https://livechart.me/anime/')),
      mal_id: tryParseInt(findByPrefix(entry.sources, 'https://myanimelist.net/anime/')),
      notify_id: findByPrefix(entry.sources, 'https://notify.moe/anime/'),
    }

    content.push(
      ...[
        `// [${entry.animeSeason.year}-${entry.animeSeason.season}] ${entry.type}: ${entry.title}`,
        JSON.stringify(arm),
        ',',
      ],
    )
  }

  content.push(']')

  const path = join(cwd(), 'src', 'anime-offline-database.ts')
  await writeFile(path, content.join('\n'))
}

animeOfflineDatabase().catch(console.error)
