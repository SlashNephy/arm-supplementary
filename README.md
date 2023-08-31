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

Currently, arm-supplementary has 36239 entries (+7071).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10602 (+168)    |            10434             |
| [AniList](https://anilist.co)               |   21060 (+2122)   |            18938             |
| [MyAnimeList](https://myanimelist.net)      |   25606 (+489)    |            25117             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5658 (+38)     |             5620             |
| [AniDB](https://anidb.net)                  |   13054 (+131)    |            12923             |
| [Anime-Planet](https://anime-planet.com)    |   23201 (+133)    |            23068             |
| [aniSearch](https://anisearch.com)          |   18132 (+140)    |            17992             |
| [Kitsu](https://kitsu.io)                   |   19543 (+144)    |            19399             |
| [LiveChart.me](https://livechart.me)        |   11016 (+126)    |            10890             |
| [Anime Notifier](https://notify.moe)        |   16050 (+142)    |            15908             |
