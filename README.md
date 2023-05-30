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

Currently, arm-supplementary has 35402 entries (+6862).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10400 (+187)    |            10213             |
| [AniList](https://anilist.co)               |   20774 (+2084)   |            18690             |
| [MyAnimeList](https://myanimelist.net)      |   24893 (+374)    |            24519             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5578 (+27)     |             5551             |
| [AniDB](https://anidb.net)                  |   12969 (+141)    |            12828             |
| [Anime-Planet](https://anime-planet.com)    |   22894 (+152)    |            22742             |
| [aniSearch](https://anisearch.com)          |   17923 (+157)    |            17766             |
| [Kitsu](https://kitsu.io)                   |   19178 (+167)    |            19011             |
| [LiveChart.me](https://livechart.me)        |   10805 (+141)    |            10664             |
| [Anime Notifier](https://notify.moe)        |   15888 (+164)    |            15724             |
