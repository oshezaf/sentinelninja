# <img src="../images/asim-badge.png" alt="ASIM" height="32"> User Management ASIM filtering parser for Cisco ISE

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimUserManagementCiscoISE` |
| **Built-in Parser** | `_Im_UserManagement_CiscoISE` |
| **Schema** | UserManagement |
| **Schema Version** | 0.1.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Cisco ISE |
| **Parser Version** | 0.1.2 |
| **Last Updated** | Mar 06, 2024 |
| **Unifying Parser** | [imUserManagement](imusermanagement.md) |
| **Source File** | [Parsers\ASimUserManagement\Parsers\vimUserManagementCiscoISE.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimUserManagement/Parsers/vimUserManagementCiscoISE.yaml) |

## Description

This ASIM parser supports normalizing user management activity in the Cisco ISE events to the ASIM User Management schema.

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `actorusername_has_any` | dynamic | dynamic([]) |
| `targetusername_has_any` | dynamic | dynamic([]) |
| `eventtype_in` | dynamic | dynamic([]) |
| `disabled` | bool | False |

## References

- [ASIM User Management Schema](https://aka.ms/ASimUserManagementDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [Cisco ISE Security Events](https://www.cisco.com/c/en/us/td/docs/security/ise/3-2/admin_guide/b_ise_admin_3_2/b_ISE_admin_32_maintain_monitor.html#ID58)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

