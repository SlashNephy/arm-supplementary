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

Currently, arm-supplementary has 34690 entries (+7055).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9871 (+165)    |             9706             |
| [AniList](https://anilist.co)               |   20488 (+2076)   |            18412             |
| [MyAnimeList](https://myanimelist.net)      |   24126 (+439)    |            23687             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5541 (+89)     |             5452             |
| [AniDB](https://anidb.net)                  |   12773 (+123)    |            12650             |
| [Anime-Planet](https://anime-planet.com)    |   22246 (+124)    |            22122             |
| [aniSearch](https://anisearch.com)          |   17498 (+130)    |            17368             |
| [Kitsu](https://kitsu.io)                   |   18617 (+137)    |            18480             |
| [LiveChart.me](https://livechart.me)        |   10482 (+117)    |            10365             |
| [Anime Notifier](https://notify.moe)        |   15667 (+133)    |            15534             |
