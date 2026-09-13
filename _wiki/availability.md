---
title: Feature availability
category: Reference
summary: What this wiki covers and why the command picker can differ between bot versions.
kind: guide
---

## Version covered

This wiki documents the bot source supplied on **13 September 2026**. The command directory follows its public Worker registration configuration. Treat stats, plates, customers, progression costs, and game rules come from the supplied configuration and implementations.

The live bot can change independently. Its current command picker and responses take precedence when an option or value differs.

## Two implementations

The supplied project contains a Cloudflare Worker and a Discord gateway application. Their available commands are not identical. Patisserie, saved economy, and the private data menu are implemented in the Worker modules.

The gateway source additionally contains **/quotable** for rendering a message link into a quote image, **/buttonrole** for role buttons, and **/stickerenlarge** for enlarging stickers. These are not entries in the supplied Worker command list. They should not be assumed available on the running bot.

## Artwork versus active content

The icon gallery includes the supplied emoji artwork, including some unused assets. An image’s presence does not imply an obtainable item or an active ability. For example, Flockade’s Trickster+ artwork exists, but the active piece definitions omit that blessing.

## Seasons

The bot’s reward and shop seasons use UTC dates and exclude the configured end date. These seasons are independent of the website’s visual background and logo seasons.

## Staff-only features

The source also includes private developer and administrative controls. They are not part of the public command directory. The wiki focuses on the commands and mechanics available to users and server moderators.
