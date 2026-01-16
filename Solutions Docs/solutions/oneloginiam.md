# OneLoginIAM

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="OneLoginIAM Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [OneLogin](https://www.onelogin.com/) solution for Microsoft Sentinel provides the capability to ingest common OneLogin IAM Platform events into Microsoft Sentinel.
  
  **Underlying Microsoft Technologies used:** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

 • [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-08-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OneLoginIAM](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OneLoginIAM) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [[DEPRECATED] OneLogin IAM Platform](../connectors/onelogin.md) ⚠️
- [OneLogin IAM Platform (via Codeless Connector Framework)](../connectors/oneloginiamlogsccpdefinition.md)

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`OneLoginEventsV2_CL`](../tables/onelogineventsv2-cl.md) | [OneLogin IAM Platform (via Codeless Connector Framework)](../connectors/oneloginiamlogsccpdefinition.md), [[DEPRECATED] OneLogin IAM Platform](../connectors/onelogin.md) | - |
| [`OneLoginUsersV2_CL`](../tables/oneloginusersv2-cl.md) | [OneLogin IAM Platform (via Codeless Connector Framework)](../connectors/oneloginiamlogsccpdefinition.md), [[DEPRECATED] OneLogin IAM Platform](../connectors/onelogin.md) | - |
| [`OneLogin_CL`](../tables/onelogin-cl.md) | [[DEPRECATED] OneLogin IAM Platform](../connectors/onelogin.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [OneLogin](../content/oneloginiam-onelogin-cd80d5ce-6c89-4d23-9f98-77066a599982-1e3e4c94.md) | - | [`OneLoginEventsV2_CL`](../tables/onelogineventsv2-cl.md) *(read)*<br>[`OneLoginUsersV2_CL`](../tables/oneloginusersv2-cl.md) *(read)*<br>[`OneLogin_CL`](../tables/onelogin-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.3       | 29-07-2025                     |  Removed Deprecated **Data Connector**. | 
| 3.0.2       | 30-06-2025                     |  OneLoginIAM **CCF Data Connector** moving to GA.  		                |
| 3.0.1       | 10-04-2025                     |  Migrated the **Function app** connector to **CCF Data Connector** and Updated **Parser**.<br/>Added Preview tag to **CCF Data Connector**.   		                |
| 3.0.0       | 25-09-2023                     |  Modified **Parser** for query optimization. 		                |
|             |                                |  Manual deployment instructions updated for **Data Connector**.     |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

