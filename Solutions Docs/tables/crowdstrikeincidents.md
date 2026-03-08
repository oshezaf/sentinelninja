# CrowdStrikeIncidents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for CrowdStrikeIncidents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Crowdstrike |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/crowdstrikeincidents) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (34 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/crowdstrikeincidents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AssignedTo | string | ID of the user assigned to the incident. |
| AssignedToName | string | Name of the user assigned to handle the incident. |
| Cid | string | Customer ID in the CrowdStrike platform. |
| Created | datetime | Timestamp when the incident was created. |
| Description | string | Detailed description of the incident. |
| EmailState | string | Current state of email notifications for the incident. |
| End | datetime | Timestamp when the incident was closed or resolved. |
| EventsHistogram | dynamic | Timeline of events associated with the incident. |
| FineScore | int | Severity score assigned to the incident. |
| GroupingIds | dynamic | List of IDs used to group related incidents. |
| HostIds | dynamic | List of host IDs involved in the incident. |
| Hosts | dynamic | Detailed information about affected hosts. |
| IncidentId | string | Unique identifier for the incident. |
| IncidentType | int | Numerical identifier for the type of incident. |
| LmHostIds | dynamic | List of host IDs associated with Lightweight Mode. |
| LmHostsCapped | bool | Indicates if the number of Lightweight Mode hosts was capped. |
| LmraHostIds | dynamic | List of host IDs associated with LMRA (Lightweight Mode Remote Access). |
| LmraHostsCapped | bool | Indicates if the number of LMRA hosts was capped. |
| LmTypes | int | Types of Lightweight Mode configurations. |
| ModifiedTimestamp | datetime | Timestamp when the incident was last modified. |
| Objectives | dynamic | List of attacker objectives identified in the incident. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Start | datetime | Timestamp when the incident started. |
| State | string | Current state of the incident. |
| Status | int | Numerical status code of the incident. |
| Tactics | dynamic | List of MITRE ATT&CK tactics identified in the incident. |
| Tags | dynamic | Custom tags associated with the incident. |
| Techniques | dynamic | List of MITRE ATT&CK techniques identified in the incident. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) when the incident data was ingested. |
| Type | string | The name of the table |
| Users | dynamic | List of users involved in or affected by the incident. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

