# Feedly Threat Intelligence Solution For Microsoft Sentinel

*Solution: Feedly*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Feedly.svg" alt="Feedly Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Feedly Inc |
| **Support Tier** | Partner |
| **Support Link** | [https://feedly.com/i/support/contactUs](https://feedly.com/i/support/contactUs) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.7 |
| **Author** | Feedly ml@feedly.com |
| **First Published** | 2023-08-01 |
| **Last Updated** | 2026-09-18 |
| **Solution Folder** | [Feedly](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Feedly) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/feedlyinc1693853810319.azure-sentinel-solution-feedly) · Popularity: ⚪ Very Low (0%) |

The [Feedly](https://feedly.com/i/landing/threatIntelligence) Solution for Microsoft Sentinel provides a simple way to ingest Indicators of Compromise from your Feedly streams into Microsoft Sentinel.

## Data Connectors

This solution provides **1 data connector(s)**:

- [Feedly IoC](../connectors/feedlyccpdefinition.md)

## Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | [Feedly IoC](../connectors/feedlyccpdefinition.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                              |
|-------------|--------------------------------|-----------------------------------------------------------------|
| 3.0.7       | 15-09-2026                     | Fix DCR STIX Id: hash_sha256 is a string, do not wrap it in abs() |
| 3.0.6       | 10-09-2026                     | Fix DCR transformKql (use replace/pack so Connect can create the data collection rule) |
| 3.0.5       | 28-08-2026                     | Ingest Feedly IoCs into native **ThreatIntelIndicators** (SourceSystem=Feedly) |
| 3.0.4       | 16-02-2026                     | Migrate to CCF connector |
| 3.0.3       | 28-11-2023                     | Added missing python packages to the  **Data Connector**        |
| 3.0.2       | 10-11-2023                     | Fixed the app service plan                                      | 
| 3.0.1       | 25-10-2023                     | Fixed the runtime of the functionapp for the **Data Connector** | 
| 3.0.0       | 17-08-2023                     | Initial Solution Release 								                                |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

