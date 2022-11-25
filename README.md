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

Currently, arm-supplementary has 34624 entries (+7418).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9702 (+146)    |             9556             |
| [AniList](https://anilist.co)               |   20404 (+2099)   |            18305             |
| [MyAnimeList](https://myanimelist.net)      |   24179 (+818)    |            23361             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5414 (+31)     |             5383             |
| [AniDB](https://anidb.net)                  |   12698 (+114)    |            12584             |
| [Anime-Planet](https://anime-planet.com)    |   21482 (+116)    |            21366             |
| [aniSearch](https://anisearch.com)          |   17346 (+122)    |            17224             |
| [Kitsu](https://kitsu.io)                   |   18452 (+127)    |            18325             |
| [LiveChart.me](https://livechart.me)        |   10363 (+110)    |            10253             |
| [Anime Notifier](https://notify.moe)        |   15589 (+121)    |            15468             |
