# Top Anomalous Source IP Triage

Identifies the top source IP addresses with multiple distinct anomaly templates over the past 30 days (excluding single noisy hits), then surfaces their most recent (last 24h) high-fidelity anomalous activities for focused investigation, including scores, tactics, techniques, and behavioral insights.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [UEBA Essentials](../solutions/ueba-essentials.md) |
| **ID** | `e1f2a3b4-c5d6-7890-1234-abcdef567890` |
| **Required Connectors** | [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UEBA%20Essentials/Hunting%20Queries/Top%20Anomalous%20Source%20IP%20Triage.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Anomalies`](../tables/anomalies.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to UEBA Essentials](../solutions/ueba-essentials.md)

