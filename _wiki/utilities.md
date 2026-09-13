---
title: Utilities & data controls
category: Utilities
summary: Conversions, encoders, help, latency, and private account-data controls.
kind: guide
---

## Measurements

**/conversion** takes a number, a source unit, and a destination unit. Unit inputs provide autocomplete suggestions. Choose compatible units; the bot reports unsupported or incompatible conversions.

## Text encoders

**/encoder** and **/decoder** transform text using the available method choices. Consult their command pages for the supported formats and required input. These transformation tools should not be treated as a way to keep public text secret.

## Help and connectivity

**/help** opens the bot’s help browser. **/ping** checks its response latency. If a feature does not appear, see [feature availability]({{ '/wiki/availability/' | relative_url }}).

## PrivacyAndData

**/privacyanddata** opens a private menu for deleting saved bot data and opting out of worldwide leaderboards.

The worldwide opt-out applies to worldwide ranking results, including your own reported worldwide rank. It does not remove existing Discord messages or change server rankings.

Deletion removes the caller’s current saved records covered by the feature. It preserves leaderboard opt-outs and administrative privacy restrictions. New interactions can create new records afterwards. Discord messages, support correspondence, and provider backups are outside this menu’s database deletion.

For the governing explanation and other requests, read the [Privacy Policy]({{ '/privacy/' | relative_url }}) and use the private support route it describes.
