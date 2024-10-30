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

Currently, arm-supplementary has 39841 entries (+7231).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   13916 (+278)    |            13638             |
| [AniList](https://anilist.co)               |   22424 (+1822)   |            20602             |
| [MyAnimeList](https://myanimelist.net)      |   28000 (+551)    |            27449             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6085 (+37)     |             6048             |
| [AniDB](https://anidb.net)                  |   13390 (+199)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23744 (+228)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18617 (+221)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20233 (+239)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11294 (+192)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16352 (+225)    |            16127             |
