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

Currently, arm-supplementary has 37585 entries (+7241).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11834 (+252)    |            11582             |
| [AniList](https://anilist.co)               |   21733 (+2259)   |            19474             |
| [MyAnimeList](https://myanimelist.net)      |   26504 (+602)    |            25902             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5805 (+31)     |             5774             |
| [AniDB](https://anidb.net)                  |   13232 (+179)    |            13053             |
| [Anime-Planet](https://anime-planet.com)    |   23599 (+190)    |            23409             |
| [aniSearch](https://anisearch.com)          |   18514 (+191)    |            18323             |
| [Kitsu](https://kitsu.io)                   |   20029 (+211)    |            19818             |
| [LiveChart.me](https://livechart.me)        |   11218 (+164)    |            11054             |
| [Anime Notifier](https://notify.moe)        |   16276 (+201)    |            16075             |
