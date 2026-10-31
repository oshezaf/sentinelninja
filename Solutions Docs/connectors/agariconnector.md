# Fortra Agari Data Connector (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/agari_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AgariConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Agari](../solutions/agari.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Agari_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Agari/Data%20Connectors/Agari_CCF/Agari_ConnectorDefinition.json) |
| **DCR Definition Files** | [Agari_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Agari/Data%20Connectors/Agari_CCF/Agari_DCR.json) |
| **CCF Configuration** | [Agari_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Agari/Data%20Connectors/Agari_CCF/Agari_PollingConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging`, `Nested` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#fortra-agari-data-connector-via-codeless-connector-framework) |

The [Fortra Agari Data Connector](https://www.agari.com/) allows ingesting logs from Fortra Agari Brand Protection (BP) and Phishing Defense (APD) APIs into Microsoft Sentinel. It supports DCR-based ingestion time transformations for efficient query execution. Refer to [Agari API documentation](https://developers.agari.com/agari-platform/reference/overview) for more information.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AgariAPDPolicyLog_CL`](../tables/agariapdpolicylog-cl.md) | ✗ | ✓ | ✗ |
| [`AgariAPDTCLog_CL`](../tables/agariapdtclog-cl.md) | ✗ | ✓ | ✗ |
| [`AgariBPAlertsLog_CL`](../tables/agaribpalertslog-cl.md) | ✗ | ✓ | ✗ |
| [`AgariBPThreatFeedSubs_CL`](../tables/agaribpthreatfeedsubs-cl.md) | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Agari API connections**

Add and manage independent Agari tenant connections.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Tenant**
- **Data Stream**
- **API URL**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add Agari Tenant Connection**

*Configure a separate Agari tenant connection.*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

#### API Credentials
Obtain the Client ID and Client Secret for the Agari tenant you want to connect. Select one or more data streams for this tenant connection.

- **Tenant Name** (required): e.g. Contoso Production
- **Base API URL** (required): https://api.agari.com
- **Client ID** (required): Your Client ID
- **Client Secret** (required): Your Client Secret
- **Data Stream** (required): Select from available options
  - Brand Protection Alerts (with nested details)
  - Phishing Defense Policy Events
  - Phishing Defense Threat Categories
  - Brand Protection Threat Feed URL Submissions (IoC)

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

