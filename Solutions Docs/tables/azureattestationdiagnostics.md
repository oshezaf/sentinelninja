# AzureAttestationDiagnostics

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AzureAttestationDiagnostics table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azureattestationdiagnostics) |

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azureattestationdiagnostics)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| CallerIpAddress | string | IP Address of the client that submitted the request. |
| ContentLength | int | Length of the content body in bytes. |
| ContentType | string | Content-Type header value passed by the client. |
| DurationMs | real | Amount of time it took to process request in milliseconds. |
| FailureDetails | string | Details of the request failure, if it failed. Blank if the request succeeded. |
| Identity | dynamic | JSON structure containing information about the caller. |
| Level | string | Error or Informational message indicating if the service processed the request. |
| OperationName | string | Name of the operation attempted on the resource. |
| ResourceRegion | string | Region where the resource is located. |
| ResourceUri | string | URI of the resource. |
| ResultDetails | string | Detailed response messages included in the result, if available. |
| ResultSignature | string | HTTP status code returned from the service. |
| ResultType | string | Indicates if the request was successful or failed. |
| ServiceLocation | string | Location of the service which processed the request. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time the record was created. |
| TraceContext | dynamic | W3C trace context. |
| Type | string | The name of the table |
| UserAgent | string | HTTP header passed by the client, if applicable. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.attestation/attestationproviders`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

