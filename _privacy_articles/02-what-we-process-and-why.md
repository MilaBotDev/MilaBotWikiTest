---
title: "2. What we process and why"
slug: what-we-process-and-why
order: 7
---

## 2. What we process and why

The information involved depends on the feature you use and the permissions Discord provides.

| Feature or activity | Information involved and purpose |
| --- | --- |
| Commands and interactive controls | Discord user IDs, usernames, display names, avatars, server and channel IDs, interaction and message IDs, command options, button identifiers, menu selections, and permissions. These let us deliver replies, identify participants, and check who may perform an action. Temporary interaction tokens let the Bot reply through Discord. |
| Economy, rewards, and shop | User ID, saved display name, Milacoin balance, daily and weekly claim periods, inventory quantities, and purchase records containing interaction/request ID, item, quantity, virtual price, and timestamp. These support rewards, purchases, ownership, and prevention of duplicate processing. |
| Patisserie and candy games | Candy and plate inventories, bake times, Vitrine slots and equipment, candy experience and levels, bakery level, Expansion Orbs, customer progress, and ShowOff cooldowns. These let you continue your collection and gameplay between sessions. |
| Virtual wagering | User ID, wager cooldowns, and, where needed, round ID, bet amount, and settlement status. These support virtual games and prevent repeated payouts. |
| Ongoing privacy restrictions | Your Discord user ID and the type of restriction agreed through support. This minimal record is used to enforce the restriction and retained while needed for that purpose, separately from gameplay data. |
| Leaderboards and opponents | Saved account names, IDs, balances, Orbs, rankings, and relevant collection or team information. Server leaderboards retrieve current server members to filter results. |
| Board, card, dice, and party games | Participant IDs and names, choices, moves, boards, scores, outcomes, and game settings. State may be carried in Discord messages, embeds, or interactive controls, or held in runtime memory. |
| Social and entertainment commands | Selected users, submitted questions or names, chosen styles, and interaction state used for affectionate actions, return actions, summons, fortunes, and playful results. |
| Media and quotes | Selected users’ avatars or banners; submitted emoji, sticker, or image URLs; frame choices; and selected message text, author details, and message ID. These are used to retrieve, transform, copy, or publish the requested media or quote. |
| Moderation, roles, and server tools | Server, channel, member, and role information; permissions; action targets; moderator identity; reasons and durations; role-panel settings; and relevant server statistics. These support authorized server actions and Discord audit records. |
| Tickets | Ticket opener ID and name, thread and message IDs, and controls for opening and locking a private Discord thread. Conversation messages remain in Discord. |
| Dictionary, conversions, and encoding | Search terms, measurements, text, code selections, and any supplied cipher key needed to produce a result. Relevant command text is also checked against the configured banned-word list. |
| Reliability and support | Error details, timestamps, request metadata, and information submitted in support reports. These help diagnose failures, protect the service, and respond to requests. Errors can contain identifiers or portions of submitted data. |

MilaBot does not request Discord passwords, user account tokens, payment card details, or identity documents. Please avoid submitting private or sensitive information in command text, quotes, tickets, or support attachments. Encoding and cipher commands are entertainment and utility tools, not secure storage or confidential messaging.

The LGBTQIA+ dictionary retrieves definitions; it does not require you to disclose your identity. "/gaycounter" produces a playful result, not a factual assessment of sexuality. The current command flow does not create stored profiles of gender, sexuality, or romantic orientation.
