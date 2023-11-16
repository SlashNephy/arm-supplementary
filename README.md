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

Currently, arm-supplementary has 37256 entries (+7669).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11065 (+529)    |            10536             |
| [AniList](https://anilist.co)               |   21685 (+2516)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26284 (+935)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5791 (+93)     |             5698             |
| [AniDB](https://anidb.net)                  |   13241 (+249)    |            12992             |
| [Anime-Planet](https://anime-planet.com)    |   23577 (+297)    |            23280             |
| [aniSearch](https://anisearch.com)          |   18474 (+280)    |            18194             |
| [Kitsu](https://kitsu.io)                   |   20003 (+297)    |            19706             |
| [LiveChart.me](https://livechart.me)        |   11213 (+227)    |            10986             |
| [Anime Notifier](https://notify.moe)        |   16321 (+294)    |            16027             |
