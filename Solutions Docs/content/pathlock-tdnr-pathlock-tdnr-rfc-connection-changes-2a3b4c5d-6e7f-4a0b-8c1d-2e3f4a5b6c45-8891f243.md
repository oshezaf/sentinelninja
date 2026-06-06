# Pathlock TDnR - RFC Connection Changes

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects changes to RFC (Remote Function Call) connection definitions in SAP (transaction SM59), forwarded by Pathlock Threat Detection and Response. Unauthorized RFC changes may introduce backdoor connections, redirect communications to malicious systems, or enable lateral movement across SAP landscapes.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Pathlock_TDnR](../solutions/pathlock-tdnr.md) |
| **ID** | `2a3b4c5d-6e7f-4a0b-8c1d-2e3f4a5b6c45` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement, Persistence |
| **Techniques** | T1021, T1098 |
| **Required Connectors** | [Pathlock_TDnR](../connectors/pathlock-tdnr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Pathlock_TDnR/Analytic%20Rules/Pathlock_TDnR_RFC_DESTINATIONS.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Pathlock_TDnR_CL`](../tables/pathlock-tdnr-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Pathlock_TDnR](../solutions/pathlock-tdnr.md)

