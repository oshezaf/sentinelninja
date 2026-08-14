# Cisco Meraki Events (using REST API) (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/CiscoMeraki/Connector/MerakiConnector/logo.jpg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CiscoMerakiConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CiscoMeraki_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Meraki%20Events%20via%20REST%20API/Data%20Connectors/CiscoMerakiMultiRule_ccp/CiscoMeraki_ConnectorDefinition.json) |
| **DCR Definition Files** | [CiscoMeraki_dcr.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Meraki%20Events%20via%20REST%20API/Data%20Connectors/CiscoMerakiMultiRule_ccp/CiscoMeraki_dcr.json) |
| **CCF Configuration** | [CiscoMeraki_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Meraki%20Events%20via%20REST%20API/Data%20Connectors/CiscoMerakiMultiRule_ccp/CiscoMeraki_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging`, `Nested` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#cisco-meraki-events-using-rest-api-via-codeless-connector-framework) |

The [Cisco Meraki](https://aka.ms/ciscomeraki) connector allows you to easily connect your Cisco Meraki organization events (Security events, Configuration Changes and API Requests) to Microsoft Sentinel. The data connector uses the [Cisco Meraki REST API](https://developer.cisco.com/meraki/api-v1/#!get-organization-appliance-security-events) to fetch logs and supports DCR-based [ingestion time transformations](https://docs.microsoft.com/azure/azure-monitor/logs/custom-logs-overview) that parses the received data and ingests into ASIM and custom tables in your Log Analytics workspace. This data connector benefits from capabilities such as DCR based ingestion-time filtering, data normalization.



In addition to the ASIM-normalized events, this connector also ingests Cisco Meraki Dashboard inventory and wireless security data into custom tables - Organizations, Network Clients, Organization Networks, and wireless Air Marshal (rogue access point) events.



 **Supported ASIM schema:** 

 1. Network Session 

 2. Web Session  

 3. Audit Event

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) | `EventProduct == "Meraki"`<br>`EventType == "Notable"`<br>`EventVendor == "Cisco"` | ✓ | ✓ | ✓ |
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) |  | ✓ | ✓ | ✓ |
| [`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md) |  | ✓ | ✓ | ✓ |
| [`CiscoMerakiAirMarshalEvents_CL`](../tables/ciscomerakiairmarshalevents-cl.md) |  | ? | ✓ | ? |
| [`CiscoMerakiNetworkClients_CL`](../tables/ciscomerakinetworkclients-cl.md) |  | ? | ✓ | ? |
| [`CiscoMerakiOrganizationNetworks_CL`](../tables/ciscomerakiorganizationnetworks-cl.md) |  | ? | ✓ | ? |
| [`CiscoMerakiOrganizations_CL`](../tables/ciscomerakiorganizations-cl.md) |  | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configuration steps for the Cisco Meraki Dashboard API**

Follow the instructions below to obtain your Cisco Meraki API credentials.
#### 1. Sign in to Meraki Dashboard
Navigate to [Cisco Meraki Dashboard](https://dashboard.meraki.com) and sign in with your administrator account.
#### 2. Generate API Key
1. Navigate to **Organization > API & Webhooks** from the left navigation menu
2. Select **API keys and access** from the top tabs
3. Click **Generate new API key** or use an existing one
4. Copy the API key and store it securely (it will only be shown once)
#### 3. Retrieve Organization ID
1. While logged into the Meraki Dashboard, look at the URL in your browser
2. The Organization ID appears in the dashboard URL path as `dashboard.meraki.com/o/<organizationId>/...`
3. Copy the Organization ID for use below
#### 4. API Access Requirements
- The API key must have **Read** access to:
  - Organization settings
  - Network settings
  - Wireless settings
- Rate limit: 10 requests per second per organization
- Maximum lookback period: 31 days

**2. Connect Cisco Meraki organizations to Microsoft Sentinel**

This connector supports multi-tenant ingestion. Add one connection per Cisco Meraki organization; each connection ingests events for that organization in parallel. Use the grid below to review existing connections or add a new one.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Organization Id**
- **Data Type**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Connect a Cisco Meraki organization**

*Cisco Meraki*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

- **API Base URL** (required): https://api.meraki.com/api/v1
- **Organization ID** (required): Your Cisco Meraki Organization ID
- **API Key** (required): Your Cisco Meraki API Key
- **Data Types** (required): Select from available options
  - Organizations
  - Organization Networks
  - Network Clients
  - Air Marshal Events
  - API Requests (ASIM Web Session)
  - ... and 2 more options

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

