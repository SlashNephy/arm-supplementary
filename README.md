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

Currently, arm-supplementary has 35891 entries (+6889).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10570 (+163)    |            10407             |
| [AniList](https://anilist.co)               |   20933 (+2054)   |            18879             |
| [MyAnimeList](https://myanimelist.net)      |   25369 (+390)    |            24979             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5643 (+31)     |             5612             |
| [AniDB](https://anidb.net)                  |   13027 (+129)    |            12898             |
| [Anime-Planet](https://anime-planet.com)    |   23123 (+130)    |            22993             |
| [aniSearch](https://anisearch.com)          |   18060 (+139)    |            17921             |
| [Kitsu](https://kitsu.io)                   |   19476 (+144)    |            19332             |
| [LiveChart.me](https://livechart.me)        |   10984 (+124)    |            10860             |
| [Anime Notifier](https://notify.moe)        |   15974 (+139)    |            15835             |
