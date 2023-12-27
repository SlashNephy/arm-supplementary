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

Currently, arm-supplementary has 37666 entries (+7374).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11748 (+280)    |            11468             |
| [AniList](https://anilist.co)               |   21772 (+2320)   |            19452             |
| [MyAnimeList](https://myanimelist.net)      |   26534 (+669)    |            25865             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5807 (+37)     |             5770             |
| [AniDB](https://anidb.net)                  |   13269 (+216)    |            13053             |
| [Anime-Planet](https://anime-planet.com)    |   23635 (+229)    |            23406             |
| [aniSearch](https://anisearch.com)          |   18558 (+235)    |            18323             |
| [Kitsu](https://kitsu.io)                   |   20059 (+241)    |            19818             |
| [LiveChart.me](https://livechart.me)        |   11255 (+200)    |            11055             |
| [Anime Notifier](https://notify.moe)        |   16310 (+235)    |            16075             |
