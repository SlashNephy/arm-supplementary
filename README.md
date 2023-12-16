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

Currently, arm-supplementary has 37449 entries (+7170).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11596 (+174)    |            11422             |
| [AniList](https://anilist.co)               |   21649 (+2216)   |            19433             |
| [MyAnimeList](https://myanimelist.net)      |   26367 (+521)    |            25846             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5790 (+30)     |             5760             |
| [AniDB](https://anidb.net)                  |   13168 (+143)    |            13025             |
| [Anime-Planet](https://anime-planet.com)    |   23493 (+146)    |            23347             |
| [aniSearch](https://anisearch.com)          |   18420 (+152)    |            18268             |
| [Kitsu](https://kitsu.io)                   |   19941 (+158)    |            19783             |
| [LiveChart.me](https://livechart.me)        |   11159 (+128)    |            11031             |
| [Anime Notifier](https://notify.moe)        |   16213 (+154)    |            16059             |
