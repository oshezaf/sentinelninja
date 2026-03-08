# WVDManagement

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for WVDManagement table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Virtual Desktop |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wvdmanagement) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (19 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wvdmanagement)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AadTenantId | string | The AAD tenant Id of the user. |
| ArmObjectScope | string | The ARM object scope for the management request - used for session hosts, applications. |
| ClientSideIPAddress | string | The remote IP address from the client side. |
| CorrelationId | string | The activity Id. |
| ObjectsCreated | int | The number of objects that were created. |
| ObjectsDeleted | int | The number of objects that were deleted. |
| ObjectsFetched | int | The number of objects that were fetched. |
| ObjectsUpdated | int | The number of objects that were updated. |
| ProvisioningCorrelationId | string | The ID of the top-level provisioning operation. This maps to the field in WVDSessionHostManagement table called CorrelationId. |
| Route | string | The route for the management request. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of the event. |
| Type | string | The name of the table |
| UserName | string | The user that initiated the management request. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.desktopvirtualization/hostpools`
- `microsoft.desktopvirtualization/applicationgroups`
- `microsoft.desktopvirtualization/workspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

