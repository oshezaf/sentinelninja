# <img src="../images/asim-badge.png" alt="ASIM" style="height:32px;width:auto;vertical-align:middle"> DNS ASIM parser for CrowdStrike Falcon Data Replicator

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDnsCrowdStrikeFalconDataReplicator` |
| **Built-in Parser** | `_ASim_Dns_CrowdStrikeFalconDataReplicator` |
| **Schema** | Dns |
| **Schema Version** | 1.0.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | CrowdStrike Falcon Data Replicator |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimDns/CHANGELOG/ASimDnsCrowdStrikeFalconDataReplicator.md)) |
| **Last Updated** | Oct 23, 2026 |
| **Unifying Parser** | [ASimDns](asimdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\ASimDnsCrowdStrikeFalconDataReplicator.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/ASimDnsCrowdStrikeFalconDataReplicator.yaml) |

## Description

Normalizes DnsRequest and SuspiciousDnsRequest records from CrowdStrike_DNS_Events_CL
to the ASIM DNS schema.
This parser was created using the agentic ASIM parser creation tool, powered by Skills in GitHub.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CrowdStrike_DNS_Events_CL`](../tables/crowdstrike-dns-events-cl.md) |  | ? | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |
| `pack` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [CrowdStrikeFalconS3CCPDefinition](../connectors/crowdstrikefalcons3ccpdefinition.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |

**Solutions:** [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)

## References

- [ASIM Dns Schema](https://aka.ms/ASimDnsDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [CrowdStrike Falcon Data Replicator connector](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CrowdStrike%20Falcon%20Endpoint%20Protection/Data%20Connectors/CrowdStrikeS3FDR_ccp/DataConnectorDefinition.json)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

