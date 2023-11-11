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

Currently, arm-supplementary has 37137 entries (+7550).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11026 (+490)    |            10536             |
| [AniList](https://anilist.co)               |   21648 (+2479)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26185 (+836)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5787 (+89)     |             5698             |
| [AniDB](https://anidb.net)                  |   13213 (+224)    |            12989             |
| [Anime-Planet](https://anime-planet.com)    |   23541 (+269)    |            23272             |
| [aniSearch](https://anisearch.com)          |   18441 (+254)    |            18187             |
| [Kitsu](https://kitsu.io)                   |   19962 (+270)    |            19692             |
| [LiveChart.me](https://livechart.me)        |   11184 (+205)    |            10979             |
| [Anime Notifier](https://notify.moe)        |   16293 (+267)    |            16026             |
