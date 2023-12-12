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

Currently, arm-supplementary has 37506 entries (+7304).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11545 (+354)    |            11191             |
| [AniList](https://anilist.co)               |   21771 (+2358)   |            19413             |
| [MyAnimeList](https://myanimelist.net)      |   26470 (+670)    |            25800             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5774 (+51)     |             5723             |
| [AniDB](https://anidb.net)                  |   13301 (+293)    |            13008             |
| [Anime-Planet](https://anime-planet.com)    |   23629 (+299)    |            23330             |
| [aniSearch](https://anisearch.com)          |   18554 (+308)    |            18246             |
| [Kitsu](https://kitsu.io)                   |   20082 (+315)    |            19767             |
| [LiveChart.me](https://livechart.me)        |   11224 (+210)    |            11014             |
| [Anime Notifier](https://notify.moe)        |   16346 (+310)    |            16036             |
