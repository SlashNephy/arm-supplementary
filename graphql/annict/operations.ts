import * as Types from './types'

export type ListWorksQueryVariables = Types.Exact<{
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
      seasonYear: number | null
      seasonName: Types.SeasonName | null
    } | null> | null
    pageInfo: { hasNextPage: boolean; endCursor: string | null }
  } | null
}
