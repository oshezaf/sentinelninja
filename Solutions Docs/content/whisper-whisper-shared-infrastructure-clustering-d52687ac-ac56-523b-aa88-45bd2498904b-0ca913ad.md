# Whisper - Shared Infrastructure Clustering

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Discovers threat actor infrastructure clusters by grouping indicators by shared ASN, prefix, registrar, or nameserver with elevated threat scores.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Whisper](../solutions/whisper.md) |
| **ID** | `d52687ac-ac56-523b-aa88-45bd2498904b` |
| **Tactics** | ResourceDevelopment |
| **Techniques** | T1583.003 |
| **Required Connectors** | [WhisperSecurityConnector](../connectors/whispersecurityconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Whisper/Hunting%20Queries/SharedInfrastructureClustering.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`WhisperInfraContext_CL`](../tables/whisperinfracontext-cl.md) | ? | ✓ | ? |
| [`WhisperThreatIntel_CL`](../tables/whisperthreatintel-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Whisper](../solutions/whisper.md)

