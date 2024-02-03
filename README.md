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

Currently, arm-supplementary has 37915 entries (+7263).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   12004 (+207)    |            11797             |
| [AniList](https://anilist.co)               |   21769 (+2219)   |            19550             |
| [MyAnimeList](https://myanimelist.net)      |   26680 (+532)    |            26148             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5819 (+30)     |             5789             |
| [AniDB](https://anidb.net)                  |   13308 (+139)    |            13169             |
| [Anime-Planet](https://anime-planet.com)    |   23652 (+146)    |            23506             |
| [aniSearch](https://anisearch.com)          |   18531 (+151)    |            18380             |
| [Kitsu](https://kitsu.io)                   |   20097 (+158)    |            19939             |
| [LiveChart.me](https://livechart.me)        |   11236 (+139)    |            11097             |
| [Anime Notifier](https://notify.moe)        |   16279 (+152)    |            16127             |
