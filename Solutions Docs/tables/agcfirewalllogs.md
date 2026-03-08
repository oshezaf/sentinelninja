# AGCFirewallLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AGCFirewallLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources, Network |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agcfirewalllogs) |

## Schema (27 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agcfirewalllogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Action | string | Action taken on the request. Available values are Blocked and Allowed (for custom rules), Matched (when a rule matches a part of the request), and Detected and Blocked (these are both for mandatory rules, depending on if the WAF is in detection or prevention mode). |
| ClientIp | string | Originating IP for the request. |
| ClientPort | int | Originating port for the request. |
| DetailedData | string | Specific data found in request that matched the rule for the triggered event. |
| DetailedMessage | string | Description of the rule for the triggered event. |
| FileDetails | string | Configuration file that contained the rule for the triggered event. |
| Hostname | string | Hostname or IP address of the Application Gateway. |
| InstanceId | string | Application Gateway instance for which firewall data is being generated. For a multiple-instance application gateway, there is one row per instance. |
| LineDetails | string | Line number in the configuration file that triggered the event. |
| Message | string | User-friendly message for the triggering event. More details are provided in the details section. |
| OperationName | string | Name of the operation. |
| PolicyId | string | Resource ID of the web application firewall policy. |
| PolicyScope | string | A named scope consisting of Kubernetes resource references the scope is applied to. |
| PolicyScopeName | string | The name to the type of scope assignment the web application firewall policy is assigned to. |
| RequestUri | string | URL of the received request. |
| RuleId | string | Rule ID of the triggering event. |
| RuleSetType | string | Rule set type. The available value is Microsoft_DefaultRuleSet or Microsoft_BotManagerRuleSet. |
| RuleSetVersion | string | Rule set version used for Microsoft_DefaultRuleSet or Microsoft_BotManagerRuleSet. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time (UTC) when the log was created. |
| TrackingId | string | Generated guid by Application Gateway for Containers to help with tracking and debugging. This value correlates to the x-request-id header returned to the client from Application Gateway for Containers. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.servicenetworking/trafficcontrollers`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

