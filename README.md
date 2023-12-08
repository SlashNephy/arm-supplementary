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

Currently, arm-supplementary has 37829 entries (+8242).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11430 (+894)    |            10536             |
| [AniList](https://anilist.co)               |   21954 (+2785)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26771 (+1422)   |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5800 (+102)    |             5698             |
| [AniDB](https://anidb.net)                  |   13513 (+505)    |            13008             |
| [Anime-Planet](https://anime-planet.com)    |   23891 (+561)    |            23330             |
| [aniSearch](https://anisearch.com)          |   18789 (+543)    |            18246             |
| [Kitsu](https://kitsu.io)                   |   20339 (+572)    |            19767             |
| [LiveChart.me](https://livechart.me)        |   11356 (+342)    |            11014             |
| [Anime Notifier](https://notify.moe)        |   16601 (+565)    |            16036             |
