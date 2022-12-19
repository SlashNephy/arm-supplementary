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

Currently, arm-supplementary has 34612 entries (+7157).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9751 (+155)    |             9596             |
| [AniList](https://anilist.co)               |   20462 (+2087)   |            18375             |
| [MyAnimeList](https://myanimelist.net)      |   24019 (+479)    |            23540             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5461 (+30)     |             5431             |
| [AniDB](https://anidb.net)                  |   12742 (+123)    |            12619             |
| [Anime-Planet](https://anime-planet.com)    |   21877 (+124)    |            21753             |
| [aniSearch](https://anisearch.com)          |   17406 (+130)    |            17276             |
| [Kitsu](https://kitsu.io)                   |   18535 (+135)    |            18400             |
| [LiveChart.me](https://livechart.me)        |   10440 (+117)    |            10323             |
| [Anime Notifier](https://notify.moe)        |   15638 (+131)    |            15507             |
