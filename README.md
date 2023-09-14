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

Currently, arm-supplementary has 36381 entries (+7213).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10624 (+190)    |            10434             |
| [AniList](https://anilist.co)               |   21144 (+2206)   |            18938             |
| [MyAnimeList](https://myanimelist.net)      |   25730 (+613)    |            25117             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5674 (+54)     |             5620             |
| [AniDB](https://anidb.net)                  |   13072 (+140)    |            12932             |
| [Anime-Planet](https://anime-planet.com)    |   23241 (+142)    |            23099             |
| [aniSearch](https://anisearch.com)          |   18178 (+150)    |            18028             |
| [Kitsu](https://kitsu.io)                   |   19582 (+154)    |            19428             |
| [LiveChart.me](https://livechart.me)        |   11038 (+134)    |            10904             |
| [Anime Notifier](https://notify.moe)        |   16071 (+151)    |            15920             |
