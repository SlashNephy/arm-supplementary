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

Currently, arm-supplementary has 40977 entries (+7208).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   15120 (+266)    |            14854             |
| [AniList](https://anilist.co)               |   22794 (+1774)   |            21020             |
| [MyAnimeList](https://myanimelist.net)      |   28625 (+514)    |            28111             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6219 (+54)     |             6165             |
| [AniDB](https://anidb.net)                  |   13357 (+166)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23699 (+183)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18571 (+175)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20185 (+191)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11266 (+164)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16305 (+178)    |            16127             |
