# NTANspRuleRecommendation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for NTANspRuleRecommendation table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Network |
| **Basic Logs Eligible** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ntansprulerecommendation) |

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ntansprulerecommendation)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AdditionalProperties | string | Property bag for any additional properties. |
| DestinationFqdns | string | Comma-separated destination fully qualified domain names for outbound traffic for a given NSP. |
| EndTime | datetime | The rule evaluation window end time. |
| IpDetails | string | Whois information of the IP in case of external traffic. |
| Location | string | For external public IPs and malicious IPs: two-letter country code (ISO 3166-1 alpha-2) where the IP is located. |
| NspProfile | string | NSP Profile. |
| NspResourceId | string | NSP resource ID. |
| PaasResourceId | string | Resource ID of the PaaS resource. |
| ResultAction | string | Indicates if the flow is allowed or denied. Possible values are Allowed, Denied. |
| ResultDirection | string | Direction of the flow. Possible values are Inbound, Outbound. |
| ResultType | string | Indicates if the flow is acled by NSP or Resource. |
| RuleType | string | Type of the rule. Possible values are IP, ServiceTag, Subscription, FQDN. |
| RuleValue | string | Value for the rule. |
| ServiceEndpoints | string | Comma-separated service endpoints. Service Endpoint traffic found. |
| SourceIPs | string | Comma-separated public source IPs in CIDR format for inbound flows. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartTime | datetime | The rule evaluation windowstart time. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Event generation timestamp. |
| TrafficAnalyticsResourceId | string | Traffic analytics resource ID. |
| TrafficType | string | Indicates whether the traffic is internal or external. |
| Type | string | The name of the table |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

