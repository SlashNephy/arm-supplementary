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

Currently, arm-supplementary has 34790 entries (+6748).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10052 (+145)    |             9907             |
| [AniList](https://anilist.co)               |   20568 (+2048)   |            18520             |
| [MyAnimeList](https://myanimelist.net)      |   24384 (+319)    |            24065             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5518 (+32)     |             5486             |
| [AniDB](https://anidb.net)                  |   12822 (+116)    |            12706             |
| [Anime-Planet](https://anime-planet.com)    |   22472 (+114)    |            22358             |
| [aniSearch](https://anisearch.com)          |   17717 (+123)    |            17594             |
| [Kitsu](https://kitsu.io)                   |   18779 (+126)    |            18653             |
| [LiveChart.me](https://livechart.me)        |   10535 (+106)    |            10429             |
| [Anime Notifier](https://notify.moe)        |   15731 (+123)    |            15608             |
