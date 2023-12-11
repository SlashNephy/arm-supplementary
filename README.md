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

Currently, arm-supplementary has 37470 entries (+7268).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11509 (+318)    |            11191             |
| [AniList](https://anilist.co)               |   21735 (+2322)   |            19413             |
| [MyAnimeList](https://myanimelist.net)      |   26433 (+633)    |            25800             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5774 (+51)     |             5723             |
| [AniDB](https://anidb.net)                  |   13266 (+258)    |            13008             |
| [Anime-Planet](https://anime-planet.com)    |   23593 (+263)    |            23330             |
| [aniSearch](https://anisearch.com)          |   18518 (+272)    |            18246             |
| [Kitsu](https://kitsu.io)                   |   20046 (+279)    |            19767             |
| [LiveChart.me](https://livechart.me)        |   11200 (+186)    |            11014             |
| [Anime Notifier](https://notify.moe)        |   16310 (+274)    |            16036             |
