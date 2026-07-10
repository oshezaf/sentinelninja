# ⚠️ Filewall for Microsoft 365

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/filewall-logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `FilewallM365` |
| **Publisher / Vendor** | Filewall |
| **Source Product** | Microsoft 365 *(basis: title)* |
| **Used in Solutions** | [Filewall for Microsoft 365](../solutions/filewall-for-microsoft-365.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [FilewallM365_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Filewall%20for%20Microsoft%20365/Data%20Connectors/FilewallM365Logs_CCP/FilewallM365_ConnectorDefinition.json) |
| **DCR Definition Files** | [FilewallM365_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Filewall%20for%20Microsoft%20365/Data%20Connectors/FilewallM365Logs_CCP/FilewallM365_DCR.json) |
| **CCF Configuration** | [FilewallM365_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Filewall%20for%20Microsoft%20365/Data%20Connectors/FilewallM365Logs_CCP/FilewallM365_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

Ingest events from Filewall into Microsoft Sentinel (Exchange, SharePoint, OneDrive and Teams).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`FilewallExchange_CL`](../tables/filewallexchange-cl.md) | ? | ✓ | ? |
| [`FilewallFile_CL`](../tables/filewallfile-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Filewall API access**: A Filewall API key is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

Click **Add connection**, paste your Filewall API key, and click **Connect**. This will create 4 polling connections (Exchange, SharePoint, OneDrive, Teams).
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connection**
- **API Endpoint**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add connection**

*Connect Filewall to Microsoft Sentinel*

When you click the "Add connection" button in the portal, a configuration form will open. You'll need to provide:

- **API Endpoint URL** (optional): API Endpoint URL
- **Filewall API Key** (optional): Paste your Filewall API key

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

