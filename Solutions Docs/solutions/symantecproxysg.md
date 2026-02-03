# SymantecProxySG

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/symantec_logo.svg" alt="SymantecProxySG Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Symantec ProxySG](https://www.broadcom.com/products/cyber-security/network/web-protection#our-swg-solution) solution for Microsoft Sentinel enables you to ingest Symantec ProxySG’s network proxy traffic logs into Microsoft Sentinel.

This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-05-25 |
| **Solution Folder** | [SymantecProxySG](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SymantecProxySG) |
| **Dependencies** | [Syslog](syslog.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Symantec ProxySG](../connectors/symantecproxysg.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Symantec ProxySG](../connectors/symantecproxysg.md) | Analytics, Workbooks |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Excessive Denied Proxy Traffic](../content/symantecproxysg-excessive-denied-proxy-traffic-7a58b253-0ef2-4248-b4e5-c350f15a8346-3c74e5a4.md) | Low | DefenseEvasion, CommandAndControl | [`Syslog`](../tables/syslog.md) |
| [User Accessed Suspicious URL Categories](../content/symantecproxysg-user-accessed-suspicious-url-categories-fb0f4a93-d8ad-4b54-9931-85bdb7550f90-b9a254cd.md) | Medium | InitialAccess, CommandAndControl | [`Syslog`](../tables/syslog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SymantecProxySG](../content/symantecproxysg-symantecproxysg-dd9ed98f.md) | [`Syslog`](../tables/syslog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SymantecProxySG](../content/symantecproxysg-symantecproxysg-58b3074c-519b-4812-b784-e8bd7712089a-5c90419b.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.3       | 20-01-2025                     | Removed Custom Entity mappings from **Analytic rules**          |
| 3.0.2       | 24-12-2024                     |Removed Deprecated **Data Connector**        |
| 3.0.1       | 01-08-2024                     |Update **Parser** as part of Syslog migration                         |
|             |                                |Deprecating data connectors                                           |
| 3.0.0       | 06-11-2023                     | Modified the **Data Connector** with improved onboarding instructions and Optimized the **Parser** to process the logs with improved performance |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

