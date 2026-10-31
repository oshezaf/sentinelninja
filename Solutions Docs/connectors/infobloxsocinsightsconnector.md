# ⚠️ Infoblox SOC Insights (via Codeless Connector Framework)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/infoblox_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `InfobloxSOCInsightsConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Infoblox SOC Insights](../solutions/infoblox-soc-insights.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [InfobloxSOCInsights_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20SOC%20Insights/Data%20Connectors/InfobloxSOCInsights_CCF/InfobloxSOCInsights_ConnectorDefinition.json) |
| **DCR Definition Files** | [InfobloxSOCInsights_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20SOC%20Insights/Data%20Connectors/InfobloxSOCInsights_CCF/InfobloxSOCInsights_DCR.json) |
| **CCF Configuration** | [InfobloxSOCInsights_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20SOC%20Insights/Data%20Connectors/InfobloxSOCInsights_CCF/InfobloxSOCInsights_PollingConfig.json) |
| **CCF Capabilities** | `APIKey` |

The [Infoblox SOC Insights](https://www.infoblox.com/products/bloxone-threat-defense/) data connector enables seamless integration of Infoblox BloxOne SOC Insight data with Microsoft Sentinel, allowing security teams to leverage advanced search, correlation, alerting, and threat intelligence enrichment capabilities. This connector provides comprehensive visibility into active security insights and threat detections, DNS security events with threat classifications, threat family and class categorizations, persistent and spreading threats across your network, and event blocking statistics. By aggregating Infoblox's advanced threat intelligence with Sentinel's powerful analytics, organizations can gain deeper insights into their security posture and respond more effectively to emerging threats. For detailed information about the underlying data sources and API capabilities, refer to the [Infoblox SOC Insights documentation](https://docs.infoblox.com/space/BloxOneThreatDefense/501514252/SOC+Insights).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) |  | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Infoblox API access**: **Infoblox API Key** is required to access the SOC Insights API

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connector Management**

Manage your Infoblox SOC Insights connector instances
## Infoblox SOC Insights Instances

Manage multiple Infoblox connector instances. Each instance can connect to different Infoblox environments or regions.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connector Name**
- **API URL**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add Infoblox SOC Insights Connector**

*Connect to Infoblox BloxOne Threat Defense API*

When you click the "Add Connector" button in the portal, a configuration form will open. You'll need to provide:

## API Credentials

To configure this connector, you need an Infoblox API key with SOC Insights access.

#### Generate API Key

1. Log in to your [Infoblox Cloud Services Portal](https://csp.infoblox.com/atlas/app/welcome)
2. Navigate to **Administration** > **API Keys**
3. Click **Create API Key**
4. Provide a descriptive name (e.g., 'Microsoft Sentinel Integration')
5. Select appropriate permissions for SOC Insights access
6. Copy and securely store the generated API key

**Note**: The API key is displayed only once. Store it securely.

For detailed instructions, see [How to Create an API Key](https://docs.infoblox.com/space/BloxOneThreatDefense/230394187/How+Do+I+Create+an+API+Key%3F).

## API Configuration

- **Infoblox API Base URL** (required): https://csp.infoblox.com
- **API Key** (required): Your Infoblox API Key
- **Connector Friendly Name** (required): Enter a unique friendly name for this connector

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

