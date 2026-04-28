# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM parser for Cisco Umbrella Proxy Logs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSessionCiscoUmbrella` |
| **Built-in Parser** | `_ASim_WebSession_CiscoUmbrella` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.7 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Cisco Umbrella |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimWebSession/CHANGELOG/ASimWebSessionCiscoUmbrella.md)) |
| **Last Updated** | Mar 24, 2026 |
| **Unifying Parser** | [ASimWebSession](asimwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSessionCiscoUmbrella.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSessionCiscoUmbrella.yaml) |

## Description

This ASIM parser supports normalizing Cisco Umbrella proxy logs to the ASIM Web Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Cisco_Umbrella_proxy_CL`](../tables/cisco-umbrella-proxy-cl.md) 🔶 | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [CiscoUmbrellaDataConnector](../connectors/ciscoumbrelladataconnector.md) | [CiscoUmbrella](../solutions/ciscoumbrella.md) |
| [CiscoUmbrellaDataConnectorelasticpremium](../connectors/ciscoumbrelladataconnectorelasticpremium.md) | [CiscoUmbrella](../solutions/ciscoumbrella.md) |

**Solutions:** [CiscoUmbrella](../solutions/ciscoumbrella.md)

## References

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Cisco Umbrella Documentation](https://securitydocs.cisco.com/docs/umbrella-dns/olh/147416.dita)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

