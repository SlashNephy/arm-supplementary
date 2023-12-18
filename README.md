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

Currently, arm-supplementary has 37458 entries (+7179).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11618 (+196)    |            11422             |
| [AniList](https://anilist.co)               |   21655 (+2222)   |            19433             |
| [MyAnimeList](https://myanimelist.net)      |   26377 (+531)    |            25846             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5792 (+32)     |             5760             |
| [AniDB](https://anidb.net)                  |   13176 (+151)    |            13025             |
| [Anime-Planet](https://anime-planet.com)    |   23502 (+154)    |            23348             |
| [aniSearch](https://anisearch.com)          |   18428 (+160)    |            18268             |
| [Kitsu](https://kitsu.io)                   |   19950 (+167)    |            19783             |
| [LiveChart.me](https://livechart.me)        |   11168 (+135)    |            11033             |
| [Anime Notifier](https://notify.moe)        |   16223 (+163)    |            16060             |
