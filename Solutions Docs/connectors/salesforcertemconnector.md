# SalesForce Real-Time Event Monitoring Connector (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/salesforce_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SalesForceRTEMConnector` |
| **Publisher** | Microsoft |
| **Source Vendor** | Salesforce *(basis: description_url)* |
| **Used in Solutions** | [Salesforce Service Cloud](../solutions/salesforce-service-cloud.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [SalesforceRealTimeEventMonitoring_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Salesforce%20Service%20Cloud/Data%20Connectors/SalesForceRealTimeEventMonitoringConnector_CCF/SalesforceRealTimeEventMonitoring_DataConnectorDefinition.json) |
| **DCR Definition Files** | [SalesforceRealTimeEventMonitoring_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Salesforce%20Service%20Cloud/Data%20Connectors/SalesForceRealTimeEventMonitoringConnector_CCF/SalesforceRealTimeEventMonitoring_DCR.json) |
| **CCF Configuration** | [SalesforceRealTimeEventMonitoring_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Salesforce%20Service%20Cloud/Data%20Connectors/SalesForceRealTimeEventMonitoringConnector_CCF/SalesforceRealTimeEventMonitoring_PollingConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#salesforce-real-time-event-monitoring-connector-via-codeless-connector-framework) |

The Salesforce Real-Time Event Monitoring (RTEM) Connector provides the capability to ingest information about your Salesforce real time events using Object for Event Storage into Microsoft Sentinel through the REST API. The connector provides ability to review events in your org on an accelerated basis, get [real-time event data](https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_objects_monitoring.htm) for recent activity.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SalesForceRealTimeEventMonitoring_CL`](../tables/salesforcerealtimeeventmonitoring-cl.md) | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read, Write, and Delete permissions are required.

**Custom Permissions:**
- **Salesforce Event Monitoring API access**: Access to the Salesforce Event Monitoring API through a Connected App is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect to Salesforce Event Monitoring to start collecting real-time event monitoring logs in Microsoft Sentinel**

Follow [Create a Connected App in Salesforce for OAuth](https://help.salesforce.com/s/articleView?id=platform.ev_relay_create_connected_app.htm&type=5) and [Configure a Connected App for the OAuth 2.0 Client Credentials Flow](https://help.salesforce.com/s/articleView?id=xcloud.connected_app_client_credentials_setup.htm&type=5) to create a Connected App with access to the Salesforce Event Monitoring API. Through those instructions, you should get the Consumer Key and Consumer Secret.
 For Salesforce Domain name, Go to Setup, type My Domain in the Quick Find box, and select My Domain to view your domain details. Make sure to enter the domain name without a trailing slash (e.g., https://your-domain.my.salesforce.com). Fill the form below with that information.

ℹ️ **Required Add-on subscription:** Your Salesforce account should include Salesforce Shield or Salesforce Event Monitoring add-on subscriptions for this connector to work.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connector Alias**
- **Salesforce Base URL**
- **Data Type**
- **Grant Type**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Configure API Connection**

*Connect to Salesforce to ingest data*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

*Base Configuration*

- **Connection Alias** (required): Production or Sandbox
- **Salesforce Base URL** (required): Example: https://your-domain.my.salesforce.com
- **Data Types** (required): Select from available options
  - ApiAnomalyEventStore
  - ApiEvent
  - BulkApiResultEventStore
  - CredentialStuffingEventStore
  - FileEventStore
  - ... and 15 more options
*OAuth2 Credentials*

### OAuth2 Client Credentials


> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

