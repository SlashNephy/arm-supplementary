import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import { cwd } from 'process'

import { code, heading, image, link, list, listItem, paragraph, root, table, tableCell, tableRow, text } from 'mdast-builder'
import remarkGfm from 'remark-gfm'
import remarkStringify from 'remark-stringify'
import { unified } from 'unified'

import { fetchArm, parseArmEntries } from '../lib/arm.ts'
import { env } from '../lib/env.ts'
import { animeOfflineDatabase } from '../src/anime-offline-database.ts'

import type { ArmEntry } from '../lib/arm.ts'

// language=TypeScript
const sampleCode = `
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

export const fetchArmEntries = async (): Promise<ArmEntry[]> => {
  const response = await fetch('https://raw.githubusercontent.com/SlashNephy/arm-supplementary/master/dist/arm.json')
  return await response.json()
}
`.trim()

const loadArmJson = async (): Promise<ArmEntry[]> => {
  const path = join(cwd(), 'dist', 'arm.json')
  const content = await readFile(path, 'utf-8')
  const json = JSON.parse(content)

  return await parseArmEntries(json)
}

const indicateSign = (value: number): string => `${value > 0 ? '+' : value < 0 ? '' : '±'}${value}`

const generateReadme = async () => {
  const entries = await loadArmJson()
  const arm = await fetchArm(env.ARM_COMMIT_SHA)

  const rows: { label: string, url: string, key: keyof ArmEntry }[] = [
    {
      label: 'Annict',
      url: 'https://annict.com',
      key: 'annict_id',
    },
    {
      label: 'AniList',
      url: 'https://anilist.co',
      key: 'anilist_id',
    },
    {
      label: 'MyAnimeList',
      url: 'https://myanimelist.net',
      key: 'mal_id',
    },
    {
      label: 'しょぼいカレンダー',
      url: 'https://cal.syoboi.jp',
      key: 'syobocal_tid',
    },
    {
      label: 'AniDB',
      url: 'https://anidb.net',
      key: 'anidb_id',
    },
    {
      label: 'Anime-Planet',
      url: 'https://anime-planet.com',
      key: 'animeplanet_id',
    },
    {
      label: 'aniSearch',
      url: 'https://anisearch.com',
      key: 'anisearch_id',
    },
    {
      label: 'Kitsu',
      url: 'https://kitsu.io',
      key: 'kitsu_id',
    },
    {
      label: 'LiveChart.me',
      url: 'https://livechart.me',
      key: 'livechart_id',
    },
    {
      label: 'Anime Notifier',
      url: 'https://notify.moe',
      key: 'notify_id',
    },
  ]

  const tableRows = rows.map((row) => {
    const newSize = entries.filter((x) => x[row.key] !== undefined).length
    let oldSize = arm.filter((x) => x[row.key] !== undefined).length
    if (oldSize === 0) {
      oldSize = animeOfflineDatabase.filter((x) => x[row.key] !== undefined).length
    }

    return tableRow([
      tableCell([link(row.url, undefined, [text(row.label)])]),
      tableCell([text(`${newSize} (${indicateSign(newSize - oldSize)})`)]),
      tableCell([text(oldSize.toString())]),
    ])
  })

  const tree = root([
    heading(1, [text('arm-supplementary')]),
    paragraph([
      link(
        'https://github.com/SlashNephy/arm-supplementary/actions/workflows/check-node.yml',
        undefined,
        [
          image(
            'https://github.com/SlashNephy/arm-supplementary/actions/workflows/check-node.yml/badge.svg',
            undefined,
            'Check',
          ),
        ],
      ),
    ]),
    paragraph([
      text('💊 Supplemental database for '),
      link('https://github.com/kawaiioverflow/arm', undefined, [text('kawaiioverflow/arm')]),
    ]),
    paragraph([text('The database is updated once an hour by GitHub Actions.')]),
    heading(2, [text('Usage')]),
    paragraph([text('Fetch arm.json from the following URL.')]),
    list('unordered', [
      listItem([paragraph([text('https://raw.githubusercontent.com/SlashNephy/arm-supplementary/master/dist/arm.json')])]),
    ]),
    paragraph([text('In TypeScript, you can use arm-supplementary from the following code.')]),
    code('typescript', sampleCode),
    heading(2, [text('Statistics')]),
    paragraph([
      text(
        `Currently, arm-supplementary has ${entries.length} entries (${indicateSign(entries.length - arm.length)}).`,
      ),
    ]),
    table(['left', 'center', 'center'], [
      tableRow([tableCell([text('Service')]), tableCell([text('arm-supplementary')]), tableCell([text('arm / anime-offline-database')])]),
      ...tableRows,
    ]),
  ])

  const processor = unified()
    .use(remarkGfm)
    .use(remarkStringify, {
      bullet: '-',
      fence: '`',
      fences: true,
      incrementListMarker: false,
    })

  // eslint-disable-next-line @susisu/safe-typescript/no-type-assertion -- mdast-builder type compatibility
  const content = String(processor.stringify(tree as never)).trim()
  console.info(content)

  const path = join(cwd(), 'README.md')
  await writeFile(path, `${content}\n`)
}

generateReadme().catch(console.error)
