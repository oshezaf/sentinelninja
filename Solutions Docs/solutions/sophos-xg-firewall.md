# Sophos XG Firewall

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/sophos_logo.svg" alt="Sophos XG Firewall Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Sophos XG Firewall](https://www.sophos.com/products/next-gen-firewall) solution for Microsoft Sentinel enables you to ingest Sophos XG Firewall logs into Microsoft Sentinel.

 This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.**. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | SophosXGFirewall |
| **First Published** | 2021-10-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Sophos%20XG%20Firewall](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Sophos%20XG%20Firewall) |
| **Dependencies** | [Syslog](syslog.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Sophos XG Firewall](../connectors/sophosxgfirewall.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | - | Analytics, Workbooks |

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
| [Excessive Amount of Denied Connections from a Single Source](../content/sophos-xg-firewall-excessive-amount-of-denied-connections-from-a-single-source-3d645a88-2724-41a7-adea-db74c439cf79-2b4e4307.md) | Medium | Impact | [`Syslog`](../tables/syslog.md) |
| [Port Scan Detected](../content/sophos-xg-firewall-port-scan-detected-427e4c9e-8cf4-4094-a684-a2d060dbca38-b0e76aa0.md) | Medium | Discovery | [`Syslog`](../tables/syslog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SophosXGFirewall](../content/sophos-xg-firewall-sophosxgfirewall-c77fae3a.md) | [`Syslog`](../tables/syslog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SophosXGFirewall](../content/sophos-xg-firewall-sophosxgfirewall-8fa865c8-c62e-49f3-bc9a-6c6aeb8db133-b14d256a.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                  |
|-------------|--------------------------------|-------------------------------------------------------------------------------------|
| 3.0.1       | 09-12-2024                     | Rmoved Deprecated **Data Connector**                                                |
|             |                                | Updated SophosXGFirewall.json **Workbook** to fix missing fields                    |
| 3.0.0       | 01-08-2024                     | Update **Parser** as part of Syslog migration </br> Deprecating **Data Connectors** |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

