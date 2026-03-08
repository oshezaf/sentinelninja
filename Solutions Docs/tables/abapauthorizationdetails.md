# ABAPAuthorizationDetails

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ABAPAuthorizationDetails table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/abapauthorizationdetails) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (22 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/abapauthorizationdetails)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AgentId | string | Unique agent or integration suite identifier. |
| Authorization | string | The authorization identifier. |
| AuthorizationGroup | string | The authorization group. |
| ChildRole | string | The child role name, if the role is a composite one. |
| ClientId | string | The ClientId is a three-digit number that identifies a specific client within an SAP system. The ClientId is used in various SAP transactions and configuration settings to identify the client and ensure that the correct client is being accessed or configured. |
| Field | string | The authorization field name. |
| High | string | The high value of the authorization field. |
| Low | string | The low value of the authorization field. |
| Object | string | The authorization object name. |
| Role | string | The SAP role name. |
| RoleType | string | Single or composite role |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SystemId | string | The SystemId is a unique identifier for a specific SAP system. It is a three-character alphanumeric code that is used to distinguish between different SAP systems. |
| SystemRole | string | The SAP system's role. |
| SystemUniqueId | string | Unique system identifier. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when the record was generated |
| Type | string | The name of the table |
| TypeOfChange | string | I and J for insert, U for update, D and E for deletion. |
| UpdatedOn | datetime | The date and time when the role was last updated. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

