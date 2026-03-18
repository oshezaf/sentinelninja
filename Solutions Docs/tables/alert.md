# Alert

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for Alert table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Monitor |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/alert) |

## Schema (73 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/alert)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AlertContext | string | Details of the data item that caused the alert to be generated in XML format. |
| AlertDescription | string | Detailed description of the alert. |
| AlertError | string |  |
| AlertId | string | GUID of the alert. |
| AlertName | string | Name of the alert. |
| AlertPriority | string | Priority level of the alert. |
| AlertRuleId | string |  |
| AlertRuleInstanceId | string |  |
| AlertSeverity | string | Severity level of the alert. |
| AlertState | string | Latest resolution state of the alert. |
| AlertStatus | int |  |
| AlertTypeDescription | string |  |
| AlertTypeNumber | int |  |
| AlertValue | int |  |
| Comments | string |  |
| Computer | string |  |
| Custom1 | string |  |
| Custom10 | string |  |
| Custom2 | string |  |
| Custom3 | string |  |
| Custom4 | string |  |
| Custom5 | string |  |
| Custom6 | string |  |
| Custom7 | string |  |
| Custom8 | string |  |
| Custom9 | string |  |
| Expression | string |  |
| Flags | int |  |
| FlagsDescription | string |  |
| HostName | string |  |
| LastModifiedBy | string | Name of the user who last modified the alert. |
| LinkToSearchResults | string |  |
| ManagementGroupName | string | Name of the management group for System Center Operations Manager agents. |
| ObjectDisplayName | string |  |
| PriorityNumber | int |  |
| Query | string |  |
| QueryExecutionEndTime | datetime |  |
| QueryExecutionStartTime | datetime |  |
| RemediationJobId | string |  |
| RemediationRunbookName | string |  |
| RepeatCount | int | Number of times the same alert was generated for the same monitored object since being resolved. |
| ResolvedBy | string | Name of the user who resolved the alert. Empty if the alert has not yet been resolved. |
| ResourceId | string |  |
| ResourceType | string |  |
| ResourceValue | string |  |
| RootObjectName | string |  |
| ServiceDeskConnectionName | string |  |
| ServiceDeskId | string |  |
| ServiceDeskWorkItemLink | string |  |
| ServiceDeskWorkItemType | string |  |
| SourceDisplayName | string | Display name of the monitoring object that generated the alert. |
| SourceFullName | string | Full name of the monitoring object that generated the alert. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StateType | string |  |
| StatusDescription | string |  |
| TemplateId | string |  |
| ThresholdOperator | string |  |
| ThresholdValue | int |  |
| TicketId | string | Ticket ID for the alert if the System Center Operations Manager environment is integrated with a process for assigning tickets for alerts. Empty of no ticket ID is assigned. |
| TimeGenerated | datetime | Date and time the record was created. |
| TimeLastModified | datetime | Date and time that the alert was last changed. |
| TimeRaised | datetime | Date and time that the alert was generated. |
| TimeResolved | datetime | Date and time that the alert was resolved. Empty if the alert has not yet been resolved. |
| TriggerId | string |  |
| Type | string | The name of the table |
| Url | string |  |
| ValueDescription | string |  |
| ValueFlags | int |  |
| ValueFlagsDescription | string |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [WorkspaceUsage](../content/github-only-workspaceusage-97e7cfa7.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

