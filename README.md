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

Currently, arm-supplementary has 38142 entries (+7211).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   12264 (+232)    |            12032             |
| [AniList](https://anilist.co)               |   21837 (+2195)   |            19642             |
| [MyAnimeList](https://myanimelist.net)      |   26865 (+526)    |            26339             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5860 (+53)     |             5807             |
| [AniDB](https://anidb.net)                  |   13361 (+170)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23693 (+177)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18575 (+179)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20184 (+190)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11246 (+144)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16311 (+184)    |            16127             |
