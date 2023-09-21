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

Currently, arm-supplementary has 36598 entries (+7083).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10677 (+165)    |            10512             |
| [AniList](https://anilist.co)               |   21293 (+2186)   |            19107             |
| [MyAnimeList](https://myanimelist.net)      |   25756 (+457)    |            25299             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5724 (+31)     |             5693             |
| [AniDB](https://anidb.net)                  |   13071 (+129)    |            12942             |
| [Anime-Planet](https://anime-planet.com)    |   23246 (+131)    |            23115             |
| [aniSearch](https://anisearch.com)          |   18179 (+138)    |            18041             |
| [Kitsu](https://kitsu.io)                   |   19606 (+144)    |            19462             |
| [LiveChart.me](https://livechart.me)        |   11040 (+123)    |            10917             |
| [Anime Notifier](https://notify.moe)        |   16079 (+140)    |            15939             |
