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

Currently, arm-supplementary has 35586 entries (+6997).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10412 (+167)    |            10245             |
| [AniList](https://anilist.co)               |   20787 (+2082)   |            18705             |
| [MyAnimeList](https://myanimelist.net)      |   24985 (+430)    |            24555             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5596 (+31)     |             5565             |
| [AniDB](https://anidb.net)                  |   12970 (+136)    |            12834             |
| [Anime-Planet](https://anime-planet.com)    |   22943 (+136)    |            22807             |
| [aniSearch](https://anisearch.com)          |   17930 (+144)    |            17786             |
| [Kitsu](https://kitsu.io)                   |   19243 (+148)    |            19095             |
| [LiveChart.me](https://livechart.me)        |   10808 (+129)    |            10679             |
| [Anime Notifier](https://notify.moe)        |   15922 (+145)    |            15777             |
