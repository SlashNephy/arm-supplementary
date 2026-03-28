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

Currently, arm-supplementary has 47196 entries (+11225).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    16819 (+273)   |             16546            |
| [AniList](https://anilist.co)            |   24359 (+2221)   |             22138            |
| [MyAnimeList](https://myanimelist.net)   |    30469 (+636)   |             29833            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |     6727 (+76)    |             6651             |
| [AniDB](https://anidb.net)               |    14536 (+190)   |             14346            |
| [Anime-Planet](https://anime-planet.com) |    26845 (+215)   |             26630            |
| [aniSearch](https://anisearch.com)       |    20863 (+208)   |             20655            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12322 (+193)   |             12129            |
| [Anime Notifier](https://notify.moe)     |       0 (±0)      |               0              |
