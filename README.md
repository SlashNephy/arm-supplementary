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

Currently, arm-supplementary has 34712 entries (+7178).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9779 (+165)    |             9614             |
| [AniList](https://anilist.co)               |   20480 (+2082)   |            18398             |
| [MyAnimeList](https://myanimelist.net)      |   24038 (+436)    |            23602             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5476 (+31)     |             5445             |
| [AniDB](https://anidb.net)                  |   12769 (+131)    |            12638             |
| [Anime-Planet](https://anime-planet.com)    |   22009 (+131)    |            21878             |
| [aniSearch](https://anisearch.com)          |   17438 (+139)    |            17299             |
| [Kitsu](https://kitsu.io)                   |   18580 (+144)    |            18436             |
| [LiveChart.me](https://livechart.me)        |   10454 (+108)    |            10346             |
| [Anime Notifier](https://notify.moe)        |   15661 (+140)    |            15521             |
