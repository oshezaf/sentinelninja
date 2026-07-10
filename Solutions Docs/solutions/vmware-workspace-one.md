# VMware Workspace ONE

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="VMware Workspace ONE Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | Security - Threat Protection |
| **Source Vendor** | VMware *(basis: title)* |
| **Source Product** | Workspace ONE |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2026-05-07 |
| **Last Updated** | 2026-06-01 |
| **Solution Folder** | [VMware Workspace ONE](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20Workspace%20ONE) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-vmware-workspace-one) · Popularity: 🔵 Medium (65%) |

The VMware Workspace ONE solution for Microsoft Sentinel enables ingestion of enrolled device inventory and installed application details from Workspace ONE UEM into Microsoft Sentinel. For more information about Workspace ONE UEM and its APIs, see the official Omnissa documentation: https://docs.omnissa.com/bundle/Workspace-ONE-UEM-API-programming-guide

Underlying Microsoft Technologies used:
- Microsoft Sentinel
- Azure Monitor Logs
- Data Collection Rules (DCR)
- Codeless Connector Framework (CCF)

Dependencies:
- A valid VMware Workspace ONE UEM tenant
- Workspace ONE API credentials
- API access to device inventory and installed application endpoints

## Data Connectors

This solution provides **1 data connector(s)**:

- [VMware Workspace ONE (via Codeless Connector Framework)](../connectors/vmwareworkspaceoneconnector.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`VMwareWorkspaceOneDeviceApps_CL`](../tables/vmwareworkspaceonedeviceapps-cl.md) | [VMware Workspace ONE (via Codeless Connector Framework)](../connectors/vmwareworkspaceoneconnector.md) | - |
| [`VMwareWorkspaceOneDevices_CL`](../tables/vmwareworkspaceonedevices-cl.md) | [VMware Workspace ONE (via Codeless Connector Framework)](../connectors/vmwareworkspaceoneconnector.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|---|---|---|
| 3.0.0 | 18-05-2026 | First version of the VMware Workspace ONE CCF Connector. <br/> Added Workspace ONE device inventory ingestion support. <br/> Added installed application ingestion support using CCF pollers, DCR, and parsers. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

