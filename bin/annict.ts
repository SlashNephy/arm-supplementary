import { writeFile } from 'fs/promises'
import { join } from 'path'
import { cwd } from 'process'

import dotenv from 'dotenv'

import { createAnnictClient } from '../lib/annict'

import type { ListWorksQuery } from '../graphql/annict/operations'
import type { ArmEntry } from '../lib/arm'

type Work = NonNullable<NonNullable<NonNullable<ListWorksQuery['searchWorks']>['nodes']>[0]>

dotenv.config()
const annict = createAnnictClient(process.env.ANNICT_ACCESS_TOKEN)

const fetch = async (): Promise<Work[]> => {
  const result: Work[] = []
  let after: string | null = null

  // eslint-disable-next-line no-constant-condition,@typescript-eslint/no-unnecessary-condition
  while (true) {
    // eslint-disable-next-line no-await-in-loop
    const response: ListWorksQuery = await annict.listWorks({
      after,
    })

    const works = response.searchWorks?.nodes?.filter((w): w is NonNullable<typeof w> => w !== null)
    if (works !== undefined) {
      result.push(...works)
    }

    if (response.searchWorks?.pageInfo.hasNextPage === false) {
      return result
    }

    after = response.searchWorks?.pageInfo.endCursor ?? null
  }
}

const main = async () => {
  const content: string[] = [
    // eslint-disable-next-line quotes
    "import type { ArmEntry } from '../lib/arm'",
    '',
    'export const annict: ArmEntry[] = [',
  ]

  const works = await fetch()
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

main().catch(console.error)
