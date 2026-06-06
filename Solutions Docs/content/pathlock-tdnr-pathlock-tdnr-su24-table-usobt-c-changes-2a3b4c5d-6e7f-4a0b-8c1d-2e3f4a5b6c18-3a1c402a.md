# Pathlock TDnR - SU24 Table USOBT_C Changes

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects changes to the SU24 authorization check table USOBT_C in SAP, forwarded by Pathlock Threat Detection and Response. USOBT_C defines default authorization field values for transactions; unauthorized changes may allow privilege escalation by modifying authorization check behavior.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Pathlock_TDnR](../solutions/pathlock-tdnr.md) |
| **ID** | `2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c18` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, PrivilegeEscalation |
| **Techniques** | T1562, T1548 |
| **Required Connectors** | [Pathlock_TDnR](../connectors/pathlock-tdnr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Pathlock_TDnR/Analytic%20Rules/Pathlock_TDnR_CHANGEDOC_USOBT_C.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Pathlock_TDnR](../solutions/pathlock-tdnr.md)

