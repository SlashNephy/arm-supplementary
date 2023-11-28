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

Currently, arm-supplementary has 37643 entries (+8056).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11290 (+754)    |            10536             |
| [AniList](https://anilist.co)               |   21859 (+2690)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26591 (+1242)   |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5795 (+97)     |             5698             |
| [AniDB](https://anidb.net)                  |   13417 (+416)    |            13001             |
| [Anime-Planet](https://anime-planet.com)    |   23784 (+469)    |            23315             |
| [aniSearch](https://anisearch.com)          |   18665 (+450)    |            18215             |
| [Kitsu](https://kitsu.io)                   |   20227 (+476)    |            19751             |
| [LiveChart.me](https://livechart.me)        |   11313 (+310)    |            11003             |
| [Anime Notifier](https://notify.moe)        |   16508 (+472)    |            16036             |
