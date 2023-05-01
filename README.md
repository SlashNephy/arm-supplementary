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

Currently, arm-supplementary has 35246 entries (+6945).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10256 (+181)    |            10075             |
| [AniList](https://anilist.co)               |   20763 (+2097)   |            18666             |
| [MyAnimeList](https://myanimelist.net)      |   24681 (+386)    |            24295             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5570 (+26)     |             5544             |
| [AniDB](https://anidb.net)                  |   12948 (+143)    |            12805             |
| [Anime-Planet](https://anime-planet.com)    |   22757 (+141)    |            22616             |
| [aniSearch](https://anisearch.com)          |   17858 (+150)    |            17708             |
| [Kitsu](https://kitsu.io)                   |   19052 (+158)    |            18894             |
| [LiveChart.me](https://livechart.me)        |   10711 (+126)    |            10585             |
| [Anime Notifier](https://notify.moe)        |   15874 (+153)    |            15721             |
