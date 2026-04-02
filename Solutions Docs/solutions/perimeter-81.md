# Perimeter 81 for Microsoft Sentinel

*Solution: Perimeter 81*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Perimeter81_Logo.svg" alt="Perimeter 81 Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Perimeter 81 |
| **Support Tier** | Partner |
| **Support Link** | [https://support.perimeter81.com/docs](https://support.perimeter81.com/docs) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | Perimeter 81 |
| **First Published** | 2022-05-06 |
| **Last Updated** | 2025-12-14 |
| **Solution Folder** | [Perimeter 81](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Perimeter%2081) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/perimeter811605117499319.perimeter_81___mss) · Rating: ★★★★★ 4.7/5 (204 ratings) · Popularity: ⚪ Very Low (0%) |

The [Perimeter 81](https://www.perimeter81.com/) Activity Logs connector allows you to easily connect your [Perimeter 81 activity logs with Microsoft Sentinel](https://support.perimeter81.com/docs/ms-sentinel), to view dashboards, create custom alerts, and improve investigation./n/n**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:/n/n a. [Azure Monitor HTTP Data Collector API ](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Perimeter 81 Activity Logs](../connectors/perimeter81activitylogs.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Perimeter81_CL`](../tables/perimeter81-cl.md) 🔶 | [Perimeter 81 Activity Logs](../connectors/perimeter81activitylogs.md) | Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Perimeter81OverviewWorkbook](../content/perimeter-81-perimeter81overviewworkbook-167f2993.md) | [`Perimeter81_CL`](../tables/perimeter81-cl.md) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

