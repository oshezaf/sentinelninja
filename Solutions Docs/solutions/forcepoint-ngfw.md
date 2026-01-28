# Forcepoint NGFW

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Forcepoint NGFW Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Forcepoint NGFW (Next Generation Firewall)](https://www.forcepoint.com/product/ngfw-next-generation-firewall) Solution for Microsoft Sentinel allows you to automatically export user defined Forcepoint NGFW logs into Microsoft Sentinel in real-time. This enriches visibility into user activities recorded by NGFW, enables further correlation with data from Azure workloads and other feeds, and improves monitoring capability with Workbooks inside Microsoft Sentinel.

For more details about this solution refer to [integration documentation](https://forcepoint.github.io/docs/ngfw_and_azure_sentinel/) 

This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors were deprecated on **Aug 31, 2024**.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Community |
| **Support Tier** | Community |
| **Support Link** | [https://github.com/Azure/Azure-Sentinel/issues](https://github.com/Azure/Azure-Sentinel/issues) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Forcepoint |
| **First Published** | 2022-05-25 |
| **Solution Folder** | [Forcepoint NGFW](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Forcepoint%20NGFW) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Forcepoint NGFW via Legacy Agent](../connectors/forcepointngfw.md) ⚠️
- [[Deprecated] Forcepoint NGFW via AMA](../connectors/forcepointngfwama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Forcepoint NGFW via AMA](../connectors/forcepointngfwama.md), [[Deprecated] Forcepoint NGFW via Legacy Agent](../connectors/forcepointngfw.md) | Workbooks |
| [`Heartbeat`](../tables/heartbeat.md) | - | Workbooks |
| [`Perf`](../tables/perf.md) | - | Workbooks |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | - | Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 2 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ForcepointNGFW](../content/forcepoint-ngfw-forcepointngfw-6b671d61.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ForcepointNGFWAdvanced](../content/forcepoint-ngfw-forcepointngfwadvanced-b6a3422e.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Heartbeat`](../tables/heartbeat.md)<br>[`Perf`](../tables/perf.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.2       | 19-11-2024                     |    Removed Deprecated **Data Connectors**                          |
| 3.0.1       | 15-07-2024                     |	Deprecating data connectors                                     |
| 3.0.0       | 29-08-2023                     |	Addition of new Forcepoint NGFW AMA **Data Connector**          |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

