# Google Workspace Activities (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/google-workspace-logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `GoogleWorkspaceCCPDefinition` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [GoogleWorkspaceReports](../solutions/googleworkspacereports.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [GoogleWorkspaceReports_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleWorkspaceReports/Data%20Connectors/GoogleWorkspaceTemplate_ccp/GoogleWorkspaceReports_DataConnectorDefinition.json) |
| **DCR Definition Files** | [GoogleWorkspaceReports_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleWorkspaceReports/Data%20Connectors/GoogleWorkspaceTemplate_ccp/GoogleWorkspaceReports_DCR.json) |
| **CCF Configuration** | [GoogleWorkspaceReports_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleWorkspaceReports/Data%20Connectors/GoogleWorkspaceTemplate_ccp/GoogleWorkspaceReports_PollingConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#google-workspace-activities-via-codeless-connector-framework) |

The [Google Workspace](https://workspace.google.com/) Activities data connector provides the capability to ingest Activity Events, including Gmail audit events, from the [Google Workspace API](https://developers.google.com/admin-sdk/reports/reference/rest/v1/activities/list) into Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GoogleWorkspaceReports`](../tables/googleworkspacereports.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Google Workspace API access**: Access to the Google Workspace activities API through OAuth is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect to Google Workspace**

Add and manage independent Google Workspace tenant connections.
#### Configuration steps for the Google Reports API

1. In Google Cloud Console, enable the **Admin SDK API**.
2. Configure the OAuth consent screen.
3. Create an OAuth 2.0 Client ID for a web application.
4. Add the redirect URI shown by the connection form.
5. Add the Admin SDK audit read-only scope.

ℹ️ Create a separate connection alias for each Google Workspace tenant.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connection Alias**
- **Activity Type**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Connect a Google Workspace tenant**

*Google Workspace Activities*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

*Authorize Google Workspace*

- **Connection Alias** (required): Production or Contoso

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

