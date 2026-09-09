# Windows365ConnectionLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for Windows365ConnectionLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Monitor |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/windows365connectionlogs) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Resource Types](#resource-types)

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/windows365connectionlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ActivityId | string | The activity Id for correlating with network, error, and checkpoint data. |
| CallerIPAddress | string | The IP address of the caller. |
| ClientOS | string | The OS of the client that is connecting (if available). |
| CloudPCId | string | The unique identifier of the Cloud PC. |
| GatewayRegion | string | The region of the gateway for the server side user connection. |
| ManagedDeviceName | string | The name of the managed device. |
| PlatformName | string | The platform name of the client application. |
| PlatformVersion | string | The version of the client platform. |
| ResultType | string | The result type of the connection. |
| SessionHostIPAddress | string | The IP address of the session host. |
| SessionHostOSDescription | string | The OS SKU description of the machine where the user connection was orchestrated. |
| SessionHostOSVersion | string | The OS version of the session host. |
| SessionHostSxSStackVersion | string | The side-by-side (SxS) stack version of the session host. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| State | string | The state of the connection. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of the event. |
| TransportType | string | The type of transport used by the RDP connection: Shortpath, TURN, Websocket. |
| Type | string | The name of the table |
| UserPrincipalName | string | The user principal name of the user who initiated the connection. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Windows365ConnectionLogs Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/windows365connectionlogs)

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.intune/operations`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

