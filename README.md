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

Currently, arm-supplementary has 35143 entries (+7965).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9696 (+145)    |             9551             |
| [AniList](https://anilist.co)               |   20397 (+2100)   |            18297             |
| [MyAnimeList](https://myanimelist.net)      |   24687 (+1354)   |            23333             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5411 (+30)     |             5381             |
| [AniDB](https://anidb.net)                  |   12693 (+117)    |            12576             |
| [Anime-Planet](https://anime-planet.com)    |   21473 (+118)    |            21355             |
| [aniSearch](https://anisearch.com)          |   17315 (+124)    |            17191             |
| [Kitsu](https://kitsu.io)                   |   18426 (+128)    |            18298             |
| [LiveChart.me](https://livechart.me)        |   10324 (+110)    |            10214             |
| [Anime Notifier](https://notify.moe)        |   15577 (+120)    |            15457             |
