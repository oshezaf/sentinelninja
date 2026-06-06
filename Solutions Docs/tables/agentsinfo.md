# AgentsInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Information about AI agents and their properties from various platforms

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-agentsinfo-table) |

## Schema (35 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agentsinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AgentDescription | string | Description of the agent as displayed in the agent's source |
| AgentId | string | Unique identifier for the agent |
| AgentName | string | Display name of the agent |
| Availability | string | The deployment scope of the agent (that is, whether deployed to all users, specific groups, or individual users) |
| Capabilities | dynamic | The intents, actions, skills, and orchestrations of the agent |
| Channels | dynamic | The channels or surfaces where the agent can operate, such as Microsoft 365 applications or APIs |
| ConnectedAgents | dynamic | List of other agents connected to the agent for multi-agent orchestration |
| CreatedDateTime | datetime | Date and time when the agent was created |
| DeclaredDataSources | dynamic | The data repositories and knowledge sources the agent can access |
| DeclaredTools | dynamic | Functional tools the agent can invoke at runtime |
| Endpoints | dynamic | List of agent runtime endpoints, including URL, transport type, and external connectivity flag |
| EntraAgentId | string | The agent's unique enterprise application object identifier by Microsoft Entra ID |
| EntraBlueprintId | string | The unique identifier by Microsoft Entra ID for the agent identity blueprint, which serves as the template from which the agent's identity was created |
| Guardrails | dynamic | Guardrails attached to the agent and their coverage |
| InstanceCount | int | Number of agent instances created from the same Microsoft Entra ID agent identity blueprint |
| Instructions | string | The agent's system prompt that defines its default behavior, persona, and operating boundaries |
| LastPublishedDateTime | datetime | Date and time when the agent was last published or deployed |
| LastUpdatedDateTime | datetime | Date and time when the agent's metadata was last modified |
| LifecycleStatus | string | The agent's current operational state in the tenant; possible values:Active,Blocked,Uninstalled,Deleted |
| McpServers | dynamic | The Model Context Protocol (MCP) servers connected to the agent, including server URLs and credential configuration |
| Memory | dynamic | The agent's declarative memory store configuration |
| Model | string | The AI model powering the agent |
| ObservabilityId | dynamic | Unique identifier used to correlate the agent with its usage and activity data in Microsoft Agent 365 |
| Owners | dynamic | Primary owners of the agent |
| Permissions | dynamic | Permissions record of the agent, including those that have been requested and granted, their approval state, and consent enumeration |
| Platform | string | The platform that provided the information about the agent |
| PublishedStatus | string | The agent's publication status; possible values:Draft,Published |
| RawAgentInfo | dynamic | Additional information about the agent, in JSON format |
| SharedWith | dynamic | The users and security groups the agent has been shared with |
| Skills | dynamic | Skills attached to the agent |
| SourceAgentId | string | Native identifier assigned by the platform where the agent originated |
| Timestamp | datetime | Date and time the agent information was recorded |
| ToolsAuthenticationType | dynamic | Structured summary of agent identity, authentication, and authorization model |
| Triggers | dynamic | List of the agent's triggers |
| Version | string | Version of the agent |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

