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

Currently, arm-supplementary has 36131 entries (+6963).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10599 (+165)    |            10434             |
| [AniList](https://anilist.co)               |   21019 (+2081)   |            18938             |
| [MyAnimeList](https://myanimelist.net)      |   25545 (+428)    |            25117             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5657 (+37)     |             5620             |
| [AniDB](https://anidb.net)                  |   13049 (+130)    |            12919             |
| [Anime-Planet](https://anime-planet.com)    |   23182 (+132)    |            23050             |
| [aniSearch](https://anisearch.com)          |   18122 (+140)    |            17982             |
| [Kitsu](https://kitsu.io)                   |   19523 (+144)    |            19379             |
| [LiveChart.me](https://livechart.me)        |   11007 (+125)    |            10882             |
| [Anime Notifier](https://notify.moe)        |   16043 (+140)    |            15903             |
