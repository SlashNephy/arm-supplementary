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

Currently, arm-supplementary has 37526 entries (+7324).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11565 (+374)    |            11191             |
| [AniList](https://anilist.co)               |   21788 (+2375)   |            19413             |
| [MyAnimeList](https://myanimelist.net)      |   26489 (+689)    |            25800             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5774 (+51)     |             5723             |
| [AniDB](https://anidb.net)                  |   13318 (+310)    |            13008             |
| [Anime-Planet](https://anime-planet.com)    |   23648 (+318)    |            23330             |
| [aniSearch](https://anisearch.com)          |   18572 (+326)    |            18246             |
| [Kitsu](https://kitsu.io)                   |   20101 (+334)    |            19767             |
| [LiveChart.me](https://livechart.me)        |   11229 (+215)    |            11014             |
| [Anime Notifier](https://notify.moe)        |   16364 (+328)    |            16036             |
