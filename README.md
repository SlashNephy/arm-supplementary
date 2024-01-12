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

Currently, arm-supplementary has 37656 entries (+7182).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11912 (+186)    |            11726             |
| [AniList](https://anilist.co)               |   21708 (+2212)   |            19496             |
| [MyAnimeList](https://myanimelist.net)      |   26543 (+545)    |            25998             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5817 (+33)     |             5784             |
| [AniDB](https://anidb.net)                  |   13257 (+139)    |            13118             |
| [Anime-Planet](https://anime-planet.com)    |   23579 (+144)    |            23435             |
| [aniSearch](https://anisearch.com)          |   18486 (+149)    |            18337             |
| [Kitsu](https://kitsu.io)                   |   20032 (+157)    |            19875             |
| [LiveChart.me](https://livechart.me)        |   11202 (+135)    |            11067             |
| [Anime Notifier](https://notify.moe)        |   16233 (+150)    |            16083             |
