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

Currently, arm-supplementary has 46703 entries (+11110).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    16568 (+259)   |             16309            |
| [AniList](https://anilist.co)            |   24218 (+2177)   |             22041            |
| [MyAnimeList](https://myanimelist.net)   |    30241 (+603)   |             29638            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |     6642 (+71)    |             6571             |
| [AniDB](https://anidb.net)               |    14459 (+185)   |             14274            |
| [Anime-Planet](https://anime-planet.com) |    26774 (+207)   |             26567            |
| [aniSearch](https://anisearch.com)       |    20745 (+198)   |             20547            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12256 (+186)   |             12070            |
| [Anime Notifier](https://notify.moe)     |       0 (±0)      |               0              |
