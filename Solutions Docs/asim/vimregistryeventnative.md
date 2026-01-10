# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Registry Event ASIM filtering  parser for Microsoft Sentinel native Registry Event table

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimRegistryEventNative` |
| **Built-in Parser** | `_Im_RegistryEvent_Native` |
| **Schema** | RegistryEvent |
| **Schema Version** | 0.1.2 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Native |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Nov 22 2023 |
| **Unifying Parser** | [imRegistry](imregistry.md) |
| **Source File** | [Parsers\ASimRegistryEvent\Parsers\vimRegistryEventNative.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimRegistryEvent/Parsers/vimRegistryEventNative.yaml) |

## Description

This ASIM parser supports normalizing the native Registry Event table (ASimRegistryEventLogs) to the ASIM Registry Event normalized schema. While the native table is ASIM compliant, the parser is needed to add capabilities, such as aliases, available only at query time.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [ASimRegistryEventLogs](../tables/asimregistryeventlogs.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `eventtype_in` | dynamic | dynamic([]) |
| `actorusername_has_any` | dynamic | dynamic([]) |
| `registrykey_has_any` | dynamic | dynamic([]) |
| `registryvalue_has_any` | dynamic | dynamic([]) |
| `registrydata_has_any` | dynamic | dynamic([]) |
| `dvchostname_has_any` | dynamic | dynamic([]) |
| `disabled` | bool | False |

## References

- [ASIM Registry Schema](https://aka.ms/ASimRegistryEventDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

