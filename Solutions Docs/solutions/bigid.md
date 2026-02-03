# ⚠️ BigID

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/bigid.svg" alt="BigID Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The BigID solution for Microsoft Sentinel enables you to ingest BigID DSPM cases and affected objects into Microsoft Sentinel.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | BigID |
| **Support Tier** | Partner |
| **Support Link** | [https://www.bigid.com/support](https://www.bigid.com/support) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | BigID - mhebrard@bigid.com |
| **First Published** | 2025-10-07 |
| **Solution Folder** | [BigID](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BigID) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [BigID DSPM connector](../connectors/bigiddspmlogsconnectordefinition.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`BigIDDSPMAssetStore_CL`](../tables/bigiddspmassetstore-cl.md) | [BigID DSPM connector](../connectors/bigiddspmlogsconnectordefinition.md) | - |
| [`BigIDDSPMCatalog_CL`](../tables/bigiddspmcatalog-cl.md) | [BigID DSPM connector](../connectors/bigiddspmlogsconnectordefinition.md) | - |

## Release Notes

**Version** | **Date Modified (DD-MM-YYYY)**| **ChangeHistory**                                                                         |
|------------|-------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.0      | 13-01-2026    | First version of a BigID DSPM CCF Connector. <br/> BigID DSPM CCF Connector now using JWT user token authentication <br/> BigID DSPM Asset expansion and mapping|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

