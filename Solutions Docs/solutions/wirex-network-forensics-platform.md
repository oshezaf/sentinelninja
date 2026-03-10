# WireX Network Forensics Platform

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/wirex-systems_logo.svg" alt="WireX Network Forensics Platform Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | WireX Systems |
| **Support Tier** | Partner |
| **Support Link** | [https://wirexsystems.com/contact-us/](https://wirexsystems.com/contact-us/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | WireX Systems - info@wirexsystems.com |
| **First Published** | 2022-05-06 |
| **Solution Folder** | [WireX Network Forensics Platform](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WireX%20Network%20Forensics%20Platform) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/wirexsystems1584682625009.wirex_network_forensics_platform_mss) |
| **Pre-requisites** | [Common Event Format](common-event-format.md) |

The [WireX Systems](https://wirexsystems.com/) solution allows custom dashboards and workflows during forensic investigation integrated with Microsoft Sentinel.

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation. 

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. Legacy connector uses the Log Analytics agent which is about to be deprecated by **Aug 31, 2024,** and thus should only be installed where AMA is not supported. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Contents

- [Pre-requisites](#pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)

## Pre-requisites

This solution depends on **1 other solution(s)**:

| Solution |
|:---------|
| [Common Event Format](common-event-format.md) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [[Deprecated] WireX Network Forensics Platform via Legacy Agent](../connectors/wirex-systems-nfp.md) ⚠️
- [[Deprecated] WireX Network Forensics Platform via AMA](../connectors/wirex-systems-nfpama.md)

Connectors from dependency solutions:

- [Common Event Format (CEF)](../connectors/cef.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Common Event Format (CEF) via AMA](../connectors/cefama.md) *(dependency on [Common Event Format](common-event-format.md))*

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Common Event Format (CEF)](../connectors/cef.md) (dependency), [Common Event Format (CEF) via AMA](../connectors/cefama.md) (dependency), [[Deprecated] WireX Network Forensics Platform via AMA](../connectors/wirex-systems-nfpama.md), [[Deprecated] WireX Network Forensics Platform via Legacy Agent](../connectors/wirex-systems-nfp.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                          |
|-------------|--------------------------------|-------------------------------------------------------------|
| 3.0.1       | 27-06-2024                     | Deprecating data connectors                                 |
| 3.0.0       | 05-09-2023                     | Addition of new WireX Network Forensics Platform **Data Connector**    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

