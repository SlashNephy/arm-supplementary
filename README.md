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

Currently, arm-supplementary has 35784 entries (+6958).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10516 (+181)    |            10335             |
| [AniList](https://anilist.co)               |   20927 (+2089)   |            18838             |
| [MyAnimeList](https://myanimelist.net)      |   25201 (+414)    |            24787             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5639 (+29)     |             5610             |
| [AniDB](https://anidb.net)                  |   13013 (+134)    |            12879             |
| [Anime-Planet](https://anime-planet.com)    |   23075 (+135)    |            22940             |
| [aniSearch](https://anisearch.com)          |   18022 (+143)    |            17879             |
| [Kitsu](https://kitsu.io)                   |   19371 (+148)    |            19223             |
| [LiveChart.me](https://livechart.me)        |   10967 (+129)    |            10838             |
| [Anime Notifier](https://notify.moe)        |   15963 (+143)    |            15820             |
