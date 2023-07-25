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

Currently, arm-supplementary has 35887 entries (+7061).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10540 (+205)    |            10335             |
| [AniList](https://anilist.co)               |   20965 (+2127)   |            18838             |
| [MyAnimeList](https://myanimelist.net)      |   25333 (+546)    |            24787             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5642 (+32)     |             5610             |
| [AniDB](https://anidb.net)                  |   13047 (+151)    |            12896             |
| [Anime-Planet](https://anime-planet.com)    |   23131 (+154)    |            22977             |
| [aniSearch](https://anisearch.com)          |   18068 (+160)    |            17908             |
| [Kitsu](https://kitsu.io)                   |   19469 (+166)    |            19303             |
| [LiveChart.me](https://livechart.me)        |   11003 (+146)    |            10857             |
| [Anime Notifier](https://notify.moe)        |   15997 (+162)    |            15835             |
