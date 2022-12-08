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

Currently, arm-supplementary has 34717 entries (+7333).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9730 (+142)    |             9588             |
| [AniList](https://anilist.co)               |   20416 (+2085)   |            18331             |
| [MyAnimeList](https://myanimelist.net)      |   24127 (+632)    |            23495             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5437 (+28)     |             5409             |
| [AniDB](https://anidb.net)                  |   12721 (+114)    |            12607             |
| [Anime-Planet](https://anime-planet.com)    |   21695 (+115)    |            21580             |
| [aniSearch](https://anisearch.com)          |   17379 (+121)    |            17258             |
| [Kitsu](https://kitsu.io)                   |   18498 (+126)    |            18372             |
| [LiveChart.me](https://livechart.me)        |   10424 (+108)    |            10316             |
| [Anime Notifier](https://notify.moe)        |   15626 (+122)    |            15504             |
