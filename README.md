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

Currently, arm-supplementary has 35104 entries (+8258).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9660 (+142)    |             9518             |
| [AniList](https://anilist.co)               |   20359 (+2094)   |            18265             |
| [MyAnimeList](https://myanimelist.net)      |   24624 (+1599)   |            23025             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5411 (+32)     |             5379             |
| [AniDB](https://anidb.net)                  |   12682 (+114)    |            12568             |
| [Anime-Planet](https://anime-planet.com)    |   21460 (+115)    |            21345             |
| [aniSearch](https://anisearch.com)          |   17279 (+121)    |            17158             |
| [Kitsu](https://kitsu.io)                   |   18399 (+126)    |            18273             |
| [LiveChart.me](https://livechart.me)        |   10311 (+107)    |            10204             |
| [Anime Notifier](https://notify.moe)        |   15571 (+120)    |            15451             |
