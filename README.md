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

Currently, arm-supplementary has 40115 entries (+7195).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   14402 (+252)    |            14150             |
| [AniList](https://anilist.co)               |   22527 (+1783)   |            20744             |
| [MyAnimeList](https://myanimelist.net)      |   28165 (+519)    |            27646             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6146 (+52)     |             6094             |
| [AniDB](https://anidb.net)                  |   13375 (+184)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23717 (+201)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18585 (+189)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20194 (+200)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11270 (+168)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16316 (+189)    |            16127             |
