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

Currently, arm-supplementary has 48439 entries (+11597).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    17523 (+259)   |             17264            |
| [AniList](https://anilist.co)            |   24741 (+2262)   |             22479            |
| [MyAnimeList](https://myanimelist.net)   |    30982 (+657)   |             30325            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |    7098 (+293)    |             6805             |
| [AniDB](https://anidb.net)               |    14697 (+182)   |             14515            |
| [Anime-Planet](https://anime-planet.com) |    26855 (+209)   |             26646            |
| [aniSearch](https://anisearch.com)       |    21296 (+199)   |             21097            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12450 (+186)   |             12264            |
| [Anime Notifier](https://notify.moe)     |       0 (±0)      |               0              |
