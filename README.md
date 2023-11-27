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

Currently, arm-supplementary has 37571 entries (+7984).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   11257 (+721)    |            10536             |
| [AniList](https://anilist.co)               |   21824 (+2655)   |            19169             |
| [MyAnimeList](https://myanimelist.net)      |   26539 (+1190)   |            25349             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    5795 (+97)     |             5698             |
| [AniDB](https://anidb.net)                  |   13385 (+388)    |            12997             |
| [Anime-Planet](https://anime-planet.com)    |   23746 (+441)    |            23305             |
| [aniSearch](https://anisearch.com)          |   18634 (+420)    |            18214             |
| [Kitsu](https://kitsu.io)                   |   20178 (+445)    |            19733             |
| [LiveChart.me](https://livechart.me)        |   11287 (+289)    |            10998             |
| [Anime Notifier](https://notify.moe)        |   16473 (+441)    |            16032             |
