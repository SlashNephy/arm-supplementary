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

Currently, arm-supplementary has 42486 entries (+7260).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   16273 (+308)    |            15965             |
| [AniList](https://anilist.co)               |   23521 (+1813)   |            21708             |
| [MyAnimeList](https://myanimelist.net)      |   29937 (+578)    |            29359             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6673 (+250)    |             6423             |
| [AniDB](https://anidb.net)                  |   13374 (+183)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23725 (+209)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18593 (+197)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20216 (+222)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11280 (+178)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16338 (+211)    |            16127             |
