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

Currently, arm-supplementary has 34593 entries (+7312).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9727 (+156)    |             9571             |
| [AniList](https://anilist.co)               |   20408 (+2088)   |            18320             |
| [MyAnimeList](https://myanimelist.net)      |   24214 (+793)    |            23421             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5420 (+31)     |             5389             |
| [AniDB](https://anidb.net)                  |   12709 (+116)    |            12593             |
| [Anime-Planet](https://anime-planet.com)    |   21526 (+121)    |            21405             |
| [aniSearch](https://anisearch.com)          |   17378 (+127)    |            17251             |
| [Kitsu](https://kitsu.io)                   |   18465 (+132)    |            18333             |
| [LiveChart.me](https://livechart.me)        |   10400 (+113)    |            10287             |
| [Anime Notifier](https://notify.moe)        |   15595 (+127)    |            15468             |
