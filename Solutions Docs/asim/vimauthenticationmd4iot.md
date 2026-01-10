# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM filtering parser for Microsoft Defender for IoT endpoint logs

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimAuthenticationMD4IoT` |
| **Built-in Parser** | `_Im_Authentication_MD4IoT` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Defender for IoT |
| **Parser Version** | 0.1.3 |
| **Last Updated** | Apr 10, 2024 |
| **Unifying Parser** | [imAuthentication](imauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\vimAuthenticationMicrosoftMD4IoT.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/vimAuthenticationMicrosoftMD4IoT.yaml) |

## Description

This ASIM parser supports filtering and normalizing Microsoft Defender for IoT endpoint logs to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [SecurityIoTRawEvent](../tables/securityiotrawevent.md) |

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
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

