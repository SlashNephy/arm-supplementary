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

Currently, arm-supplementary has 38105 entries (+7174).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   12227 (+195)    |            12032             |
| [AniList](https://anilist.co)               |   21817 (+2175)   |            19642             |
| [MyAnimeList](https://myanimelist.net)      |   26841 (+502)    |            26339             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5839 (+32)     |             5807             |
| [AniDB](https://anidb.net)                  |   13341 (+150)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23673 (+157)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18555 (+159)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20163 (+169)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11243 (+141)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16290 (+163)    |            16127             |
