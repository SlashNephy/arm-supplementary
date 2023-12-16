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

Currently, arm-supplementary has 37625 entries (+7423).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11580 (+389)    |            11191             |
| [AniList](https://anilist.co)               |   21811 (+2398)   |            19413             |
| [MyAnimeList](https://myanimelist.net)      |   26554 (+754)    |            25800             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5779 (+56)     |             5723             |
| [AniDB](https://anidb.net)                  |   13343 (+318)    |            13025             |
| [Anime-Planet](https://anime-planet.com)    |   23673 (+326)    |            23347             |
| [aniSearch](https://anisearch.com)          |   18603 (+335)    |            18268             |
| [Kitsu](https://kitsu.io)                   |   20126 (+343)    |            19783             |
| [LiveChart.me](https://livechart.me)        |   11250 (+219)    |            11031             |
| [Anime Notifier](https://notify.moe)        |   16396 (+337)    |            16059             |
