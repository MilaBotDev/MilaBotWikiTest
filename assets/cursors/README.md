# Custom cursors

Add your files to this folder and refresh. No script, manifest rebuild, or switch
is needed. Filenames are case-sensitive on GitHub Pages.
For every name below supply NAME.cur or NAME.png (or both).
The browser tries CUR, then PNG, then the matching system cursor.
Missing files are expected until you add artwork; native cursors remain usable.

Use static 32 × 32 pixel artwork with transparency for broad desktop support.
CUR files store the click point (hotspot) internally. PNG hotspots below assume
32 × 32 artwork. Adjust --cursor-NAME-hotspot in assets/css/cursors.css if needed.
Coordinates are X Y pixels from the top-left; they must match your artwork.

| Filename stem | Default PNG hotspot |
| --- | --- |
| default | 0 0 |
| context-menu | 0 0 |
| help | 0 0 |
| pointer | 0 0 |
| progress | 0 0 |
| wait | 16 16 |
| cell | 16 16 |
| crosshair | 16 16 |
| text | 16 16 |
| vertical-text | 16 16 |
| alias | 0 0 |
| copy | 0 0 |
| move | 16 16 |
| no-drop | 0 0 |
| not-allowed | 16 16 |
| grab | 16 16 |
| grabbing | 16 16 |
| all-scroll | 16 16 |
| col-resize | 16 16 |
| row-resize | 16 16 |
| n-resize | 16 16 |
| e-resize | 16 16 |
| s-resize | 16 16 |
| w-resize | 16 16 |
| ne-resize | 16 16 |
| nw-resize | 16 16 |
| se-resize | 16 16 |
| sw-resize | 16 16 |
| ew-resize | 16 16 |
| ns-resize | 16 16 |
| nesw-resize | 16 16 |
| nwse-resize | 16 16 |
| zoom-in | 16 16 |
| zoom-out | 16 16 |

The auto mode lets the browser select a contextual native cursor; none hides it.
Neither is an image shape or needs a file. CSS globals (inherit, initial, unset,
revert, revert-layer) control the cascade and are not additional cursor shapes.

## Preview and future widgets

Open cursor-preview/index.html from the project root. It works from disk, through
Live Server, and on GitHub Pages. The site homepage and shared layouts already
load the cursor CSS, including the existing search grab/grabbing states.

Use data-cursor="zoom-in" (or any other mode) on an element, or set
cursor: var(--cursor-zoom-in, zoom-in); in CSS. The attribute overrides site
cursor rules on that element. It does not implement zoom, resize, or drag/drop.
Future widgets must update their cursor to match their actual interaction state.

## Compatibility

Native CSS cursor images avoid a JavaScript pointer overlay. PNG is the portable
fallback. Use static files; do not rely on animated ANI/GIF cursors or SVG here.
Oversized images may be rejected. Touch-only devices have no mouse cursor;
iPadOS substantially limits pointer customization. Browser chrome, native menus,
some form-control parts, scrollbars, OS drag indicators, and external iframe
contents remain browser/OS-controlled. This changes the mouse pointer, not the
blinking text caret. Artwork-specific compatibility must be checked once supplied.

Reference: [MDN cursor documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/cursor).
