# arm-supplementary

[![Check](https://github.com/SlashNephy/arm-supplementary/actions/workflows/check-node.yml/badge.svg)](https://github.com/SlashNephy/arm-supplementary/actions/workflows/check-node.yml)

💊 Supplemental database for [kawaiioverflow/arm](https://github.com/kawaiioverflow/arm)

The database is updated once an hour by GitHub Actions.

## Usage

Fetch arm.json from the following URL.

- https\://raw\.githubusercontent.com/SlashNephy/arm-supplementary/master/dist/arm.json

In TypeScript, you can use arm-supplementary from the following code.

```typescript
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

Currently, arm-supplementary has 47109 entries (+11201).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    16791 (+282)   |             16509            |
| [AniList](https://anilist.co)            |   24328 (+2205)   |             22123            |
| [MyAnimeList](https://myanimelist.net)   |    30429 (+621)   |             29808            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |     6716 (+74)    |             6642             |
| [AniDB](https://anidb.net)               |    14524 (+187)   |             14337            |
| [Anime-Planet](https://anime-planet.com) |    26824 (+209)   |             26615            |
| [aniSearch](https://anisearch.com)       |    20846 (+200)   |             20646            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12305 (+187)   |             12118            |
| [Anime Notifier](https://notify.moe)     |       0 (±0)      |               0              |
