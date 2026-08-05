# Multi-Mailbox Access by Single IP via Cloud App Permissions

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a single IP address accessing an abnormally large number of distinct mailboxes via MailItemsAccessed events, indicating a service principal or OAuth app silently reading mail across the organization using granted permissions. Empty UserAgent combined with high mailbox count indicates programmatic API access consistent with app-based exfiltration.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md) |
| **ID** | `c53bf4ae-bd8b-4c72-b9c3-10baa8c13885` |
| **Tactics** | Collection, Exfiltration |
| **Techniques** | T1020, T1537, T1567 |
| **Required Connectors** | [MicrosoftCloudAppSecurity](../connectors/microsoftcloudappsecurity.md), [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hybrid%20Attack%20-%20Cloud%20%26%20Identity/Hunting%20Queries/Exfiltration/MultiMailboxAccessBySingleIP.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CloudAppEvents`](../tables/cloudappevents.md) | `ActionType == "MailItemsAccessed"` | ✓ | ✗ | ✓ |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | `ObservableKey == "ipv4-addr:value"` | ✓ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Hybrid Attack - Cloud & Identity](../solutions/hybrid-attack-cloud-&-identity.md)

