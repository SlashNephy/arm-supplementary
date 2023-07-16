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

Currently, arm-supplementary has 35798 entries (+6972).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10531 (+196)    |            10335             |
| [AniList](https://anilist.co)               |   20936 (+2098)   |            18838             |
| [MyAnimeList](https://myanimelist.net)      |   25217 (+430)    |            24787             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5639 (+29)     |             5610             |
| [AniDB](https://anidb.net)                  |   13022 (+143)    |            12879             |
| [Anime-Planet](https://anime-planet.com)    |   23084 (+144)    |            22940             |
| [aniSearch](https://anisearch.com)          |   18029 (+150)    |            17879             |
| [Kitsu](https://kitsu.io)                   |   19378 (+155)    |            19223             |
| [LiveChart.me](https://livechart.me)        |   10975 (+137)    |            10838             |
| [Anime Notifier](https://notify.moe)        |   15971 (+151)    |            15820             |
