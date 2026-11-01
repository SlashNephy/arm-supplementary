# arm-supplementary

> [!WARNING]
> This project has been discontinued and archived. `dist/arm.json` is kept only as an empty array (`[]`).

💊 Supplemental database for [kawaiioverflow/arm](https://github.com/kawaiioverflow/arm)

## Why

arm-supplementary added ID mappings fetched from the [Annict](https://annict.com) API and distributed them as a public JSON file.
The [Annict API Terms of Use](https://annict.com/terms/api) (effective 2026-11-25) prohibit redistributing data fetched from the API as files or datasets that third parties can retrieve (Article 6).
To comply with the terms, the database and its history have been removed.

## For existing users

`https://raw.githubusercontent.com/SlashNephy/arm-supplementary/master/dist/arm.json` still responds, but always returns an empty array.
Please migrate to one of the following sources.

- [kawaiioverflow/arm](https://github.com/kawaiioverflow/arm): `mal_id`, `anilist_id`, `annict_id` and `syobocal_tid` in the same format
- [manami-project/anime-offline-database](https://github.com/manami-project/anime-offline-database): IDs for MyAnimeList, AniList, AniDB, Anime-Planet, aniSearch, Kitsu, LiveChart.me and others
