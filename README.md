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

Currently, arm-supplementary has 35794 entries (+6968).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10511 (+176)    |            10335             |
| [AniList](https://anilist.co)               |   20922 (+2084)   |            18838             |
| [MyAnimeList](https://myanimelist.net)      |   25179 (+392)    |            24787             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5639 (+29)     |             5610             |
| [AniDB](https://anidb.net)                  |   13010 (+132)    |            12878             |
| [Anime-Planet](https://anime-planet.com)    |   23059 (+133)    |            22926             |
| [aniSearch](https://anisearch.com)          |   18009 (+141)    |            17868             |
| [Kitsu](https://kitsu.io)                   |   19356 (+146)    |            19210             |
| [LiveChart.me](https://livechart.me)        |   10959 (+127)    |            10832             |
| [Anime Notifier](https://notify.moe)        |   15960 (+142)    |            15818             |
