# GravityZone Solution for Sentinel

*Solution: GravityZone*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Bitdefender.svg" alt="GravityZone Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Bitdefender SRL |
| **Support Tier** | Partner |
| **Support Link** | [https://bitdefender.com](https://bitdefender.com) |
| **Categories** | Security - Information Protection,Security - Cloud Security,Security - Threat Protection |
| **Version** | 3.0.1 |
| **Author** | Bitdefender SRL - support@bitdefender.com |
| **First Published** | 2026-04-21 |
| **Last Updated** | 2026-05-29 |
| **Solution Folder** | [GravityZone](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GravityZone) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/bitdefendersrl1662990682574.gravityzone_sentinel_solution) · Popularity: 🟢 High (82%) |

The **Bitdefender GravityZone Solution for Microsoft Sentinel** connects your GravityZone environment to Microsoft Sentinel through the **Event Push Service API**. Once deployed, it streams all GravityZone event types into Microsoft Sentinel, storing them as logs and automatically generating incidents for selected categories.

To deploy, complete the fields below and select **Review + create**:
 - **Subscription**: The Azure subscription where you want to deploy the solution.
 - **Resource group**: Select an existing resource group or create a new one to organize your Microsoft Sentinel resources.
 - **Workspace**: The Microsoft Sentinel workspace that will receive GravityZone data. The workspace needs to be onboarded into Microsoft Sentinel beforehand.

After deployment, follow this step-by-step article to complete the configuration and start event ingestion.

[Customers](https://www.bitdefender.com/business/support/en/77209-1455218-integrate-gravityzone-with-azure-sentinel.html) | [Partners](https://www.bitdefender.com/business/support/en/77211-1455218-integrate-gravityzone-with-azure-sentinel.html)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [GravityZone Data Connector](../connectors/gravityzonedataconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GzSecurityEvents_CL`](../tables/gzsecurityevents-cl.md) | [GravityZone Data Connector](../connectors/gravityzonedataconnector.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [NRT GravityZone Incident Alerts](../content/gravityzone-nrt-gravityzone-incident-alerts-73c803aa-1188-45dd-8379-62a3319d3d9f-c35dc426.md) | Medium | LateralMovement | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**           |
|-------------|--------------------------------|------------------------------|
| 3.0.1       | 28-04-2026                     | Added analytic rule template |
| 3.0.0       | 21-04-2026                     | Initial Solution Release     |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

