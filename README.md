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

Currently, arm-supplementary has 34780 entries (+7246).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9847 (+233)    |             9614             |
| [AniList](https://anilist.co)               |   20497 (+2099)   |            18398             |
| [MyAnimeList](https://myanimelist.net)      |   24099 (+497)    |            23602             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5477 (+32)     |             5445             |
| [AniDB](https://anidb.net)                  |   12820 (+182)    |            12638             |
| [Anime-Planet](https://anime-planet.com)    |   22051 (+173)    |            21878             |
| [aniSearch](https://anisearch.com)          |   17490 (+191)    |            17299             |
| [Kitsu](https://kitsu.io)                   |   18637 (+201)    |            18436             |
| [LiveChart.me](https://livechart.me)        |   10458 (+112)    |            10346             |
| [Anime Notifier](https://notify.moe)        |   15717 (+196)    |            15521             |
