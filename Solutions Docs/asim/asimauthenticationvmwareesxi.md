# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> Authentication ASIM parser for VMware ESXi

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationVMwareESXi` |
| **Built-in Parser** | `_ASim_Authentication_VMwareESXi` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.4 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | VMware ESXi |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthenticationVMwareESXi.md)) |
| **Last Updated** | Apr 09, 2026 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationVMwareESXi.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationVMwareESXi.yaml) |

## Description

This ASIM parser supports normalizing VMware ESXi Syslog to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AVSEsxiSyslog`](../tables/avsesxisyslog.md) |  | ✓ | ✗ | ? |
| [`AVSSyslog`](../tables/avssyslog.md) |  | ✓ | ✗ | ? |
| [`Syslog`](../tables/syslog.md) | `ProcessName == "DCUI"`<br>`SyslogMessage has "failed"`<br>`SyslogMessage has "logged out"`<br>`SyslogMessage has "time out"`<br>`SyslogMessage has_all "Authentication of user"`<br>`SyslogMessage has_any "logged in,logged out,succeeded"` | ✓ | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [CiscoSDWAN](../connectors/ciscosdwan.md) | [Cisco SD-WAN](../solutions/cisco-sd-wan.md) |
| [CiscoUCS](../connectors/ciscoucs.md) | [Cisco UCS (legacy connector)](../solutions/cisco-ucs.md) |
| [CitrixADC](../connectors/citrixadc.md) | [Citrix ADC (legacy connector)](../solutions/citrix-adc.md) |
| [Forescout](../connectors/forescout.md) | [Forescout (Legacy)](../solutions/forescout-legacy.md) |
| [RSASecurIDAM](../connectors/rsasecuridam.md) | [RSA SecurID (legacy connector)](../solutions/rsa-securid.md) |
| [WatchguardFirebox](../connectors/watchguardfirebox.md) | [Watchguard Firebox (legacy connector)](../solutions/watchguard-firebox.md) |

**Solutions:** [Cisco SD-WAN](../solutions/cisco-sd-wan.md), [Cisco UCS (legacy connector)](../solutions/cisco-ucs.md), [Citrix ADC (legacy connector)](../solutions/citrix-adc.md), [Forescout (Legacy)](../solutions/forescout-legacy.md), [RSA SecurID (legacy connector)](../solutions/rsa-securid.md), [Watchguard Firebox (legacy connector)](../solutions/watchguard-firebox.md)

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

