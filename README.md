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

Currently, arm-supplementary has 34813 entries (+6916).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10005 (+167)    |             9838             |
| [AniList](https://anilist.co)               |   20551 (+2063)   |            18488             |
| [MyAnimeList](https://myanimelist.net)      |   24284 (+320)    |            23964             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5493 (+28)     |             5465             |
| [AniDB](https://anidb.net)                  |   12820 (+127)    |            12693             |
| [Anime-Planet](https://anime-planet.com)    |   22399 (+122)    |            22277             |
| [aniSearch](https://anisearch.com)          |   17693 (+134)    |            17559             |
| [Kitsu](https://kitsu.io)                   |   18746 (+138)    |            18608             |
| [LiveChart.me](https://livechart.me)        |   10524 (+108)    |            10416             |
| [Anime Notifier](https://notify.moe)        |   15739 (+135)    |            15604             |
