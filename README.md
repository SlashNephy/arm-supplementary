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

Currently, arm-supplementary has 34767 entries (+7132).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9855 (+149)    |             9706             |
| [AniList](https://anilist.co)               |   20485 (+2073)   |            18412             |
| [MyAnimeList](https://myanimelist.net)      |   24103 (+416)    |            23687             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5540 (+88)     |             5452             |
| [AniDB](https://anidb.net)                  |   12762 (+117)    |            12645             |
| [Anime-Planet](https://anime-planet.com)    |   22212 (+117)    |            22095             |
| [aniSearch](https://anisearch.com)          |   17452 (+124)    |            17328             |
| [Kitsu](https://kitsu.io)                   |   18582 (+130)    |            18452             |
| [LiveChart.me](https://livechart.me)        |   10472 (+111)    |            10361             |
| [Anime Notifier](https://notify.moe)        |   15655 (+126)    |            15529             |
