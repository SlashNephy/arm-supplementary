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

Currently, arm-supplementary has 40155 entries (+7235).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   14442 (+292)    |            14150             |
| [AniList](https://anilist.co)               |   22536 (+1792)   |            20744             |
| [MyAnimeList](https://myanimelist.net)      |   28188 (+542)    |            27646             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6153 (+59)     |             6094             |
| [AniDB](https://anidb.net)                  |   13384 (+193)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23727 (+211)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18594 (+198)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20196 (+202)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11280 (+178)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16324 (+197)    |            16127             |
