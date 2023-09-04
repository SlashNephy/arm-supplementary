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

Currently, arm-supplementary has 36228 entries (+7060).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10605 (+171)    |            10434             |
| [AniList](https://anilist.co)               |   21063 (+2125)   |            18938             |
| [MyAnimeList](https://myanimelist.net)      |   25609 (+492)    |            25117             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5659 (+39)     |             5620             |
| [AniDB](https://anidb.net)                  |   13056 (+133)    |            12923             |
| [Anime-Planet](https://anime-planet.com)    |   23205 (+135)    |            23070             |
| [aniSearch](https://anisearch.com)          |   18135 (+143)    |            17992             |
| [Kitsu](https://kitsu.io)                   |   19546 (+147)    |            19399             |
| [LiveChart.me](https://livechart.me)        |   11021 (+128)    |            10893             |
| [Anime Notifier](https://notify.moe)        |   16052 (+144)    |            15908             |
