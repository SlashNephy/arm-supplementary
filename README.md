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

Currently, arm-supplementary has 34848 entries (+6882).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10037 (+163)    |             9874             |
| [AniList](https://anilist.co)               |   20552 (+2051)   |            18501             |
| [MyAnimeList](https://myanimelist.net)      |   24307 (+288)    |            24019             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5497 (+30)     |             5467             |
| [AniDB](https://anidb.net)                  |   12812 (+119)    |            12693             |
| [Anime-Planet](https://anime-planet.com)    |   22393 (+117)    |            22276             |
| [aniSearch](https://anisearch.com)          |   17686 (+127)    |            17559             |
| [Kitsu](https://kitsu.io)                   |   18752 (+129)    |            18623             |
| [LiveChart.me](https://livechart.me)        |   10526 (+109)    |            10417             |
| [Anime Notifier](https://notify.moe)        |   15728 (+124)    |            15604             |
