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

Currently, arm-supplementary has 35281 entries (+6841).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10299 (+153)    |            10146             |
| [AniList](https://anilist.co)               |   20744 (+2065)   |            18679             |
| [MyAnimeList](https://myanimelist.net)      |   24703 (+266)    |            24437             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5575 (+27)     |             5548             |
| [AniDB](https://anidb.net)                  |   12939 (+121)    |            12818             |
| [Anime-Planet](https://anime-planet.com)    |   22838 (+119)    |            22719             |
| [aniSearch](https://anisearch.com)          |   17860 (+128)    |            17732             |
| [Kitsu](https://kitsu.io)                   |   19093 (+130)    |            18963             |
| [LiveChart.me](https://livechart.me)        |   10727 (+111)    |            10616             |
| [Anime Notifier](https://notify.moe)        |   15850 (+127)    |            15723             |
