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

Currently, arm-supplementary has 37306 entries (+7719).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11116 (+580)    |            10536             |
| [AniList](https://anilist.co)               |   21708 (+2539)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26315 (+966)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5795 (+97)     |             5698             |
| [AniDB](https://anidb.net)                  |   13265 (+273)    |            12992             |
| [Anime-Planet](https://anime-planet.com)    |   23601 (+321)    |            23280             |
| [aniSearch](https://anisearch.com)          |   18499 (+305)    |            18194             |
| [Kitsu](https://kitsu.io)                   |   20028 (+322)    |            19706             |
| [LiveChart.me](https://livechart.me)        |   11227 (+241)    |            10986             |
| [Anime Notifier](https://notify.moe)        |   16346 (+319)    |            16027             |
