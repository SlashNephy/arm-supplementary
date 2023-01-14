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

Currently, arm-supplementary has 34832 entries (+7047).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9900 (+153)    |             9747             |
| [AniList](https://anilist.co)               |   20517 (+2071)   |            18446             |
| [MyAnimeList](https://myanimelist.net)      |   24231 (+366)    |            23865             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5491 (+30)     |             5461             |
| [AniDB](https://anidb.net)                  |   12776 (+117)    |            12659             |
| [Anime-Planet](https://anime-planet.com)    |   22272 (+117)    |            22155             |
| [aniSearch](https://anisearch.com)          |   17576 (+124)    |            17452             |
| [Kitsu](https://kitsu.io)                   |   18636 (+130)    |            18506             |
| [LiveChart.me](https://livechart.me)        |   10489 (+106)    |            10383             |
| [Anime Notifier](https://notify.moe)        |   15667 (+126)    |            15541             |
