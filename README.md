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

Currently, arm-supplementary has 34878 entries (+6813).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10079 (+161)    |             9918             |
| [AniList](https://anilist.co)               |   20615 (+2089)   |            18526             |
| [MyAnimeList](https://myanimelist.net)      |   24433 (+358)    |            24075             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5536 (+37)     |             5499             |
| [AniDB](https://anidb.net)                  |   12854 (+129)    |            12725             |
| [Anime-Planet](https://anime-planet.com)    |   22532 (+130)    |            22402             |
| [aniSearch](https://anisearch.com)          |   17749 (+138)    |            17611             |
| [Kitsu](https://kitsu.io)                   |   18862 (+142)    |            18720             |
| [LiveChart.me](https://livechart.me)        |   10578 (+120)    |            10458             |
| [Anime Notifier](https://notify.moe)        |   15775 (+138)    |            15637             |
