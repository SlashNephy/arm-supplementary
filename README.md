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

Currently, arm-supplementary has 37317 entries (+7730).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11127 (+591)    |            10536             |
| [AniList](https://anilist.co)               |   21716 (+2547)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26324 (+975)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5795 (+97)     |             5698             |
| [AniDB](https://anidb.net)                  |   13274 (+282)    |            12992             |
| [Anime-Planet](https://anime-planet.com)    |   23610 (+330)    |            23280             |
| [aniSearch](https://anisearch.com)          |   18508 (+314)    |            18194             |
| [Kitsu](https://kitsu.io)                   |   20037 (+331)    |            19706             |
| [LiveChart.me](https://livechart.me)        |   11233 (+247)    |            10986             |
| [Anime Notifier](https://notify.moe)        |   16355 (+328)    |            16027             |
