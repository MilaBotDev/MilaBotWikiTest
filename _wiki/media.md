---
title: Images, emojis & quotes
category: Media
summary: Avatar tools, expression cloning, message quotes, and Uwuify.
kind: guide
---

## Avatars and banners

**/pfptaker** retrieves an avatar; **/bannertaker** retrieves a banner. **/pfpframer** adds a selected frame, and **/pfpwantedposter** makes a wanted-poster image.

The supplied frame choices include Lesbian, Trans, Pride, Bi, Pan, Gay, Nonbinary, and Aroace, each with a gradient variant. Choose the frame in Discord’s command picker.

## Enlarge and clone expressions

**/emojienlarge** accepts a custom emoji, Unicode emoji, or sticker URL. **/emojiclone** accepts a custom Discord emoji, sticker URL, or Discord-hosted image URL and can create an emoji or sticker in the current server. The command includes optional name and sticker-tag inputs.

**/stickerclone** is another entry point for sticker cloning. The message actions **Clone Emoji** and **Clone Sticker** work on a selected message. Cloning needs the relevant expression permissions and available server capacity.

## Quote a message

Use **quote** from a message’s **Apps** context menu. The bot publishes the selected text with author information, a message identifier, and a theme selector. Only the user who created that quote can change its theme.

Themes include Pink, Purple, Blue, Black, White, Red, Orange, Yellow, Green, Teal, Cyan, Navy, Lavender, Magenta, Coral, Peach, Mint, Gold, Brown, and Gray.

The source also contains **/quotable**, an image-quote command in the gateway implementation. It is not in the supplied Worker registration list; see [feature availability]({{ '/wiki/availability/' | relative_url }}).

## Uwuify

Select **Uwuify** from a message’s **Apps** menu to transform its text into a playful style. This is a message action, so it does not use a slash-command text input.
