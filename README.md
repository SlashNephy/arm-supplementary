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

Currently, arm-supplementary has 37000 entries (+7413).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10894 (+358)    |            10536             |
| [AniList](https://anilist.co)               |   21547 (+2378)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26051 (+702)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5779 (+81)     |             5698             |
| [AniDB](https://anidb.net)                  |   13163 (+185)    |            12978             |
| [Anime-Planet](https://anime-planet.com)    |   23453 (+213)    |            23240             |
| [aniSearch](https://anisearch.com)          |   18333 (+203)    |            18130             |
| [Kitsu](https://kitsu.io)                   |   19875 (+214)    |            19661             |
| [LiveChart.me](https://livechart.me)        |   11133 (+173)    |            10960             |
| [Anime Notifier](https://notify.moe)        |   16229 (+213)    |            16016             |
