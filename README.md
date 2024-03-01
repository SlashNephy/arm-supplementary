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

Currently, arm-supplementary has 38098 entries (+7167).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   12220 (+188)    |            12032             |
| [AniList](https://anilist.co)               |   21811 (+2169)   |            19642             |
| [MyAnimeList](https://myanimelist.net)      |   26834 (+495)    |            26339             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5839 (+32)     |             5807             |
| [AniDB](https://anidb.net)                  |   13335 (+144)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23667 (+151)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18549 (+153)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20157 (+163)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11242 (+140)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16284 (+157)    |            16127             |
