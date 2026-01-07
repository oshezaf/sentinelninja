# Infoblox SOC Insights

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Infoblox |
| **Support Tier** | Partner |
| **Support Link** | [https://support.infoblox.com/](https://support.infoblox.com/) |
| **Categories** | domains |
| **First Published** | 2024-03-06 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20SOC%20Insights](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20SOC%20Insights) |

## Data Connectors

This solution provides **3 data connector(s)**:

- [[Deprecated] Infoblox SOC Insight Data Connector via AMA](../connectors/infobloxsocinsightsdataconnector-ama.md)
- [Infoblox SOC Insight Data Connector via REST API](../connectors/infobloxsocinsightsdataconnector-api.md)
- [[Deprecated] Infoblox SOC Insight Data Connector via Legacy Agent](../connectors/infobloxsocinsightsdataconnector-legacy.md)

## Tables Reference

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Infoblox SOC Insight Data Connector via AMA](../connectors/infobloxsocinsightsdataconnector-ama.md), [[Deprecated] Infoblox SOC Insight Data Connector via Legacy Agent](../connectors/infobloxsocinsightsdataconnector-legacy.md) | Analytics |
| [`InfobloxInsightEvents_CL`](../tables/infobloxinsightevents-cl.md) | - | Playbooks (writes) |
| [`incidents`](../tables/incidents.md) | - | Workbooks |

### Internal Tables

The following **6 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`InfobloxInsightAssets_CL`](../tables/infobloxinsightassets-cl.md) | - | Playbooks (writes), Workbooks |
| [`InfobloxInsightComments_CL`](../tables/infobloxinsightcomments-cl.md) | - | Playbooks (writes), Workbooks |
| [`InfobloxInsightIndicators_CL`](../tables/infobloxinsightindicators-cl.md) | - | Playbooks (writes), Workbooks |
| [`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) | [Infoblox SOC Insight Data Connector via REST API](../connectors/infobloxsocinsightsdataconnector-api.md) | Analytics, Playbooks (writes), Workbooks |
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
| [Infoblox - SOC Insight Detected - API Source](../content/cf9847bb-ab46-4050-bb81-75cab3f893dc.md) | Medium | Impact | *Internal use:*<br>[`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) |
| [Infoblox - SOC Insight Detected - CDC Source](../content/a4bdd81e-afc8-4410-a3d1-8478fa810537.md) | Medium | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [InfobloxSOCInsightsWorkbook](../content/infobloxsocinsightsworkbook-infoblox-soc-insights.md) | [`incidents`](../tables/incidents.md)<br>*Internal use:*<br>[`InfobloxInsightAssets_CL`](../tables/infobloxinsightassets-cl.md)<br>[`InfobloxInsightComments_CL`](../tables/infobloxinsightcomments-cl.md)<br>[`InfobloxInsightIndicators_CL`](../tables/infobloxinsightindicators-cl.md)<br>[`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md)<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Infoblox SOC Get Insight Details](../content/infoblox-soc-get-insight-details-infoblox-soc-insights.md) | Leverages the Infoblox SOC Insights API to enrich a Microsoft Sentinel Incident triggered by an Info... | [`InfobloxInsightEvents_CL`](../tables/infobloxinsightevents-cl.md) *(write)*<br>*Internal use:*<br>[`InfobloxInsightAssets_CL`](../tables/infobloxinsightassets-cl.md) *(write)*<br>[`InfobloxInsightComments_CL`](../tables/infobloxinsightcomments-cl.md) *(write)*<br>[`InfobloxInsightIndicators_CL`](../tables/infobloxinsightindicators-cl.md) *(write)*<br>[`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) *(write)* |
| [Infoblox SOC Get Open Insights API](../content/infoblox-soc-get-open-insights-api-infoblox-soc-insights.md) | Leverages the Infoblox SOC Insights API to ingest all Open/Active SOC Insights at time of run into t... | *Internal use:*<br>[`InfobloxInsight_CL`](../tables/infobloxinsight-cl.md) *(write)* |
| [Infoblox SOC Import Indicators TI](../content/infoblox-soc-import-indicators-ti-infoblox-soc-insights.md) | Imports each Indicator of a Microsoft Sentinel Incident triggered by an Infoblox SOC Insight into th... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [InfobloxCDC_SOCInsights](../content/bf7ad23f-4f9e-4a00-bb1a-363b950405b6.md) | - | - |
| [InfobloxInsight](../content/3fa2808e-1d5d-4421-9d24-6b1a948b3f90.md) | - | - |
| [InfobloxInsightAssets](../content/588bb0e4-16b2-4f80-9f00-c95d9df9fc64.md) | - | - |
| [InfobloxInsightComments](../content/b38a195f-55e9-45c4-a7f5-88ba9478e585.md) | - | - |
| [InfobloxInsightEvents](../content/8e8f2f2c-3351-41e8-b883-5b30d92109e9.md) | - | - |
| [InfobloxInsightIndicators](../content/18a21543-f954-4eb4-8601-d1717610a57f.md) | - | - |

## Release Notes

| **Version**   | **Date Modified**              | **Change History**                      |
|---------------|--------------------------------|-----------------------------------------|
| 3.0.2         | 28-06-2024                     | Deprecating data connectors  |
| 3.0.1         | 03-05-2024                     | Repackaged for parser issue fix on reinstall |
| 3.0.0         | 04-03-2024                     | Initial Solution Release                |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
