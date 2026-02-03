# Microsoft Purview

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Microsoft%20Purview/Data%20Connectors/Logo/MicrosoftPurview.svg" alt="Microsoft Purview Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Microsoft Purview](https://learn.microsoft.com/purview/purview) Solution enables data sensitivity enrichment of Microsoft Sentinel. Data classification and sensitivity label logs from Microsoft Purview scans are ingested and visualized through workbooks, analytical rules, and more.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-11-23 |
| **Solution Folder** | [Microsoft Purview](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Purview) |

## Additional Information

📖 **Setup Guide:** [Integrate Microsoft Purview](https://learn.microsoft.com/azure/sentinel/purview-solution) - Integrate Microsoft Purview with Microsoft Sentinel

## Data Connectors

This solution provides **1 data connector(s)**:

- [Microsoft Purview](../connectors/microsoftazurepurview.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`PurviewDataSensitivityLogs`](../tables/purviewdatasensitivitylogs.md) | [Microsoft Purview](../connectors/microsoftazurepurview.md) | Analytics, Workbooks |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Sensitive Data Discovered in the Last 24 Hours](../content/microsoft-purview-sensitive-data-discovered-in-the-last-24-hours-7ae7e8b0-07e9-43cb-b783-b04082f09060-60c3db5f.md) | Informational | Discovery | [`PurviewDataSensitivityLogs`](../tables/purviewdatasensitivitylogs.md) |
| [Sensitive Data Discovered in the Last 24 Hours - Customized](../content/microsoft-purview-sensitive-data-discovered-in-the-last-24-hours-customized-79f296d9-e6e4-45dc-9ca7-1770955435fa-d7061393.md) | Informational | Discovery | [`PurviewDataSensitivityLogs`](../tables/purviewdatasensitivitylogs.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [MicrosoftPurview](../content/microsoft-purview-microsoftpurview-c44ab5ce.md) | [`PurviewDataSensitivityLogs`](../tables/purviewdatasensitivitylogs.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                            |
|-------------|--------------------------------|-----------------------------------------------------------------------------------------------|
| 3.0.0       | 27-03-2025                     |	**Data Connector** [Microsoft Purview] Globally Available |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

