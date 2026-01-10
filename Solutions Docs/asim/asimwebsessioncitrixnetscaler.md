# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM parser for Citrix NetScaler(Web App Firewall)

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSessionCitrixNetScaler` |
| **Built-in Parser** | `_ASim_WebSession_CitrixNetScaler` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Citrix NetScaler |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Jun 26, 2025 |
| **Unifying Parser** | [ASimWebSession](asimwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSessionCitrixNetScaler.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSessionCitrixNetScaler.yaml) |

## Description

This ASIM parser supports normalizing Citrix NetScaler WAF(Web Application Firewall) logs to the ASIM Web Session normalized schema. Citrix NetScaler WAF(Web Application Firewall) events are captured through Citrix WAF (Web App Firewall) data connector which ingests web attack logs into Microsoft Sentinel in CEF format via Syslog.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [CommonSecurityLog](../tables/commonsecuritylog.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Citrix NetScaler WAF Documentation](https://support.citrix.com/article/CTX136146/common-event-format-cef-logging-support-in-the-application-firewall https://docs.netscaler.com/en-us/citrix-adc/current-release/application-firewall/logs https://docs.netscaler.com/en-us/citrix-adc/current-release/application-firewall/xml-protections/xml-cross-site-scripting-check)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

