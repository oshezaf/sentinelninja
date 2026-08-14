# Fortinet FortiNDR Cloud for Microsoft Sentinel

*Solution: Fortinet FortiNDR Cloud*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/fortinet_logo.svg" alt="Fortinet FortiNDR Cloud Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Fortinet |
| **Support Tier** | Partner |
| **Support Link** | [https://www.fortinet.com/support](https://www.fortinet.com/support) |
| **Categories** | Security - Automation (SOAR) |
| **Version** | 3.1.0 |
| **Author** | Fortinet - cs@fortinet.com |
| **First Published** | 2024-01-15 |
| **Last Updated** | 2026-07-01 |
| **Solution Folder** | [Fortinet FortiNDR Cloud](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiNDR%20Cloud) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/fortinet.fortindrcloud-sentinel) · Popularity: 🟡 Low (33%) |

The [Fortinet FortiNDR Cloud](https://docs.fortinet.com/product/fortindr-cloud) solution for Microsoft Sentinel provides the capability to ingest Fortinet FortiNDR Cloud events into Microsoft Sentinel. For questions about Fortinet FortiNDR Cloud, please contact Fortinet at [fnc-sentinel@fortinet.com](mailto:fnc-sentinel@fortinet.com).

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Fortinet FortiNDR Cloud](../connectors/fortinetfortindrclouddataconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`FortinetFortiNdrCloudRaw_CL`](../tables/fortinetfortindrcloudraw-cl.md) | [Fortinet FortiNDR Cloud](../connectors/fortinetfortindrclouddataconnector.md) | Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |
| Parsers | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [FortinetFortiNdrCloudWorkbook](../content/fortinet-fortindr-cloud-fortinetfortindrcloudworkbook-9c938d85.md) | [`FortinetFortiNdrCloudRaw_CL`](../tables/fortinetfortindrcloudraw-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Fortinet_FortiNDR_Cloud](../parsers/fortinet-fortindr-cloud.md) | - | [`FortinetFortiNdrCloudRaw_CL`](../tables/fortinetfortindrcloudraw-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                            |
|-------------|--------------------------------|-------------------------------------------------------------------------------|
| 3.1.0       | 26-05-2026                     | Updated to use LogIngestion instead of the deprecated HTTP Data Collector API |
| 3.0.3       | 05-05-2025                     | Use Flex Consumption plan to hold Data Connector                              |
| 3.0.2       | 30-09-2024                     | Show mitre attack ids and link to detection rule page                         |
| 3.0.1       | 31-05-2024                     | Replace Metastream with FortiNDR Cloud API                                    |
| 3.0.0       | 29-02-2024                     | Initial Solution Release                                                      |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

