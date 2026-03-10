# Akamai Security Events

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/akamai.svg" alt="Akamai Security Events Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-03-23 |
| **Solution Folder** | [Akamai Security Events](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Akamai%20Security%20Events) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-akamai) |
| **Pre-requisites** | [Common Event Format](common-event-format.md) |

The Akamai Security Solution for Microsoft Sentinel enables ingestion of [Akamai Security Solutions](https://www.akamai.com/solutions/security) events using the Common Event Format (CEF) into Microsoft Sentinel for Security Monitoring. 

This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors are about to be deprecated by **Aug 31, 2024.**

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

- [[Deprecated] Akamai Security Events via Legacy Agent](../connectors/akamaisecurityevents.md) ⚠️
- [[Deprecated] Akamai Security Events via AMA](../connectors/akamaisecurityeventsama.md) ⚠️

Connectors from dependency solutions:

- [Common Event Format (CEF)](../connectors/cef.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Common Event Format (CEF) via AMA](../connectors/cefama.md) *(dependency on [Common Event Format](common-event-format.md))*

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Common Event Format (CEF)](../connectors/cef.md) (dependency), [Common Event Format (CEF) via AMA](../connectors/cefama.md) (dependency), [[Deprecated] Akamai Security Events via AMA](../connectors/akamaisecurityeventsama.md), [[Deprecated] Akamai Security Events via Legacy Agent](../connectors/akamaisecurityevents.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [AkamaiSIEMEvent](../parsers/akamaisiemevent.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.2       | 12-11-2024                     |    Removed Deprecated **Data Connector**                           |
| 3.0.1       | 08-07-2024                     |    Deprecated **Data Connector**                                   |
| 3.0.0       | 20-09-2023                     |    Addition of new Akamai Security Events AMA **Data Connector**   |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

