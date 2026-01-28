# MISP2Sentinel

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/misp-logo.svg" alt="MISP2Sentinel Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The MISP2Sentinel solution allows you to automatically push threat indicators from [MISP](https://www.misp-project.org/) to Microsoft Sentinel via the Upload Indicators REST API.



## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Community |
| **Support Tier** | Community |
| **Support Link** | [https://github.com/cudeso/misp2sentinel](https://github.com/cudeso/misp2sentinel) |
| **Categories** | domains,verticals |
| **Version** | 3.0.0 |
| **Author** | MISP project & cudeso.be - info@cudeso.be |
| **First Published** | 2023-07-29 |
| **Last Updated** | 2023-07-29 |
| **Solution Folder** | [MISP2Sentinel](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MISP2Sentinel) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [MISP2Sentinel](../connectors/misp2sentinelconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | [MISP2Sentinel](../connectors/misp2sentinelconnector.md) | - |

## Additional Documentation

> 📄 *Source: [MISP2Sentinel/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MISP2Sentinel/README.md)*

The [MISP](https://www.misp-project.org/) to Microsoft Sentinel integration allows you to upload indicators from MISP to Microsoft Sentinel.

Code and documentation is at [https://github.com/cudeso/misp2sentinel](https://github.com/cudeso/misp2sentinel).

Release notes and versions are at [https://github.com/cudeso/misp2sentinel](https://github.com/cudeso/misp2sentinel).

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 29-07-2023                     | **Data Connector** Initial version of MISP2Sentinel with support for Upload Indicators API

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

