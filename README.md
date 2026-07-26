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

Currently, arm-supplementary has 48318 entries (+12249).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    17436 (+738)   |             16698            |
| [AniList](https://anilist.co)            |   24679 (+2492)   |             22187            |
| [MyAnimeList](https://myanimelist.net)   |   30981 (+1051)   |             29930            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |    6816 (+142)    |             6674             |
| [AniDB](https://anidb.net)               |    14744 (+229)   |             14515            |
| [Anime-Planet](https://anime-planet.com) |    26941 (+295)   |             26646            |
| [aniSearch](https://anisearch.com)       |    21366 (+269)   |             21097            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12502 (+238)   |             12264            |
| [Anime Notifier](https://notify.moe)     |       0 (±0)      |               0              |
