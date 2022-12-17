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

Currently, arm-supplementary has 34609 entries (+7154).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9748 (+152)    |             9596             |
| [AniList](https://anilist.co)               |   20460 (+2085)   |            18375             |
| [MyAnimeList](https://myanimelist.net)      |   24017 (+477)    |            23540             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5460 (+29)     |             5431             |
| [AniDB](https://anidb.net)                  |   12740 (+121)    |            12619             |
| [Anime-Planet](https://anime-planet.com)    |   21875 (+122)    |            21753             |
| [aniSearch](https://anisearch.com)          |   17404 (+128)    |            17276             |
| [Kitsu](https://kitsu.io)                   |   18533 (+133)    |            18400             |
| [LiveChart.me](https://livechart.me)        |   10438 (+115)    |            10323             |
| [Anime Notifier](https://notify.moe)        |   15636 (+129)    |            15507             |
