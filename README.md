# arm-supplementary

[![Check](https://github.com/SlashNephy/arm-supplementary/actions/workflows/check-node.yml/badge.svg)](https://github.com/SlashNephy/arm-supplementary/actions/workflows/check-node.yml)

π Supplemental database for [kawaiioverflow/arm](https://github.com/kawaiioverflow/arm)

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

Currently, arm-supplementary has 34665 entries (+6994).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9888 (+160)    |             9728             |
| [AniList](https://anilist.co)               |   20491 (+2059)   |            18432             |
| [MyAnimeList](https://myanimelist.net)      |   24142 (+383)    |            23759             |
| [γγγΌγγ«γ¬γ³γγΌ](https://cal.syoboi.jp) |    5490 (+32)     |             5458             |
| [AniDB](https://anidb.net)                  |   12770 (+120)    |            12650             |
| [Anime-Planet](https://anime-planet.com)    |   22239 (+117)    |            22122             |
| [aniSearch](https://anisearch.com)          |   17496 (+128)    |            17368             |
| [Kitsu](https://kitsu.io)                   |   18616 (+136)    |            18480             |
| [LiveChart.me](https://livechart.me)        |   10473 (+108)    |            10365             |
| [Anime Notifier](https://notify.moe)        |   15666 (+132)    |            15534             |
