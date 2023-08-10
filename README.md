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

Currently, arm-supplementary has 35999 entries (+6997).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10579 (+172)    |            10407             |
| [AniList](https://anilist.co)               |   20970 (+2091)   |            18879             |
| [MyAnimeList](https://myanimelist.net)      |   25418 (+439)    |            24979             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5643 (+31)     |             5612             |
| [AniDB](https://anidb.net)                  |   13041 (+133)    |            12908             |
| [Anime-Planet](https://anime-planet.com)    |   23154 (+134)    |            23020             |
| [aniSearch](https://anisearch.com)          |   18084 (+143)    |            17941             |
| [Kitsu](https://kitsu.io)                   |   19508 (+148)    |            19360             |
| [LiveChart.me](https://livechart.me)        |   11002 (+128)    |            10874             |
| [Anime Notifier](https://notify.moe)        |   15977 (+142)    |            15835             |
