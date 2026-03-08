# McAfee Network Security Platform

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="McAfee Network Security Platform Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-06-29 |
| **Solution Folder** | [McAfee Network Security Platform](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/McAfee%20Network%20Security%20Platform) |
| **Pre-requisites** | [Syslog](syslog.md) |

The [McAfee Network Security Platform](https://www.trellix.com/en-us/products/intrusion-prevention-system.html) data connector provides the capability to ingest [McAfee Network Security Platform events](https://docs.trellix.com/bundle/network-security-platform-10.1.x-integration-guide-unmanaged/page/GUID-8C706BE9-6AC9-4641-8A53-8910B51207D8.html) into Microsoft Sentinel. Refer to [McAfee Network Security Platform](https://docs.trellix.com/bundle/network-security-platform-10.1.x-integration-guide-unmanaged/page/GUID-F7D281EC-1CC9-4962-A7A3-5A9D9584670E.html) for more information.

 This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Contents

- [Pre-requisites](#pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Pre-requisites

This solution depends on **1 other solution(s)**:

| Solution |
|:---------|
| [Syslog](syslog.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] McAfee Network Security Platform](../connectors/mcafeensp.md) ⚠️

Connectors from dependency solutions:

- [Syslog via Legacy Agent](../connectors/syslog.md) *(dependency on [Syslog](syslog.md))*
- [Syslog via AMA](../connectors/syslogama.md) *(dependency on [Syslog](syslog.md))*

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [Syslog via AMA](../connectors/syslogama.md) (dependency), [Syslog via Legacy Agent](../connectors/syslog.md) (dependency), [[Deprecated] McAfee Network Security Platform](../connectors/mcafeensp.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [McAfeeNSPEvent](../parsers/mcafeenspevent.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                               |
|-------------|--------------------------------|--------------------------------------------------|
| 3.0.1       | 27-12-2024                     | Removed Deprecated **Data connector**            |
| 3.0.0       | 23-07-2024                     | Deprecated Data connectors  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Solutions Index](../solutions-index.md)

