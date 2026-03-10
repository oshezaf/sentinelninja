# Workplace from Facebook

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Azure_Sentinel.svg" alt="Workplace from Facebook Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft |
| **First Published** | 2022-05-18 |
| **Solution Folder** | [Workplace from Facebook](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Workplace%20from%20Facebook) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-workplacefromfacebook) |

The [Workplace](https://www.workplace.com/) data connector provides the capability to ingest common Workplace events into Microsoft Sentinel through Webhooks.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

- [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

- [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Workplace from Facebook](../connectors/workplacefacebook.md) 🔶

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Workplace_Facebook_CL`](../tables/workplace-facebook-cl.md) 🔶 | [Workplace from Facebook](../connectors/workplacefacebook.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.
## Content Items

This solution includes **1 content item(s)** (0 in solution, 1 discovered 🔍):

| Content Type | Total | In Solution | Discovered |
|:-------------|------:|------------:|-----------:|
| Parsers | 1 | 0 | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Workplace_Facebook](../parsers/workplace-facebook.md) ⚠️ | - | [`Workplace_Facebook_CL`](../tables/workplace-facebook-cl.md) *(read)* |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.1       | 03-05-2024                     | Repackaged for parser issue fix on reinstall |
| 3.0.0       | 18-04-2024                     | Updated **Dataconnector** with step by step guidelines and </br> Added Deploy to Azure Goverment button for Government portal|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

