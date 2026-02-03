# Citrix Web App Firewall

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/citrix-logo-circle-black.svg" alt="Citrix Web App Firewall Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

[Citrix Web App Firewall (WAF)](https://www.citrix.com/products/citrix-web-app-firewall/) Solution for Microsoft Sentinel enables ingestion of Common Event Format (CEF) logs into Microsoft Sentinel to enable you to take advantage of search & correlation, alerting, and threat intelligence enrichment for each log.

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE: **Microsoft recommends installation of CEF via AMA Connector. The existing connectors were deprecated on **Aug 31, 2024.**

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Citrix Systems |
| **Support Tier** | Partner |
| **Support Link** | [https://www.citrix.com/support/](https://www.citrix.com/support/) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Citrix Systems |
| **First Published** | 2022-05-06 |
| **Solution Folder** | [Citrix Web App Firewall](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Citrix%20Web%20App%20Firewall) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Citrix WAF (Web App Firewall) via Legacy Agent](../connectors/citrixwaf.md) ⚠️
- [[Deprecated] Citrix WAF (Web App Firewall) via AMA](../connectors/citrixwafama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Citrix WAF (Web App Firewall) via AMA](../connectors/citrixwafama.md), [[Deprecated] Citrix WAF (Web App Firewall) via Legacy Agent](../connectors/citrixwaf.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CitrixWAF](../content/citrix-web-app-firewall-citrixwaf-f26995f5.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.2       | 29-11-2024                     |    Removed Deprecated **Data Connectors**                          |
| 3.0.1       | 10-07-2024                     |    Deprecating data connectors.                                    |
| 3.0.0       | 08-09-2023                     |	Addition of new Citrix Web App Firewall AMA **Data Connector**  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

