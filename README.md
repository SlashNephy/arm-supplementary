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

Currently, arm-supplementary has 35434 entries (+6966).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10398 (+237)    |            10161             |
| [AniList](https://anilist.co)               |   20804 (+2120)   |            18684             |
| [MyAnimeList](https://myanimelist.net)      |   24913 (+454)    |            24459             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5577 (+28)     |             5549             |
| [AniDB](https://anidb.net)                  |   12989 (+161)    |            12828             |
| [Anime-Planet](https://anime-planet.com)    |   22911 (+169)    |            22742             |
| [aniSearch](https://anisearch.com)          |   17944 (+178)    |            17766             |
| [Kitsu](https://kitsu.io)                   |   19195 (+184)    |            19011             |
| [LiveChart.me](https://livechart.me)        |   10820 (+156)    |            10664             |
| [Anime Notifier](https://notify.moe)        |   15905 (+181)    |            15724             |
