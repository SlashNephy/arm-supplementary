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

Currently, arm-supplementary has 38004 entries (+7246).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   12059 (+180)    |            11879             |
| [AniList](https://anilist.co)               |   21776 (+2219)   |            19557             |
| [MyAnimeList](https://myanimelist.net)      |   26724 (+534)    |            26190             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5825 (+32)     |             5793             |
| [AniDB](https://anidb.net)                  |   13328 (+137)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23659 (+143)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18542 (+146)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20140 (+154)    |            19986             |
| [LiveChart.me](https://livechart.me)        |   11239 (+138)    |            11101             |
| [Anime Notifier](https://notify.moe)        |   16274 (+147)    |            16127             |
