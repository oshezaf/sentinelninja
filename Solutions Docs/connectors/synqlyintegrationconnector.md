# Synqly Integration Connector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Synqly.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SynqlyIntegrationConnector` |
| **Publisher** | Synqly |
| **Used in Solutions** | [SynqlyIntegrationConnector](../solutions/synqlyintegrationconnector.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [SynqlyIntegrationConnector_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SynqlyIntegrationConnector/Data%20Connectors/SynqlyIntegrationConnector_CCF/SynqlyIntegrationConnector_ConnectorDefinition.json) |
| **DCR Definition Files** | [SynqlyIntegrationConnector_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SynqlyIntegrationConnector/Data%20Connectors/SynqlyIntegrationConnector_CCF/SynqlyIntegrationConnector_DCR.json) |
| **CCF Configuration** | [SynqlyIntegrationConnector_DataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SynqlyIntegrationConnector/Data%20Connectors/SynqlyIntegrationConnector_CCF/SynqlyIntegrationConnector_DataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#synqly-integration-connector) |

The [Synqly](https://synqly.com) connector provides the capability to push security events from Synqly integrations into Microsoft Sentinel using the Azure Logs Ingestion API. Events are automatically normalized to ASIM (Advanced Security Information Model) tables for use with Microsoft Sentinel analytics, workbooks, and hunting queries.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) | ✓ | ✓ | ? |
| [`ASimAuthenticationEventLogs`](../tables/asimauthenticationeventlogs.md) | ✓ | ✓ | ? |
| [`ASimDhcpEventLogs`](../tables/asimdhcpeventlogs.md) | ✓ | ✓ | ? |
| [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md) | ✓ | ✓ | ? |
| [`ASimFileEventLogs`](../tables/asimfileeventlogs.md) | ✓ | ✓ | ? |
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | ✓ | ✓ | ? |
| [`ASimProcessEventLogs`](../tables/asimprocesseventlogs.md) | ✓ | ✓ | ? |
| [`ASimRegistryEventLogs`](../tables/asimregistryeventlogs.md) | ✓ | ✓ | ? |
| [`ASimUserManagementActivityLogs`](../tables/asimusermanagementactivitylogs.md) | ✓ | ✓ | ? |
| [`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md) | ✓ | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required for the Log Analytics workspace.

**Custom Permissions:**
- **Microsoft Entra ID**: Application Developer role (or higher) to create app registrations.
- **Microsoft Azure**: Owner or User Access Administrator role on the resource group to deploy DCR and assign Monitoring Metrics Publisher role.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Create ARM Resources and Provide the Required Permissions**

This connector enables push-based ingestion of security events from Synqly integrations into Microsoft Sentinel. Events are automatically normalized to ASIM (Advanced Security Information Model) tables.
#### Deploy Connector Resources
Clicking "Deploy" creates a Data Collection Rule (DCR), Data Collection Endpoint (DCE), and Entra application with the necessary permissions to securely send data to Microsoft Sentinel.
Deploy Synqly Integration connector resources

**2. Grant Additional Permissions (Based on Use Case)**

Additional roles may be required depending on how you plan to use Synqly with Microsoft Sentinel.
**Sink Connector (Write-Only)**: No additional permissions needed.

**SIEM Connector (Read/Write)**: Assign **Microsoft Sentinel Contributor** role to the Entra application via the Azure UI in your Log Analytics workspace.

See [Synqly documentation](https://docs.synqly.com/guides/provider-configuration/microsoft-sentinel-siem-setup) for detailed setup guides.

**3. Push your logs into the workspace**

Provide these parameters to your Synqly integration. The Synqly service will automatically handle the technical details of data ingestion, including formatting events to one of the 10 supported ASIM schemas (Authentication, AuditEvent, Dhcp, Dns, FileEvent, NetworkSession, ProcessEvent, RegistryEvent, UserManagement, WebSession).
**Important**: Events with unsupported schema types are silently dropped by Azure. If expected data is not appearing, verify with your Synqly integration provider that events are being sent with one of the supported schema types listed above.
- **Tenant ID (Directory ID)**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra App Registration Application ID**: `ApplicationId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra App Registration Secret**: `ApplicationSecret`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Endpoint Uri**: `DataCollectionEndpoint`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Rule Immutable ID**: `DataCollectionRuleId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Stream Name**: `Custom-SynqlyASIM`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

