# <img src="../images/asim-badge.png" alt="ASIM" height="32"> File Activity ASIM filtering parser for Azure Queue Storage

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimFileEventAzureQueueStorage` |
| **Built-in Parser** | `_Im_FileEvent_AzureQueueStorage` |
| **Schema** | FileEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Azure Queue Storage |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Nov 03, 2023 |
| **Unifying Parser** | [imFileEvent](imfileevent.md) |
| **Source File** | [Parsers\ASimFileEvent\Parsers\vimFileEventAzureQueueStorage.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimFileEvent/Parsers/vimFileEventAzureQueueStorage.yaml) |

## Description

This ASIM parser supports normalizing Azure Queue Storage events, stored in the StorageQueueLogs table, to the ASIM file activity schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [StorageQueueLogs](../tables/storagequeuelogs.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `eventtype_in` | dynamic | dynamic([]) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `actorusername_has_any` | dynamic | dynamic([]) |
| `targetfilepath_has_any` | dynamic | dynamic([]) |
| `srcfilepath_has_any` | dynamic | dynamic([]) |
| `hashes_has_any` | dynamic | dynamic([]) |
| `dvchostname_has_any` | dynamic | dynamic([]) |
| `disabled` | bool | False |

## References

- [ASIM File Schema](https://aka.ms/ASimFileEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Storage Analytics log format](https://docs.microsoft.comrest/api/storageservices/storage-analytics-log-format)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

