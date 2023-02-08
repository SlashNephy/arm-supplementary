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

Currently, arm-supplementary has 34910 entries (+7038).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9977 (+166)    |             9811             |
| [AniList](https://anilist.co)               |   20563 (+2081)   |            18482             |
| [MyAnimeList](https://myanimelist.net)      |   24304 (+368)    |            23936             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5493 (+28)     |             5465             |
| [AniDB](https://anidb.net)                  |   12832 (+149)    |            12683             |
| [Anime-Planet](https://anime-planet.com)    |   22408 (+148)    |            22260             |
| [aniSearch](https://anisearch.com)          |   17687 (+158)    |            17529             |
| [Kitsu](https://kitsu.io)                   |   18747 (+159)    |            18588             |
| [LiveChart.me](https://livechart.me)        |   10541 (+131)    |            10410             |
| [Anime Notifier](https://notify.moe)        |   15755 (+156)    |            15599             |
