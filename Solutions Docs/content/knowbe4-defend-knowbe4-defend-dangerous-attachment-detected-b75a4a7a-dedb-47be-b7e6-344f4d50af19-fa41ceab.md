# KnowBe4 Defend - Dangerous Attachment Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Defend has detected a user has a suspicious file type from a suspicious sender in their mailbox.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [KnowBe4 Defend](../solutions/knowbe4-defend.md) |
| **ID** | `b75a4a7a-dedb-47be-b7e6-344f4d50af19` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution, InitialAccess, Persistence, PrivilegeEscalation |
| **Techniques** | T1204, T0853, T0863, T1566, T1546, T1546 |
| **Required Connectors** | [KnowBe4Defend](../connectors/knowbe4defend.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/KnowBe4%20Defend/Analytic%20Rules/KnowBe4DangerousAttachmentReceived.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`EgressDefend_CL`](../tables/egressdefend-cl.md) 🔶 | ? | ✓ | ? |
| [`KnowBe4Defend_CL`](../tables/knowbe4defend-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to KnowBe4 Defend](../solutions/knowbe4-defend.md)

