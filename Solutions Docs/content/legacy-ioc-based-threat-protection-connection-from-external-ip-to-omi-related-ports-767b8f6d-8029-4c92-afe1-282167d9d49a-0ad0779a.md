# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Connection from external IP to OMI related Ports

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query detects attempts to exploit OMI vulnerability (CVE-2021-38647) by identifying external IP connections to management ports (5985,5986,1270). It uses the imNetworkSession schema and other logs for this purpose.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md) |
| **ID** | `767b8f6d-8029-4c92-afe1-282167d9d49a` |
| **Tactics** | Reconnaissance, InitialAccess |
| **Techniques** | T1595, T1190 |
| **Required Connectors** | [AzureNetworkWatcher](../connectors/azurenetworkwatcher.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md), [AzureFirewall](../connectors/azurefirewall.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Legacy%20IOC%20based%20Threat%20Protection/Hunting%20Queries/NetworkConnectiontoOMIPorts.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_NetworkSession_AWSVPC`](../asim/im-networksession-awsvpc.md)
- [`_Im_NetworkSession_AppGateSDP`](../asim/im-networksession-appgatesdp.md)
- [`_Im_NetworkSession_AzureFirewall`](../asim/im-networksession-azurefirewall.md)
- [`_Im_NetworkSession_AzureNSG`](../asim/im-networksession-azurensg.md)
- [`_Im_NetworkSession_BarracudaCEF`](../asim/im-networksession-barracudacef.md)
- [`_Im_NetworkSession_BarracudaWAF`](../asim/im-networksession-barracudawaf.md)
- [`_Im_NetworkSession_CheckPointFirewall`](../asim/im-networksession-checkpointfirewall.md)
- [`_Im_NetworkSession_CiscoASA`](../asim/im-networksession-ciscoasa.md)
- [`_Im_NetworkSession_CiscoFirepower`](../asim/im-networksession-ciscofirepower.md)
- [`_Im_NetworkSession_CiscoISE`](../asim/im-networksession-ciscoise.md)
- [`_Im_NetworkSession_CiscoMeraki`](../asim/im-networksession-ciscomeraki.md)
- [`_Im_NetworkSession_CiscoMerakiSyslog`](../asim/im-networksession-ciscomerakisyslog.md)
- [`_Im_NetworkSession_CrowdStrikeFalconHost`](../asim/im-networksession-crowdstrikefalconhost.md)
- [`_Im_NetworkSession_ForcePointFirewall`](../asim/im-networksession-forcepointfirewall.md)
- [`_Im_NetworkSession_FortinetFortiGate`](../asim/im-networksession-fortinetfortigate.md)
- [`_Im_NetworkSession_IllumioSaaSCore`](../asim/im-networksession-illumiosaascore.md)
- [`_Im_NetworkSession_LinuxSysmon`](../asim/im-networksession-linuxsysmon.md)
- [`_Im_NetworkSession_MD4IoTAgent`](../asim/im-networksession-md4iotagent.md)
- [`_Im_NetworkSession_MD4IoTSensor`](../asim/im-networksession-md4iotsensor.md)
- [`_Im_NetworkSession_Microsoft365Defender`](../asim/im-networksession-microsoft365defender.md)
- [`_Im_NetworkSession_MicrosoftSecurityEventFirewall`](../asim/im-networksession-microsoftsecurityeventfirewall.md)
- [`_Im_NetworkSession_MicrosoftSysmon`](../asim/im-networksession-microsoftsysmon.md)
- [`_Im_NetworkSession_MicrosoftSysmonWindowsEvent`](../asim/im-networksession-microsoftsysmonwindowsevent.md)
- [`_Im_NetworkSession_MicrosoftWindowsEventFirewall`](../asim/im-networksession-microsoftwindowseventfirewall.md)
- [`_Im_NetworkSession_NTANetAnalytics`](../asim/im-networksession-ntanetanalytics.md)
- [`_Im_NetworkSession_Native`](../asim/im-networksession-native.md)
- [`_Im_NetworkSession_PaloAltoCEF`](../asim/im-networksession-paloaltocef.md)
- [`_Im_NetworkSession_PaloAltoCortexDataLake`](../asim/im-networksession-paloaltocortexdatalake.md)
- [`_Im_NetworkSession_SentinelOne`](../asim/im-networksession-sentinelone.md)
- [`_Im_NetworkSession_SonicWallFirewall`](../asim/im-networksession-sonicwallfirewall.md)
- [`_Im_NetworkSession_VMConnection`](../asim/im-networksession-vmconnection.md)
- [`_Im_NetworkSession_VMwareCarbonBlackCloud`](../asim/im-networksession-vmwarecarbonblackcloud.md)
- [`_Im_NetworkSession_VectraAI`](../asim/im-networksession-vectraai.md)
- [`_Im_NetworkSession_WatchGuardFirewareOS`](../asim/im-networksession-watchguardfirewareos.md)
- [`_Im_NetworkSession_ZscalerZIA`](../asim/im-networksession-zscalerzia.md)
- [`_im_NetworkSession_CorelightZeek`](../asim/im-networksession-corelightzeek.md)

## Tables Used

This content item queries data from the following tables:

- [`AzureDiagnostics`](../tables/azurediagnostics.md)
- [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)
- [`VMConnection`](../tables/vmconnection.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)

