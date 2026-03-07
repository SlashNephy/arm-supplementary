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

Currently, arm-supplementary has 46834 entries (+11167).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    16662 (+317)   |             16345            |
| [AniList](https://anilist.co)            |   24263 (+2194)   |             22069            |
| [MyAnimeList](https://myanimelist.net)   |    30316 (+626)   |             29690            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |    6678 (+105)    |             6573             |
| [AniDB](https://anidb.net)               |    14466 (+192)   |             14274            |
| [Anime-Planet](https://anime-planet.com) |    26788 (+221)   |             26567            |
| [aniSearch](https://anisearch.com)       |    20755 (+208)   |             20547            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12262 (+192)   |             12070            |
| [Anime Notifier](https://notify.moe)     |       0 (±0)      |               0              |
