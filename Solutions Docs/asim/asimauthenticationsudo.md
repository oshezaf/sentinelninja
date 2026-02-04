# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser for Syslog sudo

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationSudo` |
| **Built-in Parser** | `_ASim_Authentication_Sudo` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.4 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | sudo |
| **Parser Version** | 0.2.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthenticationSudo.md)) |
| **Last Updated** | Jan 29, 2026 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationSudo.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationSudo.yaml) |

## Description

This ASIM parser supports normalizing Syslog sudo sign in logs to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | `ProcessName == "sudo"`<br>`SyslogMessage has "COMMAND="`<br>`SyslogMessage has "TTY="`<br>`SyslogMessage has "USER="`<br>`SyslogMessage has "incorrect password attempts"`<br>`SyslogMessage has "session closed for user"`<br>`SyslogMessage has "user NOT in sudoers"` | ✓ | ✓ | ✓ |

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
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

