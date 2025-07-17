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

Currently, arm-supplementary has 41693 entries (+7649).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   15818 (+691)    |            15127             |
| [AniList](https://anilist.co)               |   23059 (+1858)   |            21201             |
| [MyAnimeList](https://myanimelist.net)      |   29058 (+797)    |            28261             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6336 (+121)    |             6215             |
| [AniDB](https://anidb.net)                  |   13410 (+219)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23798 (+282)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18643 (+247)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20279 (+285)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11312 (+210)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16392 (+265)    |            16127             |
