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

Currently, arm-supplementary has 35150 entries (+8549).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9660 (+159)    |             9501             |
| [AniList](https://anilist.co)               |   20371 (+2115)   |            18256             |
| [MyAnimeList](https://myanimelist.net)      |   24634 (+1853)   |            22781             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5408 (+32)     |             5376             |
| [AniDB](https://anidb.net)                  |   12687 (+119)    |            12568             |
| [Anime-Planet](https://anime-planet.com)    |   21470 (+125)    |            21345             |
| [aniSearch](https://anisearch.com)          |   17286 (+128)    |            17158             |
| [Kitsu](https://kitsu.io)                   |   18410 (+137)    |            18273             |
| [LiveChart.me](https://livechart.me)        |   10319 (+115)    |            10204             |
| [Anime Notifier](https://notify.moe)        |   15581 (+130)    |            15451             |
