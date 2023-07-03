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

Currently, arm-supplementary has 35735 entries (+6927).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10488 (+172)    |            10316             |
| [AniList](https://anilist.co)               |   20931 (+2107)   |            18824             |
| [MyAnimeList](https://myanimelist.net)      |   25122 (+371)    |            24751             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5634 (+30)     |             5604             |
| [AniDB](https://anidb.net)                  |   12992 (+134)    |            12858             |
| [Anime-Planet](https://anime-planet.com)    |   22979 (+135)    |            22844             |
| [aniSearch](https://anisearch.com)          |   17967 (+143)    |            17824             |
| [Kitsu](https://kitsu.io)                   |   19318 (+146)    |            19172             |
| [LiveChart.me](https://livechart.me)        |   10933 (+128)    |            10805             |
| [Anime Notifier](https://notify.moe)        |   15941 (+142)    |            15799             |
