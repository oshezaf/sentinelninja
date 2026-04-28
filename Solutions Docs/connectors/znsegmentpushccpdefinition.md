# Zero Networks Segment (Push)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ZeroNetworks.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ZNSegmentPushCCPDefinition` |
| **Publisher** | Zero Networks |
| **Used in Solutions** | [ZeroNetworks](../solutions/zeronetworks.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [ZNSegmentPush_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroNetworks/Data%20Connectors/ZNSegment_CCP_Push/ZNSegmentPush_connectorDefinition.json) |
| **CCF Configuration** | [ZNSegmentPush_dataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroNetworks/Data%20Connectors/ZNSegment_CCP_Push/ZNSegmentPush_dataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |

The [Zero Networks Segment](https://zeronetworks.com/) push connector allows Zero Networks to send Audits, Network Activities, Identity Activities, and RPC Activities directly to Microsoft Sentinel in real time. Deploy the connector to create a Data Collection Rule (DCR) and Microsoft Entra app; then configure your Zero Networks application with the connection details to push events.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ZNAudit_CL`](../tables/znaudit-cl.md) | ? | ✓ | ? |
| [`ZNIdentityActivity_CL`](../tables/znidentityactivity-cl.md) | ? | ✓ | ? |
| [`ZNNetworkActivity_CL`](../tables/znnetworkactivity-cl.md) | ? | ✓ | ? |
| [`ZNRPCActivity_CL`](../tables/znrpcactivity-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.
- **Keys** (Workspace): Read permissions to shared keys for the workspace are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires Entra ID Application Developer role or higher.
- **Microsoft Azure**: Permission to assign Monitoring Metrics Publisher role on data collection rule (DCR). Typically requires Azure RBAC Owner or User Access Administrator role.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Create ARM Resources and Provide the Required Permissions**

Deploy the push connector to create a Log Analytics table, Data Collection Rule (DCR), Data Collection Endpoint (DCE), and Microsoft Entra app. Then configure your Zero Networks application with the connection details.
#### Automated Configuration
Clicking "Deploy" will create a DCR and DCE, then a Microsoft Entra app registration with client secret and grant permissions on the DCR. Your application can then send data securely using OAuth 2.0 client credentials.
- Deploy Zero Networks Push connector resources
  Application: Zero Networks Segment Push Connector

**2. Configure Your Zero Networks Application**

Use the following values to configure your Zero Networks application to push Audits, Network Activities, Identity Activities, and RPC Activities to Microsoft Sentinel.
- **Tenant ID (Directory ID)**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra Application ID**: `ApplicationId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra Application Secret**: `ApplicationSecret`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Endpoint URI**: `DataCollectionEndpoint`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Rule Immutable ID**: `DataCollectionRuleId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Stream: Audits**: `Custom-ZNAudit_CL`
- **Stream: Network Activities**: `Custom-ZNNetworkActivity_CL`
- **Stream: Identity Activities**: `Custom-ZNIdentityActivity_CL`
- **Stream: RPC Activities**: `Custom-ZNRPCActivity_CL`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

