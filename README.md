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

Currently, arm-supplementary has 40689 entries (+7188).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   14863 (+246)    |            14617             |
| [AniList](https://anilist.co)               |   22707 (+1766)   |            20941             |
| [MyAnimeList](https://myanimelist.net)      |   28480 (+492)    |            27988             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6174 (+37)     |             6137             |
| [AniDB](https://anidb.net)                  |   13350 (+159)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23695 (+179)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18566 (+170)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20180 (+186)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11266 (+164)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16303 (+176)    |            16127             |
