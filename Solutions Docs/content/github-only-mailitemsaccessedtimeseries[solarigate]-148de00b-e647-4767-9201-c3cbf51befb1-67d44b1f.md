# MailItemsAccessedTimeSeries[Solarigate]

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies anomalous increases in Exchange mail items accessed operations. The query leverages KQL built-in anomaly detection algorithms to find large deviations from baseline patterns. Sudden increases in execution frequency of sensitive actions should be further investigated for malicious activity. Manually change scorethreshold from 1.5 to 3 or higher to reduce the noise based on outliers flagged from the query criteria. Read more about MailItemsAccessed- https://docs.microsoft.com/microsoft-

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `148de00b-e647-4767-9201-c3cbf51befb1` |
| **Tactics** | Collection |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Collection/MailItemsAccessedTimeSeries%5BSolarigate%5D.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`CloudAppEvents`](../tables/cloudappevents.md) | ✓ | ✗ |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

