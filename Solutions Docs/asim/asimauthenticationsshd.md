# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser for OpenSSH sshd

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationSshd` |
| **Built-in Parser** | `_ASim_Authentication_Sshd` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | OpenSSH |
| **Parser Version** | 0.2.4 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthenticationSshd.md)) |
| **Last Updated** | May 29, 2025 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationSshd.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationSshd.yaml) |

## Description

This ASIM parser supports normalizing OpenSSH server (sshd) sign in logs, collected using Syslog to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`Syslog`](../tables/syslog.md) | `ProcessName == "sshd"`<br>`SyslogMessage has "Failed"`<br>`SyslogMessage has "but this does not map back to the address"`<br>`SyslogMessage has "publickey"`<br>`SyslogMessage startswith "Accepted"`<br>`SyslogMessage startswith "Failed"`<br>`SyslogMessage startswith "Invalid user"`<br>`SyslogMessage startswith "Nasty PTR record"`<br>`SyslogMessage startswith "Timeout"`<br>`SyslogMessage startswith "message repeated"`<br>`SyslogMessage startswith "reverse mapping checking getaddrinfo for"` | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [SyslogAma](../connectors/syslogama.md) | [Syslog](../solutions/syslog.md) |

**Solutions:** [Syslog](../solutions/syslog.md)

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

