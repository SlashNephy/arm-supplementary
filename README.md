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

Currently, arm-supplementary has 35139 entries (+8293).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9692 (+174)    |             9518             |
| [AniList](https://anilist.co)               |   20391 (+2126)   |            18265             |
| [MyAnimeList](https://myanimelist.net)      |   24693 (+1668)   |            23025             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5411 (+32)     |             5379             |
| [AniDB](https://anidb.net)                  |   12702 (+126)    |            12576             |
| [Anime-Planet](https://anime-planet.com)    |   21486 (+131)    |            21355             |
| [aniSearch](https://anisearch.com)          |   17327 (+136)    |            17191             |
| [Kitsu](https://kitsu.io)                   |   18439 (+141)    |            18298             |
| [LiveChart.me](https://livechart.me)        |   10332 (+118)    |            10214             |
| [Anime Notifier](https://notify.moe)        |   15592 (+135)    |            15457             |
