# <img src="../images/asim-badge.png" alt="ASIM" height="32"> User Management ASIM filtering parser

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imUserManagement` |
| **Built-in Parser** | `_Im_UserManagement` |
| **Schema** | UserManagement |
| **Schema Version** | 0.1 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.3 |
| **Last Updated** | May 30, 2024 |
| **Source File** | [Parsers\ASimUserManagement\Parsers\imUserManagement.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimUserManagement/Parsers/imUserManagement.yaml) |

## Description

This ASIM parser supports normalizing User Management logs from all supported sources to the ASIM User Management normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
|  | [_Im_UserManagement_CiscoISE](im-usermanagement-ciscoise.md) |
|  | [_Im_UserManagement_Empty](im-usermanagement-empty.md) |
|  | [_Im_UserManagement_LinuxAuthpriv](im-usermanagement-linuxauthpriv.md) |
|  | [_Im_UserManagement_MicrosoftSecurityEvent](im-usermanagement-microsoftsecurityevent.md) |
|  | [_Im_UserManagement_MicrosoftWindowsEvent](im-usermanagement-microsoftwindowsevent.md) |
|  | [_Im_UserManagement_Native](im-usermanagement-native.md) |
|  | [_Im_UserManagement_SentinelOne](im-usermanagement-sentinelone.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `targetusername_has_any` | dynamic | dynamic([]) |
| `actorusername_has_any` | dynamic | dynamic([]) |
| `eventtype_in` | dynamic | dynamic([]) |
| `pack` | bool | False |

## References

- [ASIM UserManagement Schema](https://aka.ms/ASimUserManagementDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

