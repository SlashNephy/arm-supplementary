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

Currently, arm-supplementary has 35224 entries (+6978).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10227 (+169)    |            10058             |
| [AniList](https://anilist.co)               |   20757 (+2105)   |            18652             |
| [MyAnimeList](https://myanimelist.net)      |   24662 (+418)    |            24244             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5569 (+26)     |             5543             |
| [AniDB](https://anidb.net)                  |   12937 (+132)    |            12805             |
| [Anime-Planet](https://anime-planet.com)    |   22747 (+131)    |            22616             |
| [aniSearch](https://anisearch.com)          |   17848 (+140)    |            17708             |
| [Kitsu](https://kitsu.io)                   |   19036 (+142)    |            18894             |
| [LiveChart.me](https://livechart.me)        |   10709 (+124)    |            10585             |
| [Anime Notifier](https://notify.moe)        |   15862 (+141)    |            15721             |
