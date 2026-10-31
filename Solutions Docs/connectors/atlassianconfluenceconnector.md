# Atlassian Confluence Audit (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/refs/heads/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AtlassianConfluenceConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [AtlassianConfluenceAudit](../solutions/atlassianconfluenceaudit.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [AtlassianConfluenceAudit_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianConfluenceAudit/Data%20Connectors/AtlassianConfluenceAuditLogs_CCP/AtlassianConfluenceAudit_DataConnectorDefinition.json) |
| **DCR Definition Files** | [AtlassianConfluenceAudit_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianConfluenceAudit/Data%20Connectors/AtlassianConfluenceAuditLogs_CCP/AtlassianConfluenceAudit_DCR.json) |
| **CCF Configuration** | [AtlassianConfluenceAudit_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianConfluenceAudit/Data%20Connectors/AtlassianConfluenceAuditLogs_CCP/AtlassianConfluenceAudit_PollingConfig.json) |
| **CCF Capabilities** | `Basic`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#atlassian-confluence-audit-via-codeless-connector-framework) |

The [Atlassian Confluence](https://www.atlassian.com/software/confluence) Audit data connector provides the capability to ingest [Confluence Audit Records](https://support.atlassian.com/confluence-cloud/docs/view-the-audit-log/) events into Microsoft Sentinel through the REST API. Refer to [API documentation](https://support.atlassian.com/confluence-cloud/docs/view-the-audit-log/) for more information. The connector provides ability to get events which helps to examine potential security risks, analyze your team's use of collaboration, diagnose configuration problems and more.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ConfluenceAuditLogs_CL`](../tables/confluenceauditlogs-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Atlassian Confluence API access**: The account requires the [Confluence Administrator global permission](https://developer.atlassian.com/cloud/confluence/rest/v1/api-group-audit/#api-wiki-rest-api-audit-get). Scoped API tokens also require the `read:audit-log:confluence` scope.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Atlassian Confluence to Microsoft Sentinel**

Add one connection per Atlassian Confluence site. Follow the [Atlassian API token instructions](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/) to create an API token.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connection Alias**
- **Confluence API Base Path**
- **Data Type**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add Atlassian Confluence Connection**

*Connect to an Atlassian Confluence site to ingest audit logs*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

*Connection Details*

- **Connection Alias** (required): e.g. Contoso Production
- **Atlassian Confluence API Base Path** (required): <tenant>.atlassian.net
- **Atlassian Account Email** (required): user@example.com
- **API Token** (required): Enter your Atlassian API token

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

