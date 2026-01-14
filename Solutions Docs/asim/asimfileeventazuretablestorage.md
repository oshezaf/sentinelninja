# <img src="../images/asim-badge.png" alt="ASIM" height="32"> File Activity ASIM parser for Azure Table Storage

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimFileEventAzureTableStorage` |
| **Built-in Parser** | `_ASim_FileEvent_AzureTableStorage` |
| **Schema** | FileEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Azure Table Storage |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Nov 03, 2023 |
| **Unifying Parser** | [ASimFileEvent](asimfileevent.md) |
| **Source File** | [Parsers\ASimFileEvent\Parsers\ASimFileEventAzureTableStorage.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimFileEvent/Parsers/ASimFileEventAzureTableStorage.yaml) |

## Description

This ASIM parser supports normalizing Azure Table Storage events, stored in the StorageTableLogs table, to the ASIM file activity schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [StorageTableLogs](../tables/storagetablelogs.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM File Schema](https://aka.ms/ASimFileEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Storage Analytics log format](https://docs.microsoft.comrest/api/storageservices/storage-analytics-log-format)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

