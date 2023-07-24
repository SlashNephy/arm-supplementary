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

Currently, arm-supplementary has 35869 entries (+7043).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10540 (+205)    |            10335             |
| [AniList](https://anilist.co)               |   20959 (+2121)   |            18838             |
| [MyAnimeList](https://myanimelist.net)      |   25312 (+525)    |            24787             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5642 (+32)     |             5610             |
| [AniDB](https://anidb.net)                  |   13041 (+149)    |            12892             |
| [Anime-Planet](https://anime-planet.com)    |   23113 (+152)    |            22961             |
| [aniSearch](https://anisearch.com)          |   18064 (+158)    |            17906             |
| [Kitsu](https://kitsu.io)                   |   19453 (+164)    |            19289             |
| [LiveChart.me](https://livechart.me)        |   10994 (+144)    |            10850             |
| [Anime Notifier](https://notify.moe)        |   15995 (+161)    |            15834             |
