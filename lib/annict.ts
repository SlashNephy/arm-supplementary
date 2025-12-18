import { GraphQLClient } from 'graphql-request'

import { UserAgent } from './constant.ts'
import { sleep } from './sleep.ts'
import { ListWorksDocument } from '../graphql/annict/generated/graphql.ts'

import type { ListWorksQuery } from '../graphql/annict/generated/graphql.ts'

export const createAnnictClient = (accessToken?: string): GraphQLClient =>
  new GraphQLClient('https://api.annict.com/graphql', {
    headers: {
      authorization: `Bearer ${accessToken}`,
      'User-Agent': UserAgent,
    },
  })

export type AnnictWork = NonNullable<NonNullable<NonNullable<ListWorksQuery['searchWorks']>['nodes']>[0]>

export const fetchAllAnnictWorks = async (client: GraphQLClient): Promise<AnnictWork[]> => {
  const result: AnnictWork[] = []
  let after: string | null = null

  while (true) {
    // eslint-disable-next-line no-await-in-loop
    const response: ListWorksQuery = await client.request(ListWorksDocument, {
      after,
    })

    const works = response.searchWorks?.nodes?.filter((w): w is NonNullable<typeof w> => w !== null)
    if (works !== undefined) {
      result.push(...works)
    }

    if (!response.searchWorks?.pageInfo.hasNextPage) {
      return result
    }

    after = response.searchWorks.pageInfo.endCursor ?? null

    // eslint-disable-next-line no-await-in-loop
    await sleep(3000)
  }
}
