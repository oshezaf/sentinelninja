# Anomaly of MailItemAccess by GraphAPI [Nobelium]

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query looks for anomalies in mail item access events made by Graph API. It uses standard deviation to determine if the number of events is anomalous. The query returns all clientIDs where the amount of mail sent per day was larger than value given by the formula, 'average + STDThreshold(2.5)*(standard deviation)'. See The MailItemsAccessed mailbox auditing action. Reference - https://docs.microsoft.com/microsoft-365/compliance/mailitemsaccessed-forensics-investigations?view=o365-worldwide#t

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `5cb88a85-f9d9-48eb-a23a-55960f0f8ad4` |
| **Tactics** | Exfiltration |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Exfiltration/Anomaly%20of%20MailItemAccess%20by%20GraphAPI%20%5BNobelium%5D.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`CloudAppEvents`](../tables/cloudappevents.md) | `ActionType == "MailItemsAccessed"` | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

