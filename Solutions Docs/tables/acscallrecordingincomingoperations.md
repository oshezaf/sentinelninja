# ACSCallRecordingIncomingOperations

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ACSCallRecordingIncomingOperations table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acscallrecordingincomingoperations) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (21 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acscallrecordingincomingoperations)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| CallConnectionId | string | Id of the call connection/leg, if available. |
| CallerIpAddress | string | The caller IP address, if the operation corresponds to an API call that would come from an entity with a publicly available IP address. |
| CorrelationId | string | The ID for correlated events. Can be used to identify correlated events between multiple tables. |
| DurationMs | int | The duration of the operation in milliseconds. |
| Level | string | The severity level of the operation. |
| OperationName | string | The operation associated with log record. |
| OperationVersion | string | The API version associated with the operation or version of the operation (if there is no API version). |
| ResultSignature | int | The sub status of the operation. If this operation corresponds to a REST API call, this field is the HTTP status code of the corresponding REST call. |
| ResultType | string | The status of the operation. |
| SdkType | string | The SDK type used in the request. |
| SdkVersion | string | SDK Version. |
| ServerCallId | string | Server Call Id. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| Type | string | The name of the table |
| URI | string | The URI of the request. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.communication/communicationservices`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

