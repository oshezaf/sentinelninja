# Azure Storage

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/StorageAccount.svg" alt="Azure Storage Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Azure Storage account](https://docs.microsoft.com/azure/storage/common/storage-account-overview) Solution for Microsoft Sentinel enables you to stream Azure Storage accounts diagnostics logs into your Microsoft Sentinel workspace, allowing you to continuously monitor activity in all your instances, and detect malicious activity in your organization. 

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
| **First Published** | 2022-05-12 |
| **Solution Folder** | [Azure Storage](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Storage) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Azure Storage Account](../connectors/azurestorageaccount.md)

## Tables Used

This solution uses **5 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AzureMetrics`](../tables/azuremetrics.md) | [Azure Storage Account](../connectors/azurestorageaccount.md) | - |
| [`StorageBlobLogs`](../tables/storagebloblogs.md) | [Azure Storage Account](../connectors/azurestorageaccount.md) | - |
| [`StorageFileLogs`](../tables/storagefilelogs.md) | [Azure Storage Account](../connectors/azurestorageaccount.md) | - |
| [`StorageQueueLogs`](../tables/storagequeuelogs.md) | [Azure Storage Account](../connectors/azurestorageaccount.md) | - |
| [`StorageTableLogs`](../tables/storagetablelogs.md) | [Azure Storage Account](../connectors/azurestorageaccount.md) | - |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

