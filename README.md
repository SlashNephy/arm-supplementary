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

Currently, arm-supplementary has 35888 entries (+7062).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10541 (+206)    |            10335             |
| [AniList](https://anilist.co)               |   20966 (+2128)   |            18838             |
| [MyAnimeList](https://myanimelist.net)      |   25334 (+547)    |            24787             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5642 (+32)     |             5610             |
| [AniDB](https://anidb.net)                  |   13048 (+152)    |            12896             |
| [Anime-Planet](https://anime-planet.com)    |   23132 (+155)    |            22977             |
| [aniSearch](https://anisearch.com)          |   18069 (+161)    |            17908             |
| [Kitsu](https://kitsu.io)                   |   19470 (+167)    |            19303             |
| [LiveChart.me](https://livechart.me)        |   11004 (+147)    |            10857             |
| [Anime Notifier](https://notify.moe)        |   15997 (+162)    |            15835             |
