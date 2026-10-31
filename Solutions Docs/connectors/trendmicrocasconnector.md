# Trend Micro Cloud App Security (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Trend_Micro_Logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `TrendMicroCASConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Trend Micro Cloud App Security](../solutions/trend-micro-cloud-app-security.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [TrendMicroCAS_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trend%20Micro%20Cloud%20App%20Security/Data%20Connectors/TrendMicroCAS_CCF/TrendMicroCAS_ConnectorDefinition.json) |
| **DCR Definition Files** | [TrendMicroCAS_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trend%20Micro%20Cloud%20App%20Security/Data%20Connectors/TrendMicroCAS_CCF/TrendMicroCAS_DCR.json) |
| **CCF Configuration** | [TrendMicroCAS_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trend%20Micro%20Cloud%20App%20Security/Data%20Connectors/TrendMicroCAS_CCF/TrendMicroCAS_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#trend-micro-cloud-app-security-via-codeless-connector-framework) |

The [Trend Micro Cloud App Security](https://www.trendmicro.com/en_be/business/products/user-protection/sps/email-and-collaboration/cloud-app-security.html) data connector provides the capability to retrieve security event logs of the services that Cloud App Security protects into Microsoft Sentinel through the SIEM API. The connector provides the ability to get events which helps to examine potential security risks, analyze your team's use of collaboration, diagnose configuration problems and more. It supports DCR-based [ingestion time transformations](https://docs.microsoft.com/azure/azure-monitor/logs/custom-logs-overview) that parse the received security event data into custom columns so that queries don't need to parse it again, thus resulting in better performance.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`TrendMicroCASV2_CL`](../tables/trendmicrocasv2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Trend Micro CAS API Token**: A Trend Micro Cloud App Security API token is required. [See the documentation to learn more about Trend Micro CAS API](https://docs.trendmicro.com/enterprise/cloud-app-security-integration-api-online-help/supported-cloud-app-/log-retrieval-api/get-security-logs.aspx).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configure Trend Micro CAS Data Streams**

Add one or more data streams by selecting the cloud service and event type combinations you want to monitor.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Friendly Name**
- **Service**
- **Event Type**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add Trend Micro CAS Stream**

*Configure a new service and event type combination*

When you click the "Add Data Stream" button in the portal, a configuration form will open. You'll need to provide:

## Configuration

Configure the connection to your Trend Micro Cloud App Security instance and select which service and event type to monitor.

- **Trend Micro CAS Service URL** (required): api.tmcas.trendmicro.com
- **API Token** (required): Enter your Trend Micro CAS API Token
## Stream Configuration

Select the cloud service and event type for this data stream.

- **Cloud Service** (required): Select from available options
  - Exchange
  - SharePoint
  - OneDrive
  - Dropbox
  - Box
  - ... and 7 more options
- **Event Type** (required): Select from available options
  - Security Risk
  - Virtual Analyzer
  - Ransomware
  - Data Loss Prevention (DLP)
- **Friendly Name** (required): Descriptive name combining service and event type (e.g., 'SharePoint-Ransomware')

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

