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

Currently, arm-supplementary has 36591 entries (+7076).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10683 (+171)    |            10512             |
| [AniList](https://anilist.co)               |   21295 (+2188)   |            19107             |
| [MyAnimeList](https://myanimelist.net)      |   25759 (+460)    |            25299             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5725 (+32)     |             5693             |
| [AniDB](https://anidb.net)                  |   13073 (+131)    |            12942             |
| [Anime-Planet](https://anime-planet.com)    |   23251 (+133)    |            23118             |
| [aniSearch](https://anisearch.com)          |   18185 (+140)    |            18045             |
| [Kitsu](https://kitsu.io)                   |   19608 (+146)    |            19462             |
| [LiveChart.me](https://livechart.me)        |   11044 (+126)    |            10918             |
| [Anime Notifier](https://notify.moe)        |   16083 (+142)    |            15941             |
