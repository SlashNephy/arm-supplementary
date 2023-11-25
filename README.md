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

Currently, arm-supplementary has 37523 entries (+7936).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11209 (+673)    |            10536             |
| [AniList](https://anilist.co)               |   21782 (+2613)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26492 (+1143)   |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5795 (+97)     |             5698             |
| [AniDB](https://anidb.net)                  |   13349 (+352)    |            12997             |
| [Anime-Planet](https://anime-planet.com)    |   23705 (+400)    |            23305             |
| [aniSearch](https://anisearch.com)          |   18598 (+384)    |            18214             |
| [Kitsu](https://kitsu.io)                   |   20133 (+400)    |            19733             |
| [LiveChart.me](https://livechart.me)        |   11272 (+274)    |            10998             |
| [Anime Notifier](https://notify.moe)        |   16429 (+397)    |            16032             |
