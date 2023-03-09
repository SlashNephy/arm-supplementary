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

Currently, arm-supplementary has 34822 entries (+6757).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10058 (+140)    |             9918             |
| [AniList](https://anilist.co)               |   20576 (+2050)   |            18526             |
| [MyAnimeList](https://myanimelist.net)      |   24395 (+320)    |            24075             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5527 (+28)     |             5499             |
| [AniDB](https://anidb.net)                  |   12832 (+117)    |            12715             |
| [Anime-Planet](https://anime-planet.com)    |   22491 (+115)    |            22376             |
| [aniSearch](https://anisearch.com)          |   17726 (+124)    |            17602             |
| [Kitsu](https://kitsu.io)                   |   18805 (+127)    |            18678             |
| [LiveChart.me](https://livechart.me)        |   10544 (+107)    |            10437             |
| [Anime Notifier](https://notify.moe)        |   15751 (+124)    |            15627             |
