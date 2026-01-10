# Azure Network Security Groups

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/AzureNetworkSecurityGroups.svg" alt="Azure Network Security Groups Logo" width="75" height="75">

The [Network Security Group](https://docs.microsoft.com/azure/virtual-network/network-security-groups-overview) solution enables you to stream and ingest diagnostic logs from your Azure NSG instances for Security Monitoring in to Microsoft Sentinel using Resource Diagnostic settings. 

**Underlying Microsoft Technologies used:**

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

 a. [Azure Monitor Resource Diagnostics](https://docs.microsoft.com/azure/azure-monitor/essentials/diagnostic-settings)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 2.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Network%20Security%20Groups](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Network%20Security%20Groups) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Network Security Groups](../connectors/azurensg.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | [Network Security Groups](../connectors/azurensg.md) | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

