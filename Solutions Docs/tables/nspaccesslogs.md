# NSPAccessLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for NSPAccessLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources, Network, Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/nspaccesslogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (40 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/nspaccesslogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AccessRuleVersion | string | Access rule version of the NSP profile to which PaaS resource is associated. |
| AppId | string | Unique GUID representing the app ID of resource in the Azure Active Directory. |
| Category | string | NSP access log categories. |
| Count | int | Total number of aggregated events. |
| DestinationEmailAddress | string | Email address of destination receiver. It be must specified if available. |
| DestinationFqdn | string | Fully Qualified Domain(FQDN) name of the destination. |
| DestinationParameters | string | List of optional destination properties in key-value pair format. For example: [ {Param1}: {value1}, {Param2}: {value2}, ...]. |
| DestinationPhoneNumber | string | Phone number of destination receiver. It be must specified if available. |
| DestinationPort | string | Port number of outbound connection, when available. |
| DestinationProtocol | string | Application layer protocol and transport layer protocol used for outbound connection in the format {AppProtocol}:{TransportProtocol}. For example: 'HTTPS:TCP'. It be must specified if available. |
| DestinationResourceId | string | Resource ID of destination PaaS resource for an outbound connection, when available. |
| Location | string | Indicates the region of NSP. |
| MatchedRule | string | JSON property bag containing matched access rule name. It can be either NSP access rule name or resource rule name (not it's resource ID). |
| OperationName | string | Indicates top-level PaaS operation name. |
| OperationVersion | string | The API version associated with the operation. |
| Parameters | string | List of optional PaaS resource properties in key-value pair format. For example: [ {Param1}: {value1}, {Param2}: {value2}, ...]. |
| Profile | string | Name of the NSP profile associated to the resource. |
| ResultAction | string | Indicates whether the result of evaluation is 'Approved' or 'Denied'. |
| ResultDescription | string | Additional description about the operation result, when available. |
| ResultDirection | string | Direction of evaluation result whether 'Inbound' or 'Outbound'. |
| RuleType | string | Indicates where the rule is defined: NSP or PaaS resource. |
| ServiceFqdn | string | Fully Qualified Domain Name (FQDN) of PaaS resource emitting NSP access logs. |
| ServiceResourceId | string | Resource ID of PaaS resource emitting NSP access logs. |
| SourceAppId | string | Unique GUID representing the app ID of source in the Azure Active Directory. |
| SourceIpAddress | string | IP address of source making inbound connection, when available. |
| SourceParameters | string | List of optional source properties in key-value pair format. For example: [ {Param1}: {value1}, {Param2}: {value2}, ...]. |
| SourcePerimeterGuids | string | List of perimeter GUIDs of source resource. It should be specified only if allowed based on perimeter GUID. |
| SourcePort | string | Port number of inbound connection, when available. |
| SourceProtocol | string | Application layer protocol and transport layer protocol used for inbound connection in the format {AppProtocol}:{TransportProtocol}. For example: 'HTTPS:TCP'. It be must specified if available. |
| SourceResourceId | string | Resource ID of source PaaS resource for an inbound connection, when available. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp marking the start of event aggregation. |
| TimeGeneratedEndTime | datetime | Timestamp indicating the end of event aggregation. |
| TrafficType | string | Indicates whether traffic is 'Private', 'Public', 'Intra' or 'Cross' perimeter. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.network/networksecurityperimeters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

