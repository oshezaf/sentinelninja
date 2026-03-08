# ACSCallSummary

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ACSCallSummary table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acscallsummary) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (33 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/acscallsummary)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| CallDebuggingInfo | string | JSON containing the fields with debug details about the call. |
| CallDuration | long | Duration of the call in seconds. |
| CallStartTime | datetime | Start time of the call. |
| CallType | string | Type of the call, for example P2P (peer to peer). |
| Category | string | The log category of the event. Logs with the same log category and resource type will have the same properties fields. |
| CorrelationId | string | The ID for correlated events. Can be used to identify correlated events between multiple tables. |
| DiagnosticOptions | string | JSON containing the DiagnosticOptions provided during client initialization containing appName, appVersion and tags. |
| EndpointId | string | The ID of the endpoint. |
| EndpointType | string | Type of the endpoint, for example VoIP (voice over IP). |
| Identifier | string | The indentifier of the call used to correlate. Can be used to identify correlated events between multiple tables. |
| OperationName | string | The operation associated with log record. |
| OperationVersion | string | The API-version associated with the operation or version of the operation (if there is no API version). |
| OsVersion | string | Operating System version. |
| ParticipantDuration | long | Duration of the participant call in seconds. |
| ParticipantEndReason | string | Participant's call end reason. |
| ParticipantEndSubCode | string | Participant's call end reason sub code. |
| ParticipantId | string | ID of the participant. |
| ParticipantStartTime | datetime | Start time of the participant. |
| ParticipantTenantId | string | The ID of the Microsoft tenant associated with the identity of the participant. The tenant can either be the Azure tenant that owns the ACS resource or the Microsoft tenant of an M365 identity. This field is used to guide cross-tenant redaction. |
| ParticipantType | string | Description of the participant as a combination of its client (Azure Communication Services (ACS) or Teams), and its identity, (ACS or Microsoft 365). Possible values include: ACS (ACS identity and ACS SDK), Teams (Teams identity and Teams client), ACS as Teams external user (ACS identity and ACS SDK in Teams call or meeting), and ACS as Microsoft 365 user (M365 identity and ACS client). |
| PstnParticipantCallType | string | The type and direction of PSTN participants, including emergency calling, direct routing, transfer, forwarding, etc. |
| ResultCategory | string | The category of participant call end reason. |
| SdkVersion | string | SDK version. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TeamsThreadId | string | Thread ID of the team. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| TPE | bool | Boolean value that identify Teams Phone Extensibility calls. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.communication/communicationservices`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

