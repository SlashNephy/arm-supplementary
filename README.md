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

Currently, arm-supplementary has 36535 entries (+6948).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10706 (+170)    |            10536             |
| [AniList](https://anilist.co)               |   21352 (+2183)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   25804 (+455)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5734 (+36)     |             5698             |
| [AniDB](https://anidb.net)                  |   13087 (+135)    |            12952             |
| [Anime-Planet](https://anime-planet.com)    |   23278 (+136)    |            23142             |
| [aniSearch](https://anisearch.com)          |   18200 (+144)    |            18056             |
| [Kitsu](https://kitsu.io)                   |   19638 (+149)    |            19489             |
| [LiveChart.me](https://livechart.me)        |   11052 (+125)    |            10927             |
| [Anime Notifier](https://notify.moe)        |   16093 (+145)    |            15948             |
