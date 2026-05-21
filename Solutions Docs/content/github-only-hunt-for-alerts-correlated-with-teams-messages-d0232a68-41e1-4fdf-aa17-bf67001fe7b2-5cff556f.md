# Hunt for alerts correlated with Teams messages

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Correlates Microsoft Teams message activity with downstream Defender alerts on the recipient (victim) identity, surfacing potential phishing or social-engineering chats that are followed by alert activity within a tunable time window.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `d0232a68-41e1-4fdf-aa17-bf67001fe7b2` |
| **Tactics** | InitialAccess, Discovery |
| **Techniques** | T1566, T1078 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Email%20and%20Collaboration%20Queries/Microsoft%20Teams%20protection/Hunt%20for%20alerts%20correlated%20with%20Teams%20messages.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AlertEvidence`](../tables/alertevidence.md) |  | ✓ | ✗ | ? |
| [`CloudAppEvents`](../tables/cloudappevents.md) | `ActionType == "ChatCreated"` | ✓ | ✗ | ? |
| [`Event`](../tables/event.md) |  | ✓ | ✓ | ? |
| [`MessageEvents`](../tables/messageevents.md) |  | ? | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

