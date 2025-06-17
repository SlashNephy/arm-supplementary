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

Currently, arm-supplementary has 41545 entries (+7501).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   15671 (+544)    |            15127             |
| [AniList](https://anilist.co)               |   23049 (+1848)   |            21201             |
| [MyAnimeList](https://myanimelist.net)      |   28961 (+700)    |            28261             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6313 (+98)     |             6215             |
| [AniDB](https://anidb.net)                  |   13402 (+211)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23780 (+264)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18636 (+240)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20260 (+266)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11307 (+205)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16372 (+245)    |            16127             |
