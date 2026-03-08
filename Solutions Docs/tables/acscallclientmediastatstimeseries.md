# ACSCallClientMediaStatsTimeSeries

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ACSCallClientMediaStatsTimeSeries table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acscallclientmediastatstimeseries) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (27 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acscallclientmediastatstimeseries)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AggregationIntervalSeconds | int | ACS calling media stats aggregation interval in seconds. |
| Average | real | The average of a certain media metric statistics. |
| CallClientTimeStamp | datetime | The timestamp (UTC) of when the ACS client's media stats log was generated. |
| CallId | string | The identifier of the call used to correlate. Can be used to identify correlated events between multiple tables. |
| ClientInstanceId | string | Client instance ID. |
| Count | long | The count of a certain media metric statistics. |
| EndpointId | string | ACS calling endpoint ID. |
| Maximum | real | The maximum of a certain media metric statistics. |
| MediaStreamCodec | string | Client media stream codec. |
| MediaStreamDirection | string | Client media stream direction, i.e. recv or send. |
| MediaStreamId | string | ACS calling media stream ID. |
| MediaStreamType | string | Client media stream type, i.e. video or screen. |
| MetricName | string | Client metric name. |
| Minimum | real | The minimum of a certain media metric statistics. |
| OperationName | string | The operation associated with log record. |
| ParticipantId | string | ID of the participant. |
| RemoteEndpointId | string | ACS calling remote endpoint ID. |
| RemoteParticipantId | string | ACS remote participant ID. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Sum | real | The sum of a certain media metric statistics. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.communication/communicationservices`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

