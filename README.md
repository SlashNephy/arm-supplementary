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

Currently, arm-supplementary has 42359 entries (+7242).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   16119 (+280)    |            15839             |
| [AniList](https://anilist.co)               |   23406 (+1804)   |            21602             |
| [MyAnimeList](https://myanimelist.net)      |   29628 (+580)    |            29048             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6436 (+44)     |             6392             |
| [AniDB](https://anidb.net)                  |   13364 (+173)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23718 (+202)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18589 (+193)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20204 (+210)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11285 (+183)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16325 (+198)    |            16127             |
