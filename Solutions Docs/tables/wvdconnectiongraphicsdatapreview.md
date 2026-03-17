# WVDConnectionGraphicsDataPreview

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for WVDConnectionGraphicsDataPreview table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Virtual Desktop |
| **Basic Logs Eligible** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wvdconnectiongraphicsdatapreview) |

## Schema (19 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/wvdconnectiongraphicsdatapreview)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ClientSkippedFramesPercentage | int | The percentage of frames dropped because of slow client decoding in the second with the highest dropped frames in the last evaluated connection time interval |
| CompressedFrameSizeInBytes | int | The compressed size (bytes) of the frame with highest E2E delay in the last evaluated connection time interval |
| CorrelationId | string | The correlation ID for the activity |
| DecodingTimeOnClientInMs | int | The decoding time (milliseconds) of the frame with highest E2E delay in the last evaluated connection time interval |
| EncodingDelayOnServerInMs | int | The encoding time (milliseconds) of the frame with highest E2E delay in the last evaluated connection time interval |
| EndToEndDelayInMs | int | The highest end-to-end delay (milliseconds) of the frames sent in the last evaluated connection time interval. E2E delay is the delay from the time when a frame is captured on the server until the time frame is rendered on the client |
| EstAvailableBandwidthKBps | int | The average of estimated network bandwidth (kilobyte per second) in the last evaluated connection time interval |
| EstRoundTripTimeInMs | int | The average of estimated network round trip times (milliseconds) in the last evaluated connection time interval |
| NetworkSkippedFramesPercentage | int | The percentage of frames dropped because of insufficient network bandwidth in the second with the highest dropped frames in the last evaluated connection time interval |
| RenderingTimeOnClientInMs | int | The rendering time (milliseconds) of the frame with highest E2E delay in the last evaluated connection time interval |
| ServerSkippedFramesPercentage | int | The percentage of frames dropped because server is busy in the second with the highest dropped frames in the last evaluated connection time interval |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) when the QoE event was generated on the VM |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.desktopvirtualization/hostpools`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

