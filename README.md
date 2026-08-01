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

Currently, arm-supplementary has 48329 entries (+11590).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    17450 (+254)   |             17196            |
| [AniList](https://anilist.co)            |   24706 (+2266)   |             22440            |
| [MyAnimeList](https://myanimelist.net)   |    30928 (+650)   |             30278            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |     6860 (+69)    |             6791             |
| [AniDB](https://anidb.net)               |    14701 (+186)   |             14515            |
| [Anime-Planet](https://anime-planet.com) |    26854 (+208)   |             26646            |
| [aniSearch](https://anisearch.com)       |    21296 (+199)   |             21097            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12452 (+188)   |             12264            |
| [Anime Notifier](https://notify.moe)     |       0 (±0)      |               0              |
