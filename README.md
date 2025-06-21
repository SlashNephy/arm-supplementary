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

Currently, arm-supplementary has 41595 entries (+7551).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   15722 (+595)    |            15127             |
| [AniList](https://anilist.co)               |   23052 (+1851)   |            21201             |
| [MyAnimeList](https://myanimelist.net)      |   28990 (+729)    |            28261             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6321 (+106)    |             6215             |
| [AniDB](https://anidb.net)                  |   13405 (+214)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23793 (+277)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18638 (+242)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20273 (+279)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11307 (+205)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16384 (+257)    |            16127             |
