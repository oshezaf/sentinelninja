# ⚠️ Infoblox SOC Insights

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/infoblox_logo.svg" alt="Infoblox SOC Insights Logo" width="75" height="75">

The [Infoblox](https://www.infoblox.com/) SOC Insights solution allows you to easily connect your Infoblox BloxOne SOC Insights data with Microsoft Sentinel. By connecting your logs to Microsoft Sentinel, you can take advantage of search & correlation, alerting, and threat intelligence enrichment for each log. 

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation. 

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors are about to be deprecated by **Aug 31, 2024**.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Infoblox |
| **Support Tier** | Partner |
| **Support Link** | [https://support.infoblox.com/](https://support.infoblox.com/) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2024-03-06 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20SOC%20Insights](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20SOC%20Insights) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution provides **3 data connector(s)**:

- [[Deprecated] Infoblox SOC Insight Data Connector via AMA](../connectors/infobloxsocinsightsdataconnector-ama.md)
- [Infoblox SOC Insight Data Connector via REST API](../connectors/infobloxsocinsightsdataconnector-api.md)
- [[Deprecated] Infoblox SOC Insight Data Connector via Legacy Agent](../connectors/infobloxsocinsightsdataconnector-legacy.md)

## Tables Used

This solution uses **6 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Infoblox SOC Insight Data Connector via AMA](../connectors/infobloxsocinsightsdataconnector-ama.md), [[Deprecated] Infoblox SOC Insight Data Connector via Legacy Agent](../connectors/infobloxsocinsightsdataconnector-legacy.md) | - |
| [`InfobloxInsightAssets_CL`](../tables/infobloxinsightassets-cl.md) | - | Playbooks (writes) |
| [`InfobloxInsightComments_CL`](../tables/infobloxinsightcomments-cl.md) | - | Playbooks (writes) |
| [`InfobloxInsightEvents_CL`](../tables/infobloxinsightevents-cl.md) | - | Playbooks (writes) |
| [`InfobloxInsightIndicators_CL`](../tables/infobloxinsightindicators-cl.md) | - | Playbooks (writes) |
| [`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) | [Infoblox SOC Insight Data Connector via REST API](../connectors/infobloxsocinsightsdataconnector-api.md) | Playbooks (writes) |

### Internal Tables

The following **2 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | - | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | - | Workbooks |

## Content Items

This solution includes **12 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 6 |
| Playbooks | 3 |
| Analytic Rules | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Infoblox - SOC Insight Detected - API Source](../content/infoblox-soc-insights-infoblox-soc-insight-detected-api-source-cf9847bb-ab46-4050-bb81-75cab3f893dc-6b346252.md) | Medium | Impact | - |
| [Infoblox - SOC Insight Detected - CDC Source](../content/infoblox-soc-insights-infoblox-soc-insight-detected-cdc-source-a4bdd81e-afc8-4410-a3d1-8478fa810537-11c9ff59.md) | Medium | Impact | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [InfobloxSOCInsightsWorkbook](../content/infoblox-soc-insights-infobloxsocinsightsworkbook-004063d9.md) | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Infoblox SOC Get Insight Details](../content/infoblox-soc-insights-infoblox-soc-get-insight-details-dd083b36.md) | Leverages the Infoblox SOC Insights API to enrich a Microsoft Sentinel Incident triggered by an Info... | [`InfobloxInsightAssets_CL`](../tables/infobloxinsightassets-cl.md) *(write)*<br>[`InfobloxInsightComments_CL`](../tables/infobloxinsightcomments-cl.md) *(write)*<br>[`InfobloxInsightEvents_CL`](../tables/infobloxinsightevents-cl.md) *(write)*<br>[`InfobloxInsightIndicators_CL`](../tables/infobloxinsightindicators-cl.md) *(write)*<br>[`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) *(write)* |
| [Infoblox SOC Get Open Insights API](../content/infoblox-soc-insights-infoblox-soc-get-open-insights-api-5e5c3c13.md) | Leverages the Infoblox SOC Insights API to ingest all Open/Active SOC Insights at time of run into t... | [`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) *(write)* |
| [Infoblox SOC Import Indicators TI](../content/infoblox-soc-insights-infoblox-soc-import-indicators-ti-0612a4f4.md) | Imports each Indicator of a Microsoft Sentinel Incident triggered by an Infoblox SOC Insight into th... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [InfobloxCDC_SOCInsights](../content/infoblox-soc-insights-infobloxcdc-socinsights-bf7ad23f-4f9e-4a00-bb1a-363b950405b6-c2df7037.md) | - | - |
| [InfobloxInsight](../content/infoblox-soc-insights-infobloxinsight-3fa2808e-1d5d-4421-9d24-6b1a948b3f90-de87c83f.md) | - | - |
| [InfobloxInsightAssets](../content/infoblox-soc-insights-infobloxinsightassets-588bb0e4-16b2-4f80-9f00-c95d9df9fc64-01154fd8.md) | - | - |
| [InfobloxInsightComments](../content/infoblox-soc-insights-infobloxinsightcomments-b38a195f-55e9-45c4-a7f5-88ba9478e585-2c79c8b8.md) | - | - |
| [InfobloxInsightEvents](../content/infoblox-soc-insights-infobloxinsightevents-8e8f2f2c-3351-41e8-b883-5b30d92109e9-8cc19e65.md) | - | - |
| [InfobloxInsightIndicators](../content/infoblox-soc-insights-infobloxinsightindicators-18a21543-f954-4eb4-8601-d1717610a57f-68f51f2d.md) | - | - |

## Release Notes

| **Version**   | **Date Modified**              | **Change History**                      |
|---------------|--------------------------------|-----------------------------------------|
| 3.0.2         | 28-06-2024                     | Deprecating data connectors  |
| 3.0.1         | 03-05-2024                     | Repackaged for parser issue fix on reinstall |
| 3.0.0         | 04-03-2024                     | Initial Solution Release                |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

