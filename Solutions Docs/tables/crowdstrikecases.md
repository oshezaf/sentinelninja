# CrowdStrikeCases

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for CrowdStrikeCases table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Crowdstrike |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/crowdstrikecases) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Parsers](#parsers-using-this-table)

## Schema (25 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/crowdstrikecases)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AnalysisResults | dynamic | The results of analyzing the case evidence (alerts, cloud_assets, events, files, hosts, users). |
| AssignedTo | dynamic | Details about the user who is currently assigned to the case. |
| Cid | string | The unique customer account ID that the case belongs to. |
| Consistency | dynamic | Background processing details associated with updates made to the case. |
| CreatedBy | dynamic | Details about the user who created the case. |
| CreatedTimestamp | datetime | The date and time the case was created. |
| CrowdStrikeDomain | string | CrowdStrike host/domain configured for this connection; hard-coded on every record so hosts can be differentiated. |
| Description | string | The user-provided description of the case. |
| EndTimestamp | datetime | The date and time the case was ended. |
| Evidence | dynamic | Evidence associated with the case (alerts, events). |
| Id | string | The unique ID of the case. |
| LastUpdatedBy | dynamic | Details about the user who last updated the case. |
| Severity | int | The current user-provided severity rating of the case (1-100). |
| SeverityInfo | dynamic | Additional information about the severity of the case. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartTimestamp | datetime | The date and time the case was started. |
| Status | string | The current status of the case (new, closed, in_progress, reopened). |
| Tags | dynamic | A list of user-defined labels applied to the case. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) when the host data was ingested. |
| Type | string | The name of the table |
| UpdatedTimestamp | datetime | The date and time the case was last updated. |
| Version | int | The current case version. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [CrowdStrikeCases Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/crowdstrikecases)

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CrowdStrike](../parsers/crowdstrike.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) ⚠️ |  |

> ⚠️ Parsers marked with ⚠️ are not listed in their Solution JSON file.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

