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

Currently, arm-supplementary has 35895 entries (+7069).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10537 (+202)    |            10335             |
| [AniList](https://anilist.co)               |   20952 (+2114)   |            18838             |
| [MyAnimeList](https://myanimelist.net)      |   25302 (+515)    |            24787             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5642 (+32)     |             5610             |
| [AniDB](https://anidb.net)                  |   13037 (+145)    |            12892             |
| [Anime-Planet](https://anime-planet.com)    |   23109 (+147)    |            22962             |
| [aniSearch](https://anisearch.com)          |   18059 (+153)    |            17906             |
| [Kitsu](https://kitsu.io)                   |   19447 (+158)    |            19289             |
| [LiveChart.me](https://livechart.me)        |   10990 (+139)    |            10851             |
| [Anime Notifier](https://notify.moe)        |   15989 (+155)    |            15834             |
