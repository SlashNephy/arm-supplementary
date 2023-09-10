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

Currently, arm-supplementary has 36288 entries (+7120).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10614 (+180)    |            10434             |
| [AniList](https://anilist.co)               |   21075 (+2137)   |            18938             |
| [MyAnimeList](https://myanimelist.net)      |   25665 (+548)    |            25117             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5669 (+49)     |             5620             |
| [AniDB](https://anidb.net)                  |   13062 (+135)    |            12927             |
| [Anime-Planet](https://anime-planet.com)    |   23219 (+137)    |            23082             |
| [aniSearch](https://anisearch.com)          |   18167 (+145)    |            18022             |
| [Kitsu](https://kitsu.io)                   |   19555 (+149)    |            19406             |
| [LiveChart.me](https://livechart.me)        |   11029 (+130)    |            10899             |
| [Anime Notifier](https://notify.moe)        |   16057 (+146)    |            15911             |
