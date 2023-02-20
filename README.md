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

Currently, arm-supplementary has 34789 entries (+6823).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10039 (+165)    |             9874             |
| [AniList](https://anilist.co)               |   20553 (+2052)   |            18501             |
| [MyAnimeList](https://myanimelist.net)      |   24308 (+289)    |            24019             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5497 (+30)     |             5467             |
| [AniDB](https://anidb.net)                  |   12813 (+120)    |            12693             |
| [Anime-Planet](https://anime-planet.com)    |   22394 (+118)    |            22276             |
| [aniSearch](https://anisearch.com)          |   17687 (+128)    |            17559             |
| [Kitsu](https://kitsu.io)                   |   18753 (+130)    |            18623             |
| [LiveChart.me](https://livechart.me)        |   10527 (+110)    |            10417             |
| [Anime Notifier](https://notify.moe)        |   15729 (+125)    |            15604             |
