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

Currently, arm-supplementary has 34864 entries (+6992).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9972 (+161)    |             9811             |
| [AniList](https://anilist.co)               |   20553 (+2071)   |            18482             |
| [MyAnimeList](https://myanimelist.net)      |   24285 (+349)    |            23936             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5493 (+28)     |             5465             |
| [AniDB](https://anidb.net)                  |   12828 (+148)    |            12680             |
| [Anime-Planet](https://anime-planet.com)    |   22386 (+146)    |            22240             |
| [aniSearch](https://anisearch.com)          |   17664 (+156)    |            17508             |
| [Kitsu](https://kitsu.io)                   |   18722 (+157)    |            18565             |
| [LiveChart.me](https://livechart.me)        |   10536 (+131)    |            10405             |
| [Anime Notifier](https://notify.moe)        |   15740 (+154)    |            15586             |
