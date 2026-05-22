# SailPoint IdentityNow (via Codeless Connector Framework)

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
| **CCF Configuration** | [SailPointIdentityNow_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SailPointIdentityNow/Data%20Connectors/SearchEvent_CCF/SailPointIdentityNow_PollerConfig.json) |
| **CCF Capabilities** | `OAuth2`, `POST` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#sailpoint-identitynow-using-azure-functions) |

The [SailPoint](https://www.sailpoint.com/) IdentityNow data connector provides the capability to ingest [SailPoint IdentityNow] search events into Microsoft Sentinel through the REST API. The connector provides customers the ability to extract audit information from their IdentityNow tenant. It supports connecting multiple SailPoint IdentityNow tenants simultaneously - each identified by its unique Tenant ID and domain - making it easy to monitor multiple environments (production, demo, partner) from a single Microsoft Sentinel workspace. Refer to [SailPoint Developer Documentation](https://developer.sailpoint.com/docs/api/authentication/) for API authentication details.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SailPointIDN_EventsV2_CL`](../tables/sailpointidn-eventsv2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **SailPoint IdentityNow OAuth2 Client Credentials**: An OAuth2 **Client ID** and **Client Secret** with the `sp:search:read` scope are required. Create an API client in your SailPoint admin console under **Admin > Global > Security Settings > API Management**. [See the documentation](https://developer.sailpoint.com/docs/api/authentication/) for step-by-step instructions.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Prerequisites**
#### 1. Find your Tenant ID and Domain
Your **Tenant ID** is the subdomain of your SailPoint URL.

| Environment | Your URL | Tenant ID | Domain |
|---|---|---|---|
| Production | `https://acme.identitynow.com` | `acme` | `identitynow.com` |
| Demo/Partner | `https://ta-partner19947.identitynow-demo.com` | `ta-partner19947` | `identitynow-demo.com` |

The connector will call: `https://{Tenant ID}.api.{Domain}/v2025/search/events`
#### 2. Create an API Client
1. In the SailPoint admin console, go to **Admin > Global > Security Settings > API Management**.
2. Click **+ New** to create a new API client.
3. Enable **Client Credentials** grant type.
4. Copy the generated **Client ID** and **Client Secret** - the secret is only shown once.
#### 3. Assign the required scope
Ensure the API client has the `sp:search:read` scope to query the Search API.

**2. SailPoint IdentityNow Connections**

Add and manage connections to your SailPoint IdentityNow tenants. You can connect multiple tenants simultaneously.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Tenant ID**
- **Domain**
- **Data Type**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add SailPoint IdentityNow Connection**

*Connect a SailPoint IdentityNow tenant to Microsoft Sentinel*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

- **Tenant ID** (required): e.g. acme or ta-partner19947
- **IdentityNow Domain** (required): e.g. identitynow.com or identitynow-demo.com
- **Client ID** (required): Enter your OAuth2 Client ID
- **Client Secret** (required): Enter your OAuth2 Client Secret

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

