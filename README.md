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

Currently, arm-supplementary has 37684 entries (+7392).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11766 (+298)    |            11468             |
| [AniList](https://anilist.co)               |   21780 (+2328)   |            19452             |
| [MyAnimeList](https://myanimelist.net)      |   26549 (+684)    |            25865             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5807 (+37)     |             5770             |
| [AniDB](https://anidb.net)                  |   13277 (+224)    |            13053             |
| [Anime-Planet](https://anime-planet.com)    |   23645 (+239)    |            23406             |
| [aniSearch](https://anisearch.com)          |   18570 (+247)    |            18323             |
| [Kitsu](https://kitsu.io)                   |   20074 (+256)    |            19818             |
| [LiveChart.me](https://livechart.me)        |   11259 (+204)    |            11055             |
| [Anime Notifier](https://notify.moe)        |   16325 (+250)    |            16075             |
