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

Currently, arm-supplementary has 35313 entries (+7012).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10284 (+209)    |            10075             |
| [AniList](https://anilist.co)               |   20774 (+2108)   |            18666             |
| [MyAnimeList](https://myanimelist.net)      |   24730 (+435)    |            24295             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5571 (+27)     |             5544             |
| [AniDB](https://anidb.net)                  |   12963 (+149)    |            12814             |
| [Anime-Planet](https://anime-planet.com)    |   22814 (+146)    |            22668             |
| [aniSearch](https://anisearch.com)          |   17879 (+155)    |            17724             |
| [Kitsu](https://kitsu.io)                   |   19102 (+165)    |            18937             |
| [LiveChart.me](https://livechart.me)        |   10724 (+131)    |            10593             |
| [Anime Notifier](https://notify.moe)        |   15884 (+161)    |            15723             |
