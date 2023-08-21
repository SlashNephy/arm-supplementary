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

Currently, arm-supplementary has 36052 entries (+6955).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10592 (+170)    |            10422             |
| [AniList](https://anilist.co)               |   21019 (+2087)   |            18932             |
| [MyAnimeList](https://myanimelist.net)      |   25461 (+415)    |            25046             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5644 (+29)     |             5615             |
| [AniDB](https://anidb.net)                  |   13045 (+132)    |            12913             |
| [Anime-Planet](https://anime-planet.com)    |   23172 (+134)    |            23038             |
| [aniSearch](https://anisearch.com)          |   18105 (+144)    |            17961             |
| [Kitsu](https://kitsu.io)                   |   19514 (+145)    |            19369             |
| [LiveChart.me](https://livechart.me)        |   11000 (+125)    |            10875             |
| [Anime Notifier](https://notify.moe)        |   15998 (+141)    |            15857             |
