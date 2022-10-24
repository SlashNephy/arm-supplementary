import { GraphQLClient } from 'graphql-request'

import { getSdk } from '../graphql/annict/sdk'

import type { Sdk } from '../graphql/annict/sdk'

export const createAnnictClient = (accessToken?: string): Sdk => {
  const client = new GraphQLClient('https://api.annict.com/graphql', {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  })

  return getSdk(client)
}
