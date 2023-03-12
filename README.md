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

Currently, arm-supplementary has 34826 entries (+6761).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10062 (+144)    |             9918             |
| [AniList](https://anilist.co)               |   20578 (+2052)   |            18526             |
| [MyAnimeList](https://myanimelist.net)      |   24397 (+322)    |            24075             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5529 (+30)     |             5499             |
| [AniDB](https://anidb.net)                  |   12834 (+119)    |            12715             |
| [Anime-Planet](https://anime-planet.com)    |   22493 (+117)    |            22376             |
| [aniSearch](https://anisearch.com)          |   17728 (+126)    |            17602             |
| [Kitsu](https://kitsu.io)                   |   18807 (+129)    |            18678             |
| [LiveChart.me](https://livechart.me)        |   10546 (+109)    |            10437             |
| [Anime Notifier](https://notify.moe)        |   15752 (+125)    |            15627             |
