# ⚠️ UniFi Site Manager (CCF)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/UnifiSiteManager.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `UniFiSiteManagerConnector` |
| **Publisher** | Community |
| **Source Vendor** | Community *(basis: publisher)* |
| **Used in Solutions** | [UniFi Site Manager (CCF)](../solutions/unifi-site-manager-ccf.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [UnifiSiteManager_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UniFi%20Site%20Manager%20%28CCF%29/Data%20Connectors/UnifiSiteManagerLogs_ccf/UnifiSiteManager_ConnectorDefinition.json) |
| **DCR Definition Files** | [UnifiSiteManager_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UniFi%20Site%20Manager%20%28CCF%29/Data%20Connectors/UnifiSiteManagerLogs_ccf/UnifiSiteManager_DCR.json) |
| **CCF Configuration** | [UnifiSiteManager_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UniFi%20Site%20Manager%20%28CCF%29/Data%20Connectors/UnifiSiteManagerLogs_ccf/UnifiSiteManager_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

Connects to the [UniFi Site Manager API](https://developer.ui.com/site-manager-api/gettingstarted) and ingests four data types: Sites, Devices, Hosts, and ISP Metrics.



**Prerequisites:**

1. Sign in to [UniFi Site Manager](https://unifi.ui.com)

2. Navigate to **API** in the left navigation

3. Click **Create API Key**

4. Copy and securely store the generated key (shown only once)

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Unifi_SiteManager_Devices_CL`](../tables/unifi-sitemanager-devices-cl.md) | ? | ✓ | ? |
| [`Unifi_SiteManager_Hosts_CL`](../tables/unifi-sitemanager-hosts-cl.md) | ? | ✓ | ? |
| [`Unifi_SiteManager_ISPMetrics_CL`](../tables/unifi-sitemanager-ispmetrics-cl.md) | ? | ✓ | ? |
| [`Unifi_SiteManager_Sites_CL`](../tables/unifi-sitemanager-sites-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions required

**Custom Permissions:**
- **UniFi Site Manager API Key**: A read-only API key from [unifi.ui.com](https://unifi.ui.com) with access to your UniFi deployment.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Obtain a UniFi Site Manager API Key**

1. Sign in to [UniFi Site Manager](https://unifi.ui.com)
2. Click **API** in the left navigation
3. Click **Create API Key**
4. Copy the generated key immediately - it will only be displayed once

**2. Connect**

Enter your API key below. This single key authorizes polling for all four data types (Sites, Devices, Hosts, ISP Metrics).
- **UniFi Site Manager API Key**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

