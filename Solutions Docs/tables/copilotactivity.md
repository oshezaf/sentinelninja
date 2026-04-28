# CopilotActivity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for CopilotActivity table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Security |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/copilotactivity) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

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

## Content Items Using This Table (8)

### Analytic Rules (4)

**In solution [Microsoft Copilot](../solutions/microsoft-copilot.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Copilot - File Uploads Disabled](../content/microsoft-copilot-copilot-file-uploads-disabled-c3d4e5f6-a7b8-49c0-d1e2-f3a4b5c6d7e8-2b49efb6.md) |  |
| [Copilot - Jailbreak Attempt Detected](../content/microsoft-copilot-copilot-jailbreak-attempt-detected-e5f6a7b8-c9d0-41e2-f3a4-b5c6d7e8f9a0-37101c05.md) |  |
| [Copilot - Plugin Created by Non-Admin User](../content/microsoft-copilot-copilot-plugin-created-by-non-admin-user-a1b2c3d4-e5f6-47a8-b9c0-d1e2f3a4b5c6-534a022a.md) |  |
| [Copilot - Plugin Tampering (Enable and Disable Within 5 Minutes)](../content/microsoft-copilot-copilot-plugin-tampering-enable-and-disable-within-5-minutes-d4e5f6a7-b8c9-40d1-e2f3-a4b5c6d7e8f9-e650fbfe.md) |  |

### Hunting Queries (2)

**In solution [Microsoft Copilot](../solutions/microsoft-copilot.md):**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Copilot - Access From External IP Address](../content/microsoft-copilot-copilot-access-from-external-ip-address-f6a7b8c9-d0e1-42f3-a4b5-c6d7e8f9a0b1-76209661.md) |  |
| [Copilot - Plugin Enabled After Being Disabled](../content/microsoft-copilot-copilot-plugin-enabled-after-being-disabled-b2c3d4e5-f6a7-48b9-c0d1-e2f3a4b5c6d7-7fec45a8.md) |  |

### Workbooks (2)

**In solution [Microsoft Copilot](../solutions/microsoft-copilot.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftCopilotActivityMonitoring](../content/microsoft-copilot-microsoftcopilotactivitymonitoring-4219cdf5.md) |  |

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [MicrosoftCopilotActivityMonitoring](../content/github-only-microsoftcopilotactivitymonitoring-5169439d.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

