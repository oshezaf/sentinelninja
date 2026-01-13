# ⚠️ CyeraDSPM

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cyera_icon.svg" alt="CyeraDSPM Logo" width="75" height="75">

The [Cyera DSPM](https://api.cyera.io/) data connector allows you to connect to your Cyera's DSPM instance and ingesting Classifications, Assets, Issues, and Identity Definitions into Microsoft Sentinel. The data connector is built on Microsoft Sentinel's Codeless Connector Platform and uses the Cyera's API to fetch Cyera's [DSPM Telemetry](https://www.cyera.com/) once recieced can be correlated with security events creating custom columns so that queries don't need to parse it again, thus resulting in better performance.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cyera Inc |
| **Support Tier** | Partner |
| **Support Link** | [https://support.cyera.io](https://support.cyera.io) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Cyera DSPM OCTO Team - support@cyera.io |
| **First Published** | 2025-10-15 |
| **Last Updated** | 2025-10-29 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyeraDSPM](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyeraDSPM) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Cyera DSPM Microsoft Sentinel Data Connector](../connectors/cyeradspmccf.md)
- [Cyera DSPM Azure Functions Microsoft Sentinel Data Connector](../connectors/cyerafunctionsconnector.md)

## Tables Used

This solution uses **5 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CyeraAssets_CL`](../tables/cyeraassets-cl.md) | [Cyera DSPM Azure Functions Microsoft Sentinel Data Connector](../connectors/cyerafunctionsconnector.md), [Cyera DSPM Microsoft Sentinel Data Connector](../connectors/cyeradspmccf.md) | - |
| [`CyeraAssets_MS_CL`](../tables/cyeraassets-ms-cl.md) | [Cyera DSPM Azure Functions Microsoft Sentinel Data Connector](../connectors/cyerafunctionsconnector.md), [Cyera DSPM Microsoft Sentinel Data Connector](../connectors/cyeradspmccf.md) | - |
| [`CyeraClassifications_CL`](../tables/cyeraclassifications-cl.md) | [Cyera DSPM Azure Functions Microsoft Sentinel Data Connector](../connectors/cyerafunctionsconnector.md), [Cyera DSPM Microsoft Sentinel Data Connector](../connectors/cyeradspmccf.md) | - |
| [`CyeraIdentities_CL`](../tables/cyeraidentities-cl.md) | [Cyera DSPM Azure Functions Microsoft Sentinel Data Connector](../connectors/cyerafunctionsconnector.md), [Cyera DSPM Microsoft Sentinel Data Connector](../connectors/cyeradspmccf.md) | - |
| [`CyeraIssues_CL`](../tables/cyeraissues-cl.md) | [Cyera DSPM Azure Functions Microsoft Sentinel Data Connector](../connectors/cyerafunctionsconnector.md), [Cyera DSPM Microsoft Sentinel Data Connector](../connectors/cyeradspmccf.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                    |
|-------------|--------------------------------|-------------------------------------------------------|
| 3.0.0       | 29-10-2025                     | Initial Creation of CCF and Azure Functions Connector |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

