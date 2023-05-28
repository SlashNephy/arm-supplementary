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

Currently, arm-supplementary has 35424 entries (+6956).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10388 (+227)    |            10161             |
| [AniList](https://anilist.co)               |   20794 (+2110)   |            18684             |
| [MyAnimeList](https://myanimelist.net)      |   24903 (+444)    |            24459             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5577 (+28)     |             5549             |
| [AniDB](https://anidb.net)                  |   12985 (+157)    |            12828             |
| [Anime-Planet](https://anime-planet.com)    |   22901 (+159)    |            22742             |
| [aniSearch](https://anisearch.com)          |   17937 (+171)    |            17766             |
| [Kitsu](https://kitsu.io)                   |   19185 (+174)    |            19011             |
| [LiveChart.me](https://livechart.me)        |   10813 (+149)    |            10664             |
| [Anime Notifier](https://notify.moe)        |   15895 (+171)    |            15724             |
