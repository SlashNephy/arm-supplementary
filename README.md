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

Currently, arm-supplementary has 34660 entries (+6989).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9883 (+155)    |             9728             |
| [AniList](https://anilist.co)               |   20489 (+2057)   |            18432             |
| [MyAnimeList](https://myanimelist.net)      |   24140 (+381)    |            23759             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5489 (+31)     |             5458             |
| [AniDB](https://anidb.net)                  |   12768 (+118)    |            12650             |
| [Anime-Planet](https://anime-planet.com)    |   22237 (+115)    |            22122             |
| [aniSearch](https://anisearch.com)          |   17494 (+126)    |            17368             |
| [Kitsu](https://kitsu.io)                   |   18614 (+134)    |            18480             |
| [LiveChart.me](https://livechart.me)        |   10471 (+106)    |            10365             |
| [Anime Notifier](https://notify.moe)        |   15664 (+130)    |            15534             |
