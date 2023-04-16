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

Currently, arm-supplementary has 35061 entries (+6878).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10199 (+155)    |            10044             |
| [AniList](https://anilist.co)               |   20693 (+2071)   |            18622             |
| [MyAnimeList](https://myanimelist.net)      |   24560 (+359)    |            24201             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5569 (+29)     |             5540             |
| [AniDB](https://anidb.net)                  |   12917 (+126)    |            12791             |
| [Anime-Planet](https://anime-planet.com)    |   22675 (+123)    |            22552             |
| [aniSearch](https://anisearch.com)          |   17815 (+130)    |            17685             |
| [Kitsu](https://kitsu.io)                   |   18960 (+134)    |            18826             |
| [LiveChart.me](https://livechart.me)        |   10672 (+117)    |            10555             |
| [Anime Notifier](https://notify.moe)        |   15839 (+134)    |            15705             |
