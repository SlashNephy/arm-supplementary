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

Currently, arm-supplementary has 35308 entries (+6886).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10288 (+153)    |            10135             |
| [AniList](https://anilist.co)               |   20758 (+2083)   |            18675             |
| [MyAnimeList](https://myanimelist.net)      |   24708 (+305)    |            24403             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5574 (+27)     |             5547             |
| [AniDB](https://anidb.net)                  |   12946 (+128)    |            12818             |
| [Anime-Planet](https://anime-planet.com)    |   22845 (+127)    |            22718             |
| [aniSearch](https://anisearch.com)          |   17867 (+136)    |            17731             |
| [Kitsu](https://kitsu.io)                   |   19096 (+137)    |            18959             |
| [LiveChart.me](https://livechart.me)        |   10733 (+117)    |            10616             |
| [Anime Notifier](https://notify.moe)        |   15855 (+132)    |            15723             |
