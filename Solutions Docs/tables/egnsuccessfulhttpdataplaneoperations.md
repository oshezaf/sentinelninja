# EGNSuccessfulHttpDataPlaneOperations

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for EGNSuccessfulHttpDataPlaneOperations table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/egnsuccessfulhttpdataplaneoperations) |

## Schema (16 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/egnsuccessfulhttpdataplaneoperations)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AuthenticationType | string | Type of authentication used by the client. SharedAccessKey - request uses the SAS key, SharedAccessSignature - request uses a SAS token generated from SAS key, EntraIdAccessToken - Microsoft Entra issued JSON Web Token (JWT) token, Unknown - None of the above authentication types. |
| CallerIpAddress | string | The IP address of the client issuing the request. |
| NetworkAccess | string | The type of network used by the client issuing the request. Allowed values are: PublicAccess - when connecting via public IP, PrivateAccess - when connecting via private link |
| ObjectId | string | The Microsoft Entra ObjectId of the caller issuing the request. |
| OperationName | string | The name of the operation. |
| ResultType | string | The result of the operation. Possible values are: Succeeded. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp (UTC) when the log was generated. |
| TLSVersion | string | The transport layer security (TLS) version used by the client connection. Possible values are: 1.2 and 1.3 |
| TotalOperations | string | The total number of request with above values issued within the minute. These traces aren't emitted for each request. An aggregate for each unique combination of above values is emitted every minute |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.eventgrid/namespaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

