# Valimail Enforce - Unusual Rate of Configuration Changes or User Additions

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query searches for a single user performing more than 3 configuration changes or user additions within a 1-hour window on any domain. An unusual burst of changes may indicate a compromised admin account, unauthorized automation, or insider threat.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ValimailEnforce](../solutions/valimailenforce.md) |
| **ID** | `3cbb78d9-81ac-42c9-b3cd-7e6baea7d9ff` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact, DefenseEvasion, PrivilegeEscalation |
| **Techniques** | T1562, T1531, T1078 |
| **Required Connectors** | [ValimailEnforce](../connectors/valimailenforce.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ValimailEnforce/Analytic%20Rules/ValimailEnforce_UnusualChangeRate.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ValimailEnforceEvents_CL`](../tables/valimailenforceevents-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to ValimailEnforce](../solutions/valimailenforce.md)

