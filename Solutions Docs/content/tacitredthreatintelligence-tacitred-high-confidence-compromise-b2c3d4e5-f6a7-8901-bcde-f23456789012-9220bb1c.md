# TacitRed - High Confidence Compromise

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects compromised credentials with high confidence scores. High confidence findings indicate verified credential compromises that require immediate attention.  Ref: https://data443.com/tacitred-attack-surface-intelligence/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [TacitRedThreatIntelligence](../solutions/tacitredthreatintelligence.md) |
| **ID** | `b2c3d4e5-f6a7-8901-bcde-f23456789012` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, InitialAccess, Reconnaissance |
| **Techniques** | T1078, T1589 |
| **Required Connectors** | [TacitRedThreatIntel](../connectors/tacitredthreatintel.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TacitRedThreatIntelligence/Analytic%20Rules/TacitRed%20-%20High%20Confidence%20Compromise.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`TacitRed_Findings_CL`](../tables/tacitred-findings-cl.md) | — | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to TacitRedThreatIntelligence](../solutions/tacitredthreatintelligence.md)

