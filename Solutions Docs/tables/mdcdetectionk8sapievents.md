# MDCDetectionK8SApiEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for MDCDetectionK8SApiEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/mdcdetectionk8sapievents) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (34 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/mdcdetectionk8sapievents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AdditionalMetadata | dynamic | Metadata related to the event. |
| AuthenticationTypes | dynamic | A list of well-known authentication mechanisms that were detected, e.g., Authorization header or API keys. |
| AzureResourceId | string | The unique identifier for the Azure resource. |
| ChunkNum | int | The index of the payload chunk. Starts from zero. If the full payload is broken into chunks, this value represents which chunk is in this event. |
| ClientIPs | dynamic | A list of client IPs extracted from the X-Forwarded-For header in the request. |
| ContainsAuthentication | bool | Whether a well-known authentication mechanism was detected. True if any authentication mechanism was detected, false otherwise. |
| ContainsPublicIp | bool | Whether one of the IPs extracted from the X-Forwarded-For header in the request is a public IP. |
| DataPipelineMetadata | dynamic | Metadata related to the data processing pipeline. |
| Elapsed | real | The time in milliseconds that have elapsed between the request and the response events. |
| IsLastChunk | bool | Whether the payload chunk in this event is the last one or not. True if this is the last chunk; false otherwise. |
| IsRequest | bool | Whether this event is for the request or the response. True if this event is for the request. False if this event is for the response. |
| K8SClusterName | string | The name of the K8S cluster containing the pod from where this event was captured. |
| K8SDaemonsetName | string | The name of the daemonset containing the pod from where this event was captured. |
| K8SDeploymentName | string | The name of the deployment containing the pod from where this event was captured. |
| K8SNamespaceName | string | The namespace containing the pod from where this event was captured. |
| K8SNodeName | string | The name of the node that has the pod from where this event was captured. |
| K8SPodName | string | The name of the pod from where this event was captured. |
| K8SStatefulsetName | string | The name of the stateful set containing the pod from where this event was captured. |
| Method | string | The HTTP verb for this request. |
| Payload | string | A chunk of payload for the request or the response in this event. The full payload for the request and/or the response may be split into multiple chunks. |
| PayloadEncoding | string | The value of the Content-Encoding header, if present. |
| PayloadLength | int | The length of the payload chunk in this event. If there is no payload, this value will be zero. |
| PayloadType | string | The value of the Content-Type header, if present. |
| Region | string | The Azure region where the resource is located. |
| RequestId | string | A unique identifier that identifies the request and response events for one specific request-response pair. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StatusCode | int | The HTTP response code of the response for this request. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time (UTC) when the monitored entity was created, renamed, modified or deleted. |
| Timestamp | datetime | The time at which this event was captured. |
| Type | string | The name of the table |
| Url | string | The full url for this request. This will contain the scheme, host, port (if applicable), path, and query string. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

