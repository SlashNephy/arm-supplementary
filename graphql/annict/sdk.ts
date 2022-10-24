import * as Types from './operations'

import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'

export const ListWorksDocument = gql`
  query listWorks($season: String!, $after: String) {
    searchWorks(seasons: [$season], orderBy: { field: WATCHERS_COUNT, direction: DESC }, after: $after) {
      nodes {
        annictId
        malAnimeId
        syobocalTid
        title
        media
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action()

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    listWorks(
      variables: Types.ListWorksQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<Types.ListWorksQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<Types.ListWorksQuery>(ListWorksDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'listWorks',
        'query'
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
