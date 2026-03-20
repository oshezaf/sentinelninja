# CrowdStrikeVulnerabilities

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for CrowdStrikeVulnerabilities table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Crowdstrike |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/crowdstrikevulnerabilities) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (21 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/crowdstrikevulnerabilities)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| Aid | string | Agent ID of the system where vulnerability was detected. |
| App | dynamic | Detailed information about the affected application. |
| Apps | dynamic | List of affected applications. |
| Cid | string | Customer ID in the CrowdStrike platform. |
| Confidence | string | Confidence level of the vulnerability detection. |
| CreatedTimestamp | datetime | Timestamp when the vulnerability was first detected. |
| Cve | dynamic | Common Vulnerabilities and Exposures (CVE) information. |
| DataProviders | dynamic | List of data providers that reported this vulnerability. |
| HostInfo | dynamic | Information about the affected host system. |
| Id | string | Unique identifier for the vulnerability record. |
| Remediation | dynamic | Remediation steps or recommendations for the vulnerability. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Status | string | Current status of the vulnerability. |
| SuppressionInfo | dynamic | Information about vulnerability suppression if applied. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) when the event was ingested. |
| Type | string | The name of the table |
| UpdatedTimestamp | datetime | Timestamp when the vulnerability record was last updated. |
| VulnerabilityId | string | Unique identifier for the specific vulnerability. |

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

