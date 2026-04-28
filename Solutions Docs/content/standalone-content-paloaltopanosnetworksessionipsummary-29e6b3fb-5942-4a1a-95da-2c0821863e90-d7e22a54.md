# PaloAltoPANOSNetworkSessionIPSummary

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This summary rule aggregates network session logs from Palo Alto PAN-OS devices, providing hourly insights into session count, data sent, data received by device actions, destination port, source and destination IP addresses.

| Attribute | Value |
|:----------|:------|
| **Type** | Summary Rule |
| **Solution** | Standalone Content |
| **ID** | `29e6b3fb-5942-4a1a-95da-2c0821863e90` |
| **Required Connectors** | [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Summary rules/Network/PaloAltoPANOSNetworkSessionIPSummary.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceProduct == "PAN-OS"`<br>`DeviceVendor == "Palo Alto Networks"` | ✓ | ✓ | ? |

## Associated Connectors

The following connectors provide data for this content item:

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

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Summary Rules](summary-rules.md)

