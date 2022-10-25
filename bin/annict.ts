import { writeFile } from 'fs/promises'
import { join } from 'path'
import { cwd } from 'process'

import { createAnnictClient, fetchAllAnnictWorks } from '../lib/annict'
import { env } from '../lib/env'

import type { ArmEntry } from '../lib/arm'

const annict = async () => {
  const content: string[] = [
    // eslint-disable-next-line quotes
    "import type { ArmEntry } from '../lib/arm'",
    '',
    'export const annict: ArmEntry[] = [',
  ]

  const client = createAnnictClient(env.ANNICT_ACCESS_TOKEN)
  const works = await fetchAllAnnictWorks(client)

  for (const work of works.sort((a, b) => a.annictId - b.annictId)) {
    const entry: ArmEntry = {
      annict_id: work.annictId,
      mal_id: work.malAnimeId !== null && work.malAnimeId !== '' ? parseInt(work.malAnimeId) : undefined,
      syobocal_tid: work.syobocalTid ?? undefined,
    }

    content.push(
      ...[
        `// [${work.seasonYear}-${work.seasonName}] ${work.media}: ${work.title}`,
        `// https://annict.com/works/${work.annictId}`,
        JSON.stringify(entry),
        ',',
      ]
    )
  }

  content.push(']')

  const path = join(cwd(), 'src', 'annict.ts')
  await writeFile(path, content.join('\n'))
}

annict().catch(console.error)
