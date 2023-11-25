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

Currently, arm-supplementary has 37399 entries (+7812).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11209 (+673)    |            10536             |
| [AniList](https://anilist.co)               |   21772 (+2603)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26398 (+1049)   |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5795 (+97)     |             5698             |
| [AniDB](https://anidb.net)                  |   13344 (+352)    |            12992             |
| [Anime-Planet](https://anime-planet.com)    |   23680 (+400)    |            23280             |
| [aniSearch](https://anisearch.com)          |   18578 (+384)    |            18194             |
| [Kitsu](https://kitsu.io)                   |   20106 (+400)    |            19706             |
| [LiveChart.me](https://livechart.me)        |   11260 (+274)    |            10986             |
| [Anime Notifier](https://notify.moe)        |   16424 (+397)    |            16027             |
