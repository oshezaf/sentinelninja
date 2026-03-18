# CopilotActivity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for CopilotActivity table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Security |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/copilotactivity) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/copilotactivity)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| ActorName | string | User principal name or email address. |
| ActorUserId | string | Internal user key or GUID. |
| ActorUserType | string | Type of user (e.g., Regular, Admin, System). |
| AgentId | string | The version number or version ID of the agent involved. |
| AgentName | string | A friendly readable name of the agent. |
| AIModelName | string | Name of the AI model used (for extensibility). |
| AIModelVersion | string | Version of the AI model used. |
| AppHost | string | Application that hosts copilot. |
| AppIdentity | string | Identity of the application hosting the copilot interaction. |
| ClientRegion | string | Region of the client. |
| LLMEventData | dynamic | Parsed LLM event data (for copilot different RecordTypes). |
| LogVersion | string | Version of the LLM log format. |
| OrganizationId | string | Organization GUID. |
| RecordId | string | Unique identifier for the audit record. |
| RecordType | string | Normalized record type name (e.g., CopilotInteraction, UpdateCopilotSettings). |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SrcIpAddr | string | IP address of the client. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp of the audit event. |
| Type | string | The name of the table |
| Version | string | Version of the audit schema or event. |
| Workload | string | The workload or product (e.g., Copilot, AzureOpenAI). |

## Solutions (1)

This table is used by the following solutions:

- [Microsoft Copilot](../solutions/microsoft-copilot.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Microsoft Copilot](../connectors/microsoftcopilot.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

