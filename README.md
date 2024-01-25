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

Currently, arm-supplementary has 37798 entries (+7185).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11957 (+173)    |            11784             |
| [AniList](https://anilist.co)               |   21746 (+2213)   |            19533             |
| [MyAnimeList](https://myanimelist.net)      |   26633 (+523)    |            26110             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5817 (+30)     |             5787             |
| [AniDB](https://anidb.net)                  |   13273 (+137)    |            13136             |
| [Anime-Planet](https://anime-planet.com)    |   23603 (+141)    |            23462             |
| [aniSearch](https://anisearch.com)          |   18502 (+146)    |            18356             |
| [Kitsu](https://kitsu.io)                   |   20054 (+154)    |            19900             |
| [LiveChart.me](https://livechart.me)        |   11217 (+136)    |            11081             |
| [Anime Notifier](https://notify.moe)        |   16247 (+148)    |            16099             |
