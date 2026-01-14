# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser for Cisco Device Logon Events

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationCiscoASA` |
| **Built-in Parser** | `_ASim_Authentication_CiscoASA` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Cisco Adaptive Security Appliance (ASA) |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Jun 17, 2025 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationCiscoASA.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationCiscoASA.yaml) |

## Description

This ASIM parser supports normalizing authentication events, collected from Cisco ASA devices, to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Alert](../tables/alert.md) |
| [CommonSecurityLog](../tables/commonsecuritylog.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [About Cisco ASA Messages](https://www.cisco.com/c/en/us/td/docs/security/asa/syslog/b_syslog/about.html)
- [Cisco ASA Messages by Severity Level](https://www.cisco.com/c/en/us/td/docs/security/asa/syslog/b_syslog/syslogs-sev-level.html)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

