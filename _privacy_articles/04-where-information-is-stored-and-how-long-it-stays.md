---
title: "4. Where information is stored and how long it stays"
slug: where-information-is-stored-and-how-long-it-stays
order: 5
---

## 4. Where information is stored and how long it stays

Persistent economy, shop, and Patisserie records are stored in **Cloudflare D1**. The current implementation does not automatically expire these records or erase them when you leave a server, uninstall the Bot, or stop using it. They remain until deleted through administration or a data request, or retired with the relevant service data. Retention is based on maintaining your progress and preventing duplicate claims, purchases, and payouts; information no longer needed for those purposes should be removed.

Temporary processing data lasts for the request or runtime session as applicable. Feature state contained in Discord messages can outlast that session and is subject to message deletion and Discord’s retention practices.

Logs, support correspondence, and any provider-managed backups have separate retention. There is no single automatic retention period configured in the Bot for all of these. We limit retention to what is needed to resolve the issue, investigate abuse, maintain security, or meet a legal obligation. Contact us for details relevant to your request; deletion from active storage may not immediately remove provider backup copies.
