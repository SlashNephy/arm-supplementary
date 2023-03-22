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

Currently, arm-supplementary has 34949 entries (+6856).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10107 (+175)    |             9932             |
| [AniList](https://anilist.co)               |   20643 (+2098)   |            18545             |
| [MyAnimeList](https://myanimelist.net)      |   24482 (+400)    |            24082             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5557 (+41)     |             5516             |
| [AniDB](https://anidb.net)                  |   12869 (+129)    |            12740             |
| [Anime-Planet](https://anime-planet.com)    |   22560 (+128)    |            22432             |
| [aniSearch](https://anisearch.com)          |   17764 (+136)    |            17628             |
| [Kitsu](https://kitsu.io)                   |   18880 (+138)    |            18742             |
| [LiveChart.me](https://livechart.me)        |   10601 (+118)    |            10483             |
| [Anime Notifier](https://notify.moe)        |   15794 (+136)    |            15658             |
