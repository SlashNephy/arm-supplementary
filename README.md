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

Currently, arm-supplementary has 34836 entries (+6939).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9979 (+141)    |             9838             |
| [AniList](https://anilist.co)               |   20527 (+2039)   |            18488             |
| [MyAnimeList](https://myanimelist.net)      |   24250 (+286)    |            23964             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5492 (+27)     |             5465             |
| [AniDB](https://anidb.net)                  |   12797 (+114)    |            12683             |
| [Anime-Planet](https://anime-planet.com)    |   22372 (+112)    |            22260             |
| [aniSearch](https://anisearch.com)          |   17650 (+121)    |            17529             |
| [Kitsu](https://kitsu.io)                   |   18715 (+125)    |            18590             |
| [LiveChart.me](https://livechart.me)        |   10513 (+103)    |            10410             |
| [Anime Notifier](https://notify.moe)        |   15726 (+122)    |            15604             |
