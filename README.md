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

Currently, arm-supplementary has 34823 entries (+6758).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10059 (+141)    |             9918             |
| [AniList](https://anilist.co)               |   20577 (+2051)   |            18526             |
| [MyAnimeList](https://myanimelist.net)      |   24396 (+321)    |            24075             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5527 (+28)     |             5499             |
| [AniDB](https://anidb.net)                  |   12833 (+118)    |            12715             |
| [Anime-Planet](https://anime-planet.com)    |   22492 (+116)    |            22376             |
| [aniSearch](https://anisearch.com)          |   17727 (+125)    |            17602             |
| [Kitsu](https://kitsu.io)                   |   18806 (+128)    |            18678             |
| [LiveChart.me](https://livechart.me)        |   10545 (+108)    |            10437             |
| [Anime Notifier](https://notify.moe)        |   15752 (+125)    |            15627             |
