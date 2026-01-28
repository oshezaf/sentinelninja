# Doc attachment with link to download

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query looks for a Word document attachment, from which a link was clicked, and after which there was a browser download. This query is not noisy, but most of its results are clean. It can also hserve as reference for other queries on email attachments, on browser downloads or for queries that join multiple events by time. Tags: #EmailAttachment, #WordLink, #BrowserDownload, #Phishing, #DedupFileCreate. Implementation comment #1: Matching events by time. Matching the 3 different events (savi

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `cf259a7a-801a-435a-af3f-3ef998561145` |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Delivery/Doc%20attachment%20with%20link%20to%20download.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`DeviceEvents`](../tables/deviceevents.md) | `ActionType == "BrowserLaunchedToOpenUrl"` | ✓ | ✗ |
| [`DeviceFileEvents`](../tables/devicefileevents.md) |  | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

