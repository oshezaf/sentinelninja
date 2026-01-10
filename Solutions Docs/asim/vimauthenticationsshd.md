# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM filtering parser for OpenSSH sshd

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimAuthenticationSshd` |
| **Built-in Parser** | `_Im_Authentication_Sshd` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | OpenSSH |
| **Parser Version** | 0.2.4 |
| **Last Updated** | May 29, 2025 |
| **Unifying Parser** | [imAuthentication](imauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\vimAuthenticationSshd.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/vimAuthenticationSshd.yaml) |

## Description

This ASIM parser supports filtering and normalizing OpenSSH server (sshd) sign in logs, collected using Syslog to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Syslog](../tables/syslog.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `username_has_any` | dynamic | dynamic([]) |
| `targetappname_has_any` | dynamic | dynamic([]) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `srchostname_has_any` | dynamic | dynamic([]) |
| `eventtype_in` | dynamic | dynamic([]) |
| `eventresultdetails_in` | dynamic | dynamic([]) |
| `eventresult` | string | * |
| `disabled` | bool | False |

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

