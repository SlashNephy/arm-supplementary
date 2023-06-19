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

Currently, arm-supplementary has 35672 entries (+6959).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10423 (+163)    |            10260             |
| [AniList](https://anilist.co)               |   20843 (+2093)   |            18750             |
| [MyAnimeList](https://myanimelist.net)      |   25012 (+379)    |            24633             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5657 (+62)     |             5595             |
| [AniDB](https://anidb.net)                  |   12966 (+131)    |            12835             |
| [Anime-Planet](https://anime-planet.com)    |   22941 (+131)    |            22810             |
| [aniSearch](https://anisearch.com)          |   17933 (+140)    |            17793             |
| [Kitsu](https://kitsu.io)                   |   19274 (+145)    |            19129             |
| [LiveChart.me](https://livechart.me)        |   10823 (+125)    |            10698             |
| [Anime Notifier](https://notify.moe)        |   15919 (+141)    |            15778             |
