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

Currently, arm-supplementary has 35858 entries (+7032).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10500 (+165)    |            10335             |
| [AniList](https://anilist.co)               |   20922 (+2084)   |            18838             |
| [MyAnimeList](https://myanimelist.net)      |   25174 (+387)    |            24787             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5639 (+29)     |             5610             |
| [AniDB](https://anidb.net)                  |   13007 (+129)    |            12878             |
| [Anime-Planet](https://anime-planet.com)    |   23058 (+129)    |            22929             |
| [aniSearch](https://anisearch.com)          |   18005 (+137)    |            17868             |
| [Kitsu](https://kitsu.io)                   |   19351 (+142)    |            19209             |
| [LiveChart.me](https://livechart.me)        |   10955 (+123)    |            10832             |
| [Anime Notifier](https://notify.moe)        |   15957 (+139)    |            15818             |
