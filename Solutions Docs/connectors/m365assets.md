# ⚠️ Microsoft 365 Assets (formerly, Office 365)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/office365_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `M365Assets` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Microsoft 365 Assets](../solutions/microsoft-365-assets.md) |
| **Collection Method** | Native |
| **Connector Definition Files** | [M365Asset_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20365%20Assets/Data%20Connectors/M365Asset_DataConnectorDefinition.json) |

The Microsoft 365 (formerly, Office 365) asset connector gives richer insights into ongoing user activities in Microsoft Sentinel by supplementing activity logs with details such as owners, permissions, retention policies and sensitivity labels.



Data from this connector is used to build data risk graphs in Purview. If you've enabled those graphs, deactivating this connector will prevent the graphs from being built. [Learn about the data risk graph](https://go.microsoft.com/fwlink/?linkid=2320023).



This connector is in limited private preview.

## Permissions

**Custom Permissions:**
- **OfficeActivity table availability**: Enable the OfficeActivity table in Log Analytics.

**Tenant Permissions:**
Requires GlobalAdmin, SecurityAdmin on the workspace's tenant

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

1.Connect Microsoft 365 assets (formerly, Office 365) to Microsoft Sentinel.
  - SharePoint and OneDrive

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Connectors Index](../connectors-index.md)

