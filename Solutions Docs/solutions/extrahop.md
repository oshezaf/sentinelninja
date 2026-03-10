# ExtraHop RevealX for Microsoft Sentinel

*Solution: ExtraHop*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ExtraHop.svg" alt="ExtraHop Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | ExtraHop Support |
| **Support Tier** | Partner |
| **Support Link** | [https://www.extrahop.com/customer-support](https://www.extrahop.com/customer-support) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Shwetha Somashekar - shwethas@extrahop.com |
| **First Published** | 2025-02-11 |
| **Last Updated** | 2025-06-04 |
| **Solution Folder** | [ExtraHop](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ExtraHop) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/extrahop.extrahop-revealx-sentinel) · Popularity: 🔵 Medium (71%) |

Configure the ExtraHop Detection Data Connector to send ExtraHop detection data to the Microsoft Sentinel. An ExtraHop workbook and analytic rules available from the Microsoft Sentinel Workspace enable you to gain insight into detections and generate detection alerts.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [ExtraHop Detections Data Connector](../connectors/extrahop.md) 🔶

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ExtraHop_Detections_CL`](../tables/extrahop-detections-cl.md) 🔶 | [ExtraHop Detections Data Connector](../connectors/extrahop.md) | Analytics, Workbooks |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | - | Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.
## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Generate alerts based on ExtraHop detections recommended for triage](../content/extrahop-generate-alerts-based-on-extrahop-detections-recommended-for-triage-cd65aebc-7e85-4cbb-9f91-ff0376c5d37d-c70bea70.md) | Medium | Persistence | [`ExtraHop_Detections_CL`](../tables/extrahop-detections-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ExtraHopDetectionsOverview](../content/extrahop-extrahopdetectionsoverview-b10f683c.md) | [`ExtraHop_Detections_CL`](../tables/extrahop-detections-cl.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ExtraHopDetections](../parsers/extrahopdetections.md) | - | [`ExtraHop_Detections_CL`](../tables/extrahop-detections-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.1       | 04-06-2025                     | Updated **Parser** and **Workbook** to fix issue.    |
| 3.0.0       | 19-03-2025                     | Initial Solution Release.                    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

