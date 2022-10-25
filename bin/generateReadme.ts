import { writeFile } from 'fs/promises'
import { join } from 'path'
import { cwd } from 'process'

import markdown, { MarkdownTableBuilder, TableAlignType } from 'markdown-doc-builder'

import { fetchArm } from '../lib/arm'
import { mergeEntries } from '../src'

import type { ArmEntry } from '../lib/arm'

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

  const entries = await mergeEntries()
  md.text(`Currently, arm-supplementary has ${entries.length} entries.`)
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

  const arm = await fetchArm()
  for (const row of rows) {
    const newSize = entries.filter((x) => x[row.key] !== undefined).length
    const oldSize = arm.filter((x) => x[row.key] !== undefined).length
    table.appendRow([
      row.label,
      `${newSize} (${newSize > oldSize ? '+' : newSize < oldSize ? '-' : '±'}${newSize - oldSize})`,
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
