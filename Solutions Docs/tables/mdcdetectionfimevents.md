# MDCDetectionFimEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for MDCDetectionFimEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/mdcdetectionfimevents) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/mdcdetectionfimevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AdditionalData | dynamic | Holds Additional Data. |
| AgentId | string | Holds the Tivan Agent Id. |
| AzureResourceId | string | The Azure resource ID of the resource whose monitored entity was created, renamed, modified or deleted. |
| Computer | string | The name of the machine on which the monitored entity was created, renamed, modified or deleted. |
| DataPipelineMetadata | dynamic | Holds Data PipelineMetadata. |
| EventType | string | The type of change that occurred on the entity. Must be either 'Created', 'Modified', 'Renamed' or 'Deleted'. |
| FileName | string | Holds the name of the file that was created, renamed, modified or deleted. |
| FilePath | string | Holds the path of the file that was created, renamed, modified or deleted. |
| FileType | string | Holds the type of the file that was created, renamed, modified or deleted. Example of possible values: Zip, PDF, Xar etc. |
| InitiatingParentProcessId | string | Holds the process Id of the initiating parents process that caused the monitored entity event. |
| InitiatingParentProcessName | string | Holds the name of the initiating parents process that caused the monitored entity event. |
| InitiatingProcessAccountDomainName | string | Holds the name of the process account domain that caused the monitored entity event. |
| InitiatingProcessAccountName | string | Holds the name of the process account that caused the monitored entity event. |
| InitiatingProcessId | string | Holds the process Id of the initiating process that caused the monitored entity event. |
| InitiatingProcessName | string | Holds the name of the initiating process that caused the monitored entity event. |
| Inode | int | Holds the Tivan Agent Id. |
| IsDir | bool | True if event is for a directory, false if event is for a file. |
| Region | string | The region the resource whose monitored entity was created, renamed, modified or deleted. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time (UTC) when the monitored entity was created, renamed, modified or deleted. |
| Type | string | The name of the table |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

