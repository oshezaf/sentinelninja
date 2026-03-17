# CrowdStrikeAlerts

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for CrowdStrikeAlerts table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Crowdstrike |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/crowdstrikealerts) |

## Schema (43 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/crowdstrikealerts)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AgentId | string | Unique identifier for the CrowdStrike agent that generated the alert. |
| AggregateId | string | Identifier for aggregated alerts from the same source. |
| AlertType | string | The type or category of the CrowdStrike alert. |
| AssignedToName | string | Name of the user assigned to handle the alert. |
| AssignedToUid | string | User ID of the assigned user. |
| AssignedToUuid | string | UUID of the assigned user. |
| Cid | string | Customer ID in the CrowdStrike platform. |
| CompositeId | string | Composite identifier combining multiple alert attributes. |
| Confidence | int | Confidence score of the alert (0-100). |
| CrawledTimestamp | datetime | Timestamp when the alert data was last crawled. |
| CreatedTimestamp | datetime | Timestamp when the alert was first created. |
| DataDomains | dynamic | Domains associated with the alert. |
| Description | string | Detailed description of the alert. |
| DisplayName | string | Human-readable name for the alert. |
| EmailSent | bool | Indicates if an email notification was sent for this alert. |
| External | bool | Indicates if the alert originated from an external source. |
| Id | string | Unique identifier for the alert. |
| Objective | string | The attacker's presumed objective. |
| PatternId | int | Identifier for the detection pattern that triggered the alert. |
| Platform | string | Operating system or platform where the alert was detected. |
| Product | string | CrowdStrike product that generated the alert. |
| Scenario | string | Security scenario that triggered the alert. |
| SecondsToResolved | int | Time in seconds from alert creation to resolution. |
| SecondsToTriaged | int | Time in seconds from alert creation to triage. |
| Severity | int | Severity level of the alert. |
| SeverityName | string | Text representation of the severity level. |
| ShowInUi | bool | Indicates if the alert should be displayed in the user interface. |
| SourceProducts | dynamic | List of products that contributed to this alert. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SourceVendors | dynamic | List of vendors associated with the alert sources. |
| Status | string | Current status of the alert. |
| Tactic | string | MITRE ATT&CK tactic associated with the alert. |
| TacticId | string | Identifier of the MITRE ATT&CK tactic. |
| Tags | dynamic | Custom tags associated with the alert. |
| Technique | string | MITRE ATT&CK technique associated with the alert. |
| TechniqueId | string | Identifier of the MITRE ATT&CK technique. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) when the alert was generated. |
| Timestamp | datetime | Time when the alert event occurred. |
| Type | string | The name of the table |
| UpdatedTimestamp | datetime | Time when the alert was last updated. |

## Solutions (1)

This table is used by the following solutions:

- [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

