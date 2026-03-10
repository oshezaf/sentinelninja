# Zimperium Mobile Threat Defense

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ZIMPERIUM-logo_square2.svg" alt="Zimperium Mobile Threat Defense Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Zimperium |
| **Support Tier** | Partner |
| **Support Link** | [https://www.zimperium.com/support/](https://www.zimperium.com/support/) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | Zimperium |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [Zimperium Mobile Threat Defense](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zimperium%20Mobile%20Threat%20Defense) |

The [Zimperium](https://www.zimperium.com/) Mobile Threat Defense solution gives you the ability to connect the [Zimperium Mobile Threat Defense](https://www.zimperium.com/mtd-maturity-model/) log with Microsoft Sentinel to view dashboards, create custom alerts, and improve investigation.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [Zimperium Mobile Threat Defense](../connectors/zimperiummtdalerts.md) ⚠️ 🔶

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ZimperiumMitigationLog_CL`](../tables/zimperiummitigationlog-cl.md) 🔶 | [Zimperium Mobile Threat Defense](../connectors/zimperiummtdalerts.md) | - |
| [`ZimperiumThreatLog_CL`](../tables/zimperiumthreatlog-cl.md) 🔶 | [Zimperium Mobile Threat Defense](../connectors/zimperiummtdalerts.md) | Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.
## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ZimperiumWorkbooks](../content/zimperium-mobile-threat-defense-zimperiumworkbooks-53cb70da.md) | [`ZimperiumThreatLog_CL`](../tables/zimperiumthreatlog-cl.md) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

