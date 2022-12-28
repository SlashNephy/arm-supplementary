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

Currently, arm-supplementary has 34837 entries (+7303).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9849 (+235)    |             9614             |
| [AniList](https://anilist.co)               |   20502 (+2104)   |            18398             |
| [MyAnimeList](https://myanimelist.net)      |   24180 (+578)    |            23602             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5477 (+32)     |             5445             |
| [AniDB](https://anidb.net)                  |   12829 (+184)    |            12645             |
| [Anime-Planet](https://anime-planet.com)    |   22270 (+175)    |            22095             |
| [aniSearch](https://anisearch.com)          |   17521 (+193)    |            17328             |
| [Kitsu](https://kitsu.io)                   |   18656 (+204)    |            18452             |
| [LiveChart.me](https://livechart.me)        |   10475 (+114)    |            10361             |
| [Anime Notifier](https://notify.moe)        |   15727 (+198)    |            15529             |
