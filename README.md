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

Currently, arm-supplementary has 36307 entries (+7139).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10606 (+172)    |            10434             |
| [AniList](https://anilist.co)               |   21073 (+2135)   |            18938             |
| [MyAnimeList](https://myanimelist.net)      |   25663 (+546)    |            25117             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5659 (+39)     |             5620             |
| [AniDB](https://anidb.net)                  |   13060 (+133)    |            12927             |
| [Anime-Planet](https://anime-planet.com)    |   23217 (+135)    |            23082             |
| [aniSearch](https://anisearch.com)          |   18165 (+143)    |            18022             |
| [Kitsu](https://kitsu.io)                   |   19553 (+147)    |            19406             |
| [LiveChart.me](https://livechart.me)        |   11027 (+128)    |            10899             |
| [Anime Notifier](https://notify.moe)        |   16055 (+144)    |            15911             |
