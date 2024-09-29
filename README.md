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

Currently, arm-supplementary has 39590 entries (+7167).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   13554 (+209)    |            13345             |
| [AniList](https://anilist.co)               |   22276 (+1776)   |            20500             |
| [MyAnimeList](https://myanimelist.net)      |   27799 (+506)    |            27293             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6064 (+44)     |             6020             |
| [AniDB](https://anidb.net)                  |   13347 (+156)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23693 (+177)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18562 (+166)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20174 (+180)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11253 (+151)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16298 (+171)    |            16127             |
