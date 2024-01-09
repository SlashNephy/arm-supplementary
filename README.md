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

Currently, arm-supplementary has 37679 entries (+7271).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11884 (+201)    |            11683             |
| [AniList](https://anilist.co)               |   21718 (+2235)   |            19483             |
| [MyAnimeList](https://myanimelist.net)      |   26541 (+593)    |            25948             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5811 (+31)     |             5780             |
| [AniDB](https://anidb.net)                  |   13263 (+145)    |            13118             |
| [Anime-Planet](https://anime-planet.com)    |   23587 (+151)    |            23436             |
| [aniSearch](https://anisearch.com)          |   18491 (+154)    |            18337             |
| [Kitsu](https://kitsu.io)                   |   20039 (+164)    |            19875             |
| [LiveChart.me](https://livechart.me)        |   11207 (+140)    |            11067             |
| [Anime Notifier](https://notify.moe)        |   16240 (+157)    |            16083             |
