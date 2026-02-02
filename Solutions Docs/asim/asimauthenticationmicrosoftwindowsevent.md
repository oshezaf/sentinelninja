# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser for Windows Security Events

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationMicrosoftWindowsEvent` |
| **Built-in Parser** | `_ASim_Authentication_MicrosoftWindowsEvent` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Windows Security Events |
| **Parser Version** | 0.2.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthenticationMicrosoftWindowsEvent.md)) |
| **Last Updated** | Oct 15, 2024 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationMicrosoftWindowsEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationMicrosoftWindowsEvent.yaml) |

## Description

This ASIM parser supports normalizing Windows Authentication events (4624, 4625, 4634, and 4647), collected either by the Log Analytics Agent or the Azure Monitor Agent, into either the WindowsEvent (WEF) or SecurityEvent tables, to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`SecurityEvent`](../tables/securityevent.md) |  | ✓ | ✓ |
| [`WindowsEvent`](../tables/windowsevent.md) | `EventID in "4624,4625,4634"`<br>`Provider == "Microsoft-Windows-Security-Auditing"` | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [ESI-Opt34DomainControllersSecurityEventLogs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [SecurityEvents](../connectors/securityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |
| [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| [WindowsSecurityEvents](../connectors/windowssecurityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |

**Solutions:** [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md), [Windows Forwarded Events](../solutions/windows-forwarded-events.md), [Windows Security Events](../solutions/windows-security-events.md)

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

