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

Currently, arm-supplementary has 36385 entries (+7217).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10621 (+187)    |            10434             |
| [AniList](https://anilist.co)               |   21144 (+2206)   |            18938             |
| [MyAnimeList](https://myanimelist.net)      |   25727 (+610)    |            25117             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5672 (+52)     |             5620             |
| [AniDB](https://anidb.net)                  |   13071 (+139)    |            12932             |
| [Anime-Planet](https://anime-planet.com)    |   23239 (+141)    |            23098             |
| [aniSearch](https://anisearch.com)          |   18176 (+149)    |            18027             |
| [Kitsu](https://kitsu.io)                   |   19581 (+153)    |            19428             |
| [LiveChart.me](https://livechart.me)        |   11037 (+133)    |            10904             |
| [Anime Notifier](https://notify.moe)        |   16070 (+150)    |            15920             |
