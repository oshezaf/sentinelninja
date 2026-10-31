# Microsoft PowerBI solution for Sentinel

*Solution: Microsoft PowerBI*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/PowerBILogo.svg" alt="Microsoft PowerBI Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | Application |
| **Version** | 3.2.2 |
| **Author** | Microsoft |
| **First Published** | 2022-05-23 |
| **Last Updated** | 2026-10-28 |
| **Solution Folder** | [Microsoft PowerBI](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20PowerBI) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-microsoftpowerbi) · Popularity: 🟢 High (83%) |

The [Microsoft PowerBI](https://docs.microsoft.com/power-bi/fundamentals/power-bi-overview) solution enables you to track user activities in your PowerBI environment. You can filter the audit data by date range, user, dashboard, report, dataset, and activity type.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Office Management API ](https://docs.microsoft.com/office/office-365-management-api/office-365-management-apis-overview)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Microsoft PowerBI](../connectors/officepowerbi.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`PowerBIActivity`](../tables/powerbiactivity.md) | [Microsoft PowerBI](../connectors/officepowerbi.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [MicrosoftPowerBIActivityWorkbook](../content/microsoft-powerbi-microsoftpowerbiactivityworkbook-657a784e.md) | [`PowerBIActivity`](../tables/powerbiactivity.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|---|---|---|
| 3.2.2 | 20-10-2026 | Added Defender XDR **Workbook** (`MicrosoftPowerBIActivityWorkbook.json`) migrated to Advanced Hunting for unified Defender portal deployment and updated the **Microsoft PowerBI** solution package to V3.1. |
| 3.0.0 | 04-09-2023 | Updated **Data Connector** and **Workbook** template metadata for Content Hub v3 packaging. |
| 2.0.1 | 21-03-2023 | Added **Microsoft PowerBI Activity Workbook** for monitoring user activities across dashboards, reports, and datasets. |
| 2.0.0 | 23-05-2022 | Initial Solution Release with **Microsoft PowerBI Data Connector**. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

