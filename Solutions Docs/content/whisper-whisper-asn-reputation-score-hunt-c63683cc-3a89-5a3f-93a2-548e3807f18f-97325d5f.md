# Whisper - ASN Reputation Score Hunt

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects ASN reputation degradation by comparing scores across 24-hour windows, flagging increases greater than 20 points. Helps surface ASNs that became significantly more risky in recent telemetry.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Whisper](../solutions/whisper.md) |
| **ID** | `c63683cc-3a89-5a3f-93a2-548e3807f18f` |
| **Tactics** | Collection, CredentialAccess |
| **Techniques** | T1557 |
| **Required Connectors** | [WhisperSecurityConnector](../connectors/whispersecurityconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Whisper/Hunting%20Queries/BgpAnomalyHunt.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`WhisperASNReputation_CL`](../tables/whisperasnreputation-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Whisper](../solutions/whisper.md)

