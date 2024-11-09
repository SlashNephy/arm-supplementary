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

Currently, arm-supplementary has 39865 entries (+7209).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   14088 (+255)    |            13833             |
| [AniList](https://anilist.co)               |   22437 (+1800)   |            20637             |
| [MyAnimeList](https://myanimelist.net)      |   28009 (+537)    |            27472             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6090 (+38)     |             6052             |
| [AniDB](https://anidb.net)                  |   13381 (+190)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23721 (+205)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18601 (+205)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20215 (+221)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11272 (+170)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16334 (+207)    |            16127             |
