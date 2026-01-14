# Watchguard Firebox

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/WatchGuard_Logo-SVG_Format.svg" alt="Watchguard Firebox Logo" width="75" height="75">

The [WatchGuard](https://www.watchguard.com/) Firebox Microsoft Sentinel Solutions enables delivery of Watchguard Firewall log events into Microsoft Sentinel.

This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector. Legacy connector uses the Log Analytics agent which is about to be deprecated by Aug 31, 2024. Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | WatchGuard |
| **Support Tier** | Partner |
| **Support Link** | [https://www.watchguard.com/wgrd-support/contact-support](https://www.watchguard.com/wgrd-support/contact-support) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | WatchGuard |
| **First Published** | 2022-05-06 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Watchguard%20Firebox](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Watchguard%20Firebox) |
| **Dependencies** | [Syslog](syslog.md) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] WatchGuard Firebox](../connectors/watchguardfirebox.md)

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [WatchGuardFirebox](../content/watchguard-firebox-watchguardfirebox-b9b4ad6b-a7bf-4555-a56a-c37e382730f8-5bfbb367.md) ⚠️ | - | [`Syslog`](../tables/syslog.md) *(read)* |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.0       | 18-07-2024                     |  Deprecating data connectors         |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

