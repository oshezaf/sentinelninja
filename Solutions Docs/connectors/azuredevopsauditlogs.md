# Azure DevOps Audit Logs (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/AzureDevOps.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AzureDevOpsAuditLogs` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [AzureDevOpsAuditing](../solutions/azuredevopsauditing.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [AzureDevOpsAuditLogs_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing/Data%20Connectors/AzureDevOpsAuditLogs_CCP/AzureDevOpsAuditLogs_DataConnectorDefinition.json) |
| **DCR Definition Files** | [AzureDevOpsAuditLogs_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing/Data%20Connectors/AzureDevOpsAuditLogs_CCP/AzureDevOpsAuditLogs_DCR.json) |
| **CCF Configuration** | [AzureDevOpsAuditLogs_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AzureDevOpsAuditing/Data%20Connectors/AzureDevOpsAuditLogs_CCP/AzureDevOpsAuditLogs_PollingConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#azure-devops-audit-logs-via-codeless-connector-framework) |

The Azure DevOps Audit Logs data connector allows you to ingest audit events from Azure DevOps into Microsoft Sentinel. This data connector is built using the Microsoft Sentinel Codeless Connector Framework, ensuring seamless integration. It leverages the Azure DevOps Audit Logs API to fetch detailed audit events and supports DCR-based [ingestion time transformations](https://docs.microsoft.com/azure/azure-monitor/logs/custom-logs-overview). These transformations enable parsing of the received audit data into a custom table during ingestion, improving query performance by eliminating the need for additional parsing. By using this connector, you can gain enhanced visibility into your Azure DevOps environment and streamline your security operations. This version supports connecting **multiple Azure DevOps organizations**: each organization is added as its own connection from the grid below, and all audit events flow into the same ADOAuditLogs_CL table.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ADOAuditLogs_CL`](../tables/adoauditlogs-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.
- **Keys** (Workspace): Read permissions to shared keys for the workspace are required.

**Custom Permissions:**
- **Azure DevOps Prerequisite**: Please ensure the following:<br> 1. Register an Entra App in Microsoft Entra Admin Center under App Registrations.<br> 2.  In 'API permissions' -  add Permissions to 'Azure DevOps - vso.auditlog'.<br> 3.  In 'Certificates & secrets' - generate 'Client secret'.<br> 4.  In 'Authentication' - add the Redirect URI found below in the corresponding field.<br> 5. In the Azure DevOps settings - enable audit log and set **View audit log** for the user. [Azure DevOps Auditing](https://learn.microsoft.com/en-us/azure/devops/organizations/audit/azure-devops-auditing?view=azure-devops&tabs=preview-page).<br> 6. Ensure the user assigned to connect the data connector has the View audit logs permission explicitly set to Allow at all times. This permission is essential for successful log ingestion. If the permission is revoked or not granted, data ingestion will fail or be interrupted.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Azure DevOps organizations to start collecting Audit logs in Microsoft Sentinel.**
Use **Add organization** to connect each Azure DevOps organization. Connected organizations are listed below and can be removed individually.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Organization**
- **API Endpoint**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add Azure DevOps Organization**

*Connect an Azure DevOps organization*

When you click the "Add organization" button in the portal, a configuration form will open. You'll need to provide:


1. Enter the App you have registered.
 2. In the 'Overview' section, copy the Application (client) ID.
 3. Select the 'Endpoints' button, and copy the 'OAuth 2.0 authorization endpoint (v2)' value and the 'OAuth 2.0 token endpoint (v2)' value.
 4. In the 'Certificates & secrets' section, copy the 'Client Secret value', and store it securely.
 5. Set the API Endpoint for the organization you want to collect (replace {organizationName}).
 6. Give this connection a unique name (the organization name works well), then click 'Connect'.

Repeat 'Add organization' for each additional organization.

- **Organization Name (connection alias)** (required): A unique name for this organization, e.g. contoso
- **Token Endpoint** (required): Your OAuth 2.0 token endpoint (v2) from the app's Endpoints blade
- **Authorization Endpoint** (required): Your OAuth 2.0 authorization endpoint (v2) from the app's Endpoints blade
- **API Endpoint** (required): https://auditservice.dev.azure.com/{organizationName}/_apis/audit/auditlog?api-version=7.2-preview

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

