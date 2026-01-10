# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Registry Event ASIM Parser for VMware Carbon Black Cloud

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimRegistryEventVMwareCarbonBlackCloud` |
| **Built-in Parser** | `_Im_RegistryEvent_VMwareCarbonBlackCloud` |
| **Schema** | RegistryEvent |
| **Schema Version** | 0.1.2 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | VMware Carbon Black Cloud |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Oct 10, 2023 |
| **Unifying Parser** | [imRegistry](imregistry.md) |
| **Source File** | [Parsers\ASimRegistryEvent\Parsers\vimRegistryEventVMwareCarbonBlackCloud.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimRegistryEvent/Parsers/vimRegistryEventVMwareCarbonBlackCloud.yaml) |

## Description

This ASIM parser supports normalizing VMware Carbon Black Cloud logs to the ASIM Registry Event normalized schema. VMware Carbon Black Cloud events are captured through VMware Carbon Black Cloud data connector which ingests Carbon Black Audit, Notification and Event data into Microsoft Sentinel through the REST API.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `eventtype_in` | dynamic | dynamic([]) |
| `actorusername_has_any` | dynamic | dynamic([]) |
| `registrykey_has_any` | dynamic | dynamic([]) |
| `registryvalue_has_any` | dynamic | dynamic([]) |
| `registryvaluedata_has_any` | dynamic | dynamic([]) |
| `dvchostname_has_any` | dynamic | dynamic([]) |
| `disabled` | bool | False |

## References

- [ASIM Registry Schema](https://aka.ms/ASimRegistryEventDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [VMware Carbon Black Cloud documentation](https://developer.carbonblack.com/reference/carbon-black-cloud/ https://developer.carbonblack.com/reference/cb-threathunter/latest/event-search-fields/)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

