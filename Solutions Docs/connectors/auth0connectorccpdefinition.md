# Auth0 Logs (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Auth0.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `Auth0ConnectorCCPDefinition` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Auth0](../solutions/auth0.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0/Data%20Connectors/Auth0_CCP/DataConnectorDefinition.json) |
| **DCR Definition Files** | [DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0/Data%20Connectors/Auth0_CCP/DCR.json) |
| **CCF Configuration** | [PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Auth0/Data%20Connectors/Auth0_CCP/PollingConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#auth0-logs-via-codeless-connector-framework) |

The [Auth0](https://auth0.com/docs/api/management/v2/logs/get-logs) data connector ingests tenant log events from the Auth0 Management API into Microsoft Sentinel. Built on the Codeless Connector Framework, it supports connecting multiple Auth0 hosts and tags each record with its Auth0 domain.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Auth0Logs_CL`](../tables/auth0logs-cl.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Auth0 API credentials**: **Auth0 Management API** credentials are required: Domain, Client ID, and Client Secret from a Machine-to-Machine application authorized for `read:logs` and `read:logs_users`.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configure the Auth0 Management API application**

Follow these steps to obtain the credentials:
1. In the Auth0 Dashboard, go to **Applications > Applications**.
2. Select (or create) a **Machine-to-Machine** application authorized against the Auth0 Management API with at least the **read:logs** and **read:logs_users** permissions.
3. From the application settings, copy the **Domain** (it must start with `https://`), **Client ID**, and **Client Secret**.

To collect logs from multiple Auth0 hosts, add a separate connection for each host. Every record is tagged with its **Auth0Domain** so you can differentiate hosts.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Auth0 Domain**
- **Data Type**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add Auth0 Connection**

*Connect to the Auth0 Management API*

When you click the "Add Auth0 host" button in the portal, a configuration form will open. You'll need to provide:

## Authentication

Provide the credentials from your Auth0 Machine-to-Machine application. These are used to obtain an OAuth2 access token for the Management API.

- **Domain** (required): e.g. https://example.auth0.com
- **Client ID** (required): Auth0 application Client ID
- **Client Secret** (required): Auth0 application Client Secret

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

