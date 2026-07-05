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

Currently, arm-supplementary has 48242 entries (+12173).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    17359 (+661)   |             16698            |
| [AniList](https://anilist.co)            |   24674 (+2487)   |             22187            |
| [MyAnimeList](https://myanimelist.net)   |   30950 (+1020)   |             29930            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |    6814 (+140)    |             6674             |
| [AniDB](https://anidb.net)               |    14741 (+226)   |             14515            |
| [Anime-Planet](https://anime-planet.com) |    26935 (+289)   |             26646            |
| [aniSearch](https://anisearch.com)       |    21362 (+265)   |             21097            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12500 (+236)   |             12264            |
| [Anime Notifier](https://notify.moe)     |       0 (±0)      |               0              |
