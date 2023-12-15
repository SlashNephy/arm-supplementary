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

Currently, arm-supplementary has 37615 entries (+7413).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11570 (+379)    |            11191             |
| [AniList](https://anilist.co)               |   21805 (+2392)   |            19413             |
| [MyAnimeList](https://myanimelist.net)      |   26546 (+746)    |            25800             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5779 (+56)     |             5723             |
| [AniDB](https://anidb.net)                  |   13337 (+312)    |            13025             |
| [Anime-Planet](https://anime-planet.com)    |   23667 (+320)    |            23347             |
| [aniSearch](https://anisearch.com)          |   18596 (+328)    |            18268             |
| [Kitsu](https://kitsu.io)                   |   20119 (+336)    |            19783             |
| [LiveChart.me](https://livechart.me)        |   11248 (+217)    |            11031             |
| [Anime Notifier](https://notify.moe)        |   16389 (+330)    |            16059             |
