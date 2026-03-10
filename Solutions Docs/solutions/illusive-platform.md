# Illusive Platform

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/illusiveAttackManagementSystem.svg" alt="Illusive Platform Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Illusive Networks |
| **Support Tier** | Partner |
| **Support Link** | [https://illusive.com/support](https://illusive.com/support) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Illusive Networks |
| **First Published** | 2022-05-25 |
| **Solution Folder** | [Illusive Platform](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Platform) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/illusivenetworks.illusive_platform_mss) |
| **Pre-requisites** | [Common Event Format](common-event-format.md) |

The Illusive Platform solution for Microsoft Sentinel enables you to ingest Illusive Platform’s attack surface analysis data and incident logs into Microsoft Sentinel and view this information in dedicated dashboards that offer insight into your organization's attack surface risk (ASM Dashboard) and track unauthorized lateral movement in your organization's network (ADS Dashboard).

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

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [[Deprecated] Illusive Platform via Legacy Agent](../connectors/illusiveattackmanagementsystem.md) ⚠️
- [[Deprecated] Illusive Platform via AMA](../connectors/illusiveattackmanagementsystemama.md)

Connectors from dependency solutions:

- [Common Event Format (CEF)](../connectors/cef.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Common Event Format (CEF) via AMA](../connectors/cefama.md) *(dependency on [Common Event Format](common-event-format.md))*

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Common Event Format (CEF)](../connectors/cef.md) (dependency), [Common Event Format (CEF) via AMA](../connectors/cefama.md) (dependency), [[Deprecated] Illusive Platform via AMA](../connectors/illusiveattackmanagementsystemama.md), [[Deprecated] Illusive Platform via Legacy Agent](../connectors/illusiveattackmanagementsystem.md) | Analytics, Workbooks |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 2 |
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Illusive Incidents Analytic Rule](../content/illusive-platform-illusive-incidents-analytic-rule-1a7dbcf6-21a2-4255-84b2-c8dbbdca4630-7fa2b740.md) | Medium | Persistence, PrivilegeEscalation, DefenseEvasion, CredentialAccess, LateralMovement | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [IllusiveADS](../content/illusive-platform-illusiveads-5d29048c.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [IllusiveASM](../content/illusive-platform-illusiveasm-bca1238e.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 12-07-2024                     |    Deprecating data connector                                      |
| 3.0.0       | 13-09-2023                     |	Addition of new Illusive Platform AMA **Data Connector**        |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

