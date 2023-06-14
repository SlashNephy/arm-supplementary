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

Currently, arm-supplementary has 35640 entries (+6987).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10415 (+161)    |            10254             |
| [AniList](https://anilist.co)               |   20819 (+2104)   |            18715             |
| [MyAnimeList](https://myanimelist.net)      |   25002 (+398)    |            24604             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5639 (+56)     |             5583             |
| [AniDB](https://anidb.net)                  |   12964 (+129)    |            12835             |
| [Anime-Planet](https://anime-planet.com)    |   22940 (+130)    |            22810             |
| [aniSearch](https://anisearch.com)          |   17930 (+137)    |            17793             |
| [Kitsu](https://kitsu.io)                   |   19271 (+142)    |            19129             |
| [LiveChart.me](https://livechart.me)        |   10821 (+123)    |            10698             |
| [Anime Notifier](https://notify.moe)        |   15917 (+139)    |            15778             |
