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

Currently, arm-supplementary has 39708 entries (+7168).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   13335 (+196)    |            13139             |
| [AniList](https://anilist.co)               |   22556 (+2170)   |            20386             |
| [MyAnimeList](https://myanimelist.net)      |   27611 (+499)    |            27112             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5992 (+35)     |             5957             |
| [AniDB](https://anidb.net)                  |   13346 (+155)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23681 (+165)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18562 (+166)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20170 (+176)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11256 (+154)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16295 (+168)    |            16127             |
