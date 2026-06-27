# ASimAgentEventLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ASimAgentEventLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Normalized |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimagenteventlogs) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Resource Types](#resource-types)

## Schema (73 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimagenteventlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ActingAppId | string | The identifier of the application that initiated the event. |
| ActingAppName | string | The name of the application that initiated the event. |
| ActingAppType | string | The type of the application that initiated the event. |
| ActorUserId | string | The unique identifier of the actor user. |
| ActorUserIdType | string | The type of the actor user identifier. |
| ActorUsername | string | The username of the actor. |
| ActorUsernameType | string | The type of the actor username. |
| ActorUserScope | string | The scope of the actor user. |
| ActorUserScopeId | string | The scope identifier of the actor user. |
| AdditionalFields | dynamic | Additional information not covered by other fields, stored as key-value pairs. |
| EventCount | int | The number of events aggregated in this record. |
| EventEndTime | datetime | The time at which the event ended. |
| EventErrorDetails | string | Details about any error that occurred during the event. |
| EventFinishReasons | dynamic | The reasons for the event completion. |
| EventOriginalErrorType | string | The original error type as provided by the source. |
| EventOriginalRequestDetails | string | The original request details as provided by the source. |
| EventOriginalResultDetails | string | The original result details as provided by the source. |
| EventOriginalType | string | The original event type as provided by the source. |
| EventOriginalUid | string | The original unique identifier of the event as provided by the source. |
| EventOutputType | string | The type of the event output. |
| EventProduct | string | The product that generated the event. |
| EventRequestFrequencyPenalty | real | The frequency penalty parameter used in the event request. |
| EventRequestId | string | The unique identifier of the request associated with the event. |
| EventRequestPresencePenalty | real | The presence penalty parameter used in the event request. |
| EventRequestSeed | long | The seed parameter used in the event request for reproducibility. |
| EventRequestTemperature | real | The temperature parameter used in the event request. |
| EventRequestTopP | real | The top-p (nucleus sampling) parameter used in the event request. |
| EventResponseId | string | The unique identifier of the response associated with the event. |
| EventSchema | string | The name of the ASIM schema for the event. |
| EventSchemaVersion | string | The version of the ASIM schema used. |
| EventSessionId | string | The unique identifier of the event session. |
| EventSessionName | string | The name of the event session. |
| EventStartTime | datetime | The time at which the event started. |
| EventThoughtProcessDetails | string | Details about the thought process or reasoning during the event. |
| EventThoughtProcessId | string | The unique identifier of the thought process associated with the event. |
| EventType | string | The type of the event. |
| EventUid | string | A unique identifier for the event. |
| EventVendor | string | The vendor of the product that generated the event. |
| InputTokensUsed | long | The number of input tokens consumed during the event. |
| ModelName | string | The name of the model used in the event. |
| ModelProviderName | string | The name of the model provider. |
| OutputTokensUsed | long | The number of output tokens generated during the event. |
| PlatformTargetAgentDescription | string | A description of the platform target agent. |
| PlatformTargetAgentId | string | The unique identifier of the platform target agent. |
| PlatformTargetAgentName | string | The name of the platform target agent. |
| PlatformTargetOriginalAgentType | string | The original type of the platform target agent as reported by the source. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| SrcAgentBlueprintId | string | The blueprint identifier of the source agent. |
| SrcAgentDescription | string | A description of the source agent. |
| SrcAgentId | string | The unique identifier of the source agent. |
| SrcAgentName | string | The name of the source agent. |
| SrcAgentOriginalType | string | The original type of the source agent as reported by the source. |
| SrcFQDN | string | The fully qualified domain name of the source. |
| SrcIpAddr | string | The IP address of the source. |
| SrcPortNumber | int | The port number of the source. |
| TargetAgentBlueprintId | string | The blueprint identifier of the target agent. |
| TargetAgentDescription | string | A description of the target agent. |
| TargetAgentId | string | The unique identifier of the target agent. |
| TargetAgentName | string | The name of the target agent. |
| TargetAgentOriginalType | string | The original type of the target agent as reported by the source. |
| TargetAgentUserId | string | The user identifier associated with the target agent. |
| TargetAgentUsername | string | The username associated with the target agent. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| ToolDescription | string | A description of the tool used in the event. |
| ToolId | string | The unique identifier of the tool used in the event. |
| ToolName | string | The name of the tool used in the event. |
| ToolOriginalType | string | The original type of the tool as reported by the source. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [ASimAgentEventLogs Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/asimagenteventlogs)

## Solutions (1)

This table is used by the following solutions:

- [OpenAI](../solutions/openai.md)

## Connectors (1)

This table is ingested by the following connectors:

**Selection Criteria:** `EventProduct == "OpenAI API Platform"`<br>`EventType == "ChatCompletion"`<br>`EventVendor == "OpenAI"`

| Connector |
|:----------|
| [OpenAI (via Codeless Connector Framework)](../connectors/openaiconnector.md) |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.securityinsights/agenteventnormalized`

## Selection Criteria Summary (1 criteria, 1 total references)

References by type: 1 connectors, 0 content items, 0 ASIM parsers, 0 other parsers.

| Selection Criteria | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:-------------------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `EventProduct == "OpenAI API Platform"`<br>`EventType == "ChatCompletion"`<br>`EventVendor == "OpenAI"` | 1 | - | - | - | **1** |
| **Total** | **1** | **0** | **0** | **0** | **1** |

### EventProduct / EventVendor

| EventProduct | EventVendor | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:---------|:---------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `OpenAI API Platform` | `OpenAI` | 1 | - | - | - | **1** |

### EventType

| Value | Connectors | Content Items | ASIM Parsers | Other Parsers | Total |
|:------|:----------:|:-------------:|:------------:|:-------------:|:-----:|
| `ChatCompletion` | 1 | - | - | - | **1** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

