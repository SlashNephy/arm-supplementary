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

Currently, arm-supplementary has 35414 entries (+6825).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10401 (+156)    |            10245             |
| [AniList](https://anilist.co)               |   20760 (+2055)   |            18705             |
| [MyAnimeList](https://myanimelist.net)      |   24892 (+337)    |            24555             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5592 (+27)     |             5565             |
| [AniDB](https://anidb.net)                  |   12955 (+127)    |            12828             |
| [Anime-Planet](https://anime-planet.com)    |   22869 (+127)    |            22742             |
| [aniSearch](https://anisearch.com)          |   17901 (+135)    |            17766             |
| [Kitsu](https://kitsu.io)                   |   19151 (+140)    |            19011             |
| [LiveChart.me](https://livechart.me)        |   10785 (+121)    |            10664             |
| [Anime Notifier](https://notify.moe)        |   15861 (+137)    |            15724             |
