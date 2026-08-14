# iboss Connector for Microsoft Sentinel

*Solution: iboss*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/iboss/Workbooks/Images/Logo/iboss_full-logo_2020_vector_black.svg" alt="iboss Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | iboss |
| **Support Tier** | Partner |
| **Support Link** | [https://www.iboss.com/contact-us/](https://www.iboss.com/contact-us/) |
| **Categories** | Security - Network |
| **Version** | 3.1.3 |
| **Author** | iboss |
| **First Published** | 2022-02-15 |
| **Last Updated** | 2026-06-29 |
| **Solution Folder** | [iboss](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/iboss) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/iboss.iboss-sentinel-connector) · Rating: ★★★★☆ 4.2/5 (16 ratings) · Popularity: 🔵 Medium (67%) |
| **Pre-requisites** | [Common Event Format](common-event-format.md) |

The iboss Solution provides means to connect your Threat Console to Microsoft Sentinel and enrich your instance with iboss URL event logs. Our logs are forwarded in Common Event Format (CEF) over Syslog and the configuration required can be completed on the iboss platform without the use of a proxy. Take advantage of our connector to garner critical data points and gain insight into security threats.

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

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

- [[Deprecated] iboss via Legacy Agent](../connectors/iboss.md) ⚠️
- [iboss via AMA](../connectors/ibossama.md)

Connectors from dependency solutions:

- [Common Event Format (CEF)](../connectors/cef.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Common Event Format (CEF) via AMA](../connectors/cefama.md) *(dependency on [Common Event Format](common-event-format.md))*

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Common Event Format (CEF)](../connectors/cef.md) (dependency), [Common Event Format (CEF) via AMA](../connectors/cefama.md) (dependency), [[Deprecated] iboss via Legacy Agent](../connectors/iboss.md), [iboss via AMA](../connectors/ibossama.md) | Analytics, Workbooks |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Workbooks | 2 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [iboss - Command-and-Control Detected](../content/iboss-iboss-command-and-control-detected-40cf9670-d4be-4149-9082-5809a2b12ca1-3d2fa7d5.md) | High | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [iboss - Malware Detected](../content/iboss-iboss-malware-detected-cad35734-b97a-4209-9269-b98c916379eb-2e4fb5d5.md) | High | Execution | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ibossMalwareAndC2](../content/iboss-ibossmalwareandc2-0213a927.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ibossWebUsage](../content/iboss-ibosswebusage-5b4fbb25.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ibossUrlEvent](../parsers/ibossurlevent.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.1.3       | 24-06-2026                     |    Added Malware/C2 **Analytics Rules** and made minor bug fixes   |
| 3.1.2       | 07-01-2025                     |    Removed Deprecated **Data connector**                           |
| 3.1.1       | 18-09-2024                     |    Updated AMA and legacy OMS connector to use new iboss field     |
| 3.1.0       | 05-09-2024                     |    Updated AMA connector with iboss specific instructions          |
| 3.0.1       | 12-07-2024                     |    Deprecating data connectors                                     |
| 3.0.0       | 20-09-2023                     |	Addition of new Iboss AMA **Data Connector**                    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

