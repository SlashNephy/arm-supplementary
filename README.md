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

Currently, arm-supplementary has 36730 entries (+7143).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10767 (+231)    |            10536             |
| [AniList](https://anilist.co)               |   21472 (+2303)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   25905 (+556)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5763 (+65)     |             5698             |
| [AniDB](https://anidb.net)                  |   13109 (+149)    |            12960             |
| [Anime-Planet](https://anime-planet.com)    |   23316 (+159)    |            23157             |
| [aniSearch](https://anisearch.com)          |   18234 (+162)    |            18072             |
| [Kitsu](https://kitsu.io)                   |   19711 (+166)    |            19545             |
| [LiveChart.me](https://livechart.me)        |   11077 (+141)    |            10936             |
| [Anime Notifier](https://notify.moe)        |   16163 (+164)    |            15999             |
