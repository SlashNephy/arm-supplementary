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

Currently, arm-supplementary has 36226 entries (+7058).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10603 (+169)    |            10434             |
| [AniList](https://anilist.co)               |   21062 (+2124)   |            18938             |
| [MyAnimeList](https://myanimelist.net)      |   25608 (+491)    |            25117             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5659 (+39)     |             5620             |
| [AniDB](https://anidb.net)                  |   13055 (+132)    |            12923             |
| [Anime-Planet](https://anime-planet.com)    |   23204 (+134)    |            23070             |
| [aniSearch](https://anisearch.com)          |   18134 (+142)    |            17992             |
| [Kitsu](https://kitsu.io)                   |   19545 (+146)    |            19399             |
| [LiveChart.me](https://livechart.me)        |   11020 (+127)    |            10893             |
| [Anime Notifier](https://notify.moe)        |   16051 (+143)    |            15908             |
