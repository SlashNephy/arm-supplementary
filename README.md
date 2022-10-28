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

Currently, arm-supplementary has 35269 entries (+9926).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9641 (+200)    |             9441             |
| [AniList](https://anilist.co)               |   20432 (+2395)   |            18037             |
| [MyAnimeList](https://myanimelist.net)      |   24798 (+3426)   |            21372             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5426 (+97)     |             5329             |
| [AniDB](https://anidb.net)                  |   12860 (+313)    |            12547             |
| [Anime-Planet](https://anime-planet.com)    |   21657 (+334)    |            21323             |
| [aniSearch](https://anisearch.com)          |   17475 (+336)    |            17139             |
| [Kitsu](https://kitsu.io)                   |   18577 (+353)    |            18224             |
| [LiveChart.me](https://livechart.me)        |   10442 (+291)    |            10151             |
| [Anime Notifier](https://notify.moe)        |   15774 (+341)    |            15433             |
