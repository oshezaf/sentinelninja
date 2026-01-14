# Zscaler Internet Access

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ZscalerLogo.svg" alt="Zscaler Internet Access Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Zscaler Internet Access](https://www.zscaler.com/products/zscaler-internet-access) Solution for Microsoft Sentinel enables you to easily connect your Zscaler Internet Access (ZIA) logs with Microsoft Sentinel, to view dashboards, create custom alerts, and improve investigation. Using Zscaler on Microsoft Sentinel will provide you more insights into your organization’s Internet usage and will enhance its security operation capabilities. 
 
 For more details about this solution refer to [https://help.zscaler.com/zia/zscaler-microsoft-azure-sentinel-deployment-guide](https://help.zscaler.com/zia/zscaler-microsoft-azure-sentinel-deployment-guide) 

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation. 

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors were deprecated on **Aug 31, 2024**.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Zscaler |
| **Support Tier** | Partner |
| **Support Link** | [https://help.zscaler.com/submit-ticket-links](https://help.zscaler.com/submit-ticket-links) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Zscaler |
| **First Published** | 2022-05-25 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zscaler%20Internet%20Access](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zscaler%20Internet%20Access) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Zscaler via Legacy Agent](../connectors/zscaler.md) ⚠️
- [[Deprecated] Zscaler via AMA](../connectors/zscalerama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Zscaler via AMA](../connectors/zscalerama.md), [[Deprecated] Zscaler via Legacy Agent](../connectors/zscaler.md) | Analytics, Workbooks |

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
| [ZScalerFW_Parser](../content/zscaler-internet-access-zscalerfw-parser-a4d32d94-2fb5-41f6-b871-47c71ffff167-b6c1cb0b.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |
| [ZScalerWeb_Parser](../content/zscaler-internet-access-zscalerweb-parser-fda3f601-8321-492e-ae77-e2ed6829be60-9f0b927a.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             |
|-------------|--------------------------------|------------------------------------------------|
| 3.0.3       | 28-11-2024                     | Removed Deprecated **Data Connectors**         |
| 3.0.2       | 28-06-2024                     | Deprecating data connectors                    |
| 3.0.1       | 03-05-2024                     | Repackaged for parser issue fix on reinstall   |
| 3.0.0       | 16-02-2024                     | Addition of new Zscaler AMA **Data Connector** |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

