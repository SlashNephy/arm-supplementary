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

Currently, arm-supplementary has 37974 entries (+7216).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   12050 (+171)    |            11879             |
| [AniList](https://anilist.co)               |   21771 (+2214)   |            19557             |
| [MyAnimeList](https://myanimelist.net)      |   26704 (+514)    |            26190             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5825 (+32)     |             5793             |
| [AniDB](https://anidb.net)                  |   13305 (+136)    |            13169             |
| [Anime-Planet](https://anime-planet.com)    |   23647 (+141)    |            23506             |
| [aniSearch](https://anisearch.com)          |   18525 (+145)    |            18380             |
| [Kitsu](https://kitsu.io)                   |   20092 (+153)    |            19939             |
| [LiveChart.me](https://livechart.me)        |   11233 (+136)    |            11097             |
| [Anime Notifier](https://notify.moe)        |   16274 (+147)    |            16127             |
