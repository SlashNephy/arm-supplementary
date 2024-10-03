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

Currently, arm-supplementary has 39618 entries (+7195).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   13582 (+237)    |            13345             |
| [AniList](https://anilist.co)               |   22288 (+1788)   |            20500             |
| [MyAnimeList](https://myanimelist.net)      |   27819 (+526)    |            27293             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6071 (+51)     |             6020             |
| [AniDB](https://anidb.net)                  |   13358 (+167)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23706 (+190)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18576 (+180)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20188 (+194)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11259 (+157)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16309 (+182)    |            16127             |
