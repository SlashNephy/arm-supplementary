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

Currently, arm-supplementary has 34705 entries (+7424).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9730 (+159)    |             9571             |
| [AniList](https://anilist.co)               |   20420 (+2100)   |            18320             |
| [MyAnimeList](https://myanimelist.net)      |   24136 (+715)    |            23421             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5420 (+31)     |             5389             |
| [AniDB](https://anidb.net)                  |   12725 (+118)    |            12607             |
| [Anime-Planet](https://anime-planet.com)    |   21703 (+123)    |            21580             |
| [aniSearch](https://anisearch.com)          |   17387 (+129)    |            17258             |
| [Kitsu](https://kitsu.io)                   |   18506 (+134)    |            18372             |
| [LiveChart.me](https://livechart.me)        |   10431 (+115)    |            10316             |
| [Anime Notifier](https://notify.moe)        |   15633 (+129)    |            15504             |
