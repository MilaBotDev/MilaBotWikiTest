# Maintaining the wiki

The public landing page is `wiki/index.html`. Detailed pages live in `_wiki/`, use `_layouts/wiki.html`, and are automatically included in site search. Only the Wiki landing page has a button in the main navigation.

## Add or edit a guide

Create `_wiki/my-guide.md` with:

```yaml
---
title: My guide
category: Patisserie
summary: A short explanation of this page.
kind: guide
---
```

Write Markdown below the front matter. Use `##` headings for the automatic table of contents. `kind: guide` makes the page appear in its category on the wiki homepage. Other reference pages remain reachable through the catalogue and search.

Links should use `{{ '/wiki/my-guide/' | relative_url }}` so both repository Pages URLs and local Jekyll previews work. Never hardcode the GitHub repository name into links.

## Refresh generated references

```text
node scripts/import-wiki.cjs
node scripts/check-wiki.cjs
```

The importer reads `ToMakeWiki WillBeDeleted/Milabot/src/configs` and images under `BotResources`. Pass another source folder as the first argument if needed. It reads JSON and copies image files; it does not execute the bot.

It regenerates the command directory and command pages, treat directory and treat pages, rarity odds, customers, plates, shop, progression, ShowOff, AuctionWar, and icon gallery. Edit the importer for permanent changes to those generated pages. The other Markdown guides are maintained by hand and are not overwritten.

Gameplay changes in TypeScript need a manual guide review, especially economy resets, combat rules, and date boundaries. The snapshot date in the layout should be updated after that review. If commands are added, assign their category in the importer. Removed or renamed entries need their old Markdown pages removed explicitly; the importer does not delete files automatically.

## Temporary source and permanent assets

The temporary bot folder is excluded from Jekyll output. The deploy verification rejects a build containing it. Public images are copied to `assets/wiki/`; a small public stat snapshot is saved there for the calculator.

The website builds entirely from the committed `_wiki/` pages and `assets/wiki/`. You can remove the temporary folder after reviewing the wiki; deploying never runs the importer or needs the original bot. Excluding it from Jekyll does not hide source committed in a public GitHub repository.

## Checks and local preview

`node scripts/check-wiki.cjs` checks source links, images, and stat records. The Pages workflow also checks that Jekyll rendered the full layout, wiki CSS/JS, and search routes with the repository base path.

Use a Jekyll build for local article previews. Live Server on the source directory cannot render Liquid or Jekyll collections.

The source snapshot has 67 public configured commands, 34 treats, nine plates, and 12 customers. It also contains gateway-only commands documented on the feature-availability page. Private developer commands are intentionally not exposed in the public wiki.
