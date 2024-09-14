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

Currently, arm-supplementary has 39887 entries (+7169).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   13462 (+205)    |            13257             |
| [AniList](https://anilist.co)               |   22583 (+2142)   |            20441             |
| [MyAnimeList](https://myanimelist.net)      |   27688 (+487)    |            27201             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6029 (+40)     |             5989             |
| [AniDB](https://anidb.net)                  |   13337 (+146)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23672 (+156)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18551 (+155)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20162 (+168)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11248 (+146)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16284 (+157)    |            16127             |
