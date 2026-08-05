# Whisper - Attack Surface Discovery

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Enumerates all external IPs, domains, and ASNs from WhisperInfraContext_CL cross-referenced with threat scores from WhisperThreatIntel_CL, producing a prioritized risk inventory.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Whisper](../solutions/whisper.md) |
| **ID** | `507b09cf-ef98-56d5-9d56-b23ae8e1df94` |
| **Tactics** | Discovery |
| **Techniques** | T1046 |
| **Required Connectors** | [WhisperSecurityConnector](../connectors/whispersecurityconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Whisper/Hunting%20Queries/AttackSurfaceDiscovery.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`WhisperInfraContext_CL`](../tables/whisperinfracontext-cl.md) | ? | ✓ | ? |
| [`WhisperThreatIntel_CL`](../tables/whisperthreatintel-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Whisper](../solutions/whisper.md)

