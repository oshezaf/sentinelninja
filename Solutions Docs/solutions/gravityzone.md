# ⚠️ GravityZone

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Bitdefender.svg" alt="GravityZone Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Bitdefender SRL |
| **Support Tier** | Partner |
| **Support Link** | [https://bitdefender.com](https://bitdefender.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Bitdefender SRL - support@bitdefender.com |
| **First Published** | 2026-04-21 |
| **Solution Folder** | [GravityZone](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GravityZone) |

The **Bitdefender GravityZone Solution for Microsoft Sentinel** connects your GravityZone environment to Microsoft Sentinel through the **Event Push Service API**. Once deployed, it streams all GravityZone event types into Microsoft Sentinel and stores them as logs for monitoring, investigation, and analysis.

To deploy, complete the fields below and select **Review + create**:
 - **Subscription**: The Azure subscription where you want to deploy the solution.
 - **Resource group**: Select an existing resource group or create a new one to organize your Microsoft Sentinel resources.
 - **Workspace**: The Microsoft Sentinel workspace that will receive GravityZone data. The workspace needs to be onboarded into Microsoft Sentinel beforehand.

After deployment, follow the setup steps in this KB article to complete the configuration and start event ingestion.

## Data Connectors

This solution provides **1 data connector(s)**:

- [GravityZone Data Connector](../connectors/gravityzonedataconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GzSecurityEvents_CL`](../tables/gzsecurityevents-cl.md) | [GravityZone Data Connector](../connectors/gravityzonedataconnector.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                 |
|-------------|--------------------------------|----------------------------------------------------|
| 3.0.0       | 21-04-2026                     | Initial Solution Release                           |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

