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

## Schema (38 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aiagentsinfo)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| AccessCapabilities | dynamic | Data access capabilities granted to the agent |
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
| AIModel | string | The AI model powering the agent |
| AuthenticationTrigger | string | Indicates when authentication is triggered for the agent; possible values: As Needed, Always |
| AuthorizedSecurityGroupIds | dynamic | List of Azure Active Directory Group IDs that are allowed to interact with the agent |
| ChildAgentsSchemaNames | dynamic | Lists the schema names of the child agents that exist within the main agent |
| ConnectedAgentsSchemaNames | dynamic | Lists the schema names of connected agents, which are independently managed agents that are linked to the main one for orchestration |
| CreatorAccountUpn | string | User principal name (UPN) of the account that created the agent |
| ElementTypes | dynamic | Technical component types that make up the agent |
| EntraBlueprintId | string | The agent's identity blueprint principal identifier by Microsoft Entra Agent ID |
| EntraObjectId | string | The agent's unique enterprise application object identifier by Microsoft Entra ID |
| EnvironmentId | string | The identifier of the Microsoft Power Platform environment the agent resides in |
| Instructions | string | The agent's system prompt that defines its default behavior, persona, and operating boundaries |
| IsBlocked | boolean | Indicates whether the agent has been blocked by an administrator |
| IsGenerativeOrchestrationEnabled | boolean | Indicates whether the agent uses generative orchestration (that is, dynamically chooses tools, knowledge, and actions based on context) to operate |
| KnowledgeDetails | string | Details about the knowledge sources added to the agent |
| LastModifiedByUpn | string | User principal name (UPN) of the account that last modified that agent |
| LastModifiedTime | datetime | Date and time when the agent was last modified |
| LastPublishedByUpn | string | User principal name (UPN) of the account that last published the agent |
| LastPublishedTime | datetime | Date and time when the agent was last published |
| OwnerAccountUpns | string | User principal names (UPN) of all the owners of the agent |
| Platform | string | The platform that provided the information about the agents; possible values: Copilot Studio |
| RawAgentInfo | string | Contents of the raw JSON that describes the agent and contains configuration details, as received from the provider |
| RegistrySource | string | Registry that provided the agent's metadata |
| SourceAgentId | string | The platform-native identifier of the agent, such as the Azure Resource Manager (ARM) identifier for Microsoft Foundry agents or the environment-scoped agent identifier for Copilot Studio agents |
| Timestamp | datetime | Last date and time recorded for the agent info |
| UserAuthenticationType | string | The agentâs configured authentication type for users interacting with the agent; possible values: None, Microsoft, Custom |
| Version | string | Version of the agent |

---

## Content Items Using This Table (26)

### Hunting Queries (26)

