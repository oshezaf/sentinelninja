# ⚠️ Filewall for Microsoft 365

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/filewall-logo.svg" alt="Filewall for Microsoft 365 Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Filewall |
| **Support Tier** | Partner |
| **Support Link** | [https://www.odi-x.com/contact-filewall-support/](https://www.odi-x.com/contact-filewall-support/) |
| **Categories** | Security - Threat Protection |
| **Source Vendor** | Filewall *(basis: publisher)* |
| **Source Product** | Microsoft 365 |
| **Version** | 3.0.0 |
| **Author** | Filewall - support@filewall.com |
| **First Published** | 2026-01-06 |
| **Last Updated** | 2026-01-06 |
| **Solution Folder** | [Filewall for Microsoft 365](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Filewall%20for%20Microsoft%20365) |

Filewall for Microsoft 365 solution installs a Codeless (CCF/CLv2) connector that ingests Filewall activity logs for Exchange, SharePoint, OneDrive and Teams into custom tables. It also installs parsers, analytics rules and a workbook for visibility.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Filewall for Microsoft 365](../connectors/filewallm365.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`FilewallExchange_CL`](../tables/filewallexchange-cl.md) | [Filewall for Microsoft 365](../connectors/filewallm365.md) | Analytics, Workbooks |
| [`FilewallFile_CL`](../tables/filewallfile-cl.md) | [Filewall for Microsoft 365](../connectors/filewallm365.md) | Analytics, Workbooks |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Parsers | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Filewall - Blocked emails](../content/filewall-for-microsoft-365-filewall-blocked-emails-9b784b65-2d16-4c9f-9f59-2a5d4c659f42-395f5a5b.md) | High | Exfiltration | [`FilewallExchange_CL`](../tables/filewallexchange-cl.md) |
| [Filewall - Blocked files](../content/filewall-for-microsoft-365-filewall-blocked-files-86e7f6fd-5c29-4a3a-bced-3eca3fb0c621-7c0054b4.md) | High | Exfiltration | [`FilewallFile_CL`](../tables/filewallfile-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [FilewallM365Overview](../content/filewall-for-microsoft-365-filewallm365overview-90daf6a7.md) | [`FilewallExchange_CL`](../tables/filewallexchange-cl.md)<br>[`FilewallFile_CL`](../tables/filewallfile-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [FilewallM365ExchangeEvent](../parsers/filewallm365exchangeevent.md) | - | [`FilewallExchange_CL`](../tables/filewallexchange-cl.md) *(read)* |
| [FilewallM365FileEvent](../parsers/filewallm365fileevent.md) | - | [`FilewallFile_CL`](../tables/filewallfile-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|------------|-------------------------------|--------------------|
| 3.0.0      | 20-01-2026                    | Includes all CCF connector definitions and configurations. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

