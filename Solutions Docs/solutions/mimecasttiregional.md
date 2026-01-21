# MimecastTIRegional

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Mimecast.svg" alt="MimecastTIRegional Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The data connector for Mimecast Intelligence for Microsoft provides regional threat intelligence curated from Mimecast’s email inspection technologies with pre-created dashboards to allow analysts to view insight into email based threats, aid in incident correlation and reduce investigation response times.  
Mimecast products and features required: 
- Mimecast Secure Email Gateway 
- Mimecast Threat Intelligence


Microsoft Sentinel Solutions provide a consolidated way to acquire Microsoft Sentinel content like data connectors, workbooks, analytics, and automations in your workspace with a single deployment step.

**NOTE: This integration is considered deprecated and has been replaced by the unified [Mimecast integration](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/mimecastnorthamerica1584469118674.azure-sentinel-solution-mimecast?tab=Overview), which uses Mimecast's API 2.0 gateway. Please avoid using this version, and if already using it, migrate to the new integration. No further updates will be performed, and this version will be removed at a future date. For additional information, including the unified integration setup steps, go [here](https://integrations.mimecast.com/tech-partners/microsoft-sentinel).**

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Mimecast |
| **Support Tier** | Partner |
| **Support Link** | [https://mimecastsupport.zendesk.com/](https://mimecastsupport.zendesk.com/) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Mimecast - dlapi@mimecast.com |
| **First Published** | 2023-08-23 |
| **Last Updated** | 2023-09-11 |
| **Solution Folder** | [MimecastTIRegional](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MimecastTIRegional) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Mimecast Intelligence for Microsoft - Microsoft Sentinel](../connectors/mimecasttiregionalconnectorazurefunctions.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Event`](../tables/event.md) | [Mimecast Intelligence for Microsoft - Microsoft Sentinel](../connectors/mimecasttiregionalconnectorazurefunctions.md) | - |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | [Mimecast Intelligence for Microsoft - Microsoft Sentinel](../connectors/mimecasttiregionalconnectorazurefunctions.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [MimecastTIRegional](../content/mimecasttiregional-mimecasttiregional-91528c77.md) | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.2       | 06-03-2025                     | Solution Deprecated   |
| 3.0.1       | 05-12-2023                     | Enhanced **Dataconnector** to use existing workspace and updated checkpoint mechanism |
| 3.0.0       | 23-08-2023                     | Initial Solution Release                    |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

