import { animeOfflineDatabase } from './anime-offline-database.ts'
import { annict } from './annict.ts'
import { fetchArm } from '../lib/arm.ts'
import { env } from '../lib/env.ts'

import type { ArmEntry } from '../lib/arm.ts'

export const mergeEntries = async (): Promise<ArmEntry[]> => {
  const arm = await fetchArm(env.ARM_COMMIT_SHA)

  let entries = mergeSpecificEntries(arm, annict, 'annict_id', ['syobocal_tid', 'mal_id'])
  entries = mergeSpecificEntries(entries, animeOfflineDatabase, 'mal_id', [
    'anilist_id',
    'anidb_id',
    'animeplanet_id',
    'anisearch_id',
    'kitsu_id',
    'livechart_id',
    'notify_id',
  ])

  return entries
}

const mergeSpecificEntries = (
  oldEntries: ArmEntry[],
  newEntries: ArmEntry[],
  compareKey: keyof ArmEntry,
  updateKeys: (keyof ArmEntry)[],
) => {
  const entries: ArmEntry[] = []

  for (const oldEntry of oldEntries) {
    const newEntry = newEntries.find((x) => x[compareKey] !== undefined && x[compareKey] === oldEntry[compareKey])

    // 旧バージョンにだけ含まれる
    if (newEntry === undefined) {
      entries.push(oldEntry)
      continue
    }

    // どちらのバージョンにも含まれる
    // 差分をチェックして更新
    const entry = { ...oldEntry }

    for (const updateKey of updateKeys) {
      const oldId = oldEntry[updateKey]
      const newId = newEntry[updateKey]

      if (oldId !== newId) {
        // 新 ID だけ存在する
        if (oldId === undefined && newId !== undefined) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          entry[updateKey] = newId
        }

        // ID が異なる
        // 本来どちらにするか手動で判断する必要があるが、新しい方にしてしまう
        if (oldId !== undefined && newId !== undefined) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          entry[updateKey] = newId
          console.log(`${updateKey}: ${oldId} -> ${newId} `)
          console.log(`Old: ${JSON.stringify(oldEntry)}`)
          console.log(`New: ${JSON.stringify(newEntry)}`)
        }
      }
    }

    entries.push(entry)
  }

  for (const newEntry of newEntries) {
    const oldEntry = oldEntries.find(
      (x) => newEntry[compareKey] !== undefined && x[compareKey] === newEntry[compareKey],
    )

    // 新バージョンにのみ含まれる
    if (oldEntry === undefined) {
      entries.push(newEntry)
    }
  }

  return entries
}
