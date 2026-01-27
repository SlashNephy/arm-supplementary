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

Currently, arm-supplementary has 46649 entries (+11158).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    16541 (+264)   |             16277            |
| [AniList](https://anilist.co)            |   24127 (+2162)   |             21965            |
| [MyAnimeList](https://myanimelist.net)   |    30196 (+636)   |             29560            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |     6637 (+68)    |             6569             |
| [AniDB](https://anidb.net)               |    14426 (+179)   |             14247            |
| [Anime-Planet](https://anime-planet.com) |    26736 (+207)   |             26529            |
| [aniSearch](https://anisearch.com)       |    20699 (+195)   |             20504            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12238 (+182)   |             12056            |
| [Anime Notifier](https://notify.moe)     |       0 (±0)      |               0              |
