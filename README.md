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

Currently, arm-supplementary has 37810 entries (+8223).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11411 (+875)    |            10536             |
| [AniList](https://anilist.co)               |   21938 (+2769)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26753 (+1404)   |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5800 (+102)    |             5698             |
| [AniDB](https://anidb.net)                  |   13499 (+491)    |            13008             |
| [Anime-Planet](https://anime-planet.com)    |   23876 (+546)    |            23330             |
| [aniSearch](https://anisearch.com)          |   18773 (+527)    |            18246             |
| [Kitsu](https://kitsu.io)                   |   20322 (+555)    |            19767             |
| [LiveChart.me](https://livechart.me)        |   11345 (+331)    |            11014             |
| [Anime Notifier](https://notify.moe)        |   16585 (+549)    |            16036             |
