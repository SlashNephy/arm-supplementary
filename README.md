# arm-supplementary

[![Check](https://github.com/SlashNephy/arm-supplementary/actions/workflows/check-node.yml/badge.svg)](https://github.com/SlashNephy/arm-supplementary/actions/workflows/check-node.yml)

💊 Supplemental database for [kawaiioverflow/arm](https://github.com/kawaiioverflow/arm)

The database is updated once an hour by GitHub Actions.

## Usage

Fetch arm.json from the following URL.

- https://raw.githubusercontent.com/SlashNephy/arm-supplementary/master/dist/arm.json

In TypeScript, you can use arm-supplementary from the following code.

```TypeScript
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

Currently, arm-supplementary has 34797 entries (+6900).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9995 (+157)    |             9838             |
| [AniList](https://anilist.co)               |   20534 (+2046)   |            18488             |
| [MyAnimeList](https://myanimelist.net)      |   24259 (+295)    |            23964             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5492 (+27)     |             5465             |
| [AniDB](https://anidb.net)                  |   12804 (+121)    |            12683             |
| [Anime-Planet](https://anime-planet.com)    |   22375 (+118)    |            22257             |
| [aniSearch](https://anisearch.com)          |   17657 (+128)    |            17529             |
| [Kitsu](https://kitsu.io)                   |   18722 (+132)    |            18590             |
| [LiveChart.me](https://livechart.me)        |   10517 (+107)    |            10410             |
| [Anime Notifier](https://notify.moe)        |   15733 (+129)    |            15604             |
