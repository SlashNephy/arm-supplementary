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

Currently, arm-supplementary has 37245 entries (+7658).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11054 (+518)    |            10536             |
| [AniList](https://anilist.co)               |   21676 (+2507)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26274 (+925)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5789 (+91)     |             5698             |
| [AniDB](https://anidb.net)                  |   13234 (+242)    |            12992             |
| [Anime-Planet](https://anime-planet.com)    |   23569 (+289)    |            23280             |
| [aniSearch](https://anisearch.com)          |   18467 (+273)    |            18194             |
| [Kitsu](https://kitsu.io)                   |   19995 (+289)    |            19706             |
| [LiveChart.me](https://livechart.me)        |   11208 (+222)    |            10986             |
| [Anime Notifier](https://notify.moe)        |   16313 (+286)    |            16027             |
