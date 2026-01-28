# Delinea Secret Server

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/DelineaLogo.svg" alt="Delinea Secret Server Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Delinea](https://delinea.com/) Secret Server Microsoft Sentinel Data Solution enables delivery of Delinea Secret Server log messages to your Microsoft Sentinel Workspace.

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors are about to be deprecated by **Aug 31, 2024.**

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Delinea |
| **Support Tier** | Partner |
| **Support Link** | [https://delinea.com/support/](https://delinea.com/support/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Delinea |
| **First Published** | 2022-05-06 |
| **Solution Folder** | [Delinea Secret Server](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Delinea%20Secret%20Server) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] Delinea Secret Server via AMA](../connectors/delineasecretserverama.md)
- [[Deprecated] Delinea Secret Server via Legacy Agent](../connectors/delineasecretserver-cef.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Delinea Secret Server via AMA](../connectors/delineasecretserverama.md), [[Deprecated] Delinea Secret Server via Legacy Agent](../connectors/delineasecretserver-cef.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [DelineaWorkbook](../content/delinea-secret-server-delineaworkbook-819c816c.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.1       | 11-07-2024                     |    Deprecating data connectors                                     |
| 3.0.0       | 20-09-2023                     |	Addition of new Delinea Secret Server AMA **Data Connector**    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

