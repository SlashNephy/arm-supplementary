import { writeFile } from 'fs/promises'
import { join } from 'path'
import { cwd } from 'process'

import { entries } from '../src'

const path = join(cwd(), 'dist', 'arm.json')
const content = JSON.stringify(entries())

writeFile(path, content).catch(console.error)
