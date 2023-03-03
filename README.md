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

Currently, arm-supplementary has 34789 entries (+6747).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10051 (+144)    |             9907             |
| [AniList](https://anilist.co)               |   20567 (+2047)   |            18520             |
| [MyAnimeList](https://myanimelist.net)      |   24383 (+318)    |            24065             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5518 (+32)     |             5486             |
| [AniDB](https://anidb.net)                  |   12821 (+115)    |            12706             |
| [Anime-Planet](https://anime-planet.com)    |   22471 (+113)    |            22358             |
| [aniSearch](https://anisearch.com)          |   17716 (+122)    |            17594             |
| [Kitsu](https://kitsu.io)                   |   18778 (+125)    |            18653             |
| [LiveChart.me](https://livechart.me)        |   10534 (+105)    |            10429             |
| [Anime Notifier](https://notify.moe)        |   15730 (+122)    |            15608             |
