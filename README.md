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

Currently, arm-supplementary has 39569 entries (+8110).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   12373 (+182)    |            12191             |
| [AniList](https://anilist.co)               |   22390 (+2646)   |            19744             |
| [MyAnimeList](https://myanimelist.net)      |   28031 (+1533)   |            26498             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5902 (+33)     |             5869             |
| [AniDB](https://anidb.net)                  |   13579 (+388)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   24304 (+788)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18814 (+418)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20515 (+521)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11313 (+211)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16576 (+449)    |            16127             |
