# Anomalous Password Reset

'Adversaries may interrupt the availability of system and network resources by inhibiting access to accounts utilized by legitimate users. Accounts may be deleted, locked, or manipulated (ex: changed credentials) to remove access to them. LockerGoga, for example, has been observed changing account passwords and logging off current users. The query below generates an output of all users performing Reset User Password where one or more features of the activity deviate from the user, his peers, or

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [UEBA Essentials](../solutions/ueba-essentials.md) |
| **ID** | `22b0262c-b6b5-4f15-82a4-93663e9965d7` |
| **Tactics** | Impact |
| **Techniques** | T1531 |
| **Required Connectors** | [BehaviorAnalytics](../connectors/behavioranalytics.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UEBA%20Essentials/Hunting%20Queries/Anomalous%20Password%20Reset.yaml) |

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
