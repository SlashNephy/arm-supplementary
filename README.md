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

Currently, arm-supplementary has 37640 entries (+7296).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11813 (+231)    |            11582             |
| [AniList](https://anilist.co)               |   21722 (+2248)   |            19474             |
| [MyAnimeList](https://myanimelist.net)      |   26486 (+584)    |            25902             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5805 (+31)     |             5774             |
| [AniDB](https://anidb.net)                  |   13220 (+167)    |            13053             |
| [Anime-Planet](https://anime-planet.com)    |   23581 (+175)    |            23406             |
| [aniSearch](https://anisearch.com)          |   18500 (+177)    |            18323             |
| [Kitsu](https://kitsu.io)                   |   20013 (+195)    |            19818             |
| [LiveChart.me](https://livechart.me)        |   11211 (+156)    |            11055             |
| [Anime Notifier](https://notify.moe)        |   16263 (+188)    |            16075             |
