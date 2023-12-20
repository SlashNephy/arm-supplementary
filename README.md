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

Currently, arm-supplementary has 37542 entries (+7263).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11667 (+245)    |            11422             |
| [AniList](https://anilist.co)               |   21710 (+2277)   |            19433             |
| [MyAnimeList](https://myanimelist.net)      |   26445 (+599)    |            25846             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5821 (+61)     |             5760             |
| [AniDB](https://anidb.net)                  |   13222 (+190)    |            13032             |
| [Anime-Planet](https://anime-planet.com)    |   23566 (+195)    |            23371             |
| [aniSearch](https://anisearch.com)          |   18482 (+201)    |            18281             |
| [Kitsu](https://kitsu.io)                   |   20006 (+209)    |            19797             |
| [LiveChart.me](https://livechart.me)        |   11202 (+161)    |            11041             |
| [Anime Notifier](https://notify.moe)        |   16272 (+205)    |            16067             |
