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
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#workday-user-activity-via-codeless-connector-framework) |

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

**1. Environment identification**

Understand how Workday environments are identified in collected records
Only records collected after this connector update include the Workday environment in `AdditionalFields.WorkdayDomain`. Existing records are not updated.
### Updating an existing connector

Before deploying this updated template in a workspace that already has the Workday connector installed:

1. Disconnect all existing Workday connector connections.
2. Remove the existing Workday connector connections from **Data connectors**.
3. Remove the installed Workday solution from **Content hub**.
4. Delete the existing `workdayDCR` data collection rule from the workspace resource group.
5. Deploy the updated connector template.
6. Recreate and reconnect each Workday connection.

Existing data in `ASimAuditEventLogs` remains unchanged. Only records collected after the updated connector is deployed and reconnected include `AdditionalFields.WorkdayDomain`.
Use the following query to summarize Workday logs by environment. Historical records without an environment value are grouped as `Unknown - record collected before environment tracking`.

```kusto
ASimAuditEventLogs
| where EventProduct == "Workday"
| extend WorkdayDomain = tostring(AdditionalFields.WorkdayDomain)
| extend WorkdayEnvironment = iff(isempty(WorkdayDomain), "Unknown - record collected before environment tracking", WorkdayDomain)
| summarize EventCount = count() by WorkdayEnvironment
```

**2. Connect Workday to Microsoft Sentinel**

1) In Workday, access the "Edit Tenant Setup - Security" task, verify "OAuth 2.0 Settings" section, make sure that the "OAuth 2.0 Clients Enabled" check box is ticked. 
2) In Workday, access the "Edit Tenant Setup - System" task, verify "User Activity Logging" section, make sure that the "Enable User Activity Logging" check box is ticked. 
3) In Workday, access the "Register API Client" task.
4) Define the Client Name, select the "Client Grant Type": "Authorization Code Grant" and then select "Access Token Type": "Bearer"
5) Enter the "Redirection URI" found in the form below 
6) In section "Scope (Functional Areas)", select the appropriate scope for the user activity and click OK at the bottom select "System" and click OK at the bottom 
7) Copy the Client ID and Client Secret before navigating away from the page, and store it securely. 
8) In Sentinel, in the connector page - provide required Token, Authorization and User Activity Endpoints, along with Client ID and Client Secret from previous step. Then click "Connect". 
9) A Workday pop up will appear to complete the OAuth2 authentication and authorization of the API client. Here you need to provide credentials for Workday account with "System Auditing" permissions in Workday (can be either Workday account or Integration System User). 
10) Once that's complete, the message will be displayed to authorize your API client
**Make sure to use the accurate redirect URI in the workday configuration page, as found in the form below.**

**3. Manage Workday Connections**

Add, view, and delete Workday connections
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connector Alias**
- **Workday Tenant Host**
- **Data Type**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Configure API Connection**

*Connect to Workday to ingest data*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

*Base Configuration*

- **Connection Alias** (required): Production or Impl
- **Query interval (in minutes)** (required): Select from available options
  - 5
  - 10
  - 15
  - 20
  - 30
  - ... and 1 more options
- **Page size (records per request)** (required): Select from available options
  - 100
  - 250
  - 500
  - 750
  - 1000
- **Token Endpoint** (required): Example, https://wd3-impl-services1.workday.com/ccx/oauth2/{tenantName}/token
- **Authorization Endpoint** (required): Example, https://wd3-impl.workday.com/{tenantName}/authorize
- **User Activity Logs Endpoint (ends with /activityLogging)** (required): https://wd2-impl-services1.workday.com/ccx/api/privacy/v1/{tenantName}/activityLogging

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

