# BitSight Security Events (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/BitSight.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `BitSightEventsConnector` |
| **Publisher** | Microsoft |
| **Source Vendor** | BitSight *(basis: description_url)* |
| **Source Product** | Security |
| **Used in Solutions** | [BitSight](../solutions/bitsight.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BitSight/Data%20Connectors/BitSight_Events_CCF/ConnectorDefinition.json) |
| **DCR Definition Files** | [DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BitSight/Data%20Connectors/BitSight_Events_CCF/DCR.json) |
| **CCF Configuration** | [PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BitSight/Data%20Connectors/BitSight_Events_CCF/PollingConfig.json) |
| **CCF Capabilities** | `Basic`, `Paging`, `Nested` |

The [BitSight](https://www.bitsight.com/) data connector provides the capability to ingest security alerts, breaches, and findings from your BitSight portfolio into Microsoft Sentinel through the BitSight REST API. The connector monitors portfolio companies for rating changes, news alerts, data breaches, and detailed security findings across Diligence, Compromised Systems, and User Behavior risk categories. Refer to the [BitSight API documentation](https://help.bitsighttech.com/hc/en-us/articles/115014888388-API-Token-Management) for more information.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`BitSightAlerts_CL`](../tables/bitsightalerts-cl.md) | ? | ✓ | ? |
| [`BitSightBreaches_CL`](../tables/bitsightbreaches-cl.md) | ? | ✓ | ? |
| [`BitSightFindings_CL`](../tables/bitsightfindings-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **BitSight API Token**: A BitSight API Token is required to authenticate requests to the BitSight REST API. [See the documentation](https://help.bitsighttech.com/hc/en-us/articles/115014888388-API-Token-Management) to learn more about API Token management.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connection Management**

Manage your BitSight data stream connections
## BitSight Connections

Manage multiple BitSight data stream connections. Each connection selects a specific data type - **Alerts**, **Breaches**, or **Findings** - and assigns a **Connection Name** that is stored in the `ConnectorName` column of every ingested record.

> **Authentication**: BitSight uses HTTP Basic Authentication where the API token is used as **both** the username and password.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connection Name**
- **Data Stream**
- **API URL**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add BitSight Connection**

*Configure a new BitSight data stream connection*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

## 1. Select Data Stream

Choose which BitSight data type to collect for this connection. Create separate connections for each stream you want to ingest.

- **Data Stream** (required): Select from available options
  - Alerts - Rating changes and news events (BitSightAlerts)
  - Breaches - Data breach events for portfolio companies (BitSightBreaches)
  - Diligence Findings - Web, app, and network risk factors (BitSightFindings)
  - Compromised Systems Findings - Botnet and malware activity (BitSightFindings)
  - User Behavior Findings - Credential and employee risk activity (BitSightFindings)
## 2. API Configuration

- **BitSight API Base URL** (required): https://api.bitsighttech.com
## 3. Authentication

BitSight uses your API token as **both** the username and password for HTTP Basic Authentication.

- **BitSight API Token (Username)** (required): Paste your BitSight API Token
- **BitSight API Token (Password)** (required): Paste your BitSight API Token again
## 4. Connection Name

Assign a unique name to identify this connection in the grid and in every ingested log record.

- **Connection Name** (required): e.g. BitSight-Alerts-Prod

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

