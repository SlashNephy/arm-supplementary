import dotenv from 'dotenv'
import { GraphQLClient } from 'graphql-request'

import { getSdk } from '../graphql/annict/sdk'

import type { Sdk } from '../graphql/annict/sdk'
import type { ArmEntry } from '../lib/arm'

dotenv.config()

const createAnnictClient = (accessToken?: string): Sdk => {
  const client = new GraphQLClient('https://api.annict.com/graphql', {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  })

  return getSdk(client)
}

const currentSeason = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1

  if (1 <= month && month <= 3) {
    return `${year}-winter`
  } else if (4 <= month && month <= 6) {
    return `${year}-spring`
  } else if (7 <= month && month <= 9) {
    return `${year}-summer`
  } else if (10 <= month && month <= 12) {
    return `${year}-autumn`
  } else {
    throw new Error(`Invalid month: ${month}`)
  }
}

const main = async () => {
  const annict = createAnnictClient(process.env.ANNICT_ACCESS_TOKEN)

  const works = await annict.listWorks({
    season: currentSeason(),
    after: null,
  })

  works.searchWorks?.nodes
    ?.filter((w): w is NonNullable<typeof w> => w !== null)
    ?.forEach((w) => {
      const entry: ArmEntry = {
        annict_id: w.annictId,
        mal_id: w.malAnimeId !== null && w.malAnimeId !== '' ? parseInt(w.malAnimeId) : undefined,
        syobocal_tid: w.syobocalTid ?? undefined,
      }

      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`// ${w.media}: ${w.title}\n${JSON.stringify(entry, null, 2)},`)
    })
}

main().catch(console.error)
