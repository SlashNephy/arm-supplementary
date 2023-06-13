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

Currently, arm-supplementary has 35639 entries (+6986).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10414 (+160)    |            10254             |
| [AniList](https://anilist.co)               |   20818 (+2103)   |            18715             |
| [MyAnimeList](https://myanimelist.net)      |   25001 (+397)    |            24604             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5614 (+31)     |             5583             |
| [AniDB](https://anidb.net)                  |   12963 (+128)    |            12835             |
| [Anime-Planet](https://anime-planet.com)    |   22939 (+129)    |            22810             |
| [aniSearch](https://anisearch.com)          |   17929 (+136)    |            17793             |
| [Kitsu](https://kitsu.io)                   |   19270 (+141)    |            19129             |
| [LiveChart.me](https://livechart.me)        |   10820 (+122)    |            10698             |
| [Anime Notifier](https://notify.moe)        |   15916 (+138)    |            15778             |
