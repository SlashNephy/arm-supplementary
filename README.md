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

Currently, arm-supplementary has 37659 entries (+8072).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11334 (+798)    |            10536             |
| [AniList](https://anilist.co)               |   21877 (+2708)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26615 (+1266)   |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5798 (+100)    |             5698             |
| [AniDB](https://anidb.net)                  |   13434 (+433)    |            13001             |
| [Anime-Planet](https://anime-planet.com)    |   23805 (+489)    |            23316             |
| [aniSearch](https://anisearch.com)          |   18683 (+468)    |            18215             |
| [Kitsu](https://kitsu.io)                   |   20246 (+495)    |            19751             |
| [LiveChart.me](https://livechart.me)        |   11320 (+316)    |            11004             |
| [Anime Notifier](https://notify.moe)        |   16526 (+490)    |            16036             |
