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

## Content Items Using This Table (17)

### Hunting Queries (17)

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [AI Agents - Dormant Author Authentication Connection](../content/github-only-ai-agents-dormant-author-authentication-connection-2a5b8c1d-4e7f-0a1b-2c3d-4e5f6a7b8c9d-b10f02e7.md) |  |
| [AI Agents - HTTP Requests to Connector Endpoints](../content/github-only-ai-agents-http-requests-to-connector-endpoints-8b3c7d9e-0f1a-2b3c-4d5e-6f7a8b9c0d1e-944d929a.md) |  |
| [AI Agents - HTTP Requests to Non-HTTPS Endpoints](../content/github-only-ai-agents-http-requests-to-non-https-endpoints-7a2b6c8d-9e0f-1a2b-3c4d-5e6f7a8b9c0d-824d8061.md) |  |
| [AI Agents - HTTP Requests to Non-standard Ports](../content/github-only-ai-agents-http-requests-to-non-standard-ports-6f1a5b7c-8d9e-0f1a-2b3c-4d5e6f7a8b9c-6ed66cc8.md) |  |
| [AI Agents - Hard-coded credentials in Topics or Actions](../content/github-only-ai-agents-hard-coded-credentials-in-topics-or-actions-3a5b2c6d-7e8f-9a0b-1c2d-3e4f5a6b7c8d-376c850d.md) |  |
| [AI Agents - MCP Tool Configured](../content/github-only-ai-agents-mcp-tool-configured-6d8e5f9a-0b1c-2d3e-4f5a-6b7c8d9e0f1a-2e416314.md) |  |
| [AI Agents - MCP Tool with Maker Credentials](../content/github-only-ai-agents-mcp-tool-with-maker-credentials-7e9f6a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b-dd3543d6.md) |  |
| [AI Agents - No Authentication Required](../content/github-only-ai-agents-no-authentication-required-2b7c1d3e-4f5a-6b7c-8d9e-0f1a2b3c4d5e-52f0e6e2.md) |  |
| [AI Agents - Organization or Multi-tenant Shared](../content/github-only-ai-agents-organization-or-multi-tenant-shared-4a8b2c5d-6e7f-8a9b-0c1d-2e3f4a5b6c7d-096b8bc4.md) |  |
| [AI Agents - Orphaned Agents with Disabled Owners](../content/github-only-ai-agents-orphaned-agents-with-disabled-owners-5e0f4a6b-7c8d-9e0f-1a2b-3c4d5e6f7a8b-397fc13b.md) |  |
| [AI Agents - Published Agents with Author Authentication](../content/github-only-ai-agents-published-agents-with-author-authentication-1f6a9b2c-3d4e-5f6a-7b8c-9d0e1f2a3b4c-825feb91.md) |  |
| [AI Agents - Published Dormant (30d)](../content/github-only-ai-agents-published-dormant-30d-5e8f1a2b-3c4d-5e6f-7a8b-9c0d1e2f3a4b-96af1d20.md) |  |
| [AI Agents - Published Generative Orchestration without Instructions](../content/github-only-ai-agents-published-generative-orchestration-without-instructions-8f0a7b1c-2d3e-4f5a-6b7c-8d9e0f1a2b3c-a16425bb.md) |  |
| [AI Agents - Sending email to AI controlled input values](../content/github-only-ai-agents-sending-email-to-ai-controlled-input-values-9e4f8a1b-2c3d-4e5f-6a7b-8c9d0e1f2a3b-0de91e14.md) |  |
| [AI Agents - Sending email to external mailboxes](../content/github-only-ai-agents-sending-email-to-external-mailboxes-0d5e9f1a-2b3c-4d5e-6f7a-8b9c0d1e2f3a-8b830fd1.md) |  |
| [AI Agents - Unpublished Unmodified (30d)](../content/github-only-ai-agents-unpublished-unmodified-30d-7c0f3a6b-9d2e-1f4a-5b7c-8d0e2f5a8b1c-8914febf.md) |  |
| [AI Agents - Unused Actions](../content/github-only-ai-agents-unused-actions-3b6c9d0e-1f2a-3b4c-5d6e-7f8a9b0c1d2e-38ae2e90.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

