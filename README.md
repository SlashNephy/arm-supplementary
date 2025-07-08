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

Currently, arm-supplementary has 41659 entries (+7615).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   15786 (+659)    |            15127             |
| [AniList](https://anilist.co)               |   23056 (+1855)   |            21201             |
| [MyAnimeList](https://myanimelist.net)      |   29031 (+770)    |            28261             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6336 (+121)    |             6215             |
| [AniDB](https://anidb.net)                  |   13407 (+216)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23794 (+278)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18640 (+244)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20275 (+281)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11309 (+207)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16388 (+261)    |            16127             |
