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

Currently, arm-supplementary has 47078 entries (+11170).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    16760 (+251)   |             16509            |
| [AniList](https://anilist.co)            |   24326 (+2203)   |             22123            |
| [MyAnimeList](https://myanimelist.net)   |    30417 (+609)   |             29808            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |     6715 (+73)    |             6642             |
| [AniDB](https://anidb.net)               |    14522 (+185)   |             14337            |
| [Anime-Planet](https://anime-planet.com) |    26822 (+207)   |             26615            |
| [aniSearch](https://anisearch.com)       |    20844 (+198)   |             20646            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12304 (+186)   |             12118            |
| [Anime Notifier](https://notify.moe)     |       0 (±0)      |               0              |
