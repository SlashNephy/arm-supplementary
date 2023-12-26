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

Currently, arm-supplementary has 37674 entries (+7382).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11741 (+273)    |            11468             |
| [AniList](https://anilist.co)               |   21764 (+2312)   |            19452             |
| [MyAnimeList](https://myanimelist.net)      |   26527 (+662)    |            25865             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5807 (+37)     |             5770             |
| [AniDB](https://anidb.net)                  |   13263 (+210)    |            13053             |
| [Anime-Planet](https://anime-planet.com)    |   23626 (+221)    |            23405             |
| [aniSearch](https://anisearch.com)          |   18551 (+228)    |            18323             |
| [Kitsu](https://kitsu.io)                   |   20051 (+233)    |            19818             |
| [LiveChart.me](https://livechart.me)        |   11246 (+193)    |            11053             |
| [Anime Notifier](https://notify.moe)        |   16300 (+228)    |            16072             |
