import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import { cwd } from 'process'

import markdown, { MarkdownCodeType, MarkdownTableBuilder, TableAlignType } from 'markdown-doc-builder'

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
  // @ts-expect-error -- fix me
  const md = markdown.newBuilder()

  md.headerOrdered(false)
  md.h1('arm-supplementary')
  md.newline()

  md.text(
    '[![Check](https://github.com/SlashNephy/arm-supplementary/actions/workflows/check-node.yml/badge.svg)](https://github.com/SlashNephy/arm-supplementary/actions/workflows/check-node.yml)',
  )
  md.newline()
  md.newline()

  md.text('💊 Supplemental database for [kawaiioverflow/arm](https://github.com/kawaiioverflow/arm)')
  md.newline()
  md.newline()

  md.text('The database is updated once an hour by GitHub Actions.')
  md.newline()
  md.newline()

  md.h2('Usage')
  md.newline()

  md.text('Fetch arm.json from the following URL.')
  md.newline()

  md.list(['https://raw.githubusercontent.com/SlashNephy/arm-supplementary/master/dist/arm.json'])

  md.text('In TypeScript, you can use arm-supplementary from the following code.')
  md.newline()
  md.newline()

  md.codeBlock(MarkdownCodeType.TypeScript, sampleCode)
  md.newline()

  md.h2('Statistics')
  md.newline()

  const entries = await loadArmJson()
  const arm = await fetchArm(env.ARM_COMMIT_SHA)
  md.text(`Currently, arm-supplementary has ${entries.length} entries (${indicateSign(entries.length - arm.length)}).`)
  md.newline()

  const table = MarkdownTableBuilder.newBuilder(0, 3)
  table.header(['Service', 'arm-supplementary', 'arm / anime-offline-database'])
  table.setHeadersAlign([TableAlignType.Left, TableAlignType.Middle, TableAlignType.Middle])

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

  for (const row of rows) {
    const newSize = entries.filter((x) => x[row.key] !== undefined).length
    let oldSize = arm.filter((x) => x[row.key] !== undefined).length
    if (oldSize === 0) {
      oldSize = animeOfflineDatabase.filter((x) => x[row.key] !== undefined).length
    }

    table.appendRow([
      `[${row.label}](${row.url})`,
      `${newSize} (${indicateSign(newSize - oldSize)})`,
      oldSize.toString(),
    ])
  }

  md.table(table)
  md.newline()

  const content = md.toMarkdown().trim()
  console.info(content)

  const path = join(cwd(), 'README.md')
  await writeFile(path, content)
}

generateReadme().catch(console.error)
