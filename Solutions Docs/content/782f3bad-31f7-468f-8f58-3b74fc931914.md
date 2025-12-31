# Anomalous Resource Access

The adversary may be trying to move through the environment. APT29 and APT32, for example, have used PtH and PtT techniques to lateral move around the network. The query below generates an output of all users performing resource access (4624:3) to devices for the first time.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [UEBA Essentials](../solutions/ueba-essentials.md) |
| **ID** | `782f3bad-31f7-468f-8f58-3b74fc931914` |
| **Tactics** | LateralMovement |
| **Techniques** | T1550 |
| **Required Connectors** | [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UEBA%20Essentials/Hunting%20Queries/Anomalous%20Resource%20Access.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`BehaviorAnalytics`](../tables/behavioranalytics.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to UEBA Essentials](../solutions/ueba-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
