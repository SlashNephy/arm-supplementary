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

Currently, arm-supplementary has 37464 entries (+7185).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11624 (+202)    |            11422             |
| [AniList](https://anilist.co)               |   21660 (+2227)   |            19433             |
| [MyAnimeList](https://myanimelist.net)      |   26384 (+538)    |            25846             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5792 (+32)     |             5760             |
| [AniDB](https://anidb.net)                  |   13181 (+156)    |            13025             |
| [Anime-Planet](https://anime-planet.com)    |   23507 (+159)    |            23348             |
| [aniSearch](https://anisearch.com)          |   18433 (+165)    |            18268             |
| [Kitsu](https://kitsu.io)                   |   19955 (+172)    |            19783             |
| [LiveChart.me](https://livechart.me)        |   11172 (+139)    |            11033             |
| [Anime Notifier](https://notify.moe)        |   16228 (+168)    |            16060             |
