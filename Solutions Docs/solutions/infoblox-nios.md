# Infoblox NIOS

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/infoblox_logo.svg" alt="Infoblox NIOS Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.4 |
| **Author** | Infoblox |
| **First Published** | 2022-04-01 |
| **Solution Folder** | [Infoblox NIOS](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20NIOS) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-infobloxnios) |
| **Pre-requisites** | [Syslog](syslog.md) |

The [Infoblox Network Identity Operating System (NIOS)](https://www.infoblox.com/glossary/network-identity-operating-system-nios/) solution for Microsoft Sentinel enables you to easily connect your Infoblox NIOS logs with Microsoft Sentinel, to view dashboards, create custom alerts, and improve investigation. This gives you more insight into your organization's network and improves your security operation capabilities.

 This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog solution will be installed as part of this solution installation.

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

- [[Deprecated] Infoblox NIOS](../connectors/infobloxnios.md) ⚠️

Connectors from dependency solutions:

- [Syslog via Legacy Agent](../connectors/syslog.md) *(dependency on [Syslog](syslog.md))*
- [Syslog via AMA](../connectors/syslogama.md) *(dependency on [Syslog](syslog.md))*

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [Syslog via AMA](../connectors/syslogama.md) (dependency), [Syslog via Legacy Agent](../connectors/syslog.md) (dependency), [[Deprecated] Infoblox NIOS](../connectors/infobloxnios.md) | Analytics, Workbooks |

## Content Items

This solution includes **25 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 22 |
| Analytic Rules | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Excessive NXDOMAIN DNS Queries](../content/infoblox-nios-excessive-nxdomain-dns-queries-b8266f81-2715-41a6-9062-42486cbc9c73-d5682e5d.md) | Medium | CommandAndControl | [`Syslog`](../tables/syslog.md) |
| [Potential DHCP Starvation Attack](../content/infoblox-nios-potential-dhcp-starvation-attack-57e56fc9-417a-4f41-a579-5475aea7b8ce-acc426ab.md) | Medium | InitialAccess | [`Syslog`](../tables/syslog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Infoblox-Workbook-V2](../content/infoblox-nios-infoblox-workbook-v2-a1f70727.md) | [`Syslog`](../tables/syslog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Infoblox](../parsers/infoblox.md) | - | - |
| [Infoblox_allotherdhcpdTypes](../parsers/infoblox-allotherdhcpdtypes.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_allotherdnsTypes](../parsers/infoblox-allotherdnstypes.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_allotherlogTypes](../parsers/infoblox-allotherlogtypes.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcp_consolidated](../parsers/infoblox-dhcp-consolidated.md) | - | - |
| [Infoblox_dhcpack](../parsers/infoblox-dhcpack.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpadded](../parsers/infoblox-dhcpadded.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpbindupdate](../parsers/infoblox-dhcpbindupdate.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpdiscover](../parsers/infoblox-dhcpdiscover.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpexpire](../parsers/infoblox-dhcpexpire.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpinform](../parsers/infoblox-dhcpinform.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpoffer](../parsers/infoblox-dhcpoffer.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpoption](../parsers/infoblox-dhcpoption.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpother](../parsers/infoblox-dhcpother.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcprelease](../parsers/infoblox-dhcprelease.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpremoved](../parsers/infoblox-dhcpremoved.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcprequest](../parsers/infoblox-dhcprequest.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpsession](../parsers/infoblox-dhcpsession.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dns_consolidated](../parsers/infoblox-dns-consolidated.md) | - | - |
| [Infoblox_dnsclient](../parsers/infoblox-dnsclient.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dnsgss](../parsers/infoblox-dnsgss.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dnszone](../parsers/infoblox-dnszone.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                   |
|-------------|--------------------------------|----------------------------------------------------------------------|
| 3.0.5       | 07-10-2025                     |Expanded exclusion lists in Infoblox_allotherdhcpdTypes and Infoblox_dhcpother parsers to filter additional log types.                   |
| 3.0.4       | 17-12-2024                     |Removed Deprecated **Data connectors**                                |
| 3.0.3       | 01-08-2024                     |Update **Parser** as part of Syslog migration                         |
|             |                                |Deprecating data connectors                                           |
| 3.0.2       | 16-08-2023                     |Updated the solution to include a default value for watchlist1-id     |
| 3.0.1       | 24-07-2023                     |Updated ApiVersion for Watchlist                                      |
| 3.0.0       | 11-07-2023                     |Updated support information for this solution                         |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

