# AGCAccessLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AGCAccessLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources, Network |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agcaccesslogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (33 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agcaccesslogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| BackendHost | string | Address of backend target with appended port. For example <ip>:<port> |
| BackendIp | string | IP address of backend target Application Gateway for Containers proxies the request to. |
| BackendPort | int | Port number of the backend target. |
| BackendResponseLatency | real | Time in milliseconds to receive first byte from Application Gateway for Containers to the backend target. |
| BackendTimeTaken | int | Time in milliseconds for the response to be transmitted from the backend target to Application Gateway for Containers. |
| ClientIp | string | IP address of the client initiating the request to the frontend of Application Gateway for Containers. |
| FrontendName | string | Name of the Application Gateway for Containers frontend that received the request from the client. |
| FrontendPort | int | Port number the request was listened on by Application Gateway for Containers. |
| HostName | string | Host header value received from the client by Application Gateway for Containers. |
| HttpMethod | string | HTTP Method of the request received from the client by Application Gateway for Containers as per RFC 7231. |
| HttpStatusCode | int | HTTP Status code returned from Application Gateway for Containers to the client. |
| HttpVersion | string | HTTP version of the request received from the client by Application Gateway for Containers. |
| OperationName | string | Name of the operation. |
| Referrer | string | Referrer header of the request received from the client by Application Gateway for Containers. |
| Region | string | The region where Application Gateway for Containers association is deployed |
| RequestBodyBytes | long | Size in bytes of the body payload of the request received from the client by Application Gateway for Containers. |
| RequestHeaderBytes | long | Size in bytes of the headers of the request received from the client by Application Gateway for Containers. |
| RequestUri | string | URI of the request received from the client by Application Gateway for Containers (everything after <protocol>://<host> of the URL). |
| ResponseBodyBytes | long | Size in bytes of the body payload of the response returned to the client by Application Gateway for Containers. |
| ResponseHeaderBytes | long | Size in bytes of the headers of the response returned to the client by Application Gateway for Containers. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time (UTC) when the log was created. |
| TimeTaken | real | Time in milliseconds of the client request received by Application Gateway for Containers and the last byte returned to the client from Application Gateway for Containers. |
| TlsCipher | string | TLS cipher suite negotiated between the client and Application Gateway for Containers frontend. |
| TlsProtocol | string | TLS version negotiated between the client and Application Gateway for Containers frontend. |
| TrackingId | string | Generated guid by Application Gateway for Containers to help with tracking and debugging. This value correlates to the x-request-id header returned to the client from Application Gateway for Containers. |
| Type | string | The name of the table |
| UserAgent | string | User-Agent header of the request received from the client by Application Gateway for Containers. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.servicenetworking/trafficcontrollers`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

