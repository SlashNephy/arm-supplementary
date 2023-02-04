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

Currently, arm-supplementary has 34851 entries (+6979).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9962 (+151)    |             9811             |
| [AniList](https://anilist.co)               |   20543 (+2061)   |            18482             |
| [MyAnimeList](https://myanimelist.net)      |   24274 (+338)    |            23936             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5492 (+27)     |             5465             |
| [AniDB](https://anidb.net)                  |   12817 (+137)    |            12680             |
| [Anime-Planet](https://anime-planet.com)    |   22376 (+136)    |            22240             |
| [aniSearch](https://anisearch.com)          |   17653 (+145)    |            17508             |
| [Kitsu](https://kitsu.io)                   |   18712 (+147)    |            18565             |
| [LiveChart.me](https://livechart.me)        |   10530 (+125)    |            10405             |
| [Anime Notifier](https://notify.moe)        |   15730 (+144)    |            15586             |
