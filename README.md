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

Currently, arm-supplementary has 37605 entries (+7197).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11860 (+177)    |            11683             |
| [AniList](https://anilist.co)               |   21705 (+2222)   |            19483             |
| [MyAnimeList](https://myanimelist.net)      |   26523 (+575)    |            25948             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5810 (+30)     |             5780             |
| [AniDB](https://anidb.net)                  |   13220 (+141)    |            13079             |
| [Anime-Planet](https://anime-planet.com)    |   23573 (+143)    |            23430             |
| [aniSearch](https://anisearch.com)          |   18484 (+150)    |            18334             |
| [Kitsu](https://kitsu.io)                   |   20009 (+156)    |            19853             |
| [LiveChart.me](https://livechart.me)        |   11195 (+135)    |            11060             |
| [Anime Notifier](https://notify.moe)        |   16234 (+152)    |            16082             |
