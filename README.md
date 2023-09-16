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

Currently, arm-supplementary has 36385 entries (+7217).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10646 (+212)    |            10434             |
| [AniList](https://anilist.co)               |   21155 (+2217)   |            18938             |
| [MyAnimeList](https://myanimelist.net)      |   25744 (+627)    |            25117             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5682 (+62)     |             5620             |
| [AniDB](https://anidb.net)                  |   13084 (+152)    |            12932             |
| [Anime-Planet](https://anime-planet.com)    |   23252 (+153)    |            23099             |
| [aniSearch](https://anisearch.com)          |   18191 (+162)    |            18029             |
| [Kitsu](https://kitsu.io)                   |   19594 (+166)    |            19428             |
| [LiveChart.me](https://livechart.me)        |   11040 (+137)    |            10903             |
| [Anime Notifier](https://notify.moe)        |   16083 (+163)    |            15920             |
