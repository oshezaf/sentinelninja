# ⚠️ Datadog Logs (via Codeless Connector Framework)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `DatadogConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Datadog](../solutions/datadog.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [DatadogConnector_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Datadog/Data%20Connectors/DatadogConnector/DatadogConnector_ConnectorDefinition.json) |
| **DCR Definition Files** | [DatadogConnector_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Datadog/Data%20Connectors/DatadogConnector/DatadogConnector_DCR.json) |
| **CCF Configuration** | [DatadogConnector_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Datadog/Data%20Connectors/DatadogConnector/DatadogConnector_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging`, `POST` |

The Datadog Logs data connector ingests [Datadog](https://www.datadoghq.com/) audit events, indexed logs, and security signals into Microsoft Sentinel through the [Datadog API](https://docs.datadoghq.com/api/latest/). The supported data types provide administrative activity, application and infrastructure telemetry, and Datadog Security Monitoring detections for investigation.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DatadogAuditLogs_CL`](../tables/datadogauditlogs-cl.md) | ? | ✓ | ? |
| [`DatadogLogs_CL`](../tables/datadoglogs-cl.md) | ? | ✓ | ? |
| [`DatadogSecurityLogs_CL`](../tables/datadogsecuritylogs-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Datadog API access**: **Datadog API and Application keys** are required. The Application key must have permission to read the selected data type. Security Logs require the `security_monitoring_signals_read` scope. See the [Datadog API and Application Keys documentation](https://docs.datadoghq.com/account_management/api-app-keys/).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connections**

Configure and manage Datadog connections.
Enter your Datadog API host (the region your account uses), without a scheme or trailing slash. Valid values: `api.datadoghq.com` (US1), `api.us3.datadoghq.com` (US3), `api.us5.datadoghq.com` (US5), `api.datadoghq.eu` (EU1), `api.ap1.datadoghq.com` (AP1), `api.ap2.datadoghq.com` (AP2), `api.ddog-gov.com` (US1-FED), `api.us2.ddog-gov.com` (US2-FED), `api.uk1.datadoghq.com` (UK1).
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connection Name**
- **Datadog API Endpoint**
- **Data Type**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add Datadog Connection**

*Connect Datadog data to Microsoft Sentinel*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

- **Connection Name** (required): e.g. Production US1
- **Datadog Site (API host)** (required): api.datadoghq.com
- **Datadog API Key** (required): Enter your Datadog API key
- **Datadog Application Key** (required): Enter your Datadog Application key
- **Data Type** (required): Select from available options
  - Audit Events
  - Logs
  - Security Logs

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

