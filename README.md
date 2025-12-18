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

Currently, arm-supplementary has 46248 entries (+11078).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    16348 (+303)   |             16045            |
| [AniList](https://anilist.co)            |   23838 (+2099)   |             21739            |
| [MyAnimeList](https://myanimelist.net)   |    30015 (+615)   |             29400            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |    6619 (+116)    |             6503             |
| [AniDB](https://anidb.net)               |    14362 (+176)   |             14186            |
| [Anime-Planet](https://anime-planet.com) |    26631 (+199)   |             26432            |
| [aniSearch](https://anisearch.com)       |    20607 (+191)   |             20416            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12173 (+178)   |             11995            |
| [Anime Notifier](https://notify.moe)     |    17036 (+199)   |             16837            |
