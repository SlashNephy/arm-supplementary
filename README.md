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

Currently, arm-supplementary has 35103 entries (+8768).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9643 (+144)    |             9499             |
| [AniList](https://anilist.co)               |   20309 (+2101)   |            18208             |
| [MyAnimeList](https://myanimelist.net)      |   24604 (+2048)   |            22556             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5406 (+31)     |             5375             |
| [AniDB](https://anidb.net)                  |   12671 (+115)    |            12556             |
| [Anime-Planet](https://anime-planet.com)    |   21452 (+116)    |            21336             |
| [aniSearch](https://anisearch.com)          |   17268 (+122)    |            17146             |
| [Kitsu](https://kitsu.io)                   |   18368 (+127)    |            18241             |
| [LiveChart.me](https://livechart.me)        |   10273 (+108)    |            10165             |
| [Anime Notifier](https://notify.moe)        |   15567 (+121)    |            15446             |
