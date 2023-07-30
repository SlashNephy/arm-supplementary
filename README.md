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

Currently, arm-supplementary has 35852 entries (+6872).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10546 (+163)    |            10383             |
| [AniList](https://anilist.co)               |   20930 (+2058)   |            18872             |
| [MyAnimeList](https://myanimelist.net)      |   25308 (+352)    |            24956             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5641 (+30)     |             5611             |
| [AniDB](https://anidb.net)                  |   13027 (+131)    |            12896             |
| [Anime-Planet](https://anime-planet.com)    |   23108 (+131)    |            22977             |
| [aniSearch](https://anisearch.com)          |   18047 (+139)    |            17908             |
| [Kitsu](https://kitsu.io)                   |   19447 (+144)    |            19303             |
| [LiveChart.me](https://livechart.me)        |   10982 (+125)    |            10857             |
| [Anime Notifier](https://notify.moe)        |   15975 (+140)    |            15835             |
