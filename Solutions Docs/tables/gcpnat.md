# GCPNAT

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GCPNAT table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpnat) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (30 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpnat)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AllocationStatus | string | Status of the NAT IP address allocation. |
| ASN | string | Autonomous System Number (ASN) associated with the destination IP. |
| City | string | City of the destination IP address (geo-located). |
| Continent | string | Continent where the destination IP is located. |
| Country | string | Country of the destination IP address (geo-located). |
| DestinationRegion | string | Continent or larger geographical region of the destination. |
| DestIp | string | Destination external IP address the traffic was sent to. |
| DestPort | string | Destination port on the remote host. |
| EndpointRegion | string | Region of the destination endpoint. |
| EndpointZone | string | Zone of the destination endpoint if applicable. |
| GatewayName | string | Name of the Cloud NAT gateway instance. |
| GCPResourceType | string | Type of the monitored GCP resource (e.g., 'router', 'gce_instance'). |
| InsertId | string | Unique identifier for the log entry within the GCP logging system. |
| LogName | string | Name of the log stream. |
| NatIp | string | Public NAT IP address assigned for this flow. |
| NatPort | string | Public NAT port assigned for this flow. |
| ProjectId | string | ID of the GCP project that generated the log entry. |
| Protocol | string | Network protocol used in the connection. |
| ReceiveTimestamp | datetime | The time the log entry was received by GCP Logging. |
| Region | string | Region of the GCP resource involved in the NAT traffic. |
| RouterId | string | Identifier of the Cloud Router managing the NAT gateway. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SrcIp | string | Source internal IP address from which the traffic originated. |
| SrcPort | string | Source port on the internal VM or resource. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp when the log was ingested by Log Analytics. |
| Type | string | The name of the table |
| VmName | string | Name of the virtual machine that initiated the NAT traffic. |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

