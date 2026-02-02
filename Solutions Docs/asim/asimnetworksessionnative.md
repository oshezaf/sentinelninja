# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for Microsoft Sentinel native Network Session table

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionNative` |
| **Built-in Parser** | `_ASim_NetworkSession_Native` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.4 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Native |
| **Parser Version** | 0.3 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimNetworkSession/CHANGELOG/ASimNetworkSessionNative.md)) |
| **Last Updated** | Jan 25 2023 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionNative.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionNative.yaml) |

## Description

This ASIM parser supports normalizing the native Microsoft Sentinel Network Session table (ASimNetworkSessionLogs) to the ASIM NetworkSession normalized schema. While the native table is ASIM compliant, the parser is needed to add capabilities, such as aliases, available only at query time.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | `EventType in "EndpointNetworkSession,L2NetworkSession"` | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [CiscoMerakiMultiRule](../connectors/ciscomerakimultirule.md) | [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md) |
| [CrowdstrikeReplicatorv2](../connectors/crowdstrikereplicatorv2.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) |
| [carbonBlackAWSS3](../connectors/carbonblackawss3.md) | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |

**Solutions:** [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md), [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md), [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md)

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

