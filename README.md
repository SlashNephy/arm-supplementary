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

Currently, arm-supplementary has 34754 entries (+7220).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9821 (+207)    |             9614             |
| [AniList](https://anilist.co)               |   20491 (+2093)   |            18398             |
| [MyAnimeList](https://myanimelist.net)      |   24080 (+478)    |            23602             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5476 (+31)     |             5445             |
| [AniDB](https://anidb.net)                  |   12807 (+169)    |            12638             |
| [Anime-Planet](https://anime-planet.com)    |   22045 (+167)    |            21878             |
| [aniSearch](https://anisearch.com)          |   17476 (+177)    |            17299             |
| [Kitsu](https://kitsu.io)                   |   18622 (+186)    |            18436             |
| [LiveChart.me](https://livechart.me)        |   10455 (+109)    |            10346             |
| [Anime Notifier](https://notify.moe)        |   15702 (+181)    |            15521             |
