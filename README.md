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

Currently, arm-supplementary has 37703 entries (+7411).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11785 (+317)    |            11468             |
| [AniList](https://anilist.co)               |   21785 (+2333)   |            19452             |
| [MyAnimeList](https://myanimelist.net)      |   26564 (+699)    |            25865             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5807 (+37)     |             5770             |
| [AniDB](https://anidb.net)                  |   13286 (+233)    |            13053             |
| [Anime-Planet](https://anime-planet.com)    |   23656 (+250)    |            23406             |
| [aniSearch](https://anisearch.com)          |   18575 (+252)    |            18323             |
| [Kitsu](https://kitsu.io)                   |   20087 (+269)    |            19818             |
| [LiveChart.me](https://livechart.me)        |   11266 (+211)    |            11055             |
| [Anime Notifier](https://notify.moe)        |   16338 (+263)    |            16075             |
