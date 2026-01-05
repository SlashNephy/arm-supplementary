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

Currently, arm-supplementary has 46442 entries (+11074).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    16459 (+256)   |             16203            |
| [AniList](https://anilist.co)            |   23987 (+2145)   |             21842            |
| [MyAnimeList](https://myanimelist.net)   |    30127 (+642)   |             29485            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |     6629 (+71)    |             6558             |
| [AniDB](https://anidb.net)               |    14398 (+176)   |             14222            |
| [Anime-Planet](https://anime-planet.com) |    26718 (+201)   |             26517            |
| [aniSearch](https://anisearch.com)       |    20684 (+193)   |             20491            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12218 (+177)   |             12041            |
| [Anime Notifier](https://notify.moe)     |       0 (±0)      |               0              |
