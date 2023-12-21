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

Currently, arm-supplementary has 37519 entries (+7227).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11687 (+219)    |            11468             |
| [AniList](https://anilist.co)               |   21704 (+2252)   |            19452             |
| [MyAnimeList](https://myanimelist.net)      |   26434 (+569)    |            25865             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5805 (+35)     |             5770             |
| [AniDB](https://anidb.net)                  |   13208 (+176)    |            13032             |
| [Anime-Planet](https://anime-planet.com)    |   23551 (+180)    |            23371             |
| [aniSearch](https://anisearch.com)          |   18468 (+187)    |            18281             |
| [Kitsu](https://kitsu.io)                   |   19991 (+194)    |            19797             |
| [LiveChart.me](https://livechart.me)        |   11203 (+162)    |            11041             |
| [Anime Notifier](https://notify.moe)        |   16257 (+190)    |            16067             |
