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

Currently, arm-supplementary has 37497 entries (+7295).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11536 (+345)    |            11191             |
| [AniList](https://anilist.co)               |   21763 (+2350)   |            19413             |
| [MyAnimeList](https://myanimelist.net)      |   26461 (+661)    |            25800             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5774 (+51)     |             5723             |
| [AniDB](https://anidb.net)                  |   13294 (+286)    |            13008             |
| [Anime-Planet](https://anime-planet.com)    |   23621 (+291)    |            23330             |
| [aniSearch](https://anisearch.com)          |   18546 (+300)    |            18246             |
| [Kitsu](https://kitsu.io)                   |   20074 (+307)    |            19767             |
| [LiveChart.me](https://livechart.me)        |   11220 (+206)    |            11014             |
| [Anime Notifier](https://notify.moe)        |   16338 (+302)    |            16036             |
