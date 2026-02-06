# arm-supplementary

[![Check](https://github.com/SlashNephy/arm-supplementary/actions/workflows/check-node.yml/badge.svg)](https://github.com/SlashNephy/arm-supplementary/actions/workflows/check-node.yml)

💊 Supplemental database for [kawaiioverflow/arm](https://github.com/kawaiioverflow/arm)

The database is updated once an hour by GitHub Actions.

## Usage

Fetch arm.json from the following URL.

- https\://raw\.githubusercontent.com/SlashNephy/arm-supplementary/master/dist/arm.json

In TypeScript, you can use arm-supplementary from the following code.

```typescript
export type ArmEntry = {
  mal_id?: number
  anilist_id?: number
  annict_id?: number
  syobocal_tid?: number

  // extended
  anidb_id?: number
  animeplanet_id?: string
  anisearch_id?: number
  kitsu_id?: number
  livechart_id?: number
  notify_id?: string
}

export const fetchArmEntries = async (): Promise<ArmEntry[]> => {
  const response = await fetch('https://raw.githubusercontent.com/SlashNephy/arm-supplementary/master/dist/arm.json')
  return await response.json()
}
```

## Statistics

Currently, arm-supplementary has 46688 entries (+11157).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    16562 (+264)   |             16298            |
| [AniList](https://anilist.co)            |   24200 (+2178)   |             22022            |
| [MyAnimeList](https://myanimelist.net)   |    30232 (+649)   |             29583            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |     6637 (+67)    |             6570             |
| [AniDB](https://anidb.net)               |    14458 (+184)   |             14274            |
| [Anime-Planet](https://anime-planet.com) |    26773 (+206)   |             26567            |
| [aniSearch](https://anisearch.com)       |    20744 (+197)   |             20547            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12257 (+187)   |             12070            |
| [Anime Notifier](https://notify.moe)     |       0 (±0)      |               0              |
