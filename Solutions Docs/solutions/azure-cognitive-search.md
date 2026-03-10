# Azure Cognitive Search

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Azure Cognitive Search Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-06-28 |
| **Solution Folder** | [Azure Cognitive Search](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Cognitive%20Search) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-azurecognitivesearch) |

The [Azure Cognitive Search](https://docs.microsoft.com/azure/search/search-what-is-azure-search) solution for Microsoft Sentinel enables you to ingest Azure Cognitive Search diagnostics logs using Diagnostic Settings into Microsoft Sentinel. 

**Underlying Microsoft Technologies used:**

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

 a. [Azure Monitor Resource Diagnostics](https://docs.microsoft.com/azure/azure-monitor/essentials/diagnostic-settings) 

## Data Connectors

This solution provides **1 data connector(s)**:

- [Azure Cognitive Search](../connectors/azurecognitivesearch-ccp.md) 🔶

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) 🔶 | [Azure Cognitive Search](../connectors/azurecognitivesearch-ccp.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.
---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

