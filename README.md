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

Currently, arm-supplementary has 35536 entries (+6947).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10412 (+167)    |            10245             |
| [AniList](https://anilist.co)               |   20781 (+2076)   |            18705             |
| [MyAnimeList](https://myanimelist.net)      |   24962 (+407)    |            24555             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5596 (+31)     |             5565             |
| [AniDB](https://anidb.net)                  |   12969 (+136)    |            12833             |
| [Anime-Planet](https://anime-planet.com)    |   22905 (+136)    |            22769             |
| [aniSearch](https://anisearch.com)          |   17922 (+144)    |            17778             |
| [Kitsu](https://kitsu.io)                   |   19221 (+148)    |            19073             |
| [LiveChart.me](https://livechart.me)        |   10805 (+129)    |            10676             |
| [Anime Notifier](https://notify.moe)        |   15879 (+145)    |            15734             |
