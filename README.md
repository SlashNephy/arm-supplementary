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

Currently, arm-supplementary has 37440 entries (+7238).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11479 (+288)    |            11191             |
| [AniList](https://anilist.co)               |   21714 (+2301)   |            19413             |
| [MyAnimeList](https://myanimelist.net)      |   26411 (+611)    |            25800             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5773 (+50)     |             5723             |
| [AniDB](https://anidb.net)                  |   13246 (+238)    |            13008             |
| [Anime-Planet](https://anime-planet.com)    |   23573 (+243)    |            23330             |
| [aniSearch](https://anisearch.com)          |   18498 (+252)    |            18246             |
| [Kitsu](https://kitsu.io)                   |   20025 (+258)    |            19767             |
| [LiveChart.me](https://livechart.me)        |   11189 (+175)    |            11014             |
| [Anime Notifier](https://notify.moe)        |   16290 (+254)    |            16036             |
