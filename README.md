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

Currently, arm-supplementary has 38017 entries (+7223).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   12108 (+202)    |            11906             |
| [AniList](https://anilist.co)               |   21808 (+2224)   |            19584             |
| [MyAnimeList](https://myanimelist.net)      |   26762 (+546)    |            26216             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5828 (+30)     |             5798             |
| [AniDB](https://anidb.net)                  |   13340 (+149)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23674 (+158)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18558 (+162)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20164 (+170)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11244 (+142)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16288 (+161)    |            16127             |
