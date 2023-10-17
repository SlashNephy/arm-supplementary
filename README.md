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

Currently, arm-supplementary has 36813 entries (+7226).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10816 (+280)    |            10536             |
| [AniList](https://anilist.co)               |   21488 (+2319)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   25938 (+589)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5767 (+69)     |             5698             |
| [AniDB](https://anidb.net)                  |   13127 (+160)    |            12967             |
| [Anime-Planet](https://anime-planet.com)    |   23351 (+170)    |            23181             |
| [aniSearch](https://anisearch.com)          |   18262 (+173)    |            18089             |
| [Kitsu](https://kitsu.io)                   |   19736 (+176)    |            19560             |
| [LiveChart.me](https://livechart.me)        |   11099 (+151)    |            10948             |
| [Anime Notifier](https://notify.moe)        |   16181 (+175)    |            16006             |
