# Whisper - Infrastructure Pivot Analysis

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Pivots from known-malicious indicators to discover related threat infrastructure sharing ASNs, IP addresses, or registrars.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Whisper](../solutions/whisper.md) |
| **ID** | `4eabcdaa-bbe2-54d8-b930-c8d7b31a015c` |
| **Tactics** | ResourceDevelopment |
| **Techniques** | T1583 |
| **Required Connectors** | [WhisperSecurityConnector](../connectors/whispersecurityconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Whisper/Hunting%20Queries/InfrastructurePivotAnalysis.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`WhisperInfraContext_CL`](../tables/whisperinfracontext-cl.md) | ? | ✓ | ? |
| [`WhisperThreatIntel_CL`](../tables/whisperthreatintel-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Whisper](../solutions/whisper.md)

