# AIAgentsInfo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Information about AI agents created with Microsoft Copilot Studio, including agent configuration and ownership details

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-aiagentsinfo-table) |

## Schema (28 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aiagentsinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AccessControlPolicy | string | Users that can interact with the agent; possible values: Any, Copilot readers, Group membership, Any (multitenant) |
| AgentActionTriggers | string | List of triggers that makes an autonomous agent take action |
| AgentAppId | string | The unique app identifier registered for the agent in Microsoft Entra |
| AgentCreationTime | datetime | Date and time when the agent was created |
| AgentDescription | string | Description of the agent as displayed in the agent's source |
| AgentStatus | string | Status of the agent; possible values: Created, Published, Deleted |
| AgentToolsDetails | dynamic | Specifications of the tools that the agent can access and perform actions on |
| AgentTopicsDetails | dynamic | Specifications of the topics that the agent can perform |
| AgentUsers | string | List of user principal names (UPNs) or group IDs that can use the agent |
| AIAgentId | guid | Unique identifier for the agent as assigned to it in Microsoft 365 Copilot or Copilot Studio |
| AIAgentName | string | Display name of the agent |
| AuthenticationTrigger | string | Indicates when authentication is triggered for the agent; possible values: As Needed, Always |
| AuthorizedSecurityGroupIds | dynamic | List of Azure Active Directory Group IDs that are allowed to interact with the agent |
| ChildAgentsSchemaNames | dynamic | Lists the schema names of the child agents that exist within the main agent |
| ConnectedAgentsSchemaNames | dynamic | Lists the schema names of connected agents, which are independently managed agents that are linked to the main one for orchestration |
| CreatorAccountUpn | string | User principal name (UPN) of the account that created the agent |
| EnvironmentId | string | The identifier of the Microsoft Power Platform environment the agent resides in |
| IsGenerativeOrchestrationEnabled | boolean | ndicates whether the agent uses generative orchestration (that is, dynamically chooses tools, knowledge, and actions based on context) to operate |
| KnowledgeDetails | string | Details about the knowledge sources added to the agent |
| LastModifiedByUpn | string | User principal name (UPN) of the account that last modified that agent |
| LastModifiedTime | datetime | Date and time when the agent was last modified |
| LastPublishedByUpn | string | User principal name (UPN) of the account that last published the agent |
| LastPublishedTime | datetime | Date and time when the agent was last published |
| OwnerAccountUpns | string | User principal names (UPN) of all the owners of the agent |
| Platform | string | The platform that provided the information about the agents; possible values: Copilot Studio |
| RawAgentInfo | string | Contents of the raw JSON that describes the agent and contains configuration details, as received from the provider |
| Timestamp | datetime | Last date and time recorded for the agent info |
| UserAuthenticationType | string | The agentâs configured authentication type for users interacting with the agent; possible values: None, Microsoft, Custom |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

