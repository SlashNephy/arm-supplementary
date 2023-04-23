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

Currently, arm-supplementary has 35176 entries (+6930).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10215 (+157)    |            10058             |
| [AniList](https://anilist.co)               |   20741 (+2089)   |            18652             |
| [MyAnimeList](https://myanimelist.net)      |   24608 (+364)    |            24244             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5569 (+26)     |             5543             |
| [AniDB](https://anidb.net)                  |   12921 (+124)    |            12797             |
| [Anime-Planet](https://anime-planet.com)    |   22710 (+122)    |            22588             |
| [aniSearch](https://anisearch.com)          |   17824 (+131)    |            17693             |
| [Kitsu](https://kitsu.io)                   |   18985 (+133)    |            18852             |
| [LiveChart.me](https://livechart.me)        |   10687 (+115)    |            10572             |
| [Anime Notifier](https://notify.moe)        |   15850 (+132)    |            15718             |
