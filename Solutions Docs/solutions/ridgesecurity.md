# RidgeSecurity

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/RidgeSecurity.svg" alt="RidgeSecurity Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | RidgeSecurity |
| **Support Tier** | Partner |
| **Support Link** | [https://ridgesecurity.ai/about-us/](https://ridgesecurity.ai/about-us/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | RidgeSecurity - oliver@ridgesecurity.ai |
| **First Published** | 2023-10-23 |
| **Last Updated** | 2023-10-23 |
| **Solution Folder** | [RidgeSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RidgeSecurity) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/ridgesecuritytechnologyinc1670890478389.microsoft-sentinel-solution-ridgesecurity) |
| **Pre-requisites** | [Common Event Format](common-event-format.md) |

[The RidgeSecurity](https://ridgesecurity.ai/) Microsoft Sentinel Solution lets users have visibility in real-time with Microsoft Sentinel, allowing creation of custom Dashboards, Workbooks, Notebooks and Custom Alerts to improve investigation. 

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation. 

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. Legacy connector uses the Log Analytics agent which is about to be deprecated by **Aug 31, 2024,** and thus should only be installed where AMA is not supported. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

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

This solution provides **1 data connector(s)**:

- [[Deprecated] RIDGEBOT - data connector for Microsoft Sentinel](../connectors/ridgebotdataconnector.md)

Connectors from dependency solutions:

- [Common Event Format (CEF)](../connectors/cef.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Common Event Format (CEF) via AMA](../connectors/cefama.md) *(dependency on [Common Event Format](common-event-format.md))*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Common Event Format (CEF)](../connectors/cef.md) (dependency), [Common Event Format (CEF) via AMA](../connectors/cefama.md) (dependency), [[Deprecated] RIDGEBOT - data connector for Microsoft Sentinel](../connectors/ridgebotdataconnector.md) | Analytics |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Critical Risks](../content/ridgesecurity-critical-risks-1eebfaf3-40e1-4bc2-9f42-049b7b8ceb60-11ad44c8.md) | High | Execution, InitialAccess, PrivilegeEscalation | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Vulerabilities](../content/ridgesecurity-vulerabilities-d096643d-6789-4c74-8893-dd3fc8a94069-d1a748f6.md) | High | Execution, InitialAccess, PrivilegeEscalation | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 01-07-2024                     |  Deprecating data connectors                                          |
| 3.0.0       | 23-10-2023                     |  Initial Solution Release                                          |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

