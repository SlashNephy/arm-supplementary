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

Currently, arm-supplementary has 37894 entries (+7242).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11983 (+186)    |            11797             |
| [AniList](https://anilist.co)               |   21764 (+2214)   |            19550             |
| [MyAnimeList](https://myanimelist.net)      |   26674 (+526)    |            26148             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5819 (+30)     |             5789             |
| [AniDB](https://anidb.net)                  |   13305 (+136)    |            13169             |
| [Anime-Planet](https://anime-planet.com)    |   23646 (+140)    |            23506             |
| [aniSearch](https://anisearch.com)          |   18525 (+145)    |            18380             |
| [Kitsu](https://kitsu.io)                   |   20092 (+153)    |            19939             |
| [LiveChart.me](https://livechart.me)        |   11232 (+135)    |            11097             |
| [Anime Notifier](https://notify.moe)        |   16274 (+147)    |            16127             |
