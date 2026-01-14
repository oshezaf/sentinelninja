# ⚠️ Onapsis Platform

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/onapsis_logo.svg" alt="Onapsis Platform Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Onapsis Platform](https://onapsis.com/) solution for Microsoft Sentinel enables you to ingest alarms triggered in the Onapsis Platform into Microsoft Sentinel in real-time. This gives you the ability to monitor the activity on your SAP systems, identify incidents and respond to them quickly.

This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation. 

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. Legacy connector uses the Log Analytics agent which is about to be deprecated by **Aug 31, 2024,** and thus should only be installed where AMA is not supported. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Onapsis |
| **Support Tier** | Partner |
| **Support Link** | [https://onapsis.com/company/contact-us](https://onapsis.com/company/contact-us) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Onapsis |
| **First Published** | 2022-05-11 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Onapsis%20Platform](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Onapsis%20Platform) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Onapsis Platform](../connectors/onapsisplatform.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Onapsis Platform](../connectors/onapsisplatform.md) | Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |
| Parsers | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [OnapsisAlarmsOverview](../content/onapsis-platform-onapsisalarmsoverview-d3ec56a6.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [OnapsisLookup](../content/onapsis-platform-onapsislookup-ef14e847-84c7-4f8a-8bb4-a26ec3b09af8-1c959e87.md) | - | - |

## Release Notes

| **Version**   | **Date Modified**              | **Change History**                      |
|---------------|--------------------------------|-----------------------------------------|
| 3.0.0         | 28-06-2024                     | Deprecating data connectors  |
| 2.0.1         | 01-02-2023                     | Updated CreateUi file |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

