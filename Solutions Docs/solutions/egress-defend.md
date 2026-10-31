# KnowBe4 Defend Connector for Microsoft Sentinel

*Solution: Egress Defend*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Egress-logo.svg" alt="Egress Defend Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | egress1589289169584 |
| **Support Tier** | Partner |
| **Support Link** | [https://support.egress.com/s/](https://support.egress.com/s/) |
| **Categories** | Application |
| **Version** | 3.1.0 |
| **Author** | Egress - support@egress.com |
| **First Published** | 2023-07-27 |
| **Last Updated** | 2026-09-21 |
| **Solution Folder** | [Egress Defend](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Egress%20Defend) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/egress1589289169584.egress-sentinel-defend) · Popularity: 🔵 Medium (54%) |

Egress Defend for Microsoft Sentinel provides details of processed emails, including the type of phishing attack, payload type and information to show if the user interacted with the email in a positive (clicking on banners or submitting the phish sample) or negative (clicking on an unsafe URL) manner.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **2 data connector(s)**:

- [Egress Defend v2](../connectors/egressdefendaudit.md) 🔶
- [Egress Defend](../connectors/egressdefendpolling.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`EgressDefend_CL`](../tables/egressdefend-cl.md) 🔶 | [Egress Defend](../connectors/egressdefendpolling.md) | Analytics, Hunting, Workbooks |
| [`EgressDefend_v4_CL`](../tables/egressdefend-v4-cl.md) 🔶 | [Egress Defend v2](../connectors/egressdefendaudit.md) | Analytics, Hunting, Workbooks |
| [`KnowBe4Defend_CL`](../tables/knowbe4defend-cl.md) 🔶 | [Egress Defend](../connectors/egressdefendpolling.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **6 content item(s)** (5 in solution, 1 discovered 🔍):

| Content Type | Total | In Solution | Discovered |
|:-------------|------:|------------:|-----------:|
| Analytic Rules | 2 | 2 | - |
| Parsers | 2 | 1 | 1 |
| Hunting Queries | 1 | 1 | - |
| Workbooks | 1 | 1 | - |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Egress Defend - Dangerous Attachment Detected](../content/egress-defend-egress-defend-dangerous-attachment-detected-a0e55dd4-8454-4396-91e6-f28fec3d2cab-f2c1e438.md) | Medium | Execution, InitialAccess, Persistence, PrivilegeEscalation | [`EgressDefend_CL`](../tables/egressdefend-cl.md)<br>[`EgressDefend_v4_CL`](../tables/egressdefend-v4-cl.md) |
| [Egress Defend - Dangerous Link Click](../content/egress-defend-egress-defend-dangerous-link-click-a896123e-03a5-4a4d-a7e3-fd814846dfb2-cd7508b8.md) | Medium | Execution | [`EgressDefend_CL`](../tables/egressdefend-cl.md)<br>[`EgressDefend_v4_CL`](../tables/egressdefend-v4-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Dangerous emails with links clicked](../content/egress-defend-dangerous-emails-with-links-clicked-57ada8d5-7a26-4440-97fd-32c5c3fd0421-6c714e87.md) | Collection | [`EgressDefend_CL`](../tables/egressdefend-cl.md)<br>[`EgressDefend_v4_CL`](../tables/egressdefend-v4-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [DefendMetrics](../content/egress-defend-defendmetrics-35b2f8e1.md) | [`EgressDefend_CL`](../tables/egressdefend-cl.md)<br>[`EgressDefend_v4_CL`](../tables/egressdefend-v4-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DefendAuditData](../parsers/defendauditdata.md) ⚠️ | - | [`EgressDefend_CL`](../tables/egressdefend-cl.md) *(read)* |
| [DefendAuditData_v4](../parsers/defendauditdata-v4.md) | - | [`EgressDefend_CL`](../tables/egressdefend-cl.md) *(read)*<br>[`EgressDefend_v4_CL`](../tables/egressdefend-v4-cl.md) *(read)* |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.1.0       | 01-09-2026                     | Added a new **Data Connector** using the Logs Ingestion API (CCF RestApiPoller with DCR/DCE), replacing the retiring HTTP Data Collector API. Added a new **Parser** `DefendAuditData_v4`. Updated **Analytic Rules**, **Workbook** and **Hunting Query** to read from `DefendAuditData_v4`. The original connector, table and parser are unchanged, so existing installations keep working until the new connector is enabled. |
| 3.0.0       | 02-08-2023                     | Initial Solution Release.                   |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

