# ⚠️ Squadra Technologies SecRmm

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/SquadraTechnologiesLogo.svg" alt="Squadra Technologies SecRmm Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Squadra Technologies SecRMM](https://www.squadratechnologies.com/Products/secRMM/secRMMOverview.aspx) solution for Microsoft Sentinel enables you to ingest USB security event data into Microsoft Sentinel.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Squadra Technologies |
| **Support Tier** | Partner |
| **Support Link** | [https://www.squadratechnologies.com/Contact.aspx](https://www.squadratechnologies.com/Contact.aspx) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Squadra Technologies |
| **First Published** | 2022-05-09 |
| **Solution Folder** | [Squadra Technologies SecRmm](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Squadra%20Technologies%20SecRmm) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Squadra Technologies secRMM](../connectors/squadratechnologiessecrmm.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`secRMM_CL`](../tables/secrmm-cl.md) | [Squadra Technologies secRMM](../connectors/squadratechnologiessecrmm.md) | Analytics, Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Removable storage ONLINE event from secRMM](../content/squadra-technologies-secrmm-removable-storage-online-event-from-secrmm-a22b2ecf-1478-4400-877e-07a32e53a897-c1870014.md) | High | Collection | [`secRMM_CL`](../tables/secrmm-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [AzureSentinelWorkbookForRemovableStorageSecurityEvents](../content/squadra-technologies-secrmm-azuresentinelworkbookforremovablestoragesecurityevents-c1ab5ac4.md) | [`secRMM_CL`](../tables/secrmm-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 15-11-2025                     | Added **Analytical Rule** 					 |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

