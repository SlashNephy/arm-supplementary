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

Currently, arm-supplementary has 34825 entries (+6994).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9927 (+145)    |             9782             |
| [AniList](https://anilist.co)               |   20528 (+2068)   |            18460             |
| [MyAnimeList](https://myanimelist.net)      |   24215 (+315)    |            23900             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5493 (+29)     |             5464             |
| [AniDB](https://anidb.net)                  |   12794 (+124)    |            12670             |
| [Anime-Planet](https://anime-planet.com)    |   22291 (+124)    |            22167             |
| [aniSearch](https://anisearch.com)          |   17603 (+131)    |            17472             |
| [Kitsu](https://kitsu.io)                   |   18667 (+134)    |            18533             |
| [LiveChart.me](https://livechart.me)        |   10510 (+118)    |            10392             |
| [Anime Notifier](https://notify.moe)        |   15688 (+134)    |            15554             |
