# ApiManagementGatewayMCPLog

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ApiManagementGatewayMCPLog table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/apimanagementgatewaymcplog) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Resource Types](#resource-types)

## Schema (26 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/apimanagementgatewaymcplog)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ApiType | string | Field denotes the specific API type used for the request, like passthrough or mcp backend. |
| AuthenticationMethod | string | Field denotes the specific authentication method used for the request (e.g. oauth2 | api_key | cert | none). |
| ClientName | string | Field denotes the specific client name who is making the request. |
| ClientVersion | string | Field denotes the specific client version who is making the request. |
| CorrelationId | string | Unique id corresponding with the same field in ApiManagementGatewayLogs. |
| Error | string | Field denotes error message if any error occurred during the request. |
| ErrorType | string | Field denotes error type if any error occurred during the request. |
| McpServerEndpoint | string | Field denotes the specific endpoint of the MCP server. |
| Method | string | Field denotes the specific tools call method used for the request (e.g. tools/call, notification). |
| OperationName | string | Field denotes the specific name or identifier of the operation being performed. |
| ProtocolVersion | string | Field denotes the specific version of the MCP server. |
| Region | string | The field indicates the geographical location or data center region within the Azure cloud infrastructure where a specific resource or service is deployed. |
| ServerName | string | Field denotes the mcp server name handling the request. |
| ServerVersion | string | Field denotes the mcp server version handling the request. |
| SessionId | string | Field denotes id from AI conversation / agent chat session. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when request processing started. |
| ToolCount | int | Field denotes the number of MCP tools discovered by the client. |
| ToolName | string | Field denotes the name of the MCP tool being used. |
| TransportType | string | Field denotes the specific transport type used for the request, like SSE or Streamable HTTP. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [ApiManagementGatewayMCPLog Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/apimanagementgatewaymcplog)

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.apimanagement/service`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

