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

Currently, arm-supplementary has 37500 entries (+7298).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11539 (+348)    |            11191             |
| [AniList](https://anilist.co)               |   21765 (+2352)   |            19413             |
| [MyAnimeList](https://myanimelist.net)      |   26463 (+663)    |            25800             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5774 (+51)     |             5723             |
| [AniDB](https://anidb.net)                  |   13296 (+288)    |            13008             |
| [Anime-Planet](https://anime-planet.com)    |   23623 (+293)    |            23330             |
| [aniSearch](https://anisearch.com)          |   18548 (+302)    |            18246             |
| [Kitsu](https://kitsu.io)                   |   20076 (+309)    |            19767             |
| [LiveChart.me](https://livechart.me)        |   11221 (+207)    |            11014             |
| [Anime Notifier](https://notify.moe)        |   16340 (+304)    |            16036             |
