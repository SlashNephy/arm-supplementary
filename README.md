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

Currently, arm-supplementary has 36686 entries (+7099).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10696 (+160)    |            10536             |
| [AniList](https://anilist.co)               |   21373 (+2204)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   25799 (+450)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5729 (+31)     |             5698             |
| [AniDB](https://anidb.net)                  |   13081 (+129)    |            12952             |
| [Anime-Planet](https://anime-planet.com)    |   23270 (+130)    |            23140             |
| [aniSearch](https://anisearch.com)          |   18195 (+138)    |            18057             |
| [Kitsu](https://kitsu.io)                   |   19633 (+143)    |            19490             |
| [LiveChart.me](https://livechart.me)        |   11050 (+123)    |            10927             |
| [Anime Notifier](https://notify.moe)        |   16087 (+139)    |            15948             |
