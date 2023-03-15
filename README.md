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

Currently, arm-supplementary has 34836 entries (+6771).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10072 (+154)    |             9918             |
| [AniList](https://anilist.co)               |   20584 (+2058)   |            18526             |
| [MyAnimeList](https://myanimelist.net)      |   24404 (+329)    |            24075             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5534 (+35)     |             5499             |
| [AniDB](https://anidb.net)                  |   12837 (+122)    |            12715             |
| [Anime-Planet](https://anime-planet.com)    |   22499 (+123)    |            22376             |
| [aniSearch](https://anisearch.com)          |   17734 (+132)    |            17602             |
| [Kitsu](https://kitsu.io)                   |   18813 (+135)    |            18678             |
| [LiveChart.me](https://livechart.me)        |   10550 (+113)    |            10437             |
| [Anime Notifier](https://notify.moe)        |   15758 (+131)    |            15627             |
