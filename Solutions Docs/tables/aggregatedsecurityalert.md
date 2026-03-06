# AggregatedSecurityAlert

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AggregatedSecurityAlert table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aggregatedsecurityalert) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (38 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aggregatedsecurityalert)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AggregatedSecurityAlertRuleIds | string | IDs assigned to the aggregated security data sharing rules by Sentinel. |
| AggregatedSecurityAlertRuleNames | string | The names of the aggregated security data sharing rules. |
| AlertName | string | The name of the alert. |
| AlertSeverity | string | The sevirity of the alert. |
| AlertType | string | The type name of the alert. |
| CompromisedEntity | string | Display name of the main entity being reported on. |
| ConfidenceLevel | string | The level of confidence that the alert is not a false-positive. |
| ConfidenceScore | real | The level of confidence that the alert is not a false-positive. This property allows for more fined grained representation, represented by a number between 0 and 1 (inclusive). |
| Description | string | The description of the alert. |
| DisplayName | string | The name of the alert. |
| EndTime | datetime | The end time of the impact of the alert. |
| Entities | string | A list of entities related to the alert. This list can hold a mixture of entities of different types. |
| ExtendedLinks | string | A set of link objects the can provide additional data on the alert. |
| ExtendedProperties | string | Additional data about the alert. |
| PartnerDisplayName | string | Name of the partner who sent the alert. |
| PartnerId | string | An ID assigned to the partner who sent the alert. |
| PartnerMetadata | string | Metadata about the partner who sent the alert. |
| ProcessingEndTime | datetime | The time the alert was received for processing. |
| ProductComponentName | string | The name of a component inside the product which generated the alert. |
| ProductName | string | The name of the product that generated the alert. |
| ProviderName | string | The name of the provider that generated the alert. |
| RemediationSteps | string | Action items to take to remediate the alert. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartTime | datetime | The start time of the impact of the alert. |
| Status | string | The lifecycle status of the alert (new, in progress, closed). |
| SubTechniques | string | A list of adversary MITRE ATT&CK sub techniques involved in this security issue. |
| SystemAlertId | string | An ID assigned to the alert by Sentinel. |
| Tactics | string | A list of adversary MITRE ATT&CK tactics involved in this security issue. |
| Techniques | string | A list of adversary MITRE ATT&CK techniques involved in this security issue. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the alert was generated. |
| Type | string | The name of the table |
| VendorName | string | The name of the vendor owning the provider that generated the alert. |
| VendorOriginalId | string | An ID assigned to the alert by the vendor, to help track down the alert in the original system. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/securityinsights`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

