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

Currently, arm-supplementary has 36549 entries (+6962).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10719 (+183)    |            10536             |
| [AniList](https://anilist.co)               |   21357 (+2188)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   25810 (+461)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5739 (+41)     |             5698             |
| [AniDB](https://anidb.net)                  |   13092 (+140)    |            12952             |
| [Anime-Planet](https://anime-planet.com)    |   23283 (+141)    |            23142             |
| [aniSearch](https://anisearch.com)          |   18204 (+148)    |            18056             |
| [Kitsu](https://kitsu.io)                   |   19641 (+152)    |            19489             |
| [LiveChart.me](https://livechart.me)        |   11056 (+129)    |            10927             |
| [Anime Notifier](https://notify.moe)        |   16097 (+149)    |            15948             |
