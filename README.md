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

Currently, arm-supplementary has 34960 entries (+6867).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10120 (+188)    |             9932             |
| [AniList](https://anilist.co)               |   20644 (+2099)   |            18545             |
| [MyAnimeList](https://myanimelist.net)      |   24491 (+409)    |            24082             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5563 (+47)     |             5516             |
| [AniDB](https://anidb.net)                  |   12870 (+130)    |            12740             |
| [Anime-Planet](https://anime-planet.com)    |   22561 (+129)    |            22432             |
| [aniSearch](https://anisearch.com)          |   17765 (+137)    |            17628             |
| [Kitsu](https://kitsu.io)                   |   18881 (+139)    |            18742             |
| [LiveChart.me](https://livechart.me)        |   10602 (+119)    |            10483             |
| [Anime Notifier](https://notify.moe)        |   15795 (+137)    |            15658             |
