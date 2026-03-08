# ACSCallDiagnostics

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ACSCallDiagnostics table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acscalldiagnostics) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (38 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acscalldiagnostics)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | The log category of the event. Logs with the same log category and resource type will have the same properties fields. |
| CodecName | string | Codec used for the media stream. |
| CorrelationId | string | The ID for correlated events. Can be used to identify correlated events between multiple tables. |
| EndpointId | string | ID of the endpoint. |
| EndpointType | string | Type of the endpoint. |
| HealedDataRatioAvg | real | Average healed data ratio for incoming audio. |
| HealedDataRatioMax | real | Maximum healed data ratio for incoming audio. |
| Identifier | string | The indentifier of the call used to correlate. Can be used to identify correlated events between multiple tables. |
| JitterAvg | int | Average delay of sending the packages in milliseconds. |
| JitterBufferSizeAvg | int | Average jitter buffer size in milliseconds. |
| JitterBufferSizeMax | int | Maximum jitter buffer size in milliseconds. |
| JitterMax | int | Max delay of sending the packages in milliseconds. |
| MediaType | string | Type of Media. |
| OperationName | string | The operation associated with log record. |
| OperationVersion | string | The API-version associated with the operation or version of the operation (if there is no API version). |
| PacketLossRateAvg | real | Average lost packages. |
| PacketLossRateMax | real | Max lost packages. |
| PacketUtilization | int | Utilized packets for the media stream. |
| ParticipantId | string | ID of the participant. |
| RecvFreezeDurationPerMinuteInMs | real | Average receive freeze duration per minute in microseconds. |
| RecvResolutionHeight | int | Receive average resolution height. |
| RoundTripTimeAvg | int | Average time of a round trip in milliseconds. |
| RoundTripTimeMax | int | Max time of a trip in milliseconds. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StreamDirection | string | The direction of the stream, can be inbound or outbound. |
| StreamId | long | ID of the stream. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| TPE | bool | Boolean value that identify Teams Phone Extensibility calls. |
| TransportType | string | Type of the internet transport layer, it can be UDP, TCP or unknown. |
| Type | string | The name of the table |
| VideoBitRateAvg | int | Average bitrate. |
| VideoBitRateMax | int | Maximum bitrate. |
| VideoFrameRateAvg | real | Average frames per second. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.communication/communicationservices`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

