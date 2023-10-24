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

Currently, arm-supplementary has 36988 entries (+7401).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   10882 (+346)    |            10536             |
| [AniList](https://anilist.co)               |   21543 (+2374)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26042 (+693)    |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5778 (+80)     |             5698             |
| [AniDB](https://anidb.net)                  |   13158 (+180)    |            12978             |
| [Anime-Planet](https://anime-planet.com)    |   23446 (+206)    |            23240             |
| [aniSearch](https://anisearch.com)          |   18328 (+198)    |            18130             |
| [Kitsu](https://kitsu.io)                   |   19870 (+209)    |            19661             |
| [LiveChart.me](https://livechart.me)        |   11130 (+170)    |            10960             |
| [Anime Notifier](https://notify.moe)        |   16224 (+208)    |            16016             |
