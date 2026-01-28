# Anomaly of MailItemAccess by Other Users Mailbox [Nobelium]

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query looks for users accessing multiple other users' mailboxes, or accessing multiple folders in another user's mailbox. This query is inspired by an Azure Sentinel detection. Reference - https://github.com/Azure/Azure-Sentinel/blob/master/Hunting%20Queries/OfficeActivity/AnomolousUserAccessingOtherUsersMailbox.yaml

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `6a927d9a-66c3-4491-815d-a31d4bbb2948` |
| **Tactics** | Collection |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Collection/Anomaly%20of%20MailItemAccess%20by%20Other%20Users%20Mailbox%20%5BNobelium%5D.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`CloudAppEvents`](../tables/cloudappevents.md) | `ActionType == "MailItemsAccessed"` | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

