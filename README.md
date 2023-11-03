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

Currently, arm-supplementary has 37056 entries (+7469).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10973 (+437)    |            10536             |
| [AniList](https://anilist.co)               |   21606 (+2437)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26138 (+789)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5781 (+83)     |             5698             |
| [AniDB](https://anidb.net)                  |   13185 (+202)    |            12983             |
| [Anime-Planet](https://anime-planet.com)    |   23498 (+246)    |            23252             |
| [aniSearch](https://anisearch.com)          |   18378 (+230)    |            18148             |
| [Kitsu](https://kitsu.io)                   |   19926 (+244)    |            19682             |
| [LiveChart.me](https://livechart.me)        |   11159 (+190)    |            10969             |
| [Anime Notifier](https://notify.moe)        |   16262 (+241)    |            16021             |
