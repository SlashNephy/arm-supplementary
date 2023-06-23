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

Currently, arm-supplementary has 35699 entries (+6986).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10458 (+198)    |            10260             |
| [AniList](https://anilist.co)               |   20882 (+2132)   |            18750             |
| [MyAnimeList](https://myanimelist.net)      |   25086 (+453)    |            24633             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5663 (+68)     |             5595             |
| [AniDB](https://anidb.net)                  |   13000 (+155)    |            12845             |
| [Anime-Planet](https://anime-planet.com)    |   22979 (+157)    |            22822             |
| [aniSearch](https://anisearch.com)          |   17968 (+164)    |            17804             |
| [Kitsu](https://kitsu.io)                   |   19325 (+171)    |            19154             |
| [LiveChart.me](https://livechart.me)        |   10850 (+141)    |            10709             |
| [Anime Notifier](https://notify.moe)        |   15957 (+168)    |            15789             |
