# Cyera Sentinel Integration

*Solution: CyeraDSPM*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cyera_icon.svg" alt="CyeraDSPM Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cyera Inc |
| **Support Tier** | Partner |
| **Support Link** | [https://support.cyera.io](https://support.cyera.io) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Cyera DSPM OCTO Team - support@cyera.io |
| **First Published** | 2026-02-27 |
| **Last Updated** | 2026-03-10 |
| **Solution Folder** | [CyeraDSPM](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyeraDSPM) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/cyera1658314682323.azure-sentinel-solution-cyeradspm-v3) · Popularity: ⚪ Very Low (0%) |

The [Cyera DSPM](https://api.cyera.io/) data connector allows you to connect to your Cyera's DSPM instance and ingesting Classifications, Assets, Issues, and Identity Definitions into Microsoft Sentinel. The data connector is built on Microsoft Sentinel's Codeless Connector Platform and uses the Cyera's API to fetch Cyera's [DSPM Telemetry](https://www.cyera.com/) once recieced can be correlated with security events creating custom columns so that queries don't need to parse it again, thus resulting in better performance.

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cyera DSPM Microsoft Sentinel Data Connector](../connectors/cyeradspmccf.md)

## Tables Used

This solution uses **5 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CyeraAssets_CL`](../tables/cyeraassets-cl.md) | [Cyera DSPM Microsoft Sentinel Data Connector](../connectors/cyeradspmccf.md) | - |
| [`CyeraAssets_MS_CL`](../tables/cyeraassets-ms-cl.md) | [Cyera DSPM Microsoft Sentinel Data Connector](../connectors/cyeradspmccf.md) | - |
| [`CyeraClassifications_CL`](../tables/cyeraclassifications-cl.md) | [Cyera DSPM Microsoft Sentinel Data Connector](../connectors/cyeradspmccf.md) | - |
| [`CyeraIdentities_CL`](../tables/cyeraidentities-cl.md) | [Cyera DSPM Microsoft Sentinel Data Connector](../connectors/cyeradspmccf.md) | - |
| [`CyeraIssues_CL`](../tables/cyeraissues-cl.md) | [Cyera DSPM Microsoft Sentinel Data Connector](../connectors/cyeradspmccf.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                    |
|-------------|--------------------------------|-------------------------------------------------------|
| 3.0.0       | 05-03-2026                     | Initial Creation of **CCF Data Connector**. </br> Updated polling frequency to reduce duplicates, modified ASIM schema for the `CyeraAssets_MS_CL` table, and simplified deployment with API keys added via the **Data Connector**.|

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

