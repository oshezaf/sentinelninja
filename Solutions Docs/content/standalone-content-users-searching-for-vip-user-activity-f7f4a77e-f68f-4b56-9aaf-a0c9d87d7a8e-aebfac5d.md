# Users searching for VIP user activity

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query monitors for users running Log Analytics queries that contain filters for specific, defined VIP user accounts or the VIPUser watchlist template. Use this detection to alert for users specifically searching for activity of sensitive users.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `f7f4a77e-f68f-4b56-9aaf-a0c9d87d7a8e` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | Collection, Exfiltration |
| **Techniques** | T1530, T1213, T1020 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/LAQueryLogs/UserSearchingForVIPUserActivity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`LAQueryLogs`](../tables/laquerylogs.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

