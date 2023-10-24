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

Currently, arm-supplementary has 36987 entries (+7400).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10881 (+345)    |            10536             |
| [AniList](https://anilist.co)               |   21542 (+2373)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26041 (+692)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5777 (+79)     |             5698             |
| [AniDB](https://anidb.net)                  |   13157 (+179)    |            12978             |
| [Anime-Planet](https://anime-planet.com)    |   23445 (+205)    |            23240             |
| [aniSearch](https://anisearch.com)          |   18327 (+197)    |            18130             |
| [Kitsu](https://kitsu.io)                   |   19869 (+208)    |            19661             |
| [LiveChart.me](https://livechart.me)        |   11130 (+170)    |            10960             |
| [Anime Notifier](https://notify.moe)        |   16223 (+207)    |            16016             |
