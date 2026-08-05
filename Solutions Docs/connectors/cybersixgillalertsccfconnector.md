# Cybersixgill Actionable Alerts (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Cybersixgill.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CybersixgillAlertsCCFConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Cybersixgill-Actionable-Alerts](../solutions/cybersixgill-actionable-alerts.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Cybersixgill_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cybersixgill-Actionable-Alerts/Data%20Connectors/CybersixgillAlerts_CCF/Cybersixgill_ConnectorDefinition.json) |
| **DCR Definition Files** | [Cybersixgill_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cybersixgill-Actionable-Alerts/Data%20Connectors/CybersixgillAlerts_CCF/Cybersixgill_DCR.json) |
| **CCF Configuration** | [Cybersixgill_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cybersixgill-Actionable-Alerts/Data%20Connectors/CybersixgillAlerts_CCF/Cybersixgill_PollerConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging`, `Nested` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#cybersixgill-actionable-alerts-using-azure-functions) |

The Cybersixgill Actionable Alerts data connector provides the capability to ingest [Cybersixgill](https://cybersixgill.com/) actionable alerts into Microsoft Sentinel through the REST API. The connector provides the ability to get actionable alerts from the Cybersixgill platform and analyze them in Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CyberSixgillAlertsV2_CL`](../tables/cybersixgillalertsv2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Cybersixgill API Credentials**: **Client ID**, **Client Secret**, and **Organization ID** are required for OAuth 2.0 authentication. These credentials can be generated from the [Cybersixgill portal](https://portal.cybersixgill.com/) under the **API Configuration** section.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Cybersixgill Actionable Alerts to Microsoft Sentinel**
To gather data from Cybersixgill, you need to provide the following credentials:
**1. API Base URL** - The base URL for the Cybersixgill API (e.g. `https://api.cybersixgill.com`).
**2. Client ID** - OAuth 2.0 Client ID for API authentication.
**3. Client Secret** - OAuth 2.0 Client Secret for API authentication.
**4. Organization ID** - The Cybersixgill organization identifier for the tenant whose alerts you want to ingest.
To obtain these credentials, log in to the [Cybersixgill portal](https://portal.cybersixgill.com/) and navigate to **API Configuration**. Create a new API application to generate the Client ID and Client Secret. Your Organization ID is available in your account settings.
**Multi-tenant support:** This connector supports ingesting Actionable Alerts from multiple Cybersixgill organizations in parallel. Click **Add Connection** once per organization, supplying that organization's API Base URL, credentials, and Organization ID. Each connection is tracked and managed independently in the grid below.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Organization ID**
- **API Base URL**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Configure Cybersixgill API Connection**

*Connect to a Cybersixgill organization to ingest Actionable Alerts*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

- **API Base URL** (required): https://api.cybersixgill.com
- **Client ID** (required): Your Cybersixgill Client ID
- **Client Secret** (required): Your Cybersixgill Client Secret
- **Organization ID** (required): Your Cybersixgill Organization ID

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

