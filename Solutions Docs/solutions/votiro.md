# ⚠️ Votiro

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/votiro.svg" alt="Votiro Logo" width="75" height="75">

Threat related information will be sent from Votiro Sanitization Engine to Microsoft Sentinel, allowing customers to better mitigate cyber attack, do effective threat hunting and enrich cyber security alerts. 

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation. 

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. Legacy connector uses the Log Analytics agent which is about to be deprecated by **Aug 31, 2024,** and thus should only be installed where AMA is not supported. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Votiro |
| **Support Tier** | Partner |
| **Support Link** | [https://support.votiro.com/](https://support.votiro.com/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Votiro - support@votiro.com |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Votiro](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Votiro) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Votiro Sanitization Engine Logs](../connectors/votiro.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Votiro Sanitization Engine Logs](../connectors/votiro.md) | Analytics, Workbooks |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Votiro - File Blocked from Connector](../content/votiro-votiro-file-blocked-from-connector-17bf3780-ae0d-4cd9-a884-5df8b687f3f5-13901b84.md) | Low | DefenseEvasion, Discovery, Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Votiro - File Blocked in Email](../content/votiro-votiro-file-blocked-in-email-0b8b91de-c63e-4bc2-b5f4-b15d3b379ec9-dd69805e.md) | Low | CommandAndControl, DefenseEvasion, Impact, InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Votiro Monitoring Dashboard](../content/votiro-votiro-monitoring-dashboard-733f09ff.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 01-07-2024                     |  Deprecating data connectors                                          |
| 3.0.0       | 22-07-2023                     |  Initial Solution Release                                          |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

