# Zscaler Internet Access for Microsoft Sentinel

*Solution: Zscaler Internet Access*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ZscalerLogo.svg" alt="Zscaler Internet Access Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Zscaler |
| **Support Tier** | Partner |
| **Support Link** | [https://help.zscaler.com/submit-ticket-links](https://help.zscaler.com/submit-ticket-links) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Zscaler |
| **First Published** | 2022-05-25 |
| **Solution Folder** | [Zscaler Internet Access](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zscaler%20Internet%20Access) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/zscaler1579058425289.zscaler_internet_access_mss) · Rating: ★★★★★ 4.6/5 (175 ratings) · Popularity: 🟢 High (82%) |
| **Pre-requisites** | [Common Event Format](common-event-format.md) |

The [Zscaler Internet Access](https://www.zscaler.com/products/zscaler-internet-access) Solution for Microsoft Sentinel enables you to easily connect your Zscaler Internet Access (ZIA) logs with Microsoft Sentinel, to view dashboards, create custom alerts, and improve investigation. Using Zscaler on Microsoft Sentinel will provide you more insights into your organization’s Internet usage and will enhance its security operation capabilities. 
 
 For more details about this solution refer to [https://help.zscaler.com/zia/zscaler-microsoft-azure-sentinel-deployment-guide](https://help.zscaler.com/zia/zscaler-microsoft-azure-sentinel-deployment-guide) 

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation. 

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors were deprecated on **Aug 31, 2024**.

## Contents

- [Pre-requisites](#pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Pre-requisites

This solution depends on **1 other solution(s)**:

| Solution |
|:---------|
| [Common Event Format](common-event-format.md) |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Zscaler via Legacy Agent](../connectors/zscaler.md) ⚠️
- [[Deprecated] Zscaler via AMA](../connectors/zscalerama.md) ⚠️

Connectors from dependency solutions:

- [Common Event Format (CEF)](../connectors/cef.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Common Event Format (CEF) via AMA](../connectors/cefama.md) *(dependency on [Common Event Format](common-event-format.md))*

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Common Event Format (CEF)](../connectors/cef.md) (dependency), [Common Event Format (CEF) via AMA](../connectors/cefama.md) (dependency), [[Deprecated] Zscaler via AMA](../connectors/zscalerama.md), [[Deprecated] Zscaler via Legacy Agent](../connectors/zscaler.md) | Analytics, Workbooks |

## Content Items

This solution includes **11 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 4 |
| Playbooks | 3 |
| Analytic Rules | 2 |
| Parsers | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Discord CDN Risky File Download](../content/zscaler-internet-access-discord-cdn-risky-file-download-010bd98c-a6be-498c-bdcd-502308c0fdae-581fe083.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Request for single resource on domain](../content/zscaler-internet-access-request-for-single-resource-on-domain-4d500e6d-c984-43a3-9f39-7edec8dcc04d-7778e224.md) | Low | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ZscalerFirewall](../content/zscaler-internet-access-zscalerfirewall-bc68adf2.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ZscalerOffice365Apps](../content/zscaler-internet-access-zscaleroffice365apps-bcb66bac.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ZscalerThreats](../content/zscaler-internet-access-zscalerthreats-c11e0924.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ZscalerWebOverview](../content/zscaler-internet-access-zscalerweboverview-7e8374eb.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Block URL - Zscaler](../content/zscaler-internet-access-block-url-zscaler-3de5a1e8.md) | This playbook allows blocks URLs in Zscaler by adding them to categories | - |
| [FileHash Enrichment - Zscaler](../content/zscaler-internet-access-filehash-enrichment-zscaler-0f34e8b2.md) | This playbook post a Zscaler Sandbox report for each FileHash found in the incident. | - |
| [Zscaler API authentication](../content/zscaler-internet-access-zscaler-api-authentication-929a054e.md) | This playbook generates access token in Zscaler API. Call this playbook as a step in functional Zsca... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ZScalerFW_Parser](../parsers/zscalerfw-parser.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |
| [ZScalerWeb_Parser](../parsers/zscalerweb-parser.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             |
|-------------|--------------------------------|------------------------------------------------|
| 3.0.3       | 28-11-2024                     | Removed Deprecated **Data Connectors**         |
| 3.0.2       | 28-06-2024                     | Deprecating data connectors                    |
| 3.0.1       | 03-05-2024                     | Repackaged for parser issue fix on reinstall   |
| 3.0.0       | 16-02-2024                     | Addition of new Zscaler AMA **Data Connector** |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

