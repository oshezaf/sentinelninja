# [Entra ID] Application Granted Administrative Permission to Assign Microsoft Entra ID Roles

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when an application receives permission to assign Microsoft Entra ID roles. This can enable directory privilege escalation and should be reviewed immediately.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [eDCRule](../solutions/edcrule.md) |
| **ID** | `ef34b272-930c-41c8-a682-8c2093cd2024` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, Impact, PrivilegeEscalation |
| **Techniques** | T1098.003 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/eDCRule/Analytic%20Rules/%5BEntra%20ID%5D%20Application%20Granted%20Administrative%20Permission%20to%20Assign%20Microsoft%20Entra%20ID%20Roles.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AuditLogs`](../tables/auditlogs.md) | `LoggedByService == "Core Directory"`<br>`OperationName in "Add app role assignment to service principal,Add delegated permission grant"` | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to eDCRule](../solutions/edcrule.md)

