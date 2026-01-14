# Microsoft Entra ID Role Management Permission Grant

'Identifies when the Microsoft Graph RoleManagement.ReadWrite.Directory (Delegated or Application) permission is granted to a service principal. This permission allows an application to read and manage the role-based access control (RBAC) settings for your company's directory. An adversary could use this permission to add an Microsoft Entra ID object to an Admin directory role and escalate privileges. Ref : https://docs.microsoft.com/graph/permissions-reference#role-management-permissions Ref :

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |
| **ID** | `1ff56009-db01-4615-8211-d4fda21da02d` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, Impact |
| **Techniques** | T1098.003, T1078.004 |
| **Required Connectors** | [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID/Analytic%20Rules/AzureADRoleManagementPermissionGrant.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AuditLogs`](../tables/auditlogs.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Microsoft Entra ID](../solutions/microsoft-entra-id.md)

