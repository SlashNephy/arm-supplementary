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

Currently, arm-supplementary has 36574 entries (+6987).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10744 (+208)    |            10536             |
| [AniList](https://anilist.co)               |   21360 (+2191)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   25820 (+471)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5762 (+64)     |             5698             |
| [AniDB](https://anidb.net)                  |   13093 (+141)    |            12952             |
| [Anime-Planet](https://anime-planet.com)    |   23289 (+147)    |            23142             |
| [aniSearch](https://anisearch.com)          |   18208 (+152)    |            18056             |
| [Kitsu](https://kitsu.io)                   |   19647 (+158)    |            19489             |
| [LiveChart.me](https://livechart.me)        |   11060 (+133)    |            10927             |
| [Anime Notifier](https://notify.moe)        |   16101 (+153)    |            15948             |
