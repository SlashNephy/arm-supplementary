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

Currently, arm-supplementary has 34803 entries (+6837).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10039 (+165)    |             9874             |
| [AniList](https://anilist.co)               |   20556 (+2055)   |            18501             |
| [MyAnimeList](https://myanimelist.net)      |   24364 (+345)    |            24019             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5497 (+30)     |             5467             |
| [AniDB](https://anidb.net)                  |   12820 (+122)    |            12698             |
| [Anime-Planet](https://anime-planet.com)    |   22428 (+120)    |            22308             |
| [aniSearch](https://anisearch.com)          |   17707 (+130)    |            17577             |
| [Kitsu](https://kitsu.io)                   |   18762 (+132)    |            18630             |
| [LiveChart.me](https://livechart.me)        |   10534 (+112)    |            10422             |
| [Anime Notifier](https://notify.moe)        |   15731 (+127)    |            15604             |
