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

Currently, arm-supplementary has 35867 entries (+6865).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10565 (+158)    |            10407             |
| [AniList](https://anilist.co)               |   20926 (+2047)   |            18879             |
| [MyAnimeList](https://myanimelist.net)      |   25327 (+348)    |            24979             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5643 (+31)     |             5612             |
| [AniDB](https://anidb.net)                  |   13025 (+129)    |            12896             |
| [Anime-Planet](https://anime-planet.com)    |   23106 (+129)    |            22977             |
| [aniSearch](https://anisearch.com)          |   18045 (+137)    |            17908             |
| [Kitsu](https://kitsu.io)                   |   19445 (+142)    |            19303             |
| [LiveChart.me](https://livechart.me)        |   10980 (+123)    |            10857             |
| [Anime Notifier](https://notify.moe)        |   15974 (+139)    |            15835             |
