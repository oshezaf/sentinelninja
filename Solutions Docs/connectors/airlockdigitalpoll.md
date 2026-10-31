# Airlock Digital (Poll)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/AirlockDigital.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AirlockDigitalPoll` |
| **Publisher** | Airlock Digital |
| **Used in Solutions** | [AirlockDigital](../solutions/airlockdigital.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [AirlockDigitalPoll_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AirlockDigital/Data%20Connectors/AirlockDigitalPoll_CCF/AirlockDigitalPoll_ConnectorDefinition.json) |
| **DCR Definition Files** | [AirlockDigitalPoll_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AirlockDigital/Data%20Connectors/AirlockDigitalPoll_CCF/AirlockDigitalPoll_DCR.json) |
| **CCF Configuration** | [AirlockDigitalPoll_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AirlockDigital/Data%20Connectors/AirlockDigitalPoll_CCF/AirlockDigitalPoll_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging`, `POST` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#airlock-digital-poll) |

The [Airlock Digital](https://www.airlockdigital.com/) **Poll** connector periodically pulls execution history and server activity logs from the REST API of a self-hosted Airlock Digital server, authenticating with a user API key. It is intended for servers older than v7.0 that do not support push-based logging, and it does not collect policy change logs. For self-hosted servers or Airlock Digital SaaS running v7.0 or higher, the **Airlock Digital (Push)** connector delivers events in near real time; for Airlock Digital SaaS, the **Airlock Digital (Poll - SaaS)** connector is also available.



>**NOTE:** Use one connector per Airlock Digital server. If the same server is collected by more than one Airlock Digital connector, duplicate data is populated in the tables.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AirlockDigitalExecutionHistories_CL`](../tables/airlockdigitalexecutionhistories-cl.md) | ✗ | ✓ | ✗ |
| [`AirlockDigitalServerActivities_CL`](../tables/airlockdigitalserveractivities-cl.md) | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Airlock Digital API key**: An API key for your Airlock Digital server.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configure access to the Airlock Digital API**

Set up API access on your Airlock Digital server before connecting.
The Airlock Digital REST API listens on port 3129 by default, so your server URL looks like `https://airlock.company.com:3129`. The server must be reachable from Azure.

Create an API key in Airlock Digital under **User Menu** > **My Profile** > **API Keys**.

Logs are polled every five minutes.

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

- **Airlock server URL** (required): https://your-airlock-server:3129
- **API key** (required): Enter your Airlock Digital API key
- **Data Types** (required): Select from available options
  - Execution Histories
  - Server Activities
- **Connector Friendly Name** (required): Enter a unique friendly name for this connection

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

