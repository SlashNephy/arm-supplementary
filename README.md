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

Currently, arm-supplementary has 37683 entries (+7209).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11939 (+213)    |            11726             |
| [AniList](https://anilist.co)               |   21715 (+2219)   |            19496             |
| [MyAnimeList](https://myanimelist.net)      |   26553 (+555)    |            25998             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5817 (+33)     |             5784             |
| [AniDB](https://anidb.net)                  |   13262 (+144)    |            13118             |
| [Anime-Planet](https://anime-planet.com)    |   23587 (+152)    |            23435             |
| [aniSearch](https://anisearch.com)          |   18492 (+155)    |            18337             |
| [Kitsu](https://kitsu.io)                   |   20040 (+165)    |            19875             |
| [LiveChart.me](https://livechart.me)        |   11207 (+140)    |            11067             |
| [Anime Notifier](https://notify.moe)        |   16240 (+157)    |            16083             |
