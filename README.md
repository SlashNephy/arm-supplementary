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

Currently, arm-supplementary has 48305 entries (+11566).

| Service                                  | arm-supplementary | arm / anime-offline-database |
| :--------------------------------------- | :---------------: | :--------------------------: |
| [Annict](https://annict.com)             |    17581 (+250)   |             17331            |
| [AniList](https://anilist.co)            |   24757 (+2255)   |             22502            |
| [MyAnimeList](https://myanimelist.net)   |    31018 (+624)   |             30394            |
| [しょぼいカレンダー](https://cal.syoboi.jp)       |     6890 (+76)    |             6814             |
| [AniDB](https://anidb.net)               |    14696 (+181)   |             14515            |
| [Anime-Planet](https://anime-planet.com) |    26850 (+204)   |             26646            |
| [aniSearch](https://anisearch.com)       |    21291 (+194)   |             21097            |
| [Kitsu](https://kitsu.io)                |       0 (±0)      |               0              |
| [LiveChart.me](https://livechart.me)     |    12448 (+184)   |             12264            |
| [Anime Notifier](https://notify.moe)     |       0 (±0)      |               0              |
