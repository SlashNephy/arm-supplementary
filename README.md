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

Currently, arm-supplementary has 36781 entries (+7194).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10770 (+234)    |            10536             |
| [AniList](https://anilist.co)               |   21479 (+2310)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   25924 (+575)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5764 (+66)     |             5698             |
| [AniDB](https://anidb.net)                  |   13117 (+150)    |            12967             |
| [Anime-Planet](https://anime-planet.com)    |   23341 (+160)    |            23181             |
| [aniSearch](https://anisearch.com)          |   18250 (+163)    |            18087             |
| [Kitsu](https://kitsu.io)                   |   19727 (+167)    |            19560             |
| [LiveChart.me](https://livechart.me)        |   11091 (+143)    |            10948             |
| [Anime Notifier](https://notify.moe)        |   16172 (+166)    |            16006             |
