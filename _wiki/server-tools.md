---
title: Server tools
category: Server tools
summary: Moderation, role panels, tickets, giveaways, and server information.
kind: guide
---

## Moderation

**/ban**, **/kick**, **/mute**, and **/unmute** act on server members. **/role** manages a member’s roles. The user and bot need permission for the requested action, and role hierarchy can prevent an action against a higher-ranked member or role.

Check each command’s [reference page]({{ '/wiki/commands/' | relative_url }}) for target, reason, duration, and other inputs. The bot’s error response identifies missing permissions or invalid targets.

## Role-button panels

Use **/rolebuttons** to post an embed with up to ten role buttons. The first button has dedicated name, type, and role inputs. Additional buttons use the format:

```text
Button name | Add and Remove | @Role
```

Supported types are **Add and Remove**, **Add only**, and **Remove only**. An optional excluded role prevents its members from using the panel. The optional channel and color control where the panel appears and how it looks.

**/rolebuttonsfetch** returns the command needed to recreate a panel from its message ID. **/rolebuttonsedit** edits an existing panel. Both have Administrator as their configured default member permission; creating a panel defaults to Manage Roles.

## Tickets

**/tickets** posts a private support-ticket panel. Choose an administrator/moderator role to notify and a mode:

- **Default:** the opener can close their ticket without moderator approval.
- **Limited:** closing needs moderator approval, and the bot restricts the opener to one active Limited ticket.

Tickets use private Discord threads. Staff should check the panel’s channel and thread permissions before relying on it as a support route.

## Giveaways

**/giveaway start** takes a duration, a prize, and **1–20 winners**, with an optional channel. Members enter through reactions. **Closing and drawing are manual**: the displayed duration is informational and does not automatically end the giveaway.

## Information

**/roleinfo** shows information about a role, and **/serverstats** shows server information. These can help you check the context before configuring a panel or moderation action.
