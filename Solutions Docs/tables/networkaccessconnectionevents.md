# NetworkAccessConnectionEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for NetworkAccessConnectionEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | IT & Management Tools, Network, Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/networkaccessconnectionevents) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (42 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/networkaccessconnectionevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AgentVersion | string | The version of the agent connecting. |
| AppId | string | Destination Application ID accessed in Azure AD during the transaction. |
| ClientDeviceName | string | The name of the client device making the connection. |
| ConnectionId | string | Unique identifier representing the connection this traffic log was initiated from. |
| DestinationFqdn | string | The destination device hostname, including domain information when available. |
| DestinationIp | string | The IP address of the connection or session destination. |
| DestinationPort | int | The destination IP port. |
| DeviceCategory | string | Device type the transaction originated from. Client, Branch. |
| DeviceId | string | The ID of the source device as reported in the record. |
| DeviceOperatingSystem | string | The client connecting operating system type. |
| DeviceOperatingSystemVersion | string | The client connecting operating system version. |
| EventType | string | The type of the connection event. |
| InitiatingProcessName | string | The process initiating the traffic transaction. |
| IsLocal | bool | Represents if the connection was triggered by Intelligent Local Access. |
| NetworkProtocol | string | The network protocol, IPv6 or IPv4. |
| PopProcessingRegion | string | Region where the request was processed by the backend service. |
| RemoteNetworkId | string | The ID from which traffic was sent or received, providing visibility into the origin of the traffic. |
| RemoteNetworkSourceIp | string | The Remote Network IP address from which the connection or session originated. |
| SecurityPolicyId | string | The ID of the security policy within the security profile. |
| SecurityPolicyName | string | The name of the security policy within the security profile. |
| SecurityPolicyVersion | string | The version of the security policy within the security profile. |
| SecurityProfileId | string | The ID of the security profile that blocked the connection. |
| SecurityProfileName | string | The name of the security profile that blocked the connection. |
| SecurityProfileVersion | string | The version of the security profile that blocked the connection. |
| SecurityRuleId | string | The ID of the rule that determined the action. |
| SourceIp | string | The IP address from which the connection or session originated. |
| SourcePort | int | The IP port from which the connection originated. |
| SourcePrivateIp | string | The private IP address from which the connection or session originated. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time (UTC) that the event was generated. |
| Token3PExpiry | datetime | The expiry date of the access token used to access the private access application. |
| Token3PIssuedAt | datetime | The issued date of the access token used to access the private access application. |
| Token3PUniqueId | string | The unique token identifier of the access token used to access the private access application. |
| Token3PValidFrom | datetime | The validity date of the access token used to access the private access application. |
| TrafficType | string | The type of the target destination traffic. |
| TransportProtocol | string | The IP protocol used by the connection or session as listed in IANA protocol assignment. |
| Type | string | The name of the table |
| UserId | string | A machine-readable, alphanumeric, unique representation of the source user. |
| UserPrincipalName | string | The source username, including domain information when available. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

