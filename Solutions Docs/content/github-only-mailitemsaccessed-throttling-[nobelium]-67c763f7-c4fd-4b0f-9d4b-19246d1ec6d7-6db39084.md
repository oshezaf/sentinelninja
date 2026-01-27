# MailItemsAccessed Throttling [Nobelium]

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

The MailItemsAccessed action is part of the new Advanced Audit functionality of Microsoft Defender XDR. It's part of Exchange mailbox auditing and is enabled by default for users that have an Office 365 or Microsoft 365 E5 license, or for organizations with a Microsoft 365 E5 Compliance add-on subscription. If more than 1,000 MailItemsAccessed audit records are generated in less than 24 hours, Exchange Online will stop generating auditing records for MailItemsAccessed activity. When a mailbox is

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `67c763f7-c4fd-4b0f-9d4b-19246d1ec6d7` |
| **Tactics** | Exfiltration |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Exfiltration/MailItemsAccessed%20Throttling%20%5BNobelium%5D.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`CloudAppEvents`](../tables/cloudappevents.md) | `ActionType == "MailItemsAccessed"` | ✓ | ✗ |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

