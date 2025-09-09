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

Currently, arm-supplementary has 41876 entries (+7832).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   16002 (+875)    |            15127             |
| [AniList](https://anilist.co)               |   23110 (+1909)   |            21201             |
| [MyAnimeList](https://myanimelist.net)      |   29208 (+947)    |            28261             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6370 (+155)    |             6215             |
| [AniDB](https://anidb.net)                  |   13417 (+226)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23854 (+338)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18682 (+286)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20320 (+326)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11354 (+252)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16431 (+304)    |            16127             |
