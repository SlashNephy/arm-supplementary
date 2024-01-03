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

Currently, arm-supplementary has 37558 entries (+7150).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11850 (+167)    |            11683             |
| [AniList](https://anilist.co)               |   21691 (+2208)   |            19483             |
| [MyAnimeList](https://myanimelist.net)      |   26477 (+529)    |            25948             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5810 (+30)     |             5780             |
| [AniDB](https://anidb.net)                  |   13189 (+136)    |            13053             |
| [Anime-Planet](https://anime-planet.com)    |   23547 (+138)    |            23409             |
| [aniSearch](https://anisearch.com)          |   18468 (+145)    |            18323             |
| [Kitsu](https://kitsu.io)                   |   19969 (+151)    |            19818             |
| [LiveChart.me](https://livechart.me)        |   11186 (+132)    |            11054             |
| [Anime Notifier](https://notify.moe)        |   16222 (+147)    |            16075             |
