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

Currently, arm-supplementary has 37697 entries (+7405).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11779 (+311)    |            11468             |
| [AniList](https://anilist.co)               |   21783 (+2331)   |            19452             |
| [MyAnimeList](https://myanimelist.net)      |   26560 (+695)    |            25865             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5807 (+37)     |             5770             |
| [AniDB](https://anidb.net)                  |   13284 (+231)    |            13053             |
| [Anime-Planet](https://anime-planet.com)    |   23654 (+248)    |            23406             |
| [aniSearch](https://anisearch.com)          |   18573 (+250)    |            18323             |
| [Kitsu](https://kitsu.io)                   |   20085 (+267)    |            19818             |
| [LiveChart.me](https://livechart.me)        |   11264 (+209)    |            11055             |
| [Anime Notifier](https://notify.moe)        |   16336 (+261)    |            16075             |
