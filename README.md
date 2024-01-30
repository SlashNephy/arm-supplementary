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

Currently, arm-supplementary has 37882 entries (+7269).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11967 (+183)    |            11784             |
| [AniList](https://anilist.co)               |   21762 (+2229)   |            19533             |
| [MyAnimeList](https://myanimelist.net)      |   26676 (+566)    |            26110             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5818 (+31)     |             5787             |
| [AniDB](https://anidb.net)                  |   13309 (+140)    |            13169             |
| [Anime-Planet](https://anime-planet.com)    |   23651 (+145)    |            23506             |
| [aniSearch](https://anisearch.com)          |   18530 (+150)    |            18380             |
| [Kitsu](https://kitsu.io)                   |   20096 (+157)    |            19939             |
| [LiveChart.me](https://livechart.me)        |   11237 (+140)    |            11097             |
| [Anime Notifier](https://notify.moe)        |   16277 (+150)    |            16127             |
