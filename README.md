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

Currently, arm-supplementary has 39597 entries (+7176).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   13290 (+207)    |            13083             |
| [AniList](https://anilist.co)               |   22531 (+2159)   |            20372             |
| [MyAnimeList](https://myanimelist.net)      |   27526 (+499)    |            27027             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5991 (+37)     |             5954             |
| [AniDB](https://anidb.net)                  |   13339 (+148)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23679 (+163)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18560 (+164)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20168 (+174)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11256 (+154)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16293 (+166)    |            16127             |
