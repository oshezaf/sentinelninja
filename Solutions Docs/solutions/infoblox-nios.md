# Infoblox NIOS

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/infoblox_logo.svg" alt="Infoblox NIOS Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Infoblox Network Identity Operating System (NIOS)](https://www.infoblox.com/glossary/network-identity-operating-system-nios/) solution for Microsoft Sentinel enables you to easily connect your Infoblox NIOS logs with Microsoft Sentinel, to view dashboards, create custom alerts, and improve investigation. This gives you more insight into your organization's network and improves your security operation capabilities.

 This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog solution will be installed as part of this solution installation.

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

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
| **Dependencies** | [Syslog](syslog.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Infoblox NIOS](../connectors/infobloxnios.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Infoblox NIOS](../connectors/infobloxnios.md) | Analytics, Workbooks |

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
| [Infoblox](../content/infoblox-nios-infoblox-5591631b-4fcc-4dfb-8e90-10acb12b9494-0defcaad.md) | - | - |
| [Infoblox_allotherdhcpdTypes](../content/infoblox-nios-infoblox-allotherdhcpdtypes-0902417a-288a-481e-ae22-8c60167087af-a9751d2e.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_allotherdnsTypes](../content/infoblox-nios-infoblox-allotherdnstypes-583065b6-c47d-489e-a609-9f97573c9334-1ef8a825.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_allotherlogTypes](../content/infoblox-nios-infoblox-allotherlogtypes-8d12dd0a-f8df-47f1-938b-d5bdcd9656ba-8edad920.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcp_consolidated](../content/infoblox-nios-infoblox-dhcp-consolidated-2d665230-5f9a-4399-a582-dfb7cc2f3971-0db3c303.md) | - | - |
| [Infoblox_dhcpack](../content/infoblox-nios-infoblox-dhcpack-47b5ec12-dada-4091-ae3f-ffee22e9a47a-9e8d79cf.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpadded](../content/infoblox-nios-infoblox-dhcpadded-dda93e6b-8a80-4348-a9ee-7c9208cbe410-41309e3a.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpbindupdate](../content/infoblox-nios-infoblox-dhcpbindupdate-7e5e4d85-1a84-4d9f-8788-7d928a658c2c-825f0340.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpdiscover](../content/infoblox-nios-infoblox-dhcpdiscover-890db700-1f1e-4ad1-9d67-2d8752d74f2f-39ad26a0.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpexpire](../content/infoblox-nios-infoblox-dhcpexpire-eb996257-6d13-4c24-ade0-b19be55bab73-a576aeb4.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpinform](../content/infoblox-nios-infoblox-dhcpinform-664e7bbd-fba2-41a6-be63-85376f516f4c-a3b5778b.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpoffer](../content/infoblox-nios-infoblox-dhcpoffer-2ae93e20-8b92-4cd5-8bf7-e815ce472d0d-5d70babf.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpoption](../content/infoblox-nios-infoblox-dhcpoption-ae269e0c-3c8c-4b80-bc54-03442ce97a99-6d51624c.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpother](../content/infoblox-nios-infoblox-dhcpother-50ce0953-5f2e-4dce-b711-91bae0e00a20-18460cb3.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcprelease](../content/infoblox-nios-infoblox-dhcprelease-abe2e8ba-5c4c-450e-af7d-f12658d3d7d0-1634bf48.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpremoved](../content/infoblox-nios-infoblox-dhcpremoved-85d45bae-f3f6-4077-8bca-5d7d93348858-05391c1b.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcprequest](../content/infoblox-nios-infoblox-dhcprequest-e3fbab01-ddf8-4ab2-b663-3c33e92f55b3-79588514.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dhcpsession](../content/infoblox-nios-infoblox-dhcpsession-ce7e152d-8e0e-4e6e-8d3d-d60af96fe6e2-9da5bd35.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dns_consolidated](../content/infoblox-nios-infoblox-dns-consolidated-b548eacc-66d0-4ef1-b2ff-4688b1d609bc-eb271743.md) | - | - |
| [Infoblox_dnsclient](../content/infoblox-nios-infoblox-dnsclient-16f093d4-c9a8-4426-89ab-855c3e3be243-d7556135.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dnsgss](../content/infoblox-nios-infoblox-dnsgss-bcdea229-bb66-4071-b5f8-e9628079f834-ee6db49a.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |
| [Infoblox_dnszone](../content/infoblox-nios-infoblox-dnszone-6b88ad86-5ecb-4918-b41e-a463fc4a36f3-66224728.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |

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

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

