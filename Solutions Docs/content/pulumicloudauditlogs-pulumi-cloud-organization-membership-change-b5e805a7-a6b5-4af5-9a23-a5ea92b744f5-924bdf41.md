# Pulumi Cloud - Organization membership change

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies changes to Pulumi Cloud organization membership, including members being added, removed, or having their roles changed. These events track access control changes to the infrastructure management platform and should correspond to expected administrative activity.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [PulumiCloudAuditLogs](../solutions/pulumicloudauditlogs.md) |
| **ID** | `b5e805a7-a6b5-4af5-9a23-a5ea92b744f5` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1098 |
| **Required Connectors** | [PulumiAuditLogsDefinition](../connectors/pulumiauditlogsdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PulumiCloudAuditLogs/Analytic%20Rules/OrgMemberChanges.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PulumiAuditLogs_CL`](../tables/pulumiauditlogs-cl.md) 🔶 | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to PulumiCloudAuditLogs](../solutions/pulumicloudauditlogs.md)

