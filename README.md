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

Currently, arm-supplementary has 37091 entries (+7504).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11009 (+473)    |            10536             |
| [AniList](https://anilist.co)               |   21627 (+2458)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26165 (+816)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5786 (+88)     |             5698             |
| [AniDB](https://anidb.net)                  |   13206 (+223)    |            12983             |
| [Anime-Planet](https://anime-planet.com)    |   23520 (+268)    |            23252             |
| [aniSearch](https://anisearch.com)          |   18400 (+252)    |            18148             |
| [Kitsu](https://kitsu.io)                   |   19951 (+269)    |            19682             |
| [LiveChart.me](https://livechart.me)        |   11172 (+203)    |            10969             |
| [Anime Notifier](https://notify.moe)        |   16287 (+266)    |            16021             |
