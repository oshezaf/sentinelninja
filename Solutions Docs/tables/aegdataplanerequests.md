# AegDataPlaneRequests

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AegDataPlaneRequests table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aegdataplanerequests) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (15 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aegdataplanerequests)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Authentication | string | The type of secret used for authentication when issuing requests. Key - request uses the SAS key, SASToken - request uses a SAS token generated from SAS key, AADAccessToken - Azure Active Directory issued JSON Web Token (JWT) token, Unknown - None of the above authentication types. OPTIONS requests will have Unknown authentication type. |
| ClientIpAddress | string | The IP address of the client issuing the request. |
| NetworkAccess | string | The type of network used by the client issuing the request. Allowed values are: PublicAccess - when connecting via public IP, PrivateAccess - when connecting via private link |
| OperationName | string | The name of the operation. |
| OperationResult | string | Thw result of the operation. Possible values are: Success, Unauthorized, Forbidden, RequestEntityTooLarge, BadRequest, InternalServerError |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp (UTC) when the log was generated. |
| TlsVersion | string | The transport layer security (TLS) version used by the client connection. Possible values are: 1.0, 1.1 and 1.2 |
| TotalOperations | string | The total number of request with above values issued within the minute. These traces aren't emitted for each publish request. An aggregate for each unique combination of above values is emitted every minute |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.eventgrid/topics`
- `microsoft.eventgrid/domains`
- `microsoft.eventgrid/partnernamespaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

