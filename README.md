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

Currently, arm-supplementary has 37549 entries (+7962).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11235 (+699)    |            10536             |
| [AniList](https://anilist.co)               |   21804 (+2635)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26517 (+1168)   |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5795 (+97)     |             5698             |
| [AniDB](https://anidb.net)                  |   13369 (+372)    |            12997             |
| [Anime-Planet](https://anime-planet.com)    |   23727 (+422)    |            23305             |
| [aniSearch](https://anisearch.com)          |   18618 (+404)    |            18214             |
| [Kitsu](https://kitsu.io)                   |   20156 (+423)    |            19733             |
| [LiveChart.me](https://livechart.me)        |   11281 (+283)    |            10998             |
| [Anime Notifier](https://notify.moe)        |   16451 (+419)    |            16032             |
