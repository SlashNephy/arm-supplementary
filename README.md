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

Currently, arm-supplementary has 35049 entries (+6877).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10171 (+141)    |            10030             |
| [AniList](https://anilist.co)               |   20672 (+2058)   |            18614             |
| [MyAnimeList](https://myanimelist.net)      |   24535 (+341)    |            24194             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5565 (+26)     |             5539             |
| [AniDB](https://anidb.net)                  |   12901 (+115)    |            12786             |
| [Anime-Planet](https://anime-planet.com)    |   22662 (+113)    |            22549             |
| [aniSearch](https://anisearch.com)          |   17796 (+122)    |            17674             |
| [Kitsu](https://kitsu.io)                   |   18934 (+125)    |            18809             |
| [LiveChart.me](https://livechart.me)        |   10652 (+105)    |            10547             |
| [Anime Notifier](https://notify.moe)        |   15819 (+122)    |            15697             |
