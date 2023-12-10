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

Currently, arm-supplementary has 37852 entries (+8265).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11454 (+918)    |            10536             |
| [AniList](https://anilist.co)               |   21975 (+2806)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26793 (+1444)   |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5819 (+121)    |             5698             |
| [AniDB](https://anidb.net)                  |   13533 (+525)    |            13008             |
| [Anime-Planet](https://anime-planet.com)    |   23912 (+582)    |            23330             |
| [aniSearch](https://anisearch.com)          |   18810 (+564)    |            18246             |
| [Kitsu](https://kitsu.io)                   |   20360 (+593)    |            19767             |
| [LiveChart.me](https://livechart.me)        |   11370 (+356)    |            11014             |
| [Anime Notifier](https://notify.moe)        |   16622 (+586)    |            16036             |
