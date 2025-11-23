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

Currently, arm-supplementary has 42616 entries (+7192).

| Service                                     | arm-supplementary | arm / anime-offline-database |
| :------------------------------------------ | :---------------: | :--------------------------: |
| [Annict](https://annict.com)                |   16199 (+240)    |            15959             |
| [AniList](https://anilist.co)               |   23496 (+1796)   |            21700             |
| [MyAnimeList](https://myanimelist.net)      |   29865 (+541)    |            29324             |
| [しょぼいカレンダー](https://cal.syoboi.jp) |    6618 (+209)    |             6409             |
| [AniDB](https://anidb.net)                  |   13357 (+166)    |            13191             |
| [Anime-Planet](https://anime-planet.com)    |   23702 (+186)    |            23516             |
| [aniSearch](https://anisearch.com)          |   18575 (+179)    |            18396             |
| [Kitsu](https://kitsu.io)                   |   20195 (+201)    |            19994             |
| [LiveChart.me](https://livechart.me)        |   11275 (+173)    |            11102             |
| [Anime Notifier](https://notify.moe)        |   16318 (+191)    |            16127             |
