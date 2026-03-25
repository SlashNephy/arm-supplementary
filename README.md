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

Currently, arm-supplementary has 47172 entries (+11201).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    16795 (+249)   |             16546            |
| [AniList](https://anilist.co)            |   24354 (+2216)   |             22138            |
| [MyAnimeList](https://myanimelist.net)   |    30452 (+619)   |             29833            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |     6721 (+70)    |             6651             |
| [AniDB](https://anidb.net)               |    14535 (+189)   |             14346            |
| [Anime-Planet](https://anime-planet.com) |    26842 (+212)   |             26630            |
| [aniSearch](https://anisearch.com)       |    20858 (+203)   |             20655            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12320 (+191)   |             12129            |
| [Anime Notifier](https://notify.moe)     |       0 (±0)      |               0              |
