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

Currently, arm-supplementary has 34993 entries (+6839).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10159 (+156)    |            10003             |
| [AniList](https://anilist.co)               |   20662 (+2065)   |            18597             |
| [MyAnimeList](https://myanimelist.net)      |   24542 (+362)    |            24180             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5565 (+28)     |             5537             |
| [AniDB](https://anidb.net)                  |   12899 (+125)    |            12774             |
| [Anime-Planet](https://anime-planet.com)    |   22622 (+124)    |            22498             |
| [aniSearch](https://anisearch.com)          |   17794 (+132)    |            17662             |
| [Kitsu](https://kitsu.io)                   |   18922 (+134)    |            18788             |
| [LiveChart.me](https://livechart.me)        |   10633 (+113)    |            10520             |
| [Anime Notifier](https://notify.moe)        |   15824 (+132)    |            15692             |
