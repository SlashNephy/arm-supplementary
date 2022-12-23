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

Currently, arm-supplementary has 34718 entries (+7184).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9785 (+171)    |             9614             |
| [AniList](https://anilist.co)               |   20480 (+2082)   |            18398             |
| [MyAnimeList](https://myanimelist.net)      |   24044 (+442)    |            23602             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5476 (+31)     |             5445             |
| [AniDB](https://anidb.net)                  |   12773 (+135)    |            12638             |
| [Anime-Planet](https://anime-planet.com)    |   22015 (+137)    |            21878             |
| [aniSearch](https://anisearch.com)          |   17442 (+143)    |            17299             |
| [Kitsu](https://kitsu.io)                   |   18586 (+150)    |            18436             |
| [LiveChart.me](https://livechart.me)        |   10455 (+109)    |            10346             |
| [Anime Notifier](https://notify.moe)        |   15666 (+145)    |            15521             |
