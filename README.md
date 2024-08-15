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

Currently, arm-supplementary has 39573 entries (+7152).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   13266 (+183)    |            13083             |
| [AniList](https://anilist.co)               |   22519 (+2147)   |            20372             |
| [MyAnimeList](https://myanimelist.net)      |   27510 (+483)    |            27027             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5991 (+37)     |             5954             |
| [AniDB](https://anidb.net)                  |   13332 (+141)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23667 (+151)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18548 (+152)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20156 (+162)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11245 (+143)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16282 (+155)    |            16127             |
