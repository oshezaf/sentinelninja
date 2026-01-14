# ⚠️ Illumio Core

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Azure_Sentinel.svg" alt="Illumio Core Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Illumio Core](https://www.illumio.com/products/) solution allows you to ingest Illumio Core logs into Microsoft Sentinel. 

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors were deprecated on **Aug 31, 2024**.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft |
| **First Published** | 2022-05-26 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illumio%20Core](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illumio%20Core) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Illumio Core via Legacy Agent](../connectors/illumiocore.md) ⚠️
- [[Deprecated] Illumio Core via AMA](../connectors/illumiocoreama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Illumio Core via AMA](../connectors/illumiocoreama.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [IllumioCoreEvent](../content/illumio-core-illumiocoreevent-1c0eafd3-9b95-4bad-bf1c-28a0d0145e42-e6b88baf.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                  |
|-------------|--------------------------------|-----------------------------------------------------|
| 3.0.3       | 27-11-2024                     | Removed Deprecated **Data Connectors**              |
| 3.0.2       | 15-07-2024                     | Deprecating data connector                          |  
| 3.0.1       | 12-09-2023                     | Addition of new Illumio Core AMA **Data Connector** |  
| 3.0.0       | 24-07-2023                     | Corrected the links in the solution.  	             |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

