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

Currently, arm-supplementary has 34891 entries (+7357).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9847 (+233)    |             9614             |
| [AniList](https://anilist.co)               |   20505 (+2107)   |            18398             |
| [MyAnimeList](https://myanimelist.net)      |   24179 (+577)    |            23602             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5477 (+32)     |             5445             |
| [AniDB](https://anidb.net)                  |   12827 (+182)    |            12645             |
| [Anime-Planet](https://anime-planet.com)    |   22268 (+173)    |            22095             |
| [aniSearch](https://anisearch.com)          |   17519 (+191)    |            17328             |
| [Kitsu](https://kitsu.io)                   |   18654 (+202)    |            18452             |
| [LiveChart.me](https://livechart.me)        |   10473 (+112)    |            10361             |
| [Anime Notifier](https://notify.moe)        |   15725 (+196)    |            15529             |
