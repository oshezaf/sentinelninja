# Windows host username encoded in base64 web request

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This detection will identify network requests in HTTP proxy data that contains Base64 encoded usernames from machines in the DeviceEvents table. This technique was seen usee by POLONIUM in their RunningRAT tool.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `6e715730-82c0-496c-983b-7a20c4590bd9` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration, CommandAndControl |
| **Techniques** | T1041, T1071.001 |
| **Required Connectors** | [Zscaler](../connectors/zscaler.md), [Fortinet](../connectors/fortinet.md), [CheckPoint](../connectors/checkpoint.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/B64UserInWebURIFromMDE.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | ✓ | ✓ | ? |
| [`DeviceEvents`](../tables/deviceevents.md) | ✓ | ✗ | ? |

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

↑ [Back to Analytic Rules](analytic-rules.md)

