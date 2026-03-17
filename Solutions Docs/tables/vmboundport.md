# VMBoundPort

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for VMBoundPort table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | VMinsights |
| **Basic Logs Eligible** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/vmboundport) |

## Schema (26 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/vmboundport)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AgentId | string | Unique agent GUID for the agent reporting data on the server. |
| BytesReceived | long | Bytes received on the port |
| BytesSent | long | Bytes sent on the port |
| Computer | string | Name of the server |
| Ip | string | Port IP address. Can be wildcard IP 0.0.0.0. |
| IsWildcardBind | bool | Specifies whether connection made as a wildcard bind request. |
| LinksEstablished | long | Count of links established on the port. |
| LinksLive | long | Count of live links at the end of the time period recorded. |
| LinksTerminated | long | Count of terminated links over the time periof recorded. |
| Machine | string | Unique identifier to the machine in the ServiceMapComputer_CL table. |
| Port | int | Port number. |
| PortId | string | Port ID. |
| Process | string | Identity of the process or group of processes that the port is associated with. |
| ProcessName | string | Unique identifier for the process in the ServiceMapProcess_CL table. |
| Protocol | string | The protocol. Example tcp or udp (only tcp is currently supported). |
| Responses | long | Count of responses in the time period recorded. |
| ResponseTimeMax | long | Measurement of the maximum time between first and last byte received. |
| ResponseTimeMin | long | Measurement of the minimum time between first and last byte received. |
| ResponseTimeSum | long | Measurement of the total time between first and last byte received |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TimeGenerated | datetime | Date and time the record was created. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.compute/virtualmachines`
- `microsoft.conenctedvmwarevsphere/virtualmachines`
- `microsoft.azurestackhci/virtualmachines`
- `microsoft.scvmm/virtualmachines`
- `microsoft.compute/virtualmachinescalesets`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

