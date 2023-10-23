# arm-supplementary

[![Check](https://github.com/SlashNephy/arm-supplementary/actions/workflows/check-node.yml/badge.svg)](https://github.com/SlashNephy/arm-supplementary/actions/workflows/check-node.yml)

💊 Supplemental database for [kawaiioverflow/arm](https://github.com/kawaiioverflow/arm)

The database is updated once an hour by GitHub Actions.

## Usage

Fetch arm.json from the following URL.

- https://raw.githubusercontent.com/SlashNephy/arm-supplementary/master/dist/arm.json

In TypeScript, you can use arm-supplementary from the following code.

```TypeScript
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

Currently, arm-supplementary has 36913 entries (+7326).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10858 (+322)    |            10536             |
| [AniList](https://anilist.co)               |   21534 (+2365)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26018 (+669)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5775 (+77)     |             5698             |
| [AniDB](https://anidb.net)                  |   13152 (+175)    |            12977             |
| [Anime-Planet](https://anime-planet.com)    |   23394 (+197)    |            23197             |
| [aniSearch](https://anisearch.com)          |   18300 (+191)    |            18109             |
| [Kitsu](https://kitsu.io)                   |   19859 (+203)    |            19656             |
| [LiveChart.me](https://livechart.me)        |   11123 (+169)    |            10954             |
| [Anime Notifier](https://notify.moe)        |   16216 (+202)    |            16014             |
