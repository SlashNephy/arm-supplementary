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

Currently, arm-supplementary has 37613 entries (+7269).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11786 (+204)    |            11582             |
| [AniList](https://anilist.co)               |   21707 (+2233)   |            19474             |
| [MyAnimeList](https://myanimelist.net)      |   26469 (+567)    |            25902             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5805 (+31)     |             5774             |
| [AniDB](https://anidb.net)                  |   13206 (+153)    |            13053             |
| [Anime-Planet](https://anime-planet.com)    |   23565 (+159)    |            23406             |
| [aniSearch](https://anisearch.com)          |   18485 (+162)    |            18323             |
| [Kitsu](https://kitsu.io)                   |   19997 (+179)    |            19818             |
| [LiveChart.me](https://livechart.me)        |   11198 (+143)    |            11055             |
| [Anime Notifier](https://notify.moe)        |   16250 (+175)    |            16075             |
