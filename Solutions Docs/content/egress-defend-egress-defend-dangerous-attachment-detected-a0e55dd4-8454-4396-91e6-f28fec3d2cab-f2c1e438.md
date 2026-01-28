# Egress Defend - Dangerous Attachment Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Defend has detected a user has a suspicious file type from a suspicious sender in their mailbox.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Egress Defend](../solutions/egress-defend.md) |
| **ID** | `a0e55dd4-8454-4396-91e6-f28fec3d2cab` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution, InitialAccess, Persistence, PrivilegeEscalation |
| **Techniques** | T1204, T0853, T0863, T1566, T1546, T1546 |
| **Required Connectors** | [EgressDefend](../connectors/egressdefend.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Egress%20Defend/Analytic%20Rules/DangerousAttachmentReceived.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`EgressDefend_CL`](../tables/egressdefend-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Egress Defend](../solutions/egress-defend.md)

