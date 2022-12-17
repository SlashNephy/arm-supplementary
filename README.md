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

Currently, arm-supplementary has 34608 entries (+7153).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9747 (+151)    |             9596             |
| [AniList](https://anilist.co)               |   20458 (+2083)   |            18375             |
| [MyAnimeList](https://myanimelist.net)      |   24014 (+474)    |            23540             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5460 (+29)     |             5431             |
| [AniDB](https://anidb.net)                  |   12738 (+119)    |            12619             |
| [Anime-Planet](https://anime-planet.com)    |   21873 (+120)    |            21753             |
| [aniSearch](https://anisearch.com)          |   17402 (+126)    |            17276             |
| [Kitsu](https://kitsu.io)                   |   18531 (+131)    |            18400             |
| [LiveChart.me](https://livechart.me)        |   10436 (+113)    |            10323             |
| [Anime Notifier](https://notify.moe)        |   15634 (+127)    |            15507             |
