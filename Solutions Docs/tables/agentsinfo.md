# AgentsInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Information about AI agents and their properties from various platforms

| Attribute | Value |
|:----------|:------|
| **Category** | Security, XDR |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agentsinfo) |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-agentsinfo-table) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Content Items](#content-items-using-this-table)

## Schema (40 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agentsinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AgentId | string | Unique identifier for the agent |
| Availability | string | The deployment scope of the agent (that is, whether deployed to all users, specific groups, or individual users). |
| Capabilities | dynamic | The intents, actions, skills, and orchestrations of the agent. |
| Channels | dynamic | The channels or surfaces where the agent can operate, such as Microsoft 365 applications or APIs. |
| ConnectedAgents | dynamic | List of other agents connected to the agent for multi-agent orchestration. |
| CreatedDateTime | datetime | Date and time when the agent was created. |
| DeclaredDataSources | dynamic | The data repositories and knowledge sources the agent can access. |
| DeclaredTools | dynamic | Functional tools the agent can invoke at runtime. |
| Description | string | Description of the agent as displayed in the agent's source. |
| Endpoints | dynamic | List of agent runtime endpoints, including URL, transport type, and external connectivity flag. |
| EntraAgentID | string | The agent's unique enterprise application object identifier by Microsoft Entra ID |
| EntraBlueprintID | string | The unique identifier by Microsoft Entra ID for the agent identity blueprint, which serves as the template from which the agent's identity was created. |
| Guardrails | dynamic | Guardrails attached to the agent and their coverage. |
| InstanceCount | int | Number of agent instances created from the same Microsoft Entra ID agent identity blueprint. |
| Instructions | string | The agent's system prompt that defines its default behavior, persona, and operating boundaries. |
| LastPublishedDateTime | datetime | Date and time when the agent was last published or deployed. |
| LastUpdatedDateTime | datetime | Date and time when the agent's metadata was last modified. |
| LifecycleStatus | string | The agent's current operational state in the tenant; possible values: Active, Blocked, Uninstalled, Deleted. |
| McpServers | dynamic | The Model Context Protocol (MCP) servers connected to the agent, including server URLs and credential configuration. |
| Memory | dynamic | The agent's declarative memory store configuration. |
| Model | string | The AI model powering the agent. |
| ObservabilityID | dynamic | Unique identifier used to correlate the agent with its usage and activity data in Microsoft Agent 365. |
| Owners | dynamic | Primary owners of the agent. |
| Permissions | dynamic | Permissions record of the agent, including those that have been requested and granted, their approval state, and consent enumeration. |
| Platform | string | The platform that provided the information about the agent. |
| PublishedStatus | string | The agent's publications status: Draft, Published. |
| RawAgentInfo | dynamic | Additional information about the agent, in JSON format. |
| SharedWith | dynamic | The users and security groups the agent has been shared with. |
| Skills | dynamic | Skills attached to the agent. |
| SourceAgentId | string | Native identifier assigned by the platform where the agent originated. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time the event was recorded by the MDE agent on the endpoint. |
| Timestamp | datetime | Date and time the agent information was recorded. |
| ToolsAuthenticationType | dynamic | Structured summary of agent identity, authentication, and authorization model. |
| Triggers | dynamic | List of the agent's triggers. |
| Type | string | The name of the table |
| Version | string | Version of the agent. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [AgentsInfo Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agentsinfo)
- [AgentsInfo Schema Reference (Defender XDR)](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-agentsinfo-table)

---

## Content Items Using This Table (11)

### Hunting Queries (11)

**GitHub Only:**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [AI Agents - Hard-coded credentials in Tools or Configuration](../content/github-only-ai-agents-hard-coded-credentials-in-tools-or-configuration-fdc8a7ec-586d-4021-a78a-d27544986178-72f83c28.md) | `LifecycleStatus != "Deleted"` |
| [AI Agents - Instructions changed on previously published agent](../content/github-only-ai-agents-instructions-changed-on-previously-published-agent-662eae7f-494f-41a8-bfef-23dd80361795-0e3ddc5d.md) |  |
| [AI Agents - MCP Tool Configured](../content/github-only-ai-agents-mcp-tool-configured-a4e48491-6ed6-4064-bac2-385ef0e41afe-23c69432.md) | `LifecycleStatus != "Deleted"` |
| [AI Agents - Missing Tools in Instructions](../content/github-only-ai-agents-missing-tools-in-instructions-4bfbe654-d961-4712-b2a3-f1fd7eaa9da3-521dd75d.md) | `Instructions != "N/A"` |
| [AI Agents - Newly observed MCP server on existing agent](../content/github-only-ai-agents-newly-observed-mcp-server-on-existing-agent-d6ab015a-0a76-47f4-959f-54f49edff3f3-e81d92fe.md) |  |
| [AI Agents - Organization-wide Shared](../content/github-only-ai-agents-organization-wide-shared-8a53cf8e-04b1-4de6-95f2-916cc7c2b805-ad09cc30.md) | `LifecycleStatus != "Deleted"` |
| [AI Agents - Orphaned Agents with Disabled Owners](../content/github-only-ai-agents-orphaned-agents-with-disabled-owners-47ea3b0e-bedd-4fde-bda9-86aa76684a9b-ab0c6f59.md) | `LifecycleStatus != "Deleted"` |
| [AI Agents - Owner added to MCP-enabled agent](../content/github-only-ai-agents-owner-added-to-mcp-enabled-agent-c35b5a60-71ee-448c-935d-f60f4a4c7f2b-e01a6f5e.md) |  |
| [AI Agents - Published Agents with Short Instructions](../content/github-only-ai-agents-published-agents-with-short-instructions-2f1f88de-d79f-44bf-96d0-52fd9cbf49c4-ffe6a11f.md) | `Instructions != "N/A"`<br>`LifecycleStatus != "Deleted"`<br>`PublishedStatus == "Published"` |
| [AI Agents - Published Agents without Instructions](../content/github-only-ai-agents-published-agents-without-instructions-d51077dc-2a79-45e2-a036-503d74c85111-be5d96d1.md) | `Instructions == "N/A"`<br>`LifecycleStatus != "Deleted"`<br>`PublishedStatus == "Published"` |
| [AI Agents - Sharing expanded to organization-wide](../content/github-only-ai-agents-sharing-expanded-to-organization-wide-dbdba9cc-d7a0-434d-9c3d-82d2203a79fd-db1de9a8.md) |  |

## Selection Criteria Summary (4 criteria, 7 total references)

References by type: 0 connectors, 7 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `LifecycleStatus != "Deleted"` | - | 4 | - | - | **4** |
| `Instructions != "N/A"` | - | 1 | - | - | **1** |
| `Instructions == "N/A"`<br>`LifecycleStatus != "Deleted"`<br>`PublishedStatus == "Published"` | - | 1 | - | - | **1** |
| `Instructions != "N/A"`<br>`LifecycleStatus != "Deleted"`<br>`PublishedStatus == "Published"` | - | 1 | - | - | **1** |
| **Total** | **0** | **7** | **0** | **0** | **7** |

### Instructions

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!= N/A` | - | 2 | - | - | **2** |
| `N/A` | - | 1 | - | - | **1** |

### LifecycleStatus

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `!= Deleted` | - | 6 | - | - | **6** |

### PublishedStatus

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `Published` | - | 2 | - | - | **2** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

