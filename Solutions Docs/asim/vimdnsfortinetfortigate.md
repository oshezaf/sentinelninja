# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM parser for Fortinet FortiGate

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimDnsFortinetFortiGate` |
| **Built-in Parser** | `_Im_Dns_FortinetFortiGate` |
| **Schema** | Dns |
| **Schema Version** | 0.1.7 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Fortinet FortiGate |
| **Parser Version** | 0.1.2 |
| **Last Updated** | Dec 11, 2025 |
| **Unifying Parser** | [imDns](imdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\vimDnsFortinetFortigate.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/vimDnsFortinetFortigate.yaml) |

## Description

This ASIM parser supports filtering and normalizing Fortinet FortiGate logs ingested in 'CommonSecurityLogs' table produced by the Microsoft Sentinel Fortinet connector to the ASIM DNS normalized schema.

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
| `srcipaddr` | string | * |
| `domain_has_any` | dynamic | dynamic([]) |
| `responsecodename` | string | * |
| `response_has_ipv4` | string | * |
| `response_has_any_prefix` | dynamic | dynamic([]) |
| `eventtype` | string | Query |
| `disabled` | bool | False |

## References

- [ASIM DNS Schema](https://aka.ms/ASimDnsDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Fortinet FortiGate DNS log message reference](https://docs.fortinet.com/document/fortigate/7.4.1/fortios-log-message-reference/229/dns)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

