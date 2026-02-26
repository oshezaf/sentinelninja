# LIATrackingEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for LIATrackingEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/liatrackingevents) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (34 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/liatrackingevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AgreementProperties | dynamic | Agreement properties for the electronic data interchange functional group. |
| CorrelationId | string | The ID for correlated events. |
| Error | dynamic | The tracking event error information. |
| EventRecordType | string | The Tracking record type. |
| EventTime | datetime | The event time. |
| MessageProperties | dynamic | Message properties for the electronic data interchange functional group. |
| OperationName | string | The name of the operation represented by this event. |
| OperationVersion | string | The version of the operation represented by this event. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SourceType | string | The tracking events source type. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when this event was generated. |
| TrackingId | string | The tracking ID. |
| Type | string | The name of the table |
| WorkflowName | string | The name of the workflow. |
| WorkflowOperationClientRequestId | string | The client request ID of the logic app operation. |
| WorkflowOperationCorrelationId | string | The correlation ID of the logic app operation. |
| WorkflowOperationName | string | The logic app operation name. |
| WorkflowOperationOperationTrackingId | string | The operation tracking ID of the logic app operation. |
| WorkflowOperationTrackingId | string | The tracking ID of the logic app operation. |
| WorkflowRepeatItemBatchIndex | int | The index of the repeat item batch. |
| WorkflowRepeatItemIndex | int | The repeat item index. |
| WorkflowRepeatItemScopeName | string | The repeat item scope name. |
| WorkflowResourceGroup | string | The resource group name of the workflow. |
| WorkflowRunClientTrackingId | string | The client tracking ID of the run. |
| WorkflowRunId | string | The logic app run ID. |
| WorkflowRunTrackingId | string | The tracking ID of the run. |
| WorkflowSubscriptionId | string | The subscription ID of the workflow. |
| WorkflowSystemId | string | The workflow system tracking ID. |
| WorkflowVersion | string | The version of the workflow. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.logic/integrationaccounts`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

