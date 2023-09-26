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

Currently, arm-supplementary has 36678 entries (+7163).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10694 (+182)    |            10512             |
| [AniList](https://anilist.co)               |   21355 (+2248)   |            19107             |
| [MyAnimeList](https://myanimelist.net)      |   25807 (+508)    |            25299             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5730 (+37)     |             5693             |
| [AniDB](https://anidb.net)                  |   13085 (+133)    |            12952             |
| [Anime-Planet](https://anime-planet.com)    |   23276 (+136)    |            23140             |
| [aniSearch](https://anisearch.com)          |   18200 (+143)    |            18057             |
| [Kitsu](https://kitsu.io)                   |   19638 (+148)    |            19490             |
| [LiveChart.me](https://livechart.me)        |   11056 (+129)    |            10927             |
| [Anime Notifier](https://notify.moe)        |   16093 (+145)    |            15948             |
