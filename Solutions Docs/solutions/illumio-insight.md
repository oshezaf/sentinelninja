# Illumio Insight

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Azure_Sentinel.svg" alt="Illumio Insight Logo" width="75" height="75">

The Illumio Insights data connector allows ingesting logs from the Illumio API into Microsoft Sentinel. The data connector is built on Microsoft Sentinel Codeless Connector Platform. It uses the Illumio API to fetch logs and it supports DCR-based ingestion time transformations that parses the received security data into a custom table so that queries don't need to parse it again, thus resulting in better performance.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Illumio |
| **Support Tier** | Partner |
| **Support Link** | [https://www.illumio.com/support/support](https://www.illumio.com/support/support) |
| **Categories** | domains |
| **Version** | 3.3.2 |
| **Author** | Microsoft |
| **First Published** | 2025-08-10 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illumio%20Insight](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illumio%20Insight) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Illumio Insights](../connectors/illumioinsightsdefinition.md)
- [Illumio Insights Summary](../connectors/illumioinsightssummaryccp.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`IllumioInsightsSummary_CL`](../tables/illumioinsightssummary-cl.md) | [Illumio Insights Summary](../connectors/illumioinsightssummaryccp.md) | - |
| [`IllumioInsights_CL`](../tables/illumioinsights-cl.md) | [Illumio Insights](../connectors/illumioinsightsdefinition.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                  |
|-------------|--------------------------------|-----------------------------------------------------|
|3.3.2      | 29-09-2025                 | Dsecription , Instruction changes for **CCF Data Connector** , changing ps script to change desriptions in UiDefnition
| 3.3.1       | 12-09-2025                     | Adding iIlumio InsightsSummary **CCF Data Connector** to Illumio Insights Solution, changing URL of Illumio Resources to `gw.console.illum.io` |
| 3.0.0       | 10-08-2025                     | Corrected the links in the solution.  	             |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

