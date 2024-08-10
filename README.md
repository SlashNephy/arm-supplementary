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

Currently, arm-supplementary has 39524 entries (+7156).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   13251 (+186)    |            13065             |
| [AniList](https://anilist.co)               |   22509 (+2144)   |            20365             |
| [MyAnimeList](https://myanimelist.net)      |   27472 (+487)    |            26985             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5986 (+33)     |             5953             |
| [AniDB](https://anidb.net)                  |   13331 (+140)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23665 (+149)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18545 (+149)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20154 (+160)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11243 (+141)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16280 (+153)    |            16127             |
