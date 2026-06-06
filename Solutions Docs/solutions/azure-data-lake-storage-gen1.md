# Azure Data Lake Storage Gen1 solution for Sentinel

*Solution: Azure Data Lake Storage Gen1*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Azure Data Lake Storage Gen1 Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-06-24 |
| **Solution Folder** | [Azure Data Lake Storage Gen1](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Data%20Lake%20Storage%20Gen1) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-datalakestoragegen1) · Popularity: 🟢 High (94%) |

The [Azure Data Lake Storage Gen1](https://docs.microsoft.com/azure/data-lake-store/data-lake-store-overview) solution for Microsoft Sentinel enables you to ingest Azure Data Lake Storage Gen1 diagnostics logs using Diagnostic Settings into Microsoft Sentinel.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

 a. [Azure Monitor Resource Diagnostics](https://docs.microsoft.com/azure/azure-monitor/essentials/diagnostic-settings?tabs=portal)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Azure Data Lake Storage Gen1](../connectors/azuredatalakestoragegen1-ccp.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) 🔶 | [Azure Data Lake Storage Gen1](../connectors/azuredatalakestoragegen1-ccp.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

