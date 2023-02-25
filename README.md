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

Currently, arm-supplementary has 34747 entries (+6717).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10043 (+143)    |             9900             |
| [AniList](https://anilist.co)               |   20552 (+2043)   |            18509             |
| [MyAnimeList](https://myanimelist.net)      |   24358 (+305)    |            24053             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5508 (+27)     |             5481             |
| [AniDB](https://anidb.net)                  |   12812 (+114)    |            12698             |
| [Anime-Planet](https://anime-planet.com)    |   22419 (+112)    |            22307             |
| [aniSearch](https://anisearch.com)          |   17699 (+121)    |            17578             |
| [Kitsu](https://kitsu.io)                   |   18754 (+124)    |            18630             |
| [LiveChart.me](https://livechart.me)        |   10526 (+104)    |            10422             |
| [Anime Notifier](https://notify.moe)        |   15725 (+121)    |            15604             |
