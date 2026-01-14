# Anomalous Database Export Activity

Adversaries may attempt to exfiltrate sensitive data by exporting databases. The query identifies users performing an "Export database" operation where one or more behavioral features deviate from the user''s baseline, peer group, or the tenant profile.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [UEBA Essentials](../solutions/ueba-essentials.md) |
| **ID** | `8cf3c78e-cd10-4bfb-bd69-d62dc7f375f1` |
| **Tactics** | Collection |
| **Techniques** | T1530 |
| **Required Connectors** | [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UEBA%20Essentials/Hunting%20Queries/Anomalous%20Database%20Export%20Activity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`BehaviorAnalytics`](../tables/behavioranalytics.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to UEBA Essentials](../solutions/ueba-essentials.md)

