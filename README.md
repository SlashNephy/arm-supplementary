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

Currently, arm-supplementary has 40461 entries (+7270).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   13376 (+218)    |            13158             |
| [AniList](https://anilist.co)               |   23217 (+2818)   |            20399             |
| [MyAnimeList](https://myanimelist.net)      |   27989 (+842)    |            27147             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5998 (+32)     |             5966             |
| [AniDB](https://anidb.net)                  |   13605 (+414)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   24015 (+499)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18877 (+481)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20501 (+507)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11551 (+449)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16616 (+489)    |            16127             |