**GitHub Only:**

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [A365 AI Agents - HTTP Requests to Non-HTTPS Endpoints](../content/github-only-a365-ai-agents-http-requests-to-non-https-endpoints-4f5a6b7c-8d9e-0f1a-2b3c-4d5e6f7a8b9c-9d4340c8.md) |  |
| [A365 AI Agents - HTTP Requests to Non-standard Ports](../content/github-only-a365-ai-agents-http-requests-to-non-standard-ports-9d0e1f2a-3b4c-5d6e-7f8a-9b0c1d2e3f4a-ac521aee.md) |  |
| [A365 AI Agents - Hard-coded credentials in Tools or Actions](../content/github-only-a365-ai-agents-hard-coded-credentials-in-tools-or-actions-1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d-0acbbd53.md) |  |
| [A365 AI Agents - MCP Tool Configured](../content/github-only-a365-ai-agents-mcp-tool-configured-2c3d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f-bac34b9a.md) |  |
| [A365 AI Agents - Missing Tools in Instructions](../content/github-only-a365-ai-agents-missing-tools-in-instructions-7d8e9f0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a-14b1b82a.md) |  |
| [A365 AI Agents - Orphaned Agents with Disabled Owners](../content/github-only-a365-ai-agents-orphaned-agents-with-disabled-owners-6e7f8a9b-0c1d-2e3f-4a5b-6c7d8e9f0a1b-069ee2a6.md) |  |
| [A365 AI Agents - Publicly Shared](../content/github-only-a365-ai-agents-publicly-shared-8c9d0e1f-2a3b-4c5d-6e7f-8a9b0c1d2e3f-f1f42fc4.md) |  |
| [A365 AI Agents - Published Agents with Short Instructions](../content/github-only-a365-ai-agents-published-agents-with-short-instructions-5f6a7b8c-9d0e-1f2a-3b4c-5d6e7f8a9b0c-3833b204.md) |  |
| [A365 AI Agents - Published Agents without Instructions](../content/github-only-a365-ai-agents-published-agents-without-instructions-3a4b5c6d-7e8f-9a0b-1c2d-3e4f5a6b7c8d-3cdf25a6.md) |  |
| [AI Agents - MCP Tool Configured](../content/github-only-ai-agents-mcp-tool-configured-6d8e5f9a-0b1c-2d3e-4f5a-6b7c8d9e0f1a-06a4d484.md) |  |
| [AI Agents - Orphaned Agents with Disabled Owners](../content/github-only-ai-agents-orphaned-agents-with-disabled-owners-5e0f4a6b-7c8d-9e0f-1a2b-3c4d5e6f7a8b-4b3d8cb1.md) |  |
| [AI Agents - Unpublished Unmodified (30d)](../content/github-only-ai-agents-unpublished-unmodified-30d-7c0f3a6b-9d2e-1f4a-5b7c-8d0e2f5a8b1c-8768e1cc.md) |  |
| [Copilot Studio AI Agents - Dormant Author Authentication Connection](../content/github-only-copilot-studio-ai-agents-dormant-author-authentication-connection-2a5b8c1d-4e7f-0a1b-2c3d-4e5f6a7b8c9d-3500cbed.md) |  |
| [Copilot Studio AI Agents - HTTP Requests to Connector Endpoints](../content/github-only-copilot-studio-ai-agents-http-requests-to-connector-endpoints-8b3c7d9e-0f1a-2b3c-4d5e-6f7a8b9c0d1e-eb968e4c.md) |  |
| [Copilot Studio AI Agents - HTTP Requests to Non-HTTPS Endpoints](../content/github-only-copilot-studio-ai-agents-http-requests-to-non-https-endpoints-7a2b6c8d-9e0f-1a2b-3c4d-5e6f7a8b9c0d-948f0c93.md) |  |
| [Copilot Studio AI Agents - HTTP Requests to Non-standard Ports](../content/github-only-copilot-studio-ai-agents-http-requests-to-non-standard-ports-6f1a5b7c-8d9e-0f1a-2b3c-4d5e6f7a8b9c-421292da.md) |  |
| [Copilot Studio AI Agents - Hard-coded credentials in Topics or Actions](../content/github-only-copilot-studio-ai-agents-hard-coded-credentials-in-topics-or-actions-3a5b2c6d-7e8f-9a0b-1c2d-3e4f5a6b7c8d-c05ecd20.md) |  |
| [Copilot Studio AI Agents - MCP Tool with Maker Credentials](../content/github-only-copilot-studio-ai-agents-mcp-tool-with-maker-credentials-7e9f6a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b-fa7f7fe6.md) |  |
| [Copilot Studio AI Agents - No Authentication Required](../content/github-only-copilot-studio-ai-agents-no-authentication-required-2b7c1d3e-4f5a-6b7c-8d9e-0f1a2b3c4d5e-f0085d70.md) |  |
| [Copilot Studio AI Agents - Organization or Multi-tenant Shared](../content/github-only-copilot-studio-ai-agents-organization-or-multi-tenant-shared-4a8b2c5d-6e7f-8a9b-0c1d-2e3f4a5b6c7d-77437c33.md) |  |
| [Copilot Studio AI Agents - Published Agents with Author Authentication](../content/github-only-copilot-studio-ai-agents-published-agents-with-author-authentication-1f6a9b2c-3d4e-5f6a-7b8c-9d0e1f2a3b4c-e5ec22e6.md) |  |
| [Copilot Studio AI Agents - Published Dormant (30d)](../content/github-only-copilot-studio-ai-agents-published-dormant-30d-5e8f1a2b-3c4d-5e6f-7a8b-9c0d1e2f3a4b-bdb68b50.md) |  |
| [Copilot Studio AI Agents - Published Generative Orchestration without Instructions](../content/github-only-copilot-studio-ai-agents-published-generative-orchestration-without-instructions-8f0a7b1c-2d3e-4f5a-6b7c-8d9e0f1a2b3c-5e32963a.md) |  |
| [Copilot Studio AI Agents - Sending email to AI controlled input values](../content/github-only-copilot-studio-ai-agents-sending-email-to-ai-controlled-input-values-9e4f8a1b-2c3d-4e5f-6a7b-8c9d0e1f2a3b-9e8cf5e7.md) |  |
| [Copilot Studio AI Agents - Sending email to external mailboxes](../content/github-only-copilot-studio-ai-agents-sending-email-to-external-mailboxes-0d5e9f1a-2b3c-4d5e-6f7a-8b9c0d1e2f3a-c7f37367.md) |  |
| [Copilot Studio AI Agents - Unused Actions](../content/github-only-copilot-studio-ai-agents-unused-actions-3b6c9d0e-1f2a-3b4c-5d6e-7f8a9b0c1d2e-0492066a.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

