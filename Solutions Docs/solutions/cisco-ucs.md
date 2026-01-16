# Cisco UCS

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cisco-logo-72px.svg" alt="Cisco UCS Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Cisco UCS](https://www.cisco.com/c/en/us/products/servers-unified-computing/index.html) solution for Microsoft Sentinel enables you to ingest Cisco UCS faults, events, and audit logs into Microsoft Sentinel.

 This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation.

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20UCS](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20UCS) |
| **Dependencies** | [Syslog](syslog.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Cisco UCS](../connectors/ciscoucs.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ASimSourceType`](../tables/asimsourcetype.md) | [[Deprecated] Cisco UCS](../connectors/ciscoucs.md) | - |
| [`EVENT`](../tables/event.md) | [[Deprecated] Cisco UCS](../connectors/ciscoucs.md) | - |
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Cisco UCS](../connectors/ciscoucs.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CiscoUCS](../content/cisco-ucs-ciscoucs-363f8744-f75c-4500-be8d-92e4e5b0c1bf-ec56fe47.md) | - | [`ASimSourceType`](../tables/asimsourcetype.md) *(read)*<br>[`EVENT`](../tables/event.md) *(read)*<br>[`Syslog`](../tables/syslog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 24-12-2024                     | Removed Deprecated **Data Connector**                              |
| 3.0.0       | 30-07-2024                     | Update the **Parser** as part of Syslog migration                  |
|             |                                | Deprecating data connectors                                        |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

