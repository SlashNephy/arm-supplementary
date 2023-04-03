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

Currently, arm-supplementary has 34999 entries (+6845).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10165 (+162)    |            10003             |
| [AniList](https://anilist.co)               |   20664 (+2067)   |            18597             |
| [MyAnimeList](https://myanimelist.net)      |   24547 (+367)    |            24180             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5565 (+28)     |             5537             |
| [AniDB](https://anidb.net)                  |   12901 (+127)    |            12774             |
| [Anime-Planet](https://anime-planet.com)    |   22624 (+126)    |            22498             |
| [aniSearch](https://anisearch.com)          |   17796 (+134)    |            17662             |
| [Kitsu](https://kitsu.io)                   |   18924 (+136)    |            18788             |
| [LiveChart.me](https://livechart.me)        |   10635 (+115)    |            10520             |
| [Anime Notifier](https://notify.moe)        |   15825 (+133)    |            15692             |
