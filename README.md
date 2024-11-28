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

Currently, arm-supplementary has 39928 entries (+7206).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   14267 (+262)    |            14005             |
| [AniList](https://anilist.co)               |   22448 (+1770)   |            20678             |
| [MyAnimeList](https://myanimelist.net)      |   28044 (+504)    |            27540             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6092 (+37)     |             6055             |
| [AniDB](https://anidb.net)                  |   13353 (+162)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23699 (+183)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18568 (+172)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20186 (+192)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11264 (+162)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16308 (+181)    |            16127             |
