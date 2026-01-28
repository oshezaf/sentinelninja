# ⚠️ ForgeRock Common Audit for CEF

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ForgeRock_Vert_Color_Logo_RGB_R_med.svg" alt="ForgeRock Common Audit for CEF Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [ForgeRock Common Audit](https://www.forgerock.com/platform/common-services/common-audit) for CEF solution for Microsoft Sentinel enables you to ingest data from the [ForgeRock Identity Platform](https://www.forgerock.com/identity-and-access-management-platform) via its common auditing framework. This enables you to extract and aggregate log data across the entire platform with common audit (CAUD) event handlers and unique IDs so that it can be tracked holistically, leveraging audit logging and reporting capabilities for integration with Microsoft Sentinel.

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation. 

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. Legacy connector uses the Log Analytics agent which is about to be deprecated by **Aug 31, 2024,** and thus should only be installed where AMA is not supported. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Forgerock |
| **Support Tier** | Partner |
| **Support Link** | [https://www.forgerock.com/support](https://www.forgerock.com/support) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | ForgeRock - isv@email.com |
| **First Published** | 2022-05-04 |
| **Solution Folder** | [ForgeRock Common Audit for CEF](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ForgeRock%20Common%20Audit%20for%20CEF) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] ForgeRock Identity Platform](../connectors/forgerock.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] ForgeRock Identity Platform](../connectors/forgerock.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ForgeRockParser](../content/forgerock-common-audit-for-cef-forgerockparser-78809fa1-a294-44c2-bab1-ba38fae0f0d0-9dba9bf7.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.0       | 01-07-2024                     |  Deprecating data connectors                                          |
| 2.0.0       | 06-05-2023                     |  Initial Solution Release                                          |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

