# GCPFirewallLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for GCPFirewallLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | GCP |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpfirewalllogs) |

## Schema (37 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/gcpfirewalllogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| Action | string | The Action that of the firewall rule. |
| DestIp | string | the IP address of the target device or service that incoming or outgoing network traffic is trying to reach. |
| DestPort | string | the Port of the target device or service that incoming or outgoing network traffic is trying to reach. |
| Direction | string | The direction of that the firewall rule applies. |
| Disposition | string | the final action taken on network traffic that matches a given rule. |
| GCPResourceType | string | The identifier of the type associated with this resource, such as 'pubsub_subscription'. |
| InsertId | string | Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result. |
| InstanceProjectId | string | the project ID associated with the instance that was involved in the firewall rule event. |
| InstanceRegion | string | the region associated with the instance that was involved in the firewall rule event. |
| InstanceVmName | string | the virtual machine name associated with the instance that was involved in the firewall rule event. |
| InstanceZone | string | the zone associated with the instance that was involved in the firewall rule event. |
| IpPortInfo | dynamic | The information regarding the rule port and protocol. |
| LogName | string | Information including a suffix identifying the log sub-type (e.g., admin activity, system access, data access) and where in the hierarchy the request was made. |
| Priority | string | The priority of the rule. |
| ProjectId | string | The identifier of the Google Cloud Platform (GCP) project associated with this resource, such as "my-project". |
| Protocol | string | the protocol of the target device or service that incoming or outgoing network traffic is trying to reach. |
| Referance | string | The rule that triggered the log. |
| RemoteLocationCity | string | The city name based on the resource location. |
| RemoteLocationContinent | string | The continent name based on the resource location. |
| RemoteLocationCountry | string | The country name based on the resource location. |
| RemoteLocationRegion | string | The region name based on the resource location. |
| ResourceLocation | string | The resource location information. |
| ResourceSubnetworkName | string | The resource subnetwork name. |
| SourceRange | dynamic | The range of the ip addresses that the rule applied to. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SrcIp | string | the IP address of the source device or service that incoming or outgoing network traffic is trying to reach. |
| SrcPort | string | the Port of the source device or service that incoming or outgoing network traffic is trying to reach. |
| SubnetworkId | string | The resource subnetwork id. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time the log entry was received by logging. |
| Timestamp | datetime | The time the event described by the log entry occurred. |
| Type | string | The name of the table |
| VpcName | string | The name of the Virtual Private Network(VPC) where the firewall rule applied. |
| VpcProjectId | string | The project id of the Virtual Private Network(VPC) where the firewall rule applied. |
| VpcSubnetworkName | string | The Subnetnetwork name of the Virtual Private Network(VPC) where the firewall rule applied. |

## Solutions (1)

This table is used by the following solutions:

- [Google Cloud Platform Firewall Logs](../solutions/google-cloud-platform-firewall-logs.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [GCP Pub/Sub Firewall Logs](../connectors/gcpfirewalllogsccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

