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

Currently, arm-supplementary has 39726 entries (+7158).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   13740 (+205)    |            13535             |
| [AniList](https://anilist.co)               |   22343 (+1773)   |            20570             |
| [MyAnimeList](https://myanimelist.net)      |   27906 (+489)    |            27417             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6082 (+36)     |             6046             |
| [AniDB](https://anidb.net)                  |   13348 (+157)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23687 (+171)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18566 (+170)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20176 (+182)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11257 (+155)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16298 (+171)    |            16127             |
