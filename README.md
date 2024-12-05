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

Currently, arm-supplementary has 40044 entries (+7229).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   14339 (+285)    |            14054             |
| [AniList](https://anilist.co)               |   22510 (+1796)   |            20714             |
| [MyAnimeList](https://myanimelist.net)      |   28123 (+546)    |            27577             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6115 (+57)     |             6058             |
| [AniDB](https://anidb.net)                  |   13374 (+183)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23721 (+205)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18590 (+194)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20206 (+212)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11280 (+178)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16326 (+199)    |            16127             |
