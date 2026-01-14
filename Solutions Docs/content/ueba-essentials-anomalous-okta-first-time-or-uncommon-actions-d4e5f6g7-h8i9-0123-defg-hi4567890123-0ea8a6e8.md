# Anomalous Okta First-Time or Uncommon Actions

Detects anomalous Okta activities where a user performs an action that is uncommon in the tenant or connects from a country for the first time. The query focuses on high-priority anomalies and provides key details such as timestamp, action type, source IP, location, and associated user and activity insights for investigation.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [UEBA Essentials](../solutions/ueba-essentials.md) |
| **ID** | `d4e5f6g7-h8i9-0123-defg-hi4567890123` |
| **Tactics** | InitialAccess, CredentialAccess, Persistence |
| **Techniques** | T1078, T1110, T1556 |
| **Required Connectors** | [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UEBA%20Essentials/Hunting%20Queries/Anomalous%20Okta%20First-Time%20or%20Uncommon%20Actions.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`BehaviorAnalytics`](../tables/behavioranalytics.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to UEBA Essentials](../solutions/ueba-essentials.md)

