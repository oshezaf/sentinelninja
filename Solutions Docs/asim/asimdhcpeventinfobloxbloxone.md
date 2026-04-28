# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DhcpEvent ASIM parser for Infoblox BloxOne

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDhcpEventInfobloxBloxOne` |
| **Built-in Parser** | `_ASim_DhcpEvent_InfobloxBloxOne` |
| **Schema** | DhcpEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Infoblox BloxOne |
| **Parser Version** | 0.1.0 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimDhcpEvent/CHANGELOG/ASimDhcpEventInfobloxBloxOne.md)) |
| **Last Updated** | Sep 11, 2024 |
| **Unifying Parser** | [ASimDhcpEvent](asimdhcpevent.md) |
| **Source File** | [Parsers\ASimDhcpEvent\Parsers\ASimDhcpEventInfobloxBloxOne.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDhcpEvent/Parsers/ASimDhcpEventInfobloxBloxOne.yaml) |

## Description

This ASIM parser supports normalizing Dhcp logs from Infoblox BloxOne to the ASIM DhcpEvent normalized schema. These events are captured through the Azure Monitor Agent (AMA) which are sent by the Data Connector Service of Infoblox BloxOne.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceEventClassID has "DHCP"`<br>`DeviceVendor == "Infoblox"` | ✓ | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [CefAma](../connectors/cefama.md) | [Common Event Format](../solutions/common-event-format.md) |
| [CloudNSSAuditLogs_ccp](../connectors/cloudnssauditlogs-ccp.md) | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [CloudNSSCASBActivityLogs_ccp](../connectors/cloudnsscasbactivitylogs-ccp.md) | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [CloudNSSCASBCRMLogs_ccp](../connectors/cloudnsscasbcrmlogs-ccp.md) | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [CloudNSSCASBCloudStorageLogs_ccp](../connectors/cloudnsscasbcloudstoragelogs-ccp.md) | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [CloudNSSCASBCollabLogs_ccp](../connectors/cloudnsscasbcollablogs-ccp.md) | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [CloudNSSCASBEmailLogs_ccp](../connectors/cloudnsscasbemaillogs-ccp.md) | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [CloudNSSCASBFileSharingLogs_ccp](../connectors/cloudnsscasbfilesharinglogs-ccp.md) | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [CloudNSSCASBITSMLogs_ccp](../connectors/cloudnsscasbitsmlogs-ccp.md) | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [CloudNSSCASBRepoLogs_ccp](../connectors/cloudnsscasbrepologs-ccp.md) | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [CloudNSSDNSLogs_ccp](../connectors/cloudnssdnslogs-ccp.md) | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [CloudNSSEmailDLPLogs_ccp](../connectors/cloudnssemaildlplogs-ccp.md) | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [CloudNSSEndpointDLPLogs_ccp](../connectors/cloudnssendpointdlplogs-ccp.md) | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [CloudNSSFWLogs_ccp](../connectors/cloudnssfwlogs-ccp.md) | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [CloudNSSTunnelLogs_ccp](../connectors/cloudnsstunnellogs-ccp.md) | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [CloudNSSWebLogs_ccp](../connectors/cloudnssweblogs-ccp.md) | [Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| [VirtualMetricDirectorProxy](../connectors/virtualmetricdirectorproxy.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelConnector](../connectors/virtualmetricmssentinelconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelDataLakeConnector](../connectors/virtualmetricmssentineldatalakeconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |

**Solutions:** [Common Event Format](../solutions/common-event-format.md), [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md), [Zscaler Internet Access](../solutions/zscaler-internet-access.md)

## References

- [ASIM DhcpEvent Schema](https://aka.ms/ASimDhcpEventDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Infoblox BloxOne Documentation](https://docs.infoblox.com/space/BloxOneThreatDefense)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

