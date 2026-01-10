# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser for Palo Alto Cortex Data Lake

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimAuthenticationPaloAltoCortexDataLake` |
| **Built-in Parser** | `_Im_Authentication_PaloAltoCortexDataLake` |
| **Schema** | Authentication |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Palo Alto Cortex Data Lake |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Apr 11 2024 |
| **Unifying Parser** | [imAuthentication](imauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\vimAuthenticationPaloAltoCortexDataLake.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/vimAuthenticationPaloAltoCortexDataLake.yaml) |

## Description

This ASIM parser supports normalizing Palo Alto Cortex Data Lake logs to the ASIM Authentication normalized schema. These events are captured through the Palo Alto Networks CDL data connector that ingests CDL logs into Microsoft Sentinel.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [CommonSecurityLog](../tables/commonsecuritylog.md) |

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
- [Palo Alto Cortex Data Lake Documentation](https://docs.paloaltonetworks.com/cortex/cortex-data-lake/log-forwarding-schema-reference/network-logs/network-authentication-log/network-auth-cef-fields)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

