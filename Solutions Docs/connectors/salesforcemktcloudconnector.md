# Salesforce Marketing Cloud (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/salesforce_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SalesforceMktCloudConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [SalesforceMarketingCloud_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Salesforce%20Service%20Cloud/Data%20Connectors/SalesforceMarketingCloudConnector_CCF/SalesforceMarketingCloud_ConnectorDefinition.json) |
| **DCR Definition Files** | [SalesforceMarketingCloud_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Salesforce%20Service%20Cloud/Data%20Connectors/SalesforceMarketingCloudConnector_CCF/SalesforceMarketingCloud_DCR.json) |
| **CCF Configuration** | [SalesforceMarketingCloud_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Salesforce%20Service%20Cloud/Data%20Connectors/SalesforceMarketingCloudConnector_CCF/SalesforceMarketingCloud_PollerConfig.json) |
| **CCF Capabilities** | `JwtToken`, `OAuth2`, `Paging` |

Collects audit events and security events from the Salesforce Marketing Cloud [Audit Trail API](https://developer.salesforce.com/docs/marketing/marketing-cloud/references/mc_rest_audit?meta=Summary). Provides visibility into user activities, system changes, and login events.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SalesforceMarketingCloudAuditEvents_CL`](../tables/salesforcemarketingcloudauditevents-cl.md) | ? | ✓ | ? |
| [`SalesforceMarketingCloudSecurityEvents_CL`](../tables/salesforcemarketingcloudsecurityevents-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Salesforce Marketing Cloud API access**: Access to the Salesforce Marketing Cloud API through an Installed Package is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Salesforce Marketing Cloud to Microsoft Sentinel**

Follow the [Salesforce Marketing Cloud documentation](https://developer.salesforce.com/docs/marketing/marketing-cloud/guide/install-packages.html) to create an Installed Package with the **Data | Tracking Event | Read** permission scope. Note your tenant-specific REST API and Auth base URLs from the Installed Packages section in Setup.

**2. Manage Salesforce Connections**

Add, view, and delete Salesforce connections
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connector Alias**
- **Salesforce Base URL**
- **Data Type**
- **Package Type**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Configure API Connection**

*Connect to Salesforce to ingest data*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

*Base Configuration*

- **Connection Alias** (required): Production or Sandbox
- **Query interval (in minutes)** (required): Select from available options
  - 5
  - 10
  - 15
  - 20
  - 30
  - ... and 1 more options
- **REST API Base URL** (required): Example, https://{subdomain}.rest.marketingcloudapis.com
- **Auth Base URL** (required): Example, https://{subdomain}.auth.marketingcloudapis.com
- **Data Types** (required): Select from available options
  - Audit Events - user activities and system changes
  - Security Events - login attempts and authentication
*API Credentials*

### Installed Package Credentials

*Package Type*


> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

