# Anomalous AWS Console Login Without MFA from Uncommon Country

Detect unusual logon times, MFA fatigue, or service principal misuse across hybrid environments. Get visibility into geo-location of events and Threat Intelligence insights. Here''s an example of how you can easily discover Accounts authenticating without MFA and from uncommonly connected countries using UEBA behaviorAnalytics table:

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [UEBA Essentials](../solutions/ueba-essentials.md) |
| **ID** | `a1b2c3d4-e5f6-7890-abcd-ef1234567890` |
| **Tactics** | InitialAccess, CredentialAccess |
| **Techniques** | T1078, T1110 |
| **Required Connectors** | [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UEBA%20Essentials/Hunting%20Queries/Anomalous%20AWS%20Console%20Login%20Without%20MFA%20from%20Uncommon%20Country.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`BehaviorAnalytics`](../tables/behavioranalytics.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to UEBA Essentials](../solutions/ueba-essentials.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

