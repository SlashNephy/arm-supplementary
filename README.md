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

Currently, arm-supplementary has 35036 entries (+8701).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |    9643 (+144)    |             9499             |
| [AniList](https://anilist.co)               |   20262 (+2054)   |            18208             |
| [MyAnimeList](https://myanimelist.net)      |   24570 (+2014)   |            22556             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5406 (+31)     |             5375             |
| [AniDB](https://anidb.net)                  |   12661 (+114)    |            12547             |
| [Anime-Planet](https://anime-planet.com)    |   21438 (+115)    |            21323             |
| [aniSearch](https://anisearch.com)          |   17260 (+121)    |            17139             |
| [Kitsu](https://kitsu.io)                   |   18350 (+126)    |            18224             |
| [LiveChart.me](https://livechart.me)        |   10258 (+107)    |            10151             |
| [Anime Notifier](https://notify.moe)        |   15553 (+120)    |            15433             |
