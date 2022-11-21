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

Currently, arm-supplementary has 34940 entries (+7762).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9696 (+145)    |             9551             |
| [AniList](https://anilist.co)               |   20410 (+2113)   |            18297             |
| [MyAnimeList](https://myanimelist.net)      |   24460 (+1127)   |            23333             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5411 (+30)     |             5381             |
| [AniDB](https://anidb.net)                  |   12701 (+117)    |            12584             |
| [Anime-Planet](https://anime-planet.com)    |   21486 (+118)    |            21368             |
| [aniSearch](https://anisearch.com)          |   17348 (+124)    |            17224             |
| [Kitsu](https://kitsu.io)                   |   18446 (+128)    |            18318             |
| [LiveChart.me](https://livechart.me)        |   10363 (+111)    |            10252             |
| [Anime Notifier](https://notify.moe)        |   15588 (+120)    |            15468             |
