# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Registry Event ASIM parser for Microsoft Windows Events (registry creation event)

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimRegistryEventMicrosoftWindowsEvent` |
| **Built-in Parser** | `_ASim_RegistryEvent_MicrosoftWindowsEvent` |
| **Schema** | RegistryEvent |
| **Schema Version** | 0.1.2 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Security Events |
| **Parser Version** | 0.2.1 |
| **Last Updated** | Jun 18, 2024 |
| **Unifying Parser** | [ASimRegistry](asimregistry.md) |
| **Source File** | [Parsers\ASimRegistryEvent\Parsers\ASimRegistryEventMicrosoftWindowsEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimRegistryEvent/Parsers/ASimRegistryEventMicrosoftWindowsEvent.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Windows events (event numbers 4657 and 4663), logs ingested in 'WindowsEvent' table to the ASIM Registry Event normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [ASIM_GetAccountType](../tables/asim-getaccounttype.md) |
| [ASIM_ParseWindowsEvents](../tables/asim-parsewindowsevents.md) |
| [WindowsEvent](../tables/windowsevent.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Registry Schema](https://aka.ms/ASimRegistryEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Reference for access rights](https://learn.microsoft.com/en-us/windows/win32/sysinfo/registry-key-security-and-access-rights)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

