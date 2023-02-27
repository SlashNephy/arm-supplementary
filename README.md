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

Currently, arm-supplementary has 34775 entries (+6745).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10045 (+145)    |             9900             |
| [AniList](https://anilist.co)               |   20561 (+2052)   |            18509             |
| [MyAnimeList](https://myanimelist.net)      |   24386 (+333)    |            24053             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5508 (+27)     |             5481             |
| [AniDB](https://anidb.net)                  |   12814 (+116)    |            12698             |
| [Anime-Planet](https://anime-planet.com)    |   22459 (+115)    |            22344             |
| [aniSearch](https://anisearch.com)          |   17715 (+124)    |            17591             |
| [Kitsu](https://kitsu.io)                   |   18775 (+126)    |            18649             |
| [LiveChart.me](https://livechart.me)        |   10534 (+107)    |            10427             |
| [Anime Notifier](https://notify.moe)        |   15731 (+123)    |            15608             |
