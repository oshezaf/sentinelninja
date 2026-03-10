# Talon Connector for Microsoft Sentinel

*Solution: Talon*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Talon.svg" alt="Talon Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Talon Security |
| **Support Tier** | Partner |
| **Support Link** | [https://docs.console.talon-sec.com/](https://docs.console.talon-sec.com/) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | Talon |
| **First Published** | 2023-01-25 |
| **Solution Folder** | [Talon](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Talon) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/taloncybersecurityltd1654088115170.talonconnector) |
| **Popularity** | ⚪ Very Low (0%) |

The [Talon](https://talon-sec.com/) events and audit logs connector allows you to easily connect your [Talon activity logs with Microsoft Sentinel](https://docs.console.talon-sec.com/en/articles/254-microsoft-sentinel-integration), to view dashboards, create custom alerts, and improve investigation./n/n**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:/n/n a. [Azure Monitor HTTP Data Collector API ](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Talon Insights](../connectors/talonlogs.md) 🔶

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Talon_CL`](../tables/talon-cl.md) 🔶 | [Talon Insights](../connectors/talonlogs.md) | Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.
## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [TalonInsights](../content/talon-taloninsights-a46f557d.md) | [`Talon_CL`](../tables/talon-cl.md) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

