# ACSCallingMetrics

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ACSCallingMetrics table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acscallingmetrics) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (36 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acscallingmetrics)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| CallsDcount | int | Count of total Call per dimension. |
| CallType | string | Call type dimension. |
| Category | string | The log category of the event. Logs with the same log category and resource type will have the same properties fields. |
| CorrelationId | string | The unique gguid per dimension. |
| DeviceBrand | string | Device brand dimension. |
| DeviceBrowser | string | Device browser dimension. |
| DeviceBrowserVersionMajor | string | Device browser major dimension. |
| DeviceBrowserVersionMinor | string | Device browser minor dimension. |
| DeviceFamily | string | Device Family dimension. |
| DeviceModel | string | Device model dimension. |
| DeviceOsName | string | Device OS name dimension. |
| DeviceOsVersionMajor | string | Device OS version major dimension. |
| DeviceOsVersionMinor | string | Device OS version minor dimension. |
| FailedLegsDcount | int | Number of failed participants per dimension. |
| Goal | string | Threshold defined for a leg to succeed. |
| LegsDcount | int | Count of total participants per dimension. |
| MetricName | string | Metric name dimension. |
| MetricValueAvg | real | The average value of metric per dimension. |
| OperationName | string | The operation associated with log record. |
| OperationVersion | string | The API-version associated with the operation or version of the operation (if there is no API version). |
| Platform | string | Platform dimension. |
| ResultType | string | Result type dimension. |
| SdkVersion | string | SDK version dimension. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SubCode | string | Subcode dimension. |
| SuccessLegsDcount | int | Count of succeeded participants per dimension. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| TimestampBin | datetime | The daily timestamp bin for each dimension. |
| TimestampMax | datetime | The max timestamp for each dimension. |
| Type | string | The name of the table |
| Unit | string | Unit of metric |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.communication/communicationservices`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

