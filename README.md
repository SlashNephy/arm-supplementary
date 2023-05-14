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

Currently, arm-supplementary has 35285 entries (+6845).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10303 (+157)    |            10146             |
| [AniList](https://anilist.co)               |   20748 (+2069)   |            18679             |
| [MyAnimeList](https://myanimelist.net)      |   24707 (+270)    |            24437             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5575 (+27)     |             5548             |
| [AniDB](https://anidb.net)                  |   12942 (+124)    |            12818             |
| [Anime-Planet](https://anime-planet.com)    |   22841 (+122)    |            22719             |
| [aniSearch](https://anisearch.com)          |   17863 (+131)    |            17732             |
| [Kitsu](https://kitsu.io)                   |   19095 (+132)    |            18963             |
| [LiveChart.me](https://livechart.me)        |   10731 (+115)    |            10616             |
| [Anime Notifier](https://notify.moe)        |   15853 (+130)    |            15723             |
