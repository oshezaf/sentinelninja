# MicrosoftAzureBastionAuditLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for MicrosoftAzureBastionAuditLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/microsoftazurebastionauditlogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (25 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/microsoftazurebastionauditlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ClientIpAddress | string | Browser IP Address that was used to log into the VirtualMachine from Bastion |
| ClientPort | int | Browser Port Number that was used to log into the VirtualMachine from Bastion |
| Duration | int | Duration in milliseconds where the Bastion Session lasted (available only when the Bastion Session ended) |
| Location | string | The location of the server that processed the request (e.g., South Central US). |
| Message | string | Additonal text that's assoicated of this event |
| OperationName | string | The name of the operation represented by this event |
| Protocol | string | Protocol (could be ssh or rdp) that was used to log into the VirtualMachine from Bastion |
| ResourceType | string | Resource Type that was accessed during the session. This could be a VM/VMSS/BSL/etc. |
| SessionEndTime | string | Timestamp (UTC) of when the Bastion Session was ended |
| SessionStartTime | datetime | Timestamp (UTC) of when the Bastion Session was started |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TargetResourceId | string | ResourceID of the VirtualMachine where the Bastion was connected to |
| TargetVMIPAddress | string | IP Address of VirtualMachine where the Bastion was connected to |
| TenantId | string | The Log Analytics workspace ID |
| Time | datetime | The timestamp (UTC) of the log |
| TimeGenerated | datetime |  |
| TunnelId | string | Internal Bastion Connection GUID |
| Type | string | The name of the table |
| UserAgent | string | Browser User Agent that the request was sent |
| UserEmail | string | UserEmail account that was used to log into the VirtualMachine |
| UserName | string | UserName that was used to log into the VirtualMachine from Bastion |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.network/bastionhosts`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

