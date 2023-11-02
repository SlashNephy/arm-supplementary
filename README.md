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

Currently, arm-supplementary has 37046 entries (+7459).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10963 (+427)    |            10536             |
| [AniList](https://anilist.co)               |   21603 (+2434)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26133 (+784)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5780 (+82)     |             5698             |
| [AniDB](https://anidb.net)                  |   13182 (+199)    |            12983             |
| [Anime-Planet](https://anime-planet.com)    |   23494 (+242)    |            23252             |
| [aniSearch](https://anisearch.com)          |   18375 (+227)    |            18148             |
| [Kitsu](https://kitsu.io)                   |   19922 (+240)    |            19682             |
| [LiveChart.me](https://livechart.me)        |   11158 (+189)    |            10969             |
| [Anime Notifier](https://notify.moe)        |   16259 (+238)    |            16021             |
