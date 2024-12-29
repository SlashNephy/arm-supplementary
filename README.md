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

Currently, arm-supplementary has 40228 entries (+7175).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   14515 (+235)    |            14280             |
| [AniList](https://anilist.co)               |   22595 (+1772)   |            20823             |
| [MyAnimeList](https://myanimelist.net)      |   28253 (+500)    |            27753             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6150 (+38)     |             6112             |
| [AniDB](https://anidb.net)                  |   13361 (+170)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23705 (+189)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18578 (+182)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20191 (+197)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11266 (+164)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16313 (+186)    |            16127             |
