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

Currently, arm-supplementary has 46601 entries (+11194).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    16515 (+287)   |             16228            |
| [AniList](https://anilist.co)            |   24077 (+2208)   |             21869            |
| [MyAnimeList](https://myanimelist.net)   |    30177 (+666)   |             29511            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |     6630 (+67)    |             6563             |
| [AniDB](https://anidb.net)               |    14422 (+181)   |             14241            |
| [Anime-Planet](https://anime-planet.com) |    26736 (+208)   |             26528            |
| [aniSearch](https://anisearch.com)       |    20702 (+199)   |             20503            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12239 (+184)   |             12055            |
| [Anime Notifier](https://notify.moe)     |       0 (±0)      |               0              |
