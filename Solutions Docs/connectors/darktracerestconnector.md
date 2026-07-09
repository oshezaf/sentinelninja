# Darktrace Connector for Microsoft Sentinel REST API (Legacy)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Darktrace.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `DarktraceRESTConnector` |
| **Publisher** | Darktrace |
| **Source Vendor** | Darktrace *(basis: publisher)* |
| **Used in Solutions** | [Darktrace](../solutions/darktrace.md) |
| **Collection Method** | [REST Pull API](../methods/rest-pull-api.md) |
| **Connector Definition Files** | [DarktraceConnectorRESTAPI.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Darktrace/Data%20Connectors/DarktraceConnectorRESTAPI.json) |
| **Ingestion API** | [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Connector definition requires workspace key (SharedKey pattern)* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#darktrace-connector-for-microsoft-sentinel-rest-api) |

The Darktrace REST API connector pushes real-time events from Darktrace to Microsoft Sentinel and is designed to be used with the Darktrace Solution for Microsoft Sentinel. The connector writes logs to a custom log table titled "darktrace_model_alerts_CL"; Model Breaches, AI Analyst Incidents, System Alerts and Email Alerts can be ingested - additional filters can be set up on the Darktrace System Configuration page. Data is pushed to Microsoft Sentinel from Darktrace masters.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`darktrace_model_alerts_CL`](../tables/darktrace-model-alerts-cl.md) 🔶 | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Darktrace Prerequisites**: To use this Data Connector a Darktrace master running v5.2+ is required.
 Data is sent to the [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api) over HTTPs from Darktrace masters, therefore outbound connectivity from the Darktrace master to Microsoft Sentinel REST API is required.
- **Filter Darktrace Data**: During configuration it is possible to set up additional filtering on the Darktrace System Configuration page to constrain the amount or types of data sent.
- **Try the Darktrace Sentinel Solution**: You can get the most out of this connector by installing the Darktrace Solution for Microsoft Sentinel. This will provide workbooks to visualise alert data and analytics rules to automatically create alerts and incidents from Darktrace Model Breaches and AI Analyst incidents.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

1. Detailed setup instructions can be found on the Darktrace Customer Portal: https://customerportal.darktrace.com/product-guides/main/microsoft-sentinel-introduction
 2. Take note of the Workspace ID and the Primary key. You will need to enter these details on your Darktrace System Configuration page.
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Primary Key**: `PrimaryKey`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

**2. Darktrace Configuration**

1. Perform the following steps on the Darktrace System Configuration page:
 2. Navigate to the System Configuration Page (Main Menu > Admin > System Config)
 3. Go into Modules configuration and click on the "Microsoft Sentinel" configuration card
 4. Select "HTTPS (JSON)" and hit "New"
 5. Fill in the required details and select appropriate filters
 6. Click "Verify Alert Settings" to attempt authentication and send out a test alert
 7. Run a "Look for Test Alerts" sample query to validate that the test alert has been received

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

