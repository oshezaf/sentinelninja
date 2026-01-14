# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DataminrPulseAlerts

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Type** | Workbook |
| **Solution** | [Dataminr Pulse](../solutions/dataminr-pulse.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dataminr%20Pulse/Workbooks/DataminrPulseAlerts.json) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_FileEvent_AzureBlobStorage`](../asim/im-fileevent-azureblobstorage.md)
- [`_Im_FileEvent_AzureFileStorage`](../asim/im-fileevent-azurefilestorage.md)
- [`_Im_FileEvent_AzureQueueStorage`](../asim/im-fileevent-azurequeuestorage.md)
- [`_Im_FileEvent_AzureTableStorage`](../asim/im-fileevent-azuretablestorage.md)
- [`_Im_FileEvent_GoogleWorkspace`](../asim/im-fileevent-googleworkspace.md)
- [`_Im_FileEvent_LinuxSysmonFileCreated`](../asim/im-fileevent-linuxsysmonfilecreated.md)
- [`_Im_FileEvent_LinuxSysmonFileDeleted`](../asim/im-fileevent-linuxsysmonfiledeleted.md)
- [`_Im_FileEvent_Microsoft365D`](../asim/im-fileevent-microsoft365d.md)
- [`_Im_FileEvent_MicrosoftSecurityEvents`](../asim/im-fileevent-microsoftsecurityevents.md)
- [`_Im_FileEvent_MicrosoftSharePoint`](../asim/im-fileevent-microsoftsharepoint.md)
- [`_Im_FileEvent_MicrosoftSysmon`](../asim/im-fileevent-microsoftsysmon.md)
- [`_Im_FileEvent_MicrosoftSysmonWindowsEvent`](../asim/im-fileevent-microsoftsysmonwindowsevent.md)
- [`_Im_FileEvent_MicrosoftWindowsEvents`](../asim/im-fileevent-microsoftwindowsevents.md)
- [`_Im_FileEvent_Native`](../asim/im-fileevent-native.md)
- [`_Im_FileEvent_SentinelOne`](../asim/im-fileevent-sentinelone.md)
- [`_Im_FileEvent_VMwareCarbonBlackCloud`](../asim/im-fileevent-vmwarecarbonblackcloud.md)

## Tables Used

This content item queries data from the following tables:

- [`ALERT`](../tables/alert.md)
- [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md)
- [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md)
- [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md)
- [`ASimProcessEventLogs`](../tables/asimprocesseventlogs.md)
- [`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md)
- [`AWSVPCFlow`](../tables/awsvpcflow.md)
- [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)
- [`AZFWDnsQuery`](../tables/azfwdnsquery.md)
- [`AZFWIdpsSignature`](../tables/azfwidpssignature.md)
- [`AZFWNatRule`](../tables/azfwnatrule.md)
- [`AZFWNetworkRule`](../tables/azfwnetworkrule.md)
- [`AZFWThreatIntel`](../tables/azfwthreatintel.md)
- [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md)
- [`Audits_Data_CL`](../tables/audits-data-cl.md)
- [`AzureActivity`](../tables/azureactivity.md)
- [`AzureDiagnostics`](../tables/azurediagnostics.md)
- [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)
- [`CarbonBlackAuditLogs_CL`](../tables/carbonblackauditlogs-cl.md)
- [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md)
- [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md)
- [`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md)
- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`Corelight_CL`](../tables/corelight-cl.md)
- [`DataminrPulse_Alerts_CL`](../tables/dataminrpulse-alerts-cl.md)
- [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)
- [`DeviceProcessEvents`](../tables/deviceprocessevents.md)
- [`DnsEvents`](../tables/dnsevents.md)
- [`Event`](../tables/event.md)
- [`GCP_DNS_CL`](../tables/gcp-dns-cl.md)
- [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md)
- [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md)
- [`NTANetAnalytics`](../tables/ntanetanalytics.md)
- [`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md)
- [`OfficeActivity`](../tables/officeactivity.md)
- [`Operation`](../tables/operation.md)
- [`SecurityEvent`](../tables/securityevent.md)
- [`SecurityIoTRawEvent`](../tables/securityiotrawevent.md)
- [`SentinelOne_CL`](../tables/sentinelone-cl.md)
- [`SquidProxy_CL`](../tables/squidproxy-cl.md)
- [`Syslog`](../tables/syslog.md)
- [`TrendMicro_XDR_OAT_CL`](../tables/trendmicro-xdr-oat-cl.md)
- [`Update`](../tables/update.md)
- [`VMConnection`](../tables/vmconnection.md)
- [`VectraStream_CL`](../tables/vectrastream-cl.md)
- [`W3CIISLog`](../tables/w3ciislog.md)
- [`WindowsEvent`](../tables/windowsevent.md)
- [`alert`](../tables/alert.md)
- [`barracuda_CL`](../tables/barracuda-cl.md)
- [`meraki_CL`](../tables/meraki-cl.md)
- [`update`](../tables/update.md)
- [`watchlist`](../tables/watchlist.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Workbooks](workbooks.md) · [Back to Dataminr Pulse](../solutions/dataminr-pulse.md)

