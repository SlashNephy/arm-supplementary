import { writeFile } from 'fs/promises'
import { join } from 'path'
import { cwd } from 'process'

import { mergeEntries } from '../src/index.ts'

const generateJson = async () => {
  const entries = await mergeEntries()
  const content = JSON.stringify(entries)

  const path = join(cwd(), 'dist', 'arm.json')
  await writeFile(path, content)
}

generateJson().catch(console.error)
