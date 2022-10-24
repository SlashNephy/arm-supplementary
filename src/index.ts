import { arm } from '@kawaiioverflow/arm'

import { annict } from './annict'

import type { ArmEntry } from '../lib/arm'

export const entries = (): ArmEntry[] => {
  const entries: ArmEntry[] = []

  for (const oldEntry of arm) {
    const newEntry = annict.find((x) => x.annict_id === oldEntry.annict_id)

    // 旧バージョンにだけ含まれる
    if (newEntry === undefined) {
      entries.push(oldEntry)
      continue
    }

    // どちらのバージョンにも含まれる
    // 差分をチェックして更新
    const entry = oldEntry

    // しょぼかる TID が違う
    {
      const oldId = oldEntry.syobocal_tid
      const newId = newEntry.syobocal_tid

      if (oldId !== newId) {
        // 新 ID だけ存在する
        if (oldId === undefined && newId !== undefined) {
          entry.syobocal_tid = newId
        }

        // ID が異なる
        // 本来どちらにするか手動で判断する必要があるが、新しい方にしてしまう
        if (oldId !== undefined && newId !== undefined) {
          entry.syobocal_tid = newId
          console.log(`Syobocal: ${oldId} -> ${newId}`)
        }
      }
    }

    // MAL ID が違う
    {
      const oldId = oldEntry.mal_id
      const newId = newEntry.mal_id

      if (oldId !== newId) {
        // 新 ID だけ存在する
        if (oldId === undefined && newId !== undefined) {
          entry.mal_id = newId
        }

        // ID が異なる
        // 本来どちらにするか手動で判断する必要があるが、新しい方にしてしまう
        if (oldId !== undefined && newId !== undefined) {
          entry.mal_id = newId
          console.log(`MAL: ${oldId} -> ${newId}`)
        }
      }
    }

    entries.push(entry)
  }

  for (const newEntry of annict) {
    const oldEntry = arm.find((x) => x.annict_id === newEntry.annict_id)

    // 新バージョンにのみ含まれる
    if (oldEntry === undefined) {
      entries.push(newEntry)
    }
  }

  return entries
}
