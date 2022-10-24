import * as Types from './types'

export type ListWorksQueryVariables = Types.Exact<{
  season: Types.Scalars['String']
  after: Types.InputMaybe<Types.Scalars['String']>
}>

export type ListWorksQuery = {
  searchWorks: {
    nodes: Array<{
      annictId: number
      malAnimeId: string | null
      syobocalTid: number | null
      title: string
      media: Types.Media
    } | null> | null
    pageInfo: { hasNextPage: boolean; endCursor: string | null }
  } | null
}
