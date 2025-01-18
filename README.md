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

Currently, arm-supplementary has 40358 entries (+7182).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   14608 (+239)    |            14369             |
| [AniList](https://anilist.co)               |   22673 (+1773)   |            20900             |
| [MyAnimeList](https://myanimelist.net)      |   28327 (+493)    |            27834             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6160 (+36)     |             6124             |
| [AniDB](https://anidb.net)                  |   13352 (+161)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23697 (+181)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18569 (+173)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20183 (+189)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11265 (+163)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16305 (+178)    |            16127             |
