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

Currently, arm-supplementary has 42474 entries (+7248).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   16261 (+296)    |            15965             |
| [AniList](https://anilist.co)               |   23516 (+1808)   |            21708             |
| [MyAnimeList](https://myanimelist.net)      |   29924 (+565)    |            29359             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6654 (+231)    |             6423             |
| [AniDB](https://anidb.net)                  |   13369 (+178)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23719 (+203)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18588 (+192)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20210 (+216)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11278 (+176)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16332 (+205)    |            16127             |
