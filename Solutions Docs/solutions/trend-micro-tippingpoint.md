# Trend Micro TippingPoint

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Trend_Micro_Logo.svg" alt="Trend Micro TippingPoint Logo" width="75" height="75">

The [Trend Micro](https://www.trendmicro.com/en_in/business.html) TippingPoint Microsoft Sentinel Solution allows you to easily connect your [TippingPoint](https://www.trendmicro.com/en_us/business/products/network/intrusion-prevention/tipping-point-threat-protection-system.html) SMS IPS events with Microsoft Sentinel, to view dashboards, create custom alerts, and improve investigation.

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation. 

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Trend Micro |
| **Support Tier** | Partner |
| **Support Link** | [https://success.trendmicro.com/dcx/s/contactus?language=en_US](https://success.trendmicro.com/dcx/s/contactus?language=en_US) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Trend Micro |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trend%20Micro%20TippingPoint](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trend%20Micro%20TippingPoint) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Trend Micro TippingPoint via Legacy](../connectors/trendmicrotippingpoint.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Trend Micro TippingPoint via Legacy](../connectors/trendmicrotippingpoint.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [TrendMicroTippingPoint](../content/trend-micro-tippingpoint-trendmicrotippingpoint-8859cdc3-75ee-4491-875d-5ef1181f4e8c-aa324beb.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 06-01-2025                     | Removed Deprecated **Data connector**                              |
| 3.0.0       | 27-06-2024                     | Deprecating data connectors                                        |
| 2.0.2       | 30-05-2023                     | Updated Package                                                    |
| 2.0.1       | 11-11-2022                     | Initial Release                                                    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
