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

Currently, arm-supplementary has 34635 entries (+7251).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9736 (+148)    |             9588             |
| [AniList](https://anilist.co)               |   20447 (+2116)   |            18331             |
| [MyAnimeList](https://myanimelist.net)      |   24020 (+525)    |            23495             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5438 (+29)     |             5409             |
| [AniDB](https://anidb.net)                  |   12741 (+122)    |            12619             |
| [Anime-Planet](https://anime-planet.com)    |   21876 (+123)    |            21753             |
| [aniSearch](https://anisearch.com)          |   17405 (+129)    |            17276             |
| [Kitsu](https://kitsu.io)                   |   18534 (+134)    |            18400             |
| [LiveChart.me](https://livechart.me)        |   10439 (+116)    |            10323             |
| [Anime Notifier](https://notify.moe)        |   15637 (+130)    |            15507             |
