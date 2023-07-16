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

Currently, arm-supplementary has 35796 entries (+6970).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10529 (+194)    |            10335             |
| [AniList](https://anilist.co)               |   20933 (+2095)   |            18838             |
| [MyAnimeList](https://myanimelist.net)      |   25214 (+427)    |            24787             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5639 (+29)     |             5610             |
| [AniDB](https://anidb.net)                  |   13019 (+140)    |            12879             |
| [Anime-Planet](https://anime-planet.com)    |   23081 (+141)    |            22940             |
| [aniSearch](https://anisearch.com)          |   18028 (+149)    |            17879             |
| [Kitsu](https://kitsu.io)                   |   19377 (+154)    |            19223             |
| [LiveChart.me](https://livechart.me)        |   10972 (+134)    |            10838             |
| [Anime Notifier](https://notify.moe)        |   15968 (+148)    |            15820             |
