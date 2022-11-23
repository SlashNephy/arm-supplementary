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

Currently, arm-supplementary has 34620 entries (+7414).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9698 (+142)    |             9556             |
| [AniList](https://anilist.co)               |   20402 (+2097)   |            18305             |
| [MyAnimeList](https://myanimelist.net)      |   24176 (+815)    |            23361             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5414 (+31)     |             5383             |
| [AniDB](https://anidb.net)                  |   12698 (+114)    |            12584             |
| [Anime-Planet](https://anime-planet.com)    |   21481 (+115)    |            21366             |
| [aniSearch](https://anisearch.com)          |   17345 (+121)    |            17224             |
| [Kitsu](https://kitsu.io)                   |   18451 (+126)    |            18325             |
| [LiveChart.me](https://livechart.me)        |   10361 (+108)    |            10253             |
| [Anime Notifier](https://notify.moe)        |   15588 (+120)    |            15468             |
