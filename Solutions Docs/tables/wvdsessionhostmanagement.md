# WVDSessionHostManagement

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for WVDSessionHostManagement table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Virtual Desktop |
| **Basic Logs Eligible** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wvdsessionhostmanagement) |

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wvdsessionhostmanagement)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ClientType | string | Information about the client that initiated the update (portal, Powershell etc.). |
| CorrelationId | string | The correlation ID for the activity. |
| FailedSessionHostCleanupPolicy | string | The policy for cleaning up session hosts that have failed provisioning. |
| FromInstanceCount | int | The instance count before the operation. For an update operation, FromInstanceCount and ToInstanceCount are the same value. |
| FromSessionHostConfigVer | string | The version of SHC before the operation (that session hosts are moving from; can be looked up with new SHC table). For a provisioning operation, it is the same as the ToSessionHostConfiguration. |
| ProvisioningCanaryPolicy | string | The policy for creating a test canary session host before creating the rest of the requested session hosts. |
| ProvisioningStatus | string | The status of the current update/provisioning operation. |
| ProvisioningType | string | The type of operation (provisioning, update). |
| ScheduledDateTime | string | When the session host update is scheduled, the scheduled time. |
| ScheduledDateTimeZone | string | The time zone that updates and provisioning happen in. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of the event. |
| ToInstanceCount | int | The instance count after the operation. For an update operation, FromInstanceCount and ToInstanceCount are the same value. |
| ToSessionHostConfigVer | string | The version of SHC after the operation (that session hosts are moving to; can be looked up with new SHC table). For a provisioning operation, is the same as the FromSessionHostConfiguration is. |
| Type | string | The name of the table |
| UpdateDeleteOriginalVm | bool | Property indicates whether the original VM should be deleted after the update. |
| UpdateMaxVmsRemoved | int | The maximum number of virtual machines that might become unavailable during the session host update operation. |
| UpdateMethod | string | The method that is used for the session host update operation (e.g.: VmRecreate). |
| UpdateStartWindowInMinutes | int | The window of allowable time for an update to start in minutes. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.desktopvirtualization/hostpools`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

