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

Currently, arm-supplementary has 35057 entries (+6903).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10167 (+164)    |            10003             |
| [AniList](https://anilist.co)               |   20680 (+2083)   |            18597             |
| [MyAnimeList](https://myanimelist.net)      |   24547 (+367)    |            24180             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5566 (+29)     |             5537             |
| [AniDB](https://anidb.net)                  |   12913 (+127)    |            12786             |
| [Anime-Planet](https://anime-planet.com)    |   22676 (+127)    |            22549             |
| [aniSearch](https://anisearch.com)          |   17809 (+135)    |            17674             |
| [Kitsu](https://kitsu.io)                   |   18947 (+138)    |            18809             |
| [LiveChart.me](https://livechart.me)        |   10662 (+115)    |            10547             |
| [Anime Notifier](https://notify.moe)        |   15830 (+133)    |            15697             |
