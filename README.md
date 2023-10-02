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

Currently, arm-supplementary has 36553 entries (+6966).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10723 (+187)    |            10536             |
| [AniList](https://anilist.co)               |   21359 (+2190)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   25813 (+464)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5739 (+41)     |             5698             |
| [AniDB](https://anidb.net)                  |   13092 (+140)    |            12952             |
| [Anime-Planet](https://anime-planet.com)    |   23286 (+144)    |            23142             |
| [aniSearch](https://anisearch.com)          |   18206 (+150)    |            18056             |
| [Kitsu](https://kitsu.io)                   |   19644 (+155)    |            19489             |
| [LiveChart.me](https://livechart.me)        |   11058 (+131)    |            10927             |
| [Anime Notifier](https://notify.moe)        |   16097 (+149)    |            15948             |
