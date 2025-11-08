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

Currently, arm-supplementary has 42570 entries (+7195).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   16170 (+243)    |            15927             |
| [AniList](https://anilist.co)               |   23469 (+1800)   |            21669             |
| [MyAnimeList](https://myanimelist.net)      |   29817 (+543)    |            29274             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6445 (+39)     |             6406             |
| [AniDB](https://anidb.net)                  |   13356 (+165)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23705 (+189)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18576 (+180)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20192 (+198)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11275 (+173)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16315 (+188)    |            16127             |
