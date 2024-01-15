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

Currently, arm-supplementary has 37675 entries (+7201).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11931 (+205)    |            11726             |
| [AniList](https://anilist.co)               |   21712 (+2216)   |            19496             |
| [MyAnimeList](https://myanimelist.net)      |   26549 (+551)    |            25998             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5817 (+33)     |             5784             |
| [AniDB](https://anidb.net)                  |   13259 (+141)    |            13118             |
| [Anime-Planet](https://anime-planet.com)    |   23584 (+149)    |            23435             |
| [aniSearch](https://anisearch.com)          |   18489 (+152)    |            18337             |
| [Kitsu](https://kitsu.io)                   |   20037 (+162)    |            19875             |
| [LiveChart.me](https://livechart.me)        |   11206 (+139)    |            11067             |
| [Anime Notifier](https://notify.moe)        |   16237 (+154)    |            16083             |
