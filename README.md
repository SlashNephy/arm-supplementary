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

Currently, arm-supplementary has 34790 entries (+6760).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10049 (+149)    |             9900             |
| [AniList](https://anilist.co)               |   20566 (+2057)   |            18509             |
| [MyAnimeList](https://myanimelist.net)      |   24389 (+336)    |            24053             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5510 (+29)     |             5481             |
| [AniDB](https://anidb.net)                  |   12825 (+119)    |            12706             |
| [Anime-Planet](https://anime-planet.com)    |   22476 (+118)    |            22358             |
| [aniSearch](https://anisearch.com)          |   17721 (+127)    |            17594             |
| [Kitsu](https://kitsu.io)                   |   18781 (+128)    |            18653             |
| [LiveChart.me](https://livechart.me)        |   10539 (+110)    |            10429             |
| [Anime Notifier](https://notify.moe)        |   15734 (+126)    |            15608             |
