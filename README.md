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

Currently, arm-supplementary has 37764 entries (+8177).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11365 (+829)    |            10536             |
| [AniList](https://anilist.co)               |   21902 (+2733)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26708 (+1359)   |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5800 (+102)    |             5698             |
| [AniDB](https://anidb.net)                  |   13456 (+448)    |            13008             |
| [Anime-Planet](https://anime-planet.com)    |   23834 (+504)    |            23330             |
| [aniSearch](https://anisearch.com)          |   18730 (+484)    |            18246             |
| [Kitsu](https://kitsu.io)                   |   20278 (+511)    |            19767             |
| [LiveChart.me](https://livechart.me)        |   11335 (+321)    |            11014             |
| [Anime Notifier](https://notify.moe)        |   16541 (+505)    |            16036             |
