# SignalRServiceDiagnosticLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SignalRServiceDiagnosticLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/signalrservicediagnosticlogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (23 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/signalrservicediagnosticlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| CallerIpAddress | string | The IP of the client or server connects to SignalR service. |
| Collection | string | The collection of the log event. Can be 'Connection', 'Authorization', 'Throttling' or 'Message'. 'Connection' collection includes the logs about the lifetime of connections. 'Authorization' includes the logs about the authorization of connections. 'Throttling' includes the logs about the throttled connections. 'Message' includes the logs about the tracing messages. |
| ConnectionId | string | The connection ID of the connection connected to SignalR service. |
| ConnectionType | string | The connection type. Can be 'Server' and 'Client'. 'Server' means the connection connects to an app server. 'Client' means the connection connects to a SignalR client. |
| GroupName | string | A group can have any number of clients, and a client can be a member of any number of groups. |
| HubName | string | The SignalR Hubs API enables you to call methods on connected clients from the server. |
| InvocationId | string | The invocation ID of the message. It's only available in ASP.NET SignalR. |
| Level | string | The level of the log. Can be 'Informational', 'Warning', 'Error' or 'Critical'. |
| Location | string | The location of Azure SignalR service. |
| Message | string | The message of the log event. It describes the log event in detail. |
| MessageTracingId | long | The tracing ID of the message. It's used for tracing messages. |
| MessageType | string | The type of the messsage. Can be 'BroadcastDataMessage', 'MultiConnectionDataMessage', 'GroupBroadcastDataMessage', 'MultiGroupBroadcastDataMessage', 'UserDataMessage', 'MultiUserDataMessage', 'JoinGroupWithAckMessage' and 'LeaveGroupWithAckMessage'. For more details, seehttps://www.nuget.org/packages/Microsoft.Azure.SignalR.Protocols. |
| OperationName | string | The operation name of the log event. it can be used to filter the log based on a specific operation name. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of the log. |
| TransportType | string | The transport type of the connection. Can be 'WebSockets', 'ServerSentEvents', or 'LongPolling'. For more details, see dotnet/api/microsoft.aspnetcore.http.connections.httptransporttype. |
| Type | string | The name of the table |
| UserId | string | The user ID of the connection. It is defined by the client or app server. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.signalrservice/signalr`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

