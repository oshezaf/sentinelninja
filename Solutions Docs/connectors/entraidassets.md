# Microsoft Entra ID Assets

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/refs/heads/master/Logos/AADCloudSync.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `EntraIDAssets` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Microsoft Entra ID Assets](../solutions/microsoft-entra-id-assets.md) |
| **Collection Method** | Native |
| **Connector Definition Files** | [EntraIDAssets_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Entra%20ID%20Assets/Data%20Connectors/EntraIDAssets_DataConnectorDefinition.json) |

Entra ID assets data connector gives richer insights into activity data by supplementing details with asset information. Data from this connector is used to build data risk graphs in Purview. If you have enabled those graphs, deactivating this Connector will prevent the graphs from being built. [Learn about the data risk graph.](https://go.microsoft.com/fwlink/?linkid=2320023)

## Permissions

**Tenant Permissions:**
Requires GlobalAdmin, SecurityAdmin on the workspace's tenant

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

1. Connect Microsoft Entra ID assets to ingest into Microsoft Sentinel Lake.
  - Applications
  - Group Memberships
  - Groups
  - Members
  - Organizations
  - Service Principals
  - Users

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

