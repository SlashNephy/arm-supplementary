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

Currently, arm-supplementary has 38165 entries (+7234).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   12287 (+255)    |            12032             |
| [AniList](https://anilist.co)               |   21843 (+2201)   |            19642             |
| [MyAnimeList](https://myanimelist.net)      |   26877 (+538)    |            26339             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5869 (+62)     |             5807             |
| [AniDB](https://anidb.net)                  |   13366 (+175)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23699 (+183)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18581 (+185)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20189 (+195)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11248 (+146)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16316 (+189)    |            16127             |
