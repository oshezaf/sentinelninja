# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Dataminr Pulse

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/DataminrPulse.svg" alt="Dataminr Pulse Logo" width="75" height="75">

Dataminr Pulse brings the most advanced AI-powered real-time intelligence into Microsoft Sentinel, easily fitting into your workflows and enabling rapid identification and mitigation of emerging threats so you can deliver faster time to detection and response.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Dataminr Support |
| **Support Tier** | Partner |
| **Support Link** | [https://www.dataminr.com/dataminr-support#support](https://www.dataminr.com/dataminr-support#support) |
| **Categories** | domains |
| **Version** | 3.0.5 |
| **Author** | Dataminr - info@dataminr.com |
| **First Published** | 2023-04-12 |
| **Last Updated** | 2023-04-12 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dataminr%20Pulse](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dataminr%20Pulse) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Dataminr Pulse Alerts Data Connector](../connectors/dataminrpulsealerts.md)

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This solution uses **16 ASIM parser(s)** for normalized data:

| Parser | Used By Content |
|--------|----------------|
| [`_Im_FileEvent_AzureBlobStorage`](../asim/im-fileevent-azureblobstorage.md) | Workbooks |
| [`_Im_FileEvent_AzureFileStorage`](../asim/im-fileevent-azurefilestorage.md) | Workbooks |
| [`_Im_FileEvent_AzureQueueStorage`](../asim/im-fileevent-azurequeuestorage.md) | Workbooks |
| [`_Im_FileEvent_AzureTableStorage`](../asim/im-fileevent-azuretablestorage.md) | Workbooks |
| [`_Im_FileEvent_GoogleWorkspace`](../asim/im-fileevent-googleworkspace.md) | Workbooks |
| [`_Im_FileEvent_LinuxSysmonFileCreated`](../asim/im-fileevent-linuxsysmonfilecreated.md) | Workbooks |
| [`_Im_FileEvent_LinuxSysmonFileDeleted`](../asim/im-fileevent-linuxsysmonfiledeleted.md) | Workbooks |
| [`_Im_FileEvent_Microsoft365D`](../asim/im-fileevent-microsoft365d.md) | Workbooks |
| [`_Im_FileEvent_MicrosoftSecurityEvents`](../asim/im-fileevent-microsoftsecurityevents.md) | Workbooks |
| [`_Im_FileEvent_MicrosoftSharePoint`](../asim/im-fileevent-microsoftsharepoint.md) | Workbooks |
| [`_Im_FileEvent_MicrosoftSysmon`](../asim/im-fileevent-microsoftsysmon.md) | Workbooks |
| [`_Im_FileEvent_MicrosoftSysmonWindowsEvent`](../asim/im-fileevent-microsoftsysmonwindowsevent.md) | Workbooks |
| [`_Im_FileEvent_MicrosoftWindowsEvents`](../asim/im-fileevent-microsoftwindowsevents.md) | Workbooks |
| [`_Im_FileEvent_Native`](../asim/im-fileevent-native.md) | Workbooks |
| [`_Im_FileEvent_SentinelOne`](../asim/im-fileevent-sentinelone.md) | Workbooks |
| [`_Im_FileEvent_VMwareCarbonBlackCloud`](../asim/im-fileevent-vmwarecarbonblackcloud.md) | Workbooks |

## Tables Used

