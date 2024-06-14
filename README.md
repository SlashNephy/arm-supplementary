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

Currently, arm-supplementary has 38849 entries (+7171).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   12733 (+207)    |            12526             |
| [AniList](https://anilist.co)               |   22104 (+2160)   |            19944             |
| [MyAnimeList](https://myanimelist.net)      |   27181 (+480)    |            26701             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5945 (+36)     |             5909             |
| [AniDB](https://anidb.net)                  |   13333 (+142)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23666 (+150)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18547 (+151)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20155 (+161)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11243 (+141)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16281 (+154)    |            16127             |
