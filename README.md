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

Currently, arm-supplementary has 35369 entries (+6901).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10332 (+171)    |            10161             |
| [AniList](https://anilist.co)               |   20751 (+2067)   |            18684             |
| [MyAnimeList](https://myanimelist.net)      |   24750 (+291)    |            24459             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5575 (+26)     |             5549             |
| [AniDB](https://anidb.net)                  |   12942 (+120)    |            12822             |
| [Anime-Planet](https://anime-planet.com)    |   22852 (+120)    |            22732             |
| [aniSearch](https://anisearch.com)          |   17886 (+129)    |            17757             |
| [Kitsu](https://kitsu.io)                   |   19117 (+132)    |            18985             |
| [LiveChart.me](https://livechart.me)        |   10766 (+111)    |            10655             |
| [Anime Notifier](https://notify.moe)        |   15851 (+129)    |            15722             |
