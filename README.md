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

Currently, arm-supplementary has 40086 entries (+7166).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   14373 (+223)    |            14150             |
| [AniList](https://anilist.co)               |   22525 (+1781)   |            20744             |
| [MyAnimeList](https://myanimelist.net)      |   28147 (+501)    |            27646             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6135 (+41)     |             6094             |
| [AniDB](https://anidb.net)                  |   13363 (+172)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23703 (+187)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18578 (+182)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20191 (+197)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11268 (+166)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16314 (+187)    |            16127             |