This solution uses **51 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ALERT`](../tables/alert.md) | - | Workbooks |
| [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) | - | Workbooks |
| [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md) | - | Workbooks |
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | - | Workbooks |
| [`ASimProcessEventLogs`](../tables/asimprocesseventlogs.md) | - | Workbooks |
| [`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md) | - | Workbooks |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | - | Workbooks |
| [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) | - | Workbooks |
| [`AZFWDnsQuery`](../tables/azfwdnsquery.md) | - | Workbooks |
| [`AZFWIdpsSignature`](../tables/azfwidpssignature.md) | - | Workbooks |
| [`AZFWNatRule`](../tables/azfwnatrule.md) | - | Workbooks |
| [`AZFWNetworkRule`](../tables/azfwnetworkrule.md) | - | Workbooks |
| [`AZFWThreatIntel`](../tables/azfwthreatintel.md) | - | Workbooks |
| [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) | - | Workbooks |
| [`Audits_Data_CL`](../tables/audits-data-cl.md) | - | Workbooks |
| [`AzureActivity`](../tables/azureactivity.md) | - | Workbooks |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | - | Workbooks |
| [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md) | - | Workbooks |
| [`CarbonBlackAuditLogs_CL`](../tables/carbonblackauditlogs-cl.md) | - | Workbooks |
| [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md) | - | Workbooks |
| [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md) | - | Workbooks |
| [`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md) | - | Workbooks |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | - | Workbooks |
| [`Corelight_CL`](../tables/corelight-cl.md) | - | Workbooks |
| [`DataminrPulse_Alerts_CL`](../tables/dataminrpulse-alerts-cl.md) | [Dataminr Pulse Alerts Data Connector](../connectors/dataminrpulsealerts.md) | Analytics, Workbooks |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | - | Workbooks |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | - | Workbooks |
| [`DnsEvents`](../tables/dnsevents.md) | - | Workbooks |
| [`Event`](../tables/event.md) | - | Workbooks |
| [`GCP_DNS_CL`](../tables/gcp-dns-cl.md) | - | Workbooks |
| [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md) | - | Workbooks |
| [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md) | - | Workbooks |
| [`NTANetAnalytics`](../tables/ntanetanalytics.md) | - | Workbooks |
| [`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md) | - | Workbooks |
| [`OfficeActivity`](../tables/officeactivity.md) | - | Workbooks |
| [`Operation`](../tables/operation.md) | - | Workbooks |
| [`SecurityEvent`](../tables/securityevent.md) | - | Workbooks |
| [`SecurityIoTRawEvent`](../tables/securityiotrawevent.md) | - | Workbooks |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) | - | Workbooks |
| [`SquidProxy_CL`](../tables/squidproxy-cl.md) | - | Workbooks |
| [`Syslog`](../tables/syslog.md) | - | Workbooks |
| [`TrendMicro_XDR_OAT_CL`](../tables/trendmicro-xdr-oat-cl.md) | - | Workbooks |
| [`Update`](../tables/update.md) | - | Workbooks |
| [`VMConnection`](../tables/vmconnection.md) | - | Workbooks |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) | - | Workbooks |
| [`W3CIISLog`](../tables/w3ciislog.md) | - | Workbooks |
| [`WindowsEvent`](../tables/windowsevent.md) | - | Workbooks |
| [`alert`](../tables/alert.md) | - | Workbooks |
| [`barracuda_CL`](../tables/barracuda-cl.md) | - | Workbooks |
| [`meraki_CL`](../tables/meraki-cl.md) | - | Workbooks |
| [`update`](../tables/update.md) | - | Workbooks |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`watchlist`](../tables/watchlist.md) | - | Analytics, Workbooks |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Watchlists | 5 |
| Parsers | 2 |
| Analytic Rules | 1 |
| Workbooks | 1 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Dataminr - urgent alerts detected](../content/dataminr-pulse-dataminr-urgent-alerts-detected-64a46029-3236-4d03-b5df-207366a623f1-d65138c6.md) | Medium | Persistence | [`DataminrPulse_Alerts_CL`](../tables/dataminrpulse-alerts-cl.md)<br>*Internal use:*<br>[`watchlist`](../tables/watchlist.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [DataminrPulseAlerts](../content/dataminr-pulse-dataminrpulsealerts-d5436210.md) | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_AzureBlobStorage`](../asim/im-fileevent-azureblobstorage.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_AzureFileStorage`](../asim/im-fileevent-azurefilestorage.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_AzureQueueStorage`](../asim/im-fileevent-azurequeuestorage.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_AzureTableStorage`](../asim/im-fileevent-azuretablestorage.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_GoogleWorkspace`](../asim/im-fileevent-googleworkspace.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_LinuxSysmonFileCreated`](../asim/im-fileevent-linuxsysmonfilecreated.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_LinuxSysmonFileDeleted`](../asim/im-fileevent-linuxsysmonfiledeleted.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_Microsoft365D`](../asim/im-fileevent-microsoft365d.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_MicrosoftSecurityEvents`](../asim/im-fileevent-microsoftsecurityevents.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_MicrosoftSharePoint`](../asim/im-fileevent-microsoftsharepoint.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_MicrosoftSysmon`](../asim/im-fileevent-microsoftsysmon.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_MicrosoftSysmonWindowsEvent`](../asim/im-fileevent-microsoftsysmonwindowsevent.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_MicrosoftWindowsEvents`](../asim/im-fileevent-microsoftwindowsevents.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_Native`](../asim/im-fileevent-native.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_SentinelOne`](../asim/im-fileevent-sentinelone.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_VMwareCarbonBlackCloud`](../asim/im-fileevent-vmwarecarbonblackcloud.md)<br>[`ALERT`](../tables/alert.md)<br>[`ASimAuditEventLogs`](../tables/asimauditeventlogs.md)<br>[`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)<br>[`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md)<br>[`ASimProcessEventLogs`](../tables/asimprocesseventlogs.md)<br>[`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md)<br>[`AWSVPCFlow`](../tables/awsvpcflow.md)<br>[`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`AZFWDnsQuery`](../tables/azfwdnsquery.md)<br>[`AZFWIdpsSignature`](../tables/azfwidpssignature.md)<br>[`AZFWNatRule`](../tables/azfwnatrule.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md)<br>[`AZFWThreatIntel`](../tables/azfwthreatintel.md)<br>[`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md)<br>[`Audits_Data_CL`](../tables/audits-data-cl.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)<br>[`CarbonBlackAuditLogs_CL`](../tables/carbonblackauditlogs-cl.md)<br>[`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md)<br>[`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md)<br>[`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`Corelight_CL`](../tables/corelight-cl.md)<br>[`DataminrPulse_Alerts_CL`](../tables/dataminrpulse-alerts-cl.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`GCP_DNS_CL`](../tables/gcp-dns-cl.md)<br>[`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md)<br>[`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md)<br>[`NTANetAnalytics`](../tables/ntanetanalytics.md)<br>[`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`Operation`](../tables/operation.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SecurityIoTRawEvent`](../tables/securityiotrawevent.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`SquidProxy_CL`](../tables/squidproxy-cl.md)<br>[`Syslog`](../tables/syslog.md)<br>[`TrendMicro_XDR_OAT_CL`](../tables/trendmicro-xdr-oat-cl.md)<br>[`Update`](../tables/update.md)<br>[`VMConnection`](../tables/vmconnection.md)<br>[`VectraStream_CL`](../tables/vectrastream-cl.md)<br>[`W3CIISLog`](../tables/w3ciislog.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>[`alert`](../tables/alert.md)<br>[`barracuda_CL`](../tables/barracuda-cl.md)<br>[`meraki_CL`](../tables/meraki-cl.md)<br>[`update`](../tables/update.md)<br>*Internal use:*<br>[`watchlist`](../tables/watchlist.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DataminrPulseAlertEnrichment](../content/dataminr-pulse-dataminrpulsealertenrichment-262cc5df.md) | This playbook provides an end-to-end example of how alert enrichment works. This will extract the IP... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DataminrPulseAlerts](../content/dataminr-pulse-dataminrpulsealerts-a4fddd3e-9993-4c86-b5e8-8e36d8ce1197-ce5effab.md) | - | [`DataminrPulse_Alerts_CL`](../tables/dataminrpulse-alerts-cl.md) *(read)*<br>*Internal use:*<br>[`watchlist`](../tables/watchlist.md) *(read)* |
| [DataminrPulseCyberAlerts](../content/dataminr-pulse-dataminrpulsecyberalerts-922c64bb-819b-4e3f-811a-0dfbff8eb667-fff8139f.md) | - | [`DataminrPulse_Alerts_CL`](../tables/dataminrpulse-alerts-cl.md) *(read)*<br>*Internal use:*<br>[`watchlist`](../tables/watchlist.md) *(read)* |

### Watchlists

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DataminrPulseAsset](../content/dataminr-pulse-dataminrpulseasset-c554f167.md) | - | - |
| [DataminrPulseVulnerableDomain](../content/dataminr-pulse-dataminrpulsevulnerabledomain-07d181c0.md) | - | - |
| [DataminrPulseVulnerableHash](../content/dataminr-pulse-dataminrpulsevulnerablehash-f2bf24a5.md) | - | - |
| [DataminrPulseVulnerableIp](../content/dataminr-pulse-dataminrpulsevulnerableip-f24f35ab.md) | - | - |
| [DataminrPulseVulnerableMalware](../content/dataminr-pulse-dataminrpulsevulnerablemalware-b2527efd.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.5       |     16-09-2025                 | Updated Python version to 3.12 and Added Log Ingestion API support             |
| 3.0.4       |     12-09-2025                 | Added support for Azure GovCloud |
| 3.0.3       |     03-05-2024                 | Repackaged for parser issue fix on reinstall |
| 3.0.2       |     14-12-2023                 | Updated **Data Connector** code                    |
| 3.0.1       |     06-12-2023                 | Updated steps in **DataConnector** UI and **README.md** file.                     |
| 3.0.0       |     14-07-2023                 | Initial Solution Release                     |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

