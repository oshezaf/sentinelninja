# Workday User Activity (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/workday-logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `WorkdayCCPDefinition` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Workday](../solutions/workday.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Workday_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Workday/Data%20Connectors/Workday_ccp/Workday_DataConnectorDefinition.json) |
| **DCR Definition Files** | [Workday_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Workday/Data%20Connectors/Workday_ccp/Workday_DCR.json) |
| **CCF Configuration** | [Workday_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Workday/Data%20Connectors/Workday_ccp/Workday_PollingConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#workday-user-activity) |

The [Workday](https://www.workday.com/) User Activity data connector provides the capability to ingest User Activity Logs from [Workday API](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#privacy/v1/get-/activityLogging) into Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) | `EventProduct == "Workday"` | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Workday User Activity API access**: Access to the Workday user activity API through OAuth is required. The API Client needs to have the scope: System and it needs to be authorized by an account with System Auditing permissions.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Workday to Microsoft Sentinel**

1) In Workday, access the "Edit Tenant Setup - Security" task, verify "OAuth 2.0 Settings" section, make sure that the "OAuth 2.0 Clients Enabled" check box is ticked. 
2) In Workday, access the "Edit Tenant Setup - System" task, verify "User Activity Logging" section, make sure that the "Enable User Activity Logging" check box is ticked. 
3) In Workday, access the "Register API Client" task.
4) Define the Client Name, select the "Client Grant Type": "Authorization Code Grant" and then select "Access Token Type": "Bearer"
5) Enter the "Redirection URI" found in the form below 
6) In section "Scope (Functional Areas)", select "System" and click OK at the bottom. 
7) Copy the Client ID and Client Secret before navigating away from the page, and store it securely. 
8) In Sentinel, in the connector page - provide required Token, Authorization and User Activity Endpoints, along with Client ID and Client Secret from previous step. Then click "Connect". You can find the exact endpoint values in the "View API Clients" report in your Workday tenant; the host differs per environment (for example, wd3-impl-services1.workday.com for implementation tenants and services1.myworkday.com for production tenants). 
9) A Workday pop up will appear to complete the OAuth2 authentication and authorization of the API client. Here you need to provide credentials for Workday account with "System Auditing" permissions in Workday (can be either Workday account or Integration System User). 
10) Once that's complete, the message will be displayed to authorize your API client
- **Connection Alias**: Production or Impl

ℹ️ Enter a unique alias to identify this Workday connection. **Important**: Use different aliases for each tenant/domain. To update an existing connection, use the same alias or delete and recreate it.
- **Query interval (in minutes)** (select)
  - 5
  - 10
  - 15
  - 20
  - 30
  - ... and 1 more options
- **Page size (records per request)** (select)
  - 100
  - 250
  - 500
  - 750
  - 1000
- **Token Endpoint**: Example, https://{workdayServicesHost}/ccx/oauth2/{tenantName}/token
- **Authorization Endpoint**: Example, https://{workdayHost}/{tenantName}/authorize
- **User Activity Logs Endpoint (ends with /activityLogging)**: Example, https://{workdayServicesHost}/ccx/api/privacy/v1/{tenantName}/activityLogging
- **OAuth Configuration**:
  - Client ID
  - Client Secret
  - Click 'Connect' to authenticate
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connector Alias**
- **Workday Tenant Host**
- **Data Type**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

