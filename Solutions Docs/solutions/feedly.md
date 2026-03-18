# Feedly Solution For Microsoft Sentinel

*Solution: Feedly*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Feedly.svg" alt="Feedly Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Feedly Inc |
| **Support Tier** | Partner |
| **Support Link** | [https://feedly.com/i/support/contactUs](https://feedly.com/i/support/contactUs) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Feedly ml@feedly.com |
| **First Published** | 2023-08-01 |
| **Last Updated** | 2026-03-02 |
| **Solution Folder** | [Feedly](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Feedly) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/feedlyinc1693853810319.azure-sentinel-solution-feedly) · Popularity: ⚪ Very Low (0%) |

The [Feedly](https://feedly.com/i/landing/threatIntelligence) Solution for Microsoft Sentinel provides a simple way to ingest Indicators of Compromise from your Feedly streams into Microsoft Sentinel.

## Data Connectors

This solution provides **1 data connector(s)**:

- [Feedly](../connectors/feedly.md) 🔶

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`feedly_indicators_CL`](../tables/feedly-indicators-cl.md) 🔶 | [Feedly](../connectors/feedly.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                              |
|-------------|--------------------------------|-----------------------------------------------------------------|
| 3.0.6       | 15-10-2025                     | Fix zip file and remove pandas dependency.    |
| 3.0.5       | 14-10-2025                     | Fix dependencies and default parameters.                                                                                                                                   |
| 3.0.4       | 11-10-2025                     | Migrated to Logs Ingestion API from deprecated HTTP Data Collector API. Now requires DCE, DCR, and Azure AD authentication. See deployment instructions for setup details. |
| 3.0.3       | 28-11-2023                     | Added missing python packages to the  **Data Connector**        |
| 3.0.2       | 10-11-2023                     | Fixed the app service plan                                      | 
| 3.0.1       | 25-10-2023                     | Fixed the runtime of the functionapp for the **Data Connector** | 
| 3.0.0       | 17-08-2023                     | Initial Solution Release 								                                |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

