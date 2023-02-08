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

Currently, arm-supplementary has 34913 entries (+7041).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9979 (+168)    |             9811             |
| [AniList](https://anilist.co)               |   20565 (+2083)   |            18482             |
| [MyAnimeList](https://myanimelist.net)      |   24307 (+371)    |            23936             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5493 (+28)     |             5465             |
| [AniDB](https://anidb.net)                  |   12834 (+151)    |            12683             |
| [Anime-Planet](https://anime-planet.com)    |   22410 (+150)    |            22260             |
| [aniSearch](https://anisearch.com)          |   17689 (+160)    |            17529             |
| [Kitsu](https://kitsu.io)                   |   18750 (+162)    |            18588             |
| [LiveChart.me](https://livechart.me)        |   10542 (+132)    |            10410             |
| [Anime Notifier](https://notify.moe)        |   15758 (+159)    |            15599             |
