# Exabeam Advanced Analytics

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/exabeam.svg" alt="Exabeam Advanced Analytics Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Exabeam](https://www.exabeam.com/) Advanced Analytics data connector provides the capability to ingest [Exabeam Advanced Analytics](https://www.exabeam.com/ueba/advanced-analytics-and-mitre-detect-and-stop-threats/) events into Microsoft Sentinel. Refer to [Exabeam Advanced Analytics documentation](https://docs.exabeam.com/) for more information.

 This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog solution will be installed as part of this solution installation.

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector.Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Exabeam%20Advanced%20Analytics](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Exabeam%20Advanced%20Analytics) |
| **Dependencies** | [Syslog](syslog.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Exabeam Advanced Analytics](../connectors/exabeam.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ExabeamEvent](../content/exabeam-advanced-analytics-exabeamevent-5447ecc5-6e87-4812-a5a1-8e0d366597c2-65295d63.md) | - | [`Syslog`](../tables/syslog.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                 |
|-------------|-------------------------------|-----------------------------------------------------|
| 3.0.2 	  | 02-01-2025 					  | Removed Deprecated **Data connector** 				|
| 3.0.1       | 27-07-2024                    | Deprecating data connectors                         |
| 3.0.0       | 24-07-2023                    | Corrected the links in the solution.		        |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

