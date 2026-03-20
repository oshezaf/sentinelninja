# IlumioInsights

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for IlumioInsights table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ilumioinsights) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (38 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ilumioinsights)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AzureResourceId | string | The Azure resource ID associated with the event. |
| CvssSeverity | string | CVSS (Common Vulnerability Scoring System) severity rating. |
| DestCity | string | City where the destination IP is geolocated. |
| DestCountry | string | Country where the destination IP is located. |
| DestIP | string | IP address of the destination. |
| DestIsWellKnown | bool | Indicates if the destination is a known/trusted entity. |
| DestLabel | string | Label or tag assigned to the destination entity. |
| DestPort | int | Port number on the destination endpoint. |
| DestThreatLevel | string | Threat level associated with the destination IP. |
| FlowCount | int | Number of flows or sessions detected for this event. |
| IllumioTenantId | string | Tenant ID assigned by Illumio for multi-tenant environments. |
| IllumioUrl | string | URL to view the record or associated details in the Illumio console. |
| Port | int | Source or service port involved in the communication. |
| Proto | string | Protocol used in the communication (e.g., TCP, UDP). |
| ResourceInternalId | string | Internal identifier for the monitored resource within Illumio. |
| ResourceRegion | string | The Azure region where the resource is deployed. |
| ResourceSubId | string | Azure subscription ID that contains the resource. |
| ResourceTenantId | string | Azure tenant ID to which the resource belongs. |
| ResourceVnetId | string | Identifier for the Virtual Network (VNet) associated with the resource. |
| Service | string | The name of the detected or used service (e.g., HTTP, SSH). |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SrcCity | string | City where the source IP is geolocated. |
| SrcCountry | string | Country where the source IP is located. |
| SrcIP | string | IP address of the source. |
| SrcIsWellKnown | bool | Indicates if the source is a known/trusted entity. |
| SrcLabel | string | Label or tag assigned to the source entity. |
| SrcPort | int | Port number used by the source entity. |
| SrcThreatLevel | string | Threat level (e.g., Low, Medium, High) associated with the source IP. |
| Status | string | Current status of the insight (e.g., Active, Resolved). |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp when the record or event was logged. |
| TotalReceivedBytes | int | Total number of bytes received during the communication flow. |
| TotalSentBytes | int | Total number of bytes sent during the communication flow. |
| Type | string | The name of the table |
| UniqueId | string | A unique identifier for the specific insight or event. |
| VEScore | real | Vulnerability exposure score indicating the risk level. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

