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

Currently, arm-supplementary has 37269 entries (+7682).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11078 (+542)    |            10536             |
| [AniList](https://anilist.co)               |   21686 (+2517)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26286 (+937)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5791 (+93)     |             5698             |
| [AniDB](https://anidb.net)                  |   13242 (+250)    |            12992             |
| [Anime-Planet](https://anime-planet.com)    |   23578 (+298)    |            23280             |
| [aniSearch](https://anisearch.com)          |   18475 (+281)    |            18194             |
| [Kitsu](https://kitsu.io)                   |   20004 (+298)    |            19706             |
| [LiveChart.me](https://livechart.me)        |   11214 (+228)    |            10986             |
| [Anime Notifier](https://notify.moe)        |   16322 (+295)    |            16027             |
