# TacitRed - Repeat Compromise Detection

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects users who have been compromised multiple times within a 7-day window. This may indicate a persistent threat or inadequate remediation.  Ref: https://data443.com/tacitred-attack-surface-intelligence/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [TacitRedThreatIntelligence](../solutions/tacitredthreatintelligence.md) |
| **ID** | `a1b2c3d4-e5f6-7890-abcd-ef1234567890` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Persistence |
| **Techniques** | T1078 |
| **Required Connectors** | [TacitRedThreatIntel](../connectors/tacitredthreatintel.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TacitRedThreatIntelligence/Analytic%20Rules/TacitRed%20-%20Repeat%20Compromise%20Detection.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`BehaviorAnalytics`](../tables/behavioranalytics.md) | ✓ | ✗ | ? |
| [`TacitRed_Findings_CL`](../tables/tacitred-findings-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to TacitRedThreatIntelligence](../solutions/tacitredthreatintelligence.md)

