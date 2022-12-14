import { GraphQLClient } from 'graphql-request'

import { getSdk } from '../graphql/annict/sdk'
import { UserAgent } from './constant'

import type { ListWorksQuery } from '../graphql/annict/operations'
import type { Sdk } from '../graphql/annict/sdk'

export const createAnnictClient = (accessToken?: string): Sdk => {
  const client = new GraphQLClient('https://api.annict.com/graphql', {
    headers: {
      authorization: `Bearer ${accessToken}`,
      'User-Agent': UserAgent,
    },
  })

  return getSdk(client)
}

export type AnnictWork = NonNullable<NonNullable<NonNullable<ListWorksQuery['searchWorks']>['nodes']>[0]>

export const fetchAllAnnictWorks = async (client: Sdk): Promise<AnnictWork[]> => {
  const result: AnnictWork[] = []
  let after: string | null = null

  // eslint-disable-next-line no-constant-condition,@typescript-eslint/no-unnecessary-condition
  while (true) {
    // eslint-disable-next-line no-await-in-loop
    const response: ListWorksQuery = await client.listWorks({
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
