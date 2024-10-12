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

Currently, arm-supplementary has 39690 entries (+7154).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   13629 (+202)    |            13427             |
| [AniList](https://anilist.co)               |   22320 (+1757)   |            20563             |
| [MyAnimeList](https://myanimelist.net)      |   27881 (+487)    |            27394             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6080 (+37)     |             6043             |
| [AniDB](https://anidb.net)                  |   13341 (+150)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23678 (+162)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18557 (+161)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20168 (+174)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11253 (+151)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16290 (+163)    |            16127             |
