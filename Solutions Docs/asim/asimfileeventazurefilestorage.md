# <img src="../images/asim-badge.png" alt="ASIM" height="32"> File Activity ASIM parser for Azure File Storage

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimFileEventAzureFileStorage` |
| **Built-in Parser** | `_ASim_FileEvent_AzureFileStorage` |
| **Schema** | FileEvent |
| **Schema Version** | 0.2.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Azure File Storage |
| **Parser Version** | 0.1.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimFileEvent/CHANGELOG/ASimFileEventAzureFileStorage.md)) |
| **Last Updated** | Nov 01, 2023 |
| **Unifying Parser** | [ASimFileEvent](asimfileevent.md) |
| **Source File** | [Parsers\ASimFileEvent\Parsers\ASimFileEventAzureFileStorage.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimFileEvent/Parsers/ASimFileEventAzureFileStorage.yaml) |

## Description

This ASIM parser supports normalizing Azure File Storage events, stored in the StorageFileLogs table, to the ASIM file activity schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`StorageFileLogs`](../tables/storagefilelogs.md) | ✓ | ✗ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [AzureStorageAccount](../connectors/azurestorageaccount.md) | [Azure Storage](../solutions/azure-storage.md) |

**Solutions:** [Azure Storage](../solutions/azure-storage.md)

## References

- [ASIM File Schema](https://aka.ms/ASimFileEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Storage Analytics log format](https://docs.microsoft.comrest/api/storageservices/storage-analytics-log-format)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to ASIM Index](asim-index.md)

