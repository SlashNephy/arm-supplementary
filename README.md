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

Currently, arm-supplementary has 34854 entries (+6982).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9962 (+151)    |             9811             |
| [AniList](https://anilist.co)               |   20547 (+2065)   |            18482             |
| [MyAnimeList](https://myanimelist.net)      |   24278 (+342)    |            23936             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5492 (+27)     |             5465             |
| [AniDB](https://anidb.net)                  |   12821 (+141)    |            12680             |
| [Anime-Planet](https://anime-planet.com)    |   22380 (+140)    |            22240             |
| [aniSearch](https://anisearch.com)          |   17657 (+149)    |            17508             |
| [Kitsu](https://kitsu.io)                   |   18716 (+151)    |            18565             |
| [LiveChart.me](https://livechart.me)        |   10534 (+129)    |            10405             |
| [Anime Notifier](https://notify.moe)        |   15734 (+148)    |            15586             |
