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

Currently, arm-supplementary has 35315 entries (+7014).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10287 (+212)    |            10075             |
| [AniList](https://anilist.co)               |   20780 (+2114)   |            18666             |
| [MyAnimeList](https://myanimelist.net)      |   24736 (+441)    |            24295             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5571 (+27)     |             5544             |
| [AniDB](https://anidb.net)                  |   12967 (+153)    |            12814             |
| [Anime-Planet](https://anime-planet.com)    |   22820 (+152)    |            22668             |
| [aniSearch](https://anisearch.com)          |   17884 (+160)    |            17724             |
| [Kitsu](https://kitsu.io)                   |   19108 (+171)    |            18937             |
| [LiveChart.me](https://livechart.me)        |   10729 (+136)    |            10593             |
| [Anime Notifier](https://notify.moe)        |   15890 (+167)    |            15723             |
