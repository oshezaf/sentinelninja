# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM  parser for Microsoft Windows Firewall Events

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionMicrosoftSecurityEventFirewall` |
| **Built-in Parser** | `_ASim_NetworkSession_MicrosoftSecurityEventFirewall` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Windows Firewall |
| **Parser Version** | 0.5.0 |
| **Last Updated** | Jul 17, 2024 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionMicrosoftSecurityEventFirewall.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionMicrosoftSecurityEventFirewall.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Windows Firewall Events logs ingested in 'SecurityEvent' table to the ASIM Network Session schema. Event IDs which are parsed as part of this parser: 5150, 5151, 5152, 5153, 5154, 5155, 5156, 5167, 5158, 5159

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`Event`](../tables/event.md) |  | ✓ | ✗ |
| [`SecurityEvent`](../tables/securityevent.md) | `EventID in "5152,5154,5155,5156,5157,5158,5159"` | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [ESI-Opt34DomainControllersSecurityEventLogs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) |
| [MimecastTIRegionalConnectorAzureFunctions](../connectors/mimecasttiregionalconnectorazurefunctions.md) | [MimecastTIRegional](../solutions/mimecasttiregional.md) |
| [SecurityEvents](../connectors/securityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |
| [WindowsSecurityEvents](../connectors/windowssecurityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |

**Solutions:** [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md), [MimecastTIRegional](../solutions/mimecasttiregional.md), [Windows Security Events](../solutions/windows-security-events.md)

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

