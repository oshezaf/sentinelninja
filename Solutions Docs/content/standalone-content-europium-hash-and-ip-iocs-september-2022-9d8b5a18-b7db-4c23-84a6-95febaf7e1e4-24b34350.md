# Europium - Hash and IP IOCs - September 2022

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a match across various data feeds for  hashes and IP IOC related to Europium  Reference: https://www.microsoft.com/security/blog/2022/09/08/microsoft-investigates-iranian-attacks-against-the-albanian-government

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | Standalone Content |
| **ID** | `9d8b5a18-b7db-4c23-84a6-95febaf7e1e4` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl, CredentialAccess |
| **Techniques** | T1071, T1003 |
| **Required Connectors** | [DNS](../connectors/dns.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md), [F5](../connectors/f5.md), [CiscoASA](../connectors/ciscoasa.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [Fortinet](../connectors/fortinet.md), [CheckPoint](../connectors/checkpoint.md), [CEF](../connectors/cef.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [Office365](../connectors/office365.md), [AzureFirewall](../connectors/azurefirewall.md), [WindowsFirewall](../connectors/windowsfirewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Detections/MultipleDataSources/EUROPIUM%20_September2022.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | ✓ | ✓ | ? |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | ✓ | ✗ | ? |
| [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) | ✓ | ✗ | ? |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | ✓ | ✗ | ? |
| [`DnsEvents`](../tables/dnsevents.md) | ✓ | ✗ | ? |
| [`Event`](../tables/event.md) | ✓ | ✓ | ? |
| [`OfficeActivity`](../tables/officeactivity.md) | ✓ | ✗ | ? |
| [`VMConnection`](../tables/vmconnection.md) | ? | ✗ | ? |
| [`WindowsFirewall`](../tables/windowsfirewall.md) | ✓ | ✗ | ? |

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
| [DNS](../connectors/dns.md) | [Windows Server DNS](../solutions/windows-server-dns.md) |
| [VirtualMetricDirectorProxy](../connectors/virtualmetricdirectorproxy.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelConnector](../connectors/virtualmetricmssentinelconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [VirtualMetricMSSentinelDataLakeConnector](../connectors/virtualmetricmssentineldatalakeconnector.md) | [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| [WindowsFirewall](../connectors/windowsfirewall.md) | [Windows Firewall](../solutions/windows-firewall.md) |

**Solutions:** [Common Event Format](../solutions/common-event-format.md), [VirtualMetric DataStream](../solutions/virtualmetric-datastream.md), [Windows Firewall](../solutions/windows-firewall.md), [Windows Server DNS](../solutions/windows-server-dns.md), [Zscaler Internet Access](../solutions/zscaler-internet-access.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md)

