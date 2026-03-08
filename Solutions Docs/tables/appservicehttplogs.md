# AppServiceHTTPLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AppServiceHTTPLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/appservicehttplogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (26 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/appservicehttplogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| CIp | string | IP address of the client |
| ComputerName | string | The name of the server on which the log file entry was generated. |
| Cookie | string | Cookie on HTTP request |
| CsBytes | int | Number of bytes received by server |
| CsHost | string | Host name header on HTTP request |
| CsMethod | string | The request HTTP verb |
| CsUriQuery | string | URI query on HTTP request |
| CsUriStem | string | The target of the request |
| CsUsername | string | The name of the authenticated user on HTTP request |
| Referer | string | The site that the user last visited. This site provided a link to the current site |
| Result | string | Success / Failure of HTTP request |
| ScBytes | int | Number of bytes sent by server |
| ScStatus | int | HTTP status code |
| ScSubStatus | string | Substatus error code on HTTP request |
| ScWin32Status | string | Windows status code on HTTP request |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SPort | string | Server port number |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time when event is generated |
| TimeTaken | int | Time taken by HTTP request in milliseconds |
| Type | string | The name of the table |
| UserAgent | string | User agent on HTTP request |

## Solutions (2)

This table is used by the following solutions:

- [Threat Intelligence](../solutions/threat-intelligence.md)
- [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md)

---

## Content Items Using This Table (2)

### Analytic Rules (2)

**In solution [Threat Intelligence](../solutions/threat-intelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI map IP entity to AppServiceHTTPLogs](../content/threat-intelligence-ti-map-ip-entity-to-appservicehttplogs-f9949656-473f-4503-bf43-a9d9890f7d08-106c6a94.md) |  |

**In solution [Threat Intelligence (NEW)](../solutions/threat-intelligence-new.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TI map IP entity to AppServiceHTTPLogs](../content/threat-intelligence-new-ti-map-ip-entity-to-appservicehttplogs-206277b1-9a2c-4c62-9ee8-a4c888810d3c-7ce08041.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.web/sites`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

