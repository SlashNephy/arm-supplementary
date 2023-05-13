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

Currently, arm-supplementary has 35280 entries (+6840).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10298 (+152)    |            10146             |
| [AniList](https://anilist.co)               |   20743 (+2064)   |            18679             |
| [MyAnimeList](https://myanimelist.net)      |   24702 (+265)    |            24437             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5575 (+27)     |             5548             |
| [AniDB](https://anidb.net)                  |   12938 (+120)    |            12818             |
| [Anime-Planet](https://anime-planet.com)    |   22837 (+118)    |            22719             |
| [aniSearch](https://anisearch.com)          |   17859 (+127)    |            17732             |
| [Kitsu](https://kitsu.io)                   |   19092 (+129)    |            18963             |
| [LiveChart.me](https://livechart.me)        |   10726 (+110)    |            10616             |
| [Anime Notifier](https://notify.moe)        |   15849 (+126)    |            15723             |
