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

Currently, arm-supplementary has 35708 entries (+6995).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10467 (+207)    |            10260             |
| [AniList](https://anilist.co)               |   20883 (+2133)   |            18750             |
| [MyAnimeList](https://myanimelist.net)      |   25090 (+457)    |            24633             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5664 (+69)     |             5595             |
| [AniDB](https://anidb.net)                  |   13002 (+157)    |            12845             |
| [Anime-Planet](https://anime-planet.com)    |   22980 (+158)    |            22822             |
| [aniSearch](https://anisearch.com)          |   17969 (+165)    |            17804             |
| [Kitsu](https://kitsu.io)                   |   19325 (+171)    |            19154             |
| [LiveChart.me](https://livechart.me)        |   10851 (+142)    |            10709             |
| [Anime Notifier](https://notify.moe)        |   15957 (+168)    |            15789             |
