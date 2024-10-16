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

Currently, arm-supplementary has 39707 entries (+7139).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   13721 (+186)    |            13535             |
| [AniList](https://anilist.co)               |   22332 (+1762)   |            20570             |
| [MyAnimeList](https://myanimelist.net)      |   27895 (+478)    |            27417             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6082 (+36)     |             6046             |
| [AniDB](https://anidb.net)                  |   13339 (+148)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23676 (+160)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18555 (+159)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20166 (+172)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11251 (+149)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16288 (+161)    |            16127             |
