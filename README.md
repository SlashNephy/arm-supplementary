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

Currently, arm-supplementary has 48461 entries (+11482).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    17672 (+262)   |             17410            |
| [AniList](https://anilist.co)            |   24796 (+2261)   |             22535            |
| [MyAnimeList](https://myanimelist.net)   |    31107 (+540)   |             30567            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |     6943 (+84)    |             6859             |
| [AniDB](https://anidb.net)               |    14697 (+182)   |             14515            |
| [Anime-Planet](https://anime-planet.com) |    26851 (+205)   |             26646            |
| [aniSearch](https://anisearch.com)       |    21292 (+195)   |             21097            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12449 (+185)   |             12264            |
| [Anime Notifier](https://notify.moe)     |       0 (±0)      |               0              |
