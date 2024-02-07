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

Currently, arm-supplementary has 37980 entries (+7222).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   12056 (+177)    |            11879             |
| [AniList](https://anilist.co)               |   21772 (+2215)   |            19557             |
| [MyAnimeList](https://myanimelist.net)      |   26707 (+517)    |            26190             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5825 (+32)     |             5793             |
| [AniDB](https://anidb.net)                  |   13305 (+136)    |            13169             |
| [Anime-Planet](https://anime-planet.com)    |   23647 (+141)    |            23506             |
| [aniSearch](https://anisearch.com)          |   18526 (+146)    |            18380             |
| [Kitsu](https://kitsu.io)                   |   20093 (+154)    |            19939             |
| [LiveChart.me](https://livechart.me)        |   11234 (+137)    |            11097             |
| [Anime Notifier](https://notify.moe)        |   16274 (+147)    |            16127             |
