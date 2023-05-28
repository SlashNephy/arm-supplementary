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

Currently, arm-supplementary has 35424 entries (+6956).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10388 (+227)    |            10161             |
| [AniList](https://anilist.co)               |   20793 (+2109)   |            18684             |
| [MyAnimeList](https://myanimelist.net)      |   24902 (+443)    |            24459             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5577 (+28)     |             5549             |
| [AniDB](https://anidb.net)                  |   12984 (+156)    |            12828             |
| [Anime-Planet](https://anime-planet.com)    |   22900 (+158)    |            22742             |
| [aniSearch](https://anisearch.com)          |   17936 (+170)    |            17766             |
| [Kitsu](https://kitsu.io)                   |   19184 (+173)    |            19011             |
| [LiveChart.me](https://livechart.me)        |   10812 (+148)    |            10664             |
| [Anime Notifier](https://notify.moe)        |   15894 (+170)    |            15724             |
