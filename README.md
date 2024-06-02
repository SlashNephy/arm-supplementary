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

Currently, arm-supplementary has 38656 entries (+7172).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   12598 (+208)    |            12390             |
| [AniList](https://anilist.co)               |   22081 (+2161)   |            19920             |
| [MyAnimeList](https://myanimelist.net)      |   27125 (+480)    |            26645             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5927 (+40)     |             5887             |
| [AniDB](https://anidb.net)                  |   13332 (+141)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23666 (+150)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18546 (+150)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20155 (+161)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11242 (+140)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16281 (+154)    |            16127             |
