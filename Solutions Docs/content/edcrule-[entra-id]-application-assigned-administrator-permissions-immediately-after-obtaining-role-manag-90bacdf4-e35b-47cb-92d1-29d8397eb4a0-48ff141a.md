# [Entra ID] Application Assigned Administrator Permissions Immediately After Obtaining Role Management Permissions

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects an application receiving administrator permissions and then using them to assign a role. This pattern can indicate rapid privilege escalation through app consent abuse.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [eDCRule](../solutions/edcrule.md) |
| **ID** | `90bacdf4-e35b-47cb-92d1-29d8397eb4a0` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, PrivilegeEscalation, DefenseEvasion, InitialAccess |
| **Techniques** | T1078.004, T1098.003 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/eDCRule/Analytic%20Rules/%5BEntra%20ID%5D%20Application%20Assigned%20Administrator%20Permissions%20Immediately%20After%20Obtaining%20Role%20Management%20Permissions.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AuditLogs`](../tables/auditlogs.md) | `AADOperationType == "Assign"`<br>`LoggedByService == "Core Directory"`<br>`OperationName == "Add app role assignment to service principal"` | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to eDCRule](../solutions/edcrule.md)

