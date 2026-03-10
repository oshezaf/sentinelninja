# Forcepoint DLP

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Forcepoint DLP Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Community |
| **Support Tier** | Community |
| **Support Link** | [https://github.com/Azure/Azure-Sentinel/issues](https://github.com/Azure/Azure-Sentinel/issues) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | Forcepoint - isv@email.com |
| **First Published** | 2022-05-09 |
| **Solution Folder** | [Forcepoint DLP](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Forcepoint%20DLP) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/microsoftsentinelcommunity.azure-sentinel-solution-forcepoint-dlp) |

The [Forcepoint DLP (Data Loss Prevention)](https://www.forcepoint.com/product/dlp-data-loss-prevention) Solution for Microsoft Sentinel allows you to automatically export DLP incident data from Forcepoint DLP into Microsoft Sentinel in real-time. This enriches visibility into user activities and data loss incidents, enables further correlation with data from Azure workloads and other feeds, and improves monitoring capability with Workbooks inside Microsoft Sentinel.

For more details about this solution refer to [integration documentation](https://forcepoint.github.io/docs/dlp_and_azure_sentinel/)

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

- [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [Forcepoint DLP](../connectors/forcepoint-dlp.md) ⚠️ 🔶

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ForcepointDLPEvents_CL`](../tables/forcepointdlpevents-cl.md) 🔶 | [Forcepoint DLP](../connectors/forcepoint-dlp.md) | Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.
## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ForcepointDLP](../content/forcepoint-dlp-forcepointdlp-aa61cdb9.md) | [`ForcepointDLPEvents_CL`](../tables/forcepointdlpevents-cl.md) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

