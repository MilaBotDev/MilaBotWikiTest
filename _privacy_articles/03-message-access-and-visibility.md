---
title: "3. Message access and visibility"
slug: message-access-and-visibility
order: 6
---

## 3. Message access and visibility

MilaBot receives Discord interactions rather than a continuous stream of ordinary server messages. It processes selected message content for features such as quoting.

**Treat a command result as visible to everyone who can access its destination unless Discord labels it as only visible to you.** A discreet or ephemeral response does not prevent the Bot and Discord from processing the interaction, or make an underlying moderation action invisible in Discord’s records.

- **Leaderboards:** worldwide rankings can display your saved name, balance or Orbs, and position outside your own server. A user ID may appear when a name is unavailable. Economy progress is linked to your account across servers. There is currently no dedicated leaderboard opt-out control.
- **Quotes and media:** copies may identify the original author and the person requesting them. Deleting the source message or changing an avatar does not automatically remove a previously generated copy.
- **Tickets:** private threads are accessible according to Discord permissions, including to authorized server staff. Locking or archiving a ticket does not delete its history. The current ticket feature does not export a separate transcript database.
- **Roles and moderation:** messages, role assignments, and audit records can be visible to members or staff with the appropriate permissions.
- **Games and collections:** displayed teams, inventories, outcomes, and game state can remain in Discord messages after play ends. Data encoded in a message control should not be treated as confidential.
