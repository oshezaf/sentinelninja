# GCPNAT

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GCPNAT table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpnat) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (34 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpnat) · [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformNAT/Data%20Connectors/GCPNATLogs_ccp/GCPNATLogs_DCR.json)

| Column Name | Type | Description | Source |
|:------------|:-----|:------------|:-------|
| _BilledSize | real | The record size in bytes | Azure Monitor docs |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account | Azure Monitor docs |
| AllocationStatus | string | Status of the NAT IP address allocation. | Azure Monitor docs |
| ASN | string | Autonomous System Number (ASN) associated with the destination IP. | Azure Monitor docs |
| City | string | City of the destination IP address (geo-located). | Azure Monitor docs |
| Continent | string | Continent where the destination IP is located. | Azure Monitor docs |
| Country | string | Country of the destination IP address (geo-located). | Azure Monitor docs |
| DestinationRegion | string | Continent or larger geographical region of the destination. | Azure Monitor docs |
| DestIp | string | Destination external IP address the traffic was sent to. | Azure Monitor docs |
| DestPort | string | Destination port on the remote host. | Azure Monitor docs |
| EndpointRegion | string | Region of the destination endpoint. | Azure Monitor docs |
| EndpointZone | string | Zone of the destination endpoint if applicable. | Azure Monitor docs |
| GatewayName | string | Name of the Cloud NAT gateway instance. | Azure Monitor docs |
| GCPResourceType | string | Type of the monitored GCP resource (e.g., 'router', 'gce_instance'). | Azure Monitor docs |
| insertId | string | Unique identifier for the log entry within the GCP logging system. | DCR, Azure Monitor docs |
| jsonPayload | dynamic |  | DCR |
| labels | dynamic |  | DCR |
| logName | string | Name of the log stream. | DCR, Azure Monitor docs |
| NatIp | string | Public NAT IP address assigned for this flow. | Azure Monitor docs |
| NatPort | string | Public NAT port assigned for this flow. | Azure Monitor docs |
| ProjectId | string | ID of the GCP project that generated the log entry. | Azure Monitor docs |
| Protocol | string | Network protocol used in the connection. | Azure Monitor docs |
| receiveTimestamp | datetime | The time the log entry was received by GCP Logging. | DCR, Azure Monitor docs |
| Region | string | Region of the GCP resource involved in the NAT traffic. | Azure Monitor docs |
| resource | dynamic |  | DCR |
| RouterId | string | Identifier of the Cloud Router managing the NAT gateway. | Azure Monitor docs |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics | Azure Monitor docs |
| SrcIp | string | Source internal IP address from which the traffic originated. | Azure Monitor docs |
| SrcPort | string | Source port on the internal VM or resource. | Azure Monitor docs |
| TenantId | string | The Log Analytics workspace ID | Azure Monitor docs |
| TimeGenerated | datetime | The timestamp when the log was ingested by Log Analytics. | Azure Monitor docs |
| timestamp | datetime |  | DCR |
| Type | string | The name of the table | Azure Monitor docs |
| VmName | string | Name of the virtual machine that initiated the NAT traffic. | Azure Monitor docs |

## Solutions (1)

This table is used by the following solutions:

- [GoogleCloudPlatformNAT](../solutions/googlecloudplatformnat.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Google Cloud Platform NAT (via Codeless Connector Framework)](../connectors/gcpnatlogsccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

