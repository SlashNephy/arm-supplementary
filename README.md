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

Currently, arm-supplementary has 37583 entries (+7996).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11270 (+734)    |            10536             |
| [AniList](https://anilist.co)               |   21834 (+2665)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26553 (+1204)   |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5795 (+97)     |             5698             |
| [AniDB](https://anidb.net)                  |   13396 (+399)    |            12997             |
| [Anime-Planet](https://anime-planet.com)    |   23758 (+453)    |            23305             |
| [aniSearch](https://anisearch.com)          |   18646 (+432)    |            18214             |
| [Kitsu](https://kitsu.io)                   |   20190 (+457)    |            19733             |
| [LiveChart.me](https://livechart.me)        |   11294 (+296)    |            10998             |
| [Anime Notifier](https://notify.moe)        |   16485 (+453)    |            16032             |
