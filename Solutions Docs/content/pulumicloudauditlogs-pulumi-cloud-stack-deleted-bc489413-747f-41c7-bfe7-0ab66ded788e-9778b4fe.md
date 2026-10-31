# Pulumi Cloud - Stack deleted

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies deletion of a Pulumi stack. Stack deletion is a destructive operation that removes the stack's infrastructure state, and may be legitimate maintenance or unauthorized activity.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [PulumiCloudAuditLogs](../solutions/pulumicloudauditlogs.md) |
| **ID** | `bc489413-747f-41c7-bfe7-0ab66ded788e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1485 |
| **Required Connectors** | [PulumiAuditLogsDefinition](../connectors/pulumiauditlogsdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PulumiCloudAuditLogs/Analytic%20Rules/StackDeletion.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PulumiAuditLogs_CL`](../tables/pulumiauditlogs-cl.md) 🔶 | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to PulumiCloudAuditLogs](../solutions/pulumicloudauditlogs.md)

