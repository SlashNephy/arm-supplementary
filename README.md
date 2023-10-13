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

Currently, arm-supplementary has 36796 entries (+7209).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10799 (+263)    |            10536             |
| [AniList](https://anilist.co)               |   21484 (+2315)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   25930 (+581)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5767 (+69)     |             5698             |
| [AniDB](https://anidb.net)                  |   13123 (+156)    |            12967             |
| [Anime-Planet](https://anime-planet.com)    |   23347 (+166)    |            23181             |
| [aniSearch](https://anisearch.com)          |   18258 (+169)    |            18089             |
| [Kitsu](https://kitsu.io)                   |   19732 (+172)    |            19560             |
| [LiveChart.me](https://livechart.me)        |   11096 (+148)    |            10948             |
| [Anime Notifier](https://notify.moe)        |   16177 (+171)    |            16006             |
