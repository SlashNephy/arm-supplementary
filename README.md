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

Currently, arm-supplementary has 46321 entries (+11015).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    16382 (+293)   |             16089            |
| [AniList](https://anilist.co)            |   23968 (+2220)   |             21748            |
| [MyAnimeList](https://myanimelist.net)   |    30105 (+683)   |             29422            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |     6632 (+98)    |             6534             |
| [AniDB](https://anidb.net)               |    14417 (+217)   |             14200            |
| [Anime-Planet](https://anime-planet.com) |    26700 (+251)   |             26449            |
| [aniSearch](https://anisearch.com)       |    20703 (+238)   |             20465            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12238 (+223)   |             12015            |
| [Anime Notifier](https://notify.moe)     |    17084 (+247)   |             16837            |
