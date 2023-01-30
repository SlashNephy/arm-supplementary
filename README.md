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

Currently, arm-supplementary has 34809 entries (+6952).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9951 (+153)    |             9798             |
| [AniList](https://anilist.co)               |   20510 (+2041)   |            18469             |
| [MyAnimeList](https://myanimelist.net)      |   24235 (+303)    |            23932             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5494 (+29)     |             5465             |
| [AniDB](https://anidb.net)                  |   12795 (+119)    |            12676             |
| [Anime-Planet](https://anime-planet.com)    |   22350 (+119)    |            22231             |
| [aniSearch](https://anisearch.com)          |   17615 (+127)    |            17488             |
| [Kitsu](https://kitsu.io)                   |   18680 (+130)    |            18550             |
| [LiveChart.me](https://livechart.me)        |   10513 (+110)    |            10403             |
| [Anime Notifier](https://notify.moe)        |   15713 (+127)    |            15586             |
