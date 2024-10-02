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

Currently, arm-supplementary has 39615 entries (+7192).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   13579 (+234)    |            13345             |
| [AniList](https://anilist.co)               |   22286 (+1786)   |            20500             |
| [MyAnimeList](https://myanimelist.net)      |   27816 (+523)    |            27293             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6071 (+51)     |             6020             |
| [AniDB](https://anidb.net)                  |   13356 (+165)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23704 (+188)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18574 (+178)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20186 (+192)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11257 (+155)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16308 (+181)    |            16127             |
