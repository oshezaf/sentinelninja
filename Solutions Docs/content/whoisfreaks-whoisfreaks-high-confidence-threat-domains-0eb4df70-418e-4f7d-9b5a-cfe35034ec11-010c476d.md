# WhoisFreaks - high confidence threat domains

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies high-confidence malware, phishing, and spam domains from WhoisFreaks threat feeds. The feed reports confidence as a decimal between 0 and 1; this rule alerts on domains with a confidence of 0.8 or higher.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [WhoisFreaks](../solutions/whoisfreaks.md) |
| **ID** | `0eb4df70-418e-4f7d-9b5a-cfe35034ec11` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CommandAndControl |
| **Techniques** | T1566, T1071 |
| **Required Connectors** | [WhoisFreaks](../connectors/whoisfreaks.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WhoisFreaks/Analytic%20Rules/WhoisFreaks-HighConfidenceThreat.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`WhoisFreaksThreat_CL`](../tables/whoisfreaksthreat-cl.md) | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to WhoisFreaks](../solutions/whoisfreaks.md)

