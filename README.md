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

Currently, arm-supplementary has 35382 entries (+6914).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10377 (+216)    |            10161             |
| [AniList](https://anilist.co)               |   20782 (+2098)   |            18684             |
| [MyAnimeList](https://myanimelist.net)      |   24788 (+329)    |            24459             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5576 (+27)     |             5549             |
| [AniDB](https://anidb.net)                  |   12971 (+149)    |            12822             |
| [Anime-Planet](https://anime-planet.com)    |   22883 (+151)    |            22732             |
| [aniSearch](https://anisearch.com)          |   17920 (+163)    |            17757             |
| [Kitsu](https://kitsu.io)                   |   19151 (+166)    |            18985             |
| [LiveChart.me](https://livechart.me)        |   10801 (+145)    |            10656             |
| [Anime Notifier](https://notify.moe)        |   15885 (+163)    |            15722             |
