# Doppel

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/doppel.svg" alt="Doppel Logo" width="75" height="75">

The Doppel Integration for Microsoft Sentinel streamlines the ingestion of Doppel security events and alerts through a custom data connector, converting raw event logs into a compatible format for use in Workbooks. This enhances digital risk visibility by enabling users to monitor threats, analyze alerts by category, and gain actionable insights.



## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Doppel |
| **Support Tier** | Partner |
| **Support Link** | [https://www.doppel.com/request-a-demo](https://www.doppel.com/request-a-demo) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Doppel |
| **First Published** | 2024-11-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Doppel](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Doppel) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Doppel Data Connector](../connectors/doppel-dataconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`DoppelTable_CL`](../tables/doppeltable-cl.md) | [Doppel Data Connector](../connectors/doppel-dataconnector.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Doppel](../content/doppel-doppel-0def4b82.md) | [`DoppelTable_CL`](../tables/doppeltable-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** |                 **Change History**                  |
|-------------|--------------------------------|-----------------------------------------------------|
| 3.0.1       | 05-03-2025                     | Fixed typo error in **Data Connector**.             | 
| 3.0.0       | 03-12-2024                     | Initial Solution Release.                            |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

