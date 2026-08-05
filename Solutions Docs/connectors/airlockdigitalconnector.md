# Airlock Digital connector (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AirlockDigitalConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [AirlockDigital](../solutions/airlockdigital.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [AirlockDigital_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AirlockDigital/Data%20Connectors/AirlockDigital_CCF/AirlockDigital_ConnectorDefinition.json) |
| **DCR Definition Files** | [AirlockDigital_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AirlockDigital/Data%20Connectors/AirlockDigital_CCF/AirlockDigital_DCR.json) |
| **CCF Configuration** | [AirlockDigital_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AirlockDigital/Data%20Connectors/AirlockDigital_CCF/AirlockDigital_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging`, `POST` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#airlock-digital-connector-via-codeless-connector-framework) |

The Airlock Digital connector collects application control and execution logs from your Airlock Digital server, providing visibility into file executions, server activities, and security event summaries in Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AirlockDigitalExecutionHistories_CL`](../tables/airlockdigitalexecutionhistories-cl.md) | ? | ✓ | ? |
| [`AirlockDigitalFileActivitySummary_CL`](../tables/airlockdigitalfileactivitysummary-cl.md) | ? | ✓ | ? |
| [`AirlockDigitalServerActivities_CL`](../tables/airlockdigitalserveractivities-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Airlock Digital API Key**: API Key with read access to logging endpoints. Generate from Airlock Digital Web UI: User Menu > Settings > API Keys.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configure Airlock Digital API Access**

Provide API connection details for Airlock Digital
**Before you begin:**
- Access to your Airlock Digital server
- API Key from Airlock Digital (User Menu > Settings > API Keys)
- Server must be accessible from Azure (ensure firewall allows connections)

**Base URL:** Enter your Airlock Digital server URL. Default port is 3129 for REST API.
Example: `https://airlock.company.com:3129`

**The connector collects:**
- **Server Activities**: Administrative actions, policy changes, agent check-ins, and repository updates
- **Execution Histories**: File execution events including blocked, audited, and trusted executions with file hashes, publishers, and user details
- **File Activity Summary**: Aggregated statistics on file activity, security events, and execution trends

**Data refresh:** Logs are retrieved every 5 minutes. Data should appear within 5-10 minutes after connection.

**2. Connect Airlock Digital servers to Microsoft Sentinel**

This connector supports multiple simultaneous connections. Add one connection per Airlock Digital server; each connection ingests the selected data types in parallel. Use the grid below to review existing connections or add a new one.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connector Name**
- **Data Type**
- **Endpoint**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Connect an Airlock Digital server**

*Airlock Digital*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

## Connection details

Provide the Airlock Digital server URL and API key, then choose which data types to collect. Create a separate connection for each Airlock Digital server.

- **Base URL** (required): https://server.name:3129
- **API Key** (required): Enter your Airlock Digital API Key
- **Data Types** (required): Select from available options
  - Server Activities
  - Execution Histories
  - File Activity Summary
- **Connector Friendly Name** (required): Enter a unique friendly name for this connection

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

