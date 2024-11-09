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

Currently, arm-supplementary has 39875 entries (+7219).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   14098 (+265)    |            13833             |
| [AniList](https://anilist.co)               |   22448 (+1811)   |            20637             |
| [MyAnimeList](https://myanimelist.net)      |   28022 (+550)    |            27472             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6092 (+40)     |             6052             |
| [AniDB](https://anidb.net)                  |   13388 (+197)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23732 (+216)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18611 (+215)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20226 (+232)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11281 (+179)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16345 (+218)    |            16127             |
