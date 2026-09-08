This site uses Jekyll and deploys to GitHub Pages through `.github/workflows/static.yml`.
Set the repository's Pages source to GitHub Actions. Deployment automatically uses
the Pages origin and repository base path; no custom domain is required.

The homepage is plain HTML and can be opened directly as `index.html` to preview
its design. Article pages and search still require a Jekyll build (as performed
by the GitHub Pages workflow). Homepage asset and navigation URLs are relative
so they work under the repository path as well as at the domain root.

The homepage chooses a random image from `images/Logos` on each load, uses the
same image as the favicon, and fits it inside the responsive logo circle.
GitHub Actions regenerates the image list
automatically before deployment. After adding or removing logos locally, run
`node scripts/generate-logo-list.cjs` before opening `index.html` directly.
An empty folder or a failed image uses `images/Favicon.png` as a fallback.

Logo, favicon, and background settings are together in
`assets/js/appearance-config.js`. To fix the logo and matching favicon during a
season, enable a `logoSeasons` entry, choose its start/end month and day, and set
`image` to a filename from `images/Logos`. Configure background dates and image
filenames separately under `backgroundSeasons`; `defaultBackground` is used
outside those dates. The logo example is disabled until you choose to use it.
Seasons repeat annually, include both boundary dates, and
use the visitor's local date. Ranges spanning December to January also work.
The first matching enabled entry wins; outside enabled seasons, selection is
random on each load. Seasonal configuration changes need no image-list rebuild.

Add Markdown articles to `_tos_articles`, `_security_articles`, or `_privacy_articles`.
For example, create `_tos_articles/overview.md`:

```markdown
---
title: Overview
order: 1
---
## Overview

Write the section here using Markdown or HTML.
```

The filename supplies the section anchor. Higher `order` values appear first.
Optional `image: /images/example.jpg` adds an article cover. All three sections
use `_layouts/articles.html`, with the same table of contents, article display,
share links, individual article pages, and search indexing. Collections start
empty so policy text can be written for the new brand.

Use `{{ '/path/' | relative_url }}` for internal links and asset URLs in articles.
This preserves the repository prefix on GitHub Pages.

The Pride background runs June 1–30. Other dates use the default background.

The homepage's `#main` container and article navigation code remain available
for future interactive content. The container starts hidden so loading scripts
does not shift the homepage layout. Search remains available as a standalone tool.

Custom cursors are prepared in `assets/cursors`. Add named CUR or PNG files there;
no list rebuild is needed. See `assets/cursors/README.md` for all filenames,
hotspots, and browser limits. Open `cursor-preview/index.html` to preview every
standard cursor mode. Styles and PNG hotspots are in `assets/css/cursors.css`.
