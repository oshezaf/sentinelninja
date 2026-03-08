# M2131_EventLogManagementPostureChanged_EL1

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This alert is desinged to monitor Azure policies aligned with the Maturity Model for Event Log Management (M-21-31) standard. The alert triggers when EL1 policy compliance falls below 70% within a 1 week timeframe.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md) |
| **ID** | `036ce0a8-a1ff-4731-a078-02b3207fa4f3` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1082 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MaturityModelForEventLogManagementM2131/Analytic%20Rules/M2131EventLogManagementPostureChangedEL1.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SecurityRecommendation`](../tables/securityrecommendation.md) | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to MaturityModelForEventLogManagementM2131](../solutions/maturitymodelforeventlogmanagementm2131.md)

