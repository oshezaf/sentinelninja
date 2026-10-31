# SailPoint Identity Security Cloud (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SailPointIdentityNowConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [SailPointIdentityNow](../solutions/sailpointidentitynow.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [SailPointIdentityNow_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SailPointIdentityNow/Data%20Connectors/SearchEvent_CCF/SailPointIdentityNow_ConnectorDefinition.json) |
| **DCR Definition Files** | [SailPointIdentityNow_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SailPointIdentityNow/Data%20Connectors/SearchEvent_CCF/SailPointIdentityNow_DCR.json) |
| **CCF Configuration** | [SailPointIdentityNow_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SailPointIdentityNow/Data%20Connectors/SearchEvent_CCF/SailPointIdentityNow_PollerConfig.json) |
| **CCF Capabilities** | `OAuth2`, `POST` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#sailpoint-identity-security-cloud-via-codeless-connector-framework) |

The [SailPoint](https://www.sailpoint.com/) Identity Security Cloud data connector provides the capability to ingest search events into Microsoft Sentinel through the REST API. The connector provides customers the ability to extract audit information from their Identity Security Cloud tenant. It supports connecting multiple SailPoint Identity Security Cloud tenants simultaneously - each identified by its unique Tenant ID and domain - making it easy to monitor multiple environments (production, demo, partner) from a single Microsoft Sentinel workspace. Refer to [SailPoint Developer Documentation](https://developer.sailpoint.com/docs/api/authentication/) for API authentication details.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SailPointISC_Events_CL`](../tables/sailpointisc-events-cl.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **SailPoint Identity Security Cloud OAuth2 Client Credentials**: An OAuth2 **Client ID** and **Client Secret** with the `sp:search:read` scope are required. Create a Personal Access Token(PAT) in your SailPoint Tenant. Kindly refer to documentation on our Compass Community for step-by-step instructions.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Prerequisites**
#### 1. Find your Tenant ID and Domain
Your **Tenant ID** is the subdomain of your SailPoint URL.

| Environment | Your URL | Tenant ID | Domain |
|---|---|---|---|
| Production | `https://acme.identitynow.com` | `acme` | `identitynow` |
| Demo/Partner | `https://ta-partner19947.identitynow-demo.com` | `ta-partner19947` | `identitynow-demo` |

The connector will call: `https://{Tenant ID}.api.{Domain}.com/v2025/search/events`
#### 2. Create a Personal Access Token(PAT).
1. Log in to your Identity Security Cloud tenant. Click your profile name in the top-right corner and select Preferences from the dropdown menu.
2. On the left-hand navigation pane, select **Personal Access Tokens**.
3. Click the **New Token** button.
4. In the **What is this token for?** field, enter a clear and meaningful description of how this token will be used.
5. Select an expiration date.
6. From the **Vendor Integration** dropdown menu, select **Microsoft Azure Sentinel for SailPoint IdentityNow**.
7. Select `sp:search:read` scope to query the Search API.
8. Click Create Token. Immediately copy and securely save both the Client ID and the Secret.**Important:** The Secret is displayed only once and cannot be retrieved again after you close the window.

**2. SailPoint Identity Security Cloud Connections**

Add and manage connections to your SailPoint Identity Security Cloud tenants. You can connect multiple tenants simultaneously.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Tenant ID**
- **Domain**
- **Data Type**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add SailPoint Identity Security Cloud Connection**

*Connect a SailPoint Identity Security Cloud tenant to Microsoft Sentinel*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

- **Tenant ID** (required): e.g. acme or ta-partner19947
- **Identity Security Cloud Domain** (required): e.g. identitynow or identitynow-demo
- **Client ID** (required): Enter your OAuth2 Client ID
- **Client Secret** (required): Enter your OAuth2 Client Secret

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

