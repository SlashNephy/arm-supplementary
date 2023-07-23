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

Currently, arm-supplementary has 35897 entries (+7071).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10539 (+204)    |            10335             |
| [AniList](https://anilist.co)               |   20956 (+2118)   |            18838             |
| [MyAnimeList](https://myanimelist.net)      |   25308 (+521)    |            24787             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5642 (+32)     |             5610             |
| [AniDB](https://anidb.net)                  |   13040 (+148)    |            12892             |
| [Anime-Planet](https://anime-planet.com)    |   23112 (+150)    |            22962             |
| [aniSearch](https://anisearch.com)          |   18063 (+157)    |            17906             |
| [Kitsu](https://kitsu.io)                   |   19450 (+161)    |            19289             |
| [LiveChart.me](https://livechart.me)        |   10993 (+142)    |            10851             |
| [Anime Notifier](https://notify.moe)        |   15992 (+158)    |            15834             |
