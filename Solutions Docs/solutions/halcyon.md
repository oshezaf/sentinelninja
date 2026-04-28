# Halcyon for Microsoft Sentinel (Preview)

*Solution: Halcyon*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/halcyon.svg" alt="Halcyon Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Halcyon |
| **Support Tier** | Partner |
| **Support Link** | [https://www.halcyon.ai](https://www.halcyon.ai) |
| **Categories** | domains |
| **Version** | 3.1.0 |
| **Author** | Halcyon - support@halcyon.ai |
| **First Published** | 2025-12-22 |
| **Last Updated** | 2026-03-24 |
| **Solution Folder** | [Halcyon](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Halcyon) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/halcyontech1743610828684.azure-sentinel-solution-halcyon) · Popularity: ⚪ Very Low (0%) |

The [Halcyon](https://www.halcyon.ai) solution for Microsoft Sentinel enables you to ingest Halcyon Events and Alerts into Microsoft Sentinel using the Microsoft Sentinel Analytics Workspace.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following Microsoft technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional data ingestion or operational costs:

a. [Microsoft Sentinel](https://learn.microsoft.com/azure/sentinel/)

b. [Azure Monitor Data Collection Rules (DCR)](https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-rule-overview)

c. [Azure Monitor Data Collection Endpoints (DCE)](https://learn.microsoft.com/azure/azure-monitor/essentials/data-collection-endpoint-overview)

d. [Azure Log Analytics workspaces](https://learn.microsoft.com/azure/azure-monitor/logs/log-analytics-workspace-overview)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Halcyon Connector](../connectors/halcyonpush.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`HalcyonEvents_CL`](../tables/halcyonevents-cl.md) | [Halcyon Connector](../connectors/halcyonpush.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
|3.1.0        | 24-03-2026                     | Update Connector to receive events with OCSF schemas | 
|3.0.0        | 09-12-2025                     | Initial Solution release

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

