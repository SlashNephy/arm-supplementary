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

Currently, arm-supplementary has 36977 entries (+7390).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10941 (+405)    |            10536             |
| [AniList](https://anilist.co)               |   21566 (+2397)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26073 (+724)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5779 (+81)     |             5698             |
| [AniDB](https://anidb.net)                  |   13172 (+194)    |            12978             |
| [Anime-Planet](https://anime-planet.com)    |   23473 (+234)    |            23239             |
| [aniSearch](https://anisearch.com)          |   18348 (+218)    |            18130             |
| [Kitsu](https://kitsu.io)                   |   19894 (+233)    |            19661             |
| [LiveChart.me](https://livechart.me)        |   11144 (+184)    |            10960             |
| [Anime Notifier](https://notify.moe)        |   16247 (+231)    |            16016             |
