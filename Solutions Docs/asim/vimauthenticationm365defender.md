# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM filtering parser for M365 Defender Device Logon Events

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimAuthenticationM365Defender` |
| **Built-in Parser** | `_Im_Authentication_M365Defender` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | M365 Defender for EndPoint |
| **Parser Version** | 0.1.3 |
| **Last Updated** | Jun 19, 2025 |
| **Unifying Parser** | [imAuthentication](imauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\vimAuthenticationM365Defender.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/vimAuthenticationM365Defender.yaml) |

## Description

This ASIM parser supports filtering and normalizing endpoint authentication events, collected  by Microsoft 365 Defender for Endpoint, stored in the  DeviceLogonEvents table, to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [DeviceLogonEvents](../tables/devicelogonevents.md) |

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

