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

Currently, arm-supplementary has 42351 entries (+7234).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   16111 (+272)    |            15839             |
| [AniList](https://anilist.co)               |   23403 (+1801)   |            21602             |
| [MyAnimeList](https://myanimelist.net)      |   29623 (+575)    |            29048             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6436 (+44)     |             6392             |
| [AniDB](https://anidb.net)                  |   13361 (+170)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23715 (+199)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18586 (+190)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20201 (+207)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11283 (+181)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16322 (+195)    |            16127             |
