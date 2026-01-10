# Trend Micro Deep Security

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Trend_Micro_Logo.svg" alt="Trend Micro Deep Security Logo" width="75" height="75">

The [Trend Micro Deep Security](https://www.trendmicro.com/en_us/business/products/hybrid-cloud/deep-security.html) solution for Microsoft Sentinel enables you to ingest Deep Security logs into Microsoft Sentinel, using the Common Event Format (CEF) for Security Monitoring.
 

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation. 

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** and thus should only be installed where AMA is not supported. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Trend Micro |
| **Support Tier** | Partner |
| **Support Link** | [https://success.trendmicro.com/dcx/s/?language=en_US](https://success.trendmicro.com/dcx/s/?language=en_US) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Trend Micro |
| **First Published** | 2022-05-10 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trend%20Micro%20Deep%20Security](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trend%20Micro%20Deep%20Security) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Trend Micro Deep Security via Legacy](../connectors/trendmicro.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Trend Micro Deep Security via Legacy](../connectors/trendmicro.md) | - |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 2 |
| Parsers | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [TrendMicroDeepSecurityAttackActivity](../content/trend-micro-deep-security-trendmicrodeepsecurityattackactivity-4ac1a0a6.md) | - |
| [TrendMicroDeepSecurityOverview](../content/trend-micro-deep-security-trendmicrodeepsecurityoverview-abad9508.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [TrendMicroDeepSecurity](../content/trend-micro-deep-security-trendmicrodeepsecurity-b376272c-ca00-435d-9879-e7d64da7dd24-d7d017c5.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 03-01-2025                     | Removed Deprecated **Data connector**                              |
| 3.0.0       | 27-06-2024                     | Deprecating data connectors     |
| 2.0.1       | 11-11-2022                     | Updated OfferId     |
| 2.0.0       | 20-07-2022                     | Initial Package     |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

