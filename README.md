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

Currently, arm-supplementary has 34972 entries (+6879).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10133 (+201)    |             9932             |
| [AniList](https://anilist.co)               |   20646 (+2101)   |            18545             |
| [MyAnimeList](https://myanimelist.net)      |   24503 (+421)    |            24082             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5596 (+80)     |             5516             |
| [AniDB](https://anidb.net)                  |   12873 (+133)    |            12740             |
| [Anime-Planet](https://anime-planet.com)    |   22564 (+132)    |            22432             |
| [aniSearch](https://anisearch.com)          |   17767 (+139)    |            17628             |
| [Kitsu](https://kitsu.io)                   |   18884 (+142)    |            18742             |
| [LiveChart.me](https://livechart.me)        |   10604 (+121)    |            10483             |
| [Anime Notifier](https://notify.moe)        |   15796 (+138)    |            15658             |
