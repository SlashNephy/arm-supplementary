import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import { cwd } from 'process'

import markdown, { MarkdownTableBuilder, TableAlignType } from 'markdown-doc-builder'

import { fetchArm } from '../lib/arm'

import type { ArmEntry } from '../lib/arm'

const loadArmJson = async (): Promise<ArmEntry[]> => {
  const path = join(cwd(), 'dist', 'arm.json')
  const content = await readFile(path, 'utf-8')
  return JSON.parse(content) as ArmEntry[]
}

const indicateSign = (value: number): string => {
  return `${value > 0 ? '+' : value < 0 ? '' : '±'}${value}`
}

const generateReadme = async () => {
  const md = markdown.newBuilder()

  md.headerOrdered(false)
  md.h1('arm-supplementary')
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

  md.h2('Statistics')
  md.newline()

  const entries = await loadArmJson()
  const arm = await fetchArm()
  md.text(`Currently, arm-supplementary has ${entries.length} entries (${indicateSign(entries.length - arm.length)}).`)
  md.newline()

  const table = MarkdownTableBuilder.newBuilder(0, 3)
  table.header(['Service', 'arm-supplementary', 'arm'])
  table.setHeadersAlign([TableAlignType.Left, TableAlignType.Middle, TableAlignType.Middle])

  const rows: { label: string; key: keyof ArmEntry }[] = [
    {
      label: 'Annict',
      key: 'annict_id',
    },
    {
      label: 'AniList',
      key: 'anilist_id',
    },
    {
      label: 'MyAnimeList',
      key: 'mal_id',
    },
    {
      label: 'しょぼいカレンダー',
      key: 'syobocal_tid',
    },
  ]

  for (const row of rows) {
    const newSize = entries.filter((x) => x[row.key] !== undefined).length
    const oldSize = arm.filter((x) => x[row.key] !== undefined).length
    table.appendRow([row.label, `${newSize} (${indicateSign(newSize - oldSize)})`, oldSize.toString()])
  }

  md.table(table)
  md.newline()

  const content = md.toMarkdown().trim()
  console.info(content)

  const path = join(cwd(), 'README.md')
  await writeFile(path, content)
}

generateReadme().catch(console.error)
