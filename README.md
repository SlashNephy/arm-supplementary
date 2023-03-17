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

Currently, arm-supplementary has 34890 entries (+6825).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10084 (+166)    |             9918             |
| [AniList](https://anilist.co)               |   20622 (+2096)   |            18526             |
| [MyAnimeList](https://myanimelist.net)      |   24445 (+370)    |            24075             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5536 (+37)     |             5499             |
| [AniDB](https://anidb.net)                  |   12856 (+131)    |            12725             |
| [Anime-Planet](https://anime-planet.com)    |   22540 (+132)    |            22408             |
| [aniSearch](https://anisearch.com)          |   17751 (+140)    |            17611             |
| [Kitsu](https://kitsu.io)                   |   18869 (+144)    |            18725             |
| [LiveChart.me](https://livechart.me)        |   10597 (+121)    |            10476             |
| [Anime Notifier](https://notify.moe)        |   15779 (+140)    |            15639             |
