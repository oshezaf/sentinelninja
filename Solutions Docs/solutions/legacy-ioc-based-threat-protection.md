# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Legacy IOC based Threat Protection

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Legacy IOC based Threat Protection Logo" width="75" height="75">

Microsoft Security Research, based on ongoing trends and exploits creates content that help identify existence of known IOCs based on known prevalent attacks and threat actor tactics/techniques, such as Nobelium, Gallium, Solorigate, etc. This solution contains packaged content written on some legacy IOCs that have been prevalent in the past but may still be relevant.

**Pre-requisites:**

This is a [domain solution](https://learn.microsoft.com/azure/sentinel/sentinel-solutions-catalog#domain-solutions) and does not include any data connectors. The content in this solution supports the connectors listed below. Install one or more of the listed solutions, to unlock the value provided by this solution.

1. Squid Proxy

2. Windows Server DNS

3. Cisco ASA

4. Palo Alto Networks

5. Microsoft Defender XDR

6. Azure Firewall

7. ZScaler Internet Access

8. Infoblox NIOS

9. Google Cloud Platform DNS

10. NXLog DNS

11. Cisco Umbrella

12. Corelight 

13. Amazon Web Services

14. Windows Forwarded Events

15. Sysmon for Linux

16. Microsoft 365

17. Windows Security Events

18. Microsoft Entra ID

19. Azure Activity

20. F5 Advanced WAF

21. Fortinet FortiGate

22. Check Point

23. Common Event Format

24. Windows Firewall

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.5 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-12-19 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Legacy%20IOC%20based%20Threat%20Protection](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Legacy%20IOC%20based%20Threat%20Protection) |
| **Dependencies** | [SquidProxy](squidproxy.md), [Windows Server DNS](windows-server-dns.md), [CiscoASA](ciscoasa.md), [PaloAlto-PAN-OS](paloalto-pan-os.md), [Microsoft Defender XDR](microsoft-defender-xdr.md), [Azure Firewall](azure-firewall.md), [Zscaler Internet Access](zscaler-internet-access.md), [Infoblox NIOS](infoblox-nios.md), [GoogleCloudPlatformDNS](googlecloudplatformdns.md), [NXLogDNSLogs](nxlogdnslogs.md), [CiscoUmbrella](ciscoumbrella.md), [Corelight](corelight.md), [Amazon Web Services](amazon-web-services.md), [Windows Forwarded Events](windows-forwarded-events.md), [Microsoft Sysmon For Linux](microsoft-sysmon-for-linux.md), [Microsoft 365](microsoft-365.md), [Windows Security Events](windows-security-events.md), [Microsoft Entra ID](microsoft-entra-id.md), [Azure Activity](azure-activity.md), [F5 Big-IP](f5-big-ip.md), [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md), [Check Point](check-point.md), [Common Event Format](common-event-format.md), [Windows Firewall](windows-firewall.md) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This solution uses **71 ASIM parser(s)** for normalized data:

| Table | Used By Content |
|-------|----------------|
| [`_Im_FileEvent_AzureBlobStorage`](../asim/im-fileevent-azureblobstorage.md) | Hunting |
| [`_Im_FileEvent_AzureFileStorage`](../asim/im-fileevent-azurefilestorage.md) | Hunting |
| [`_Im_FileEvent_AzureQueueStorage`](../asim/im-fileevent-azurequeuestorage.md) | Hunting |
| [`_Im_FileEvent_AzureTableStorage`](../asim/im-fileevent-azuretablestorage.md) | Hunting |
| [`_Im_FileEvent_GoogleWorkspace`](../asim/im-fileevent-googleworkspace.md) | Hunting |
| [`_Im_FileEvent_LinuxSysmonFileCreated`](../asim/im-fileevent-linuxsysmonfilecreated.md) | Hunting |
| [`_Im_FileEvent_LinuxSysmonFileDeleted`](../asim/im-fileevent-linuxsysmonfiledeleted.md) | Hunting |
| [`_Im_FileEvent_Microsoft365D`](../asim/im-fileevent-microsoft365d.md) | Hunting |
| [`_Im_FileEvent_MicrosoftSecurityEvents`](../asim/im-fileevent-microsoftsecurityevents.md) | Hunting |
| [`_Im_FileEvent_MicrosoftSharePoint`](../asim/im-fileevent-microsoftsharepoint.md) | Hunting |
| [`_Im_FileEvent_MicrosoftSysmon`](../asim/im-fileevent-microsoftsysmon.md) | Hunting |
| [`_Im_FileEvent_MicrosoftSysmonWindowsEvent`](../asim/im-fileevent-microsoftsysmonwindowsevent.md) | Hunting |
| [`_Im_FileEvent_MicrosoftWindowsEvents`](../asim/im-fileevent-microsoftwindowsevents.md) | Hunting |
| [`_Im_FileEvent_Native`](../asim/im-fileevent-native.md) | Hunting |
| [`_Im_FileEvent_SentinelOne`](../asim/im-fileevent-sentinelone.md) | Hunting |
| [`_Im_FileEvent_VMwareCarbonBlackCloud`](../asim/im-fileevent-vmwarecarbonblackcloud.md) | Hunting |
| [`_Im_NetworkSession_AWSVPC`](../asim/im-networksession-awsvpc.md) | Hunting |
| [`_Im_NetworkSession_AppGateSDP`](../asim/im-networksession-appgatesdp.md) | Hunting |
| [`_Im_NetworkSession_AzureFirewall`](../asim/im-networksession-azurefirewall.md) | Hunting |
| [`_Im_NetworkSession_AzureNSG`](../asim/im-networksession-azurensg.md) | Hunting |
| [`_Im_NetworkSession_BarracudaCEF`](../asim/im-networksession-barracudacef.md) | Hunting |
| [`_Im_NetworkSession_BarracudaWAF`](../asim/im-networksession-barracudawaf.md) | Hunting |
| [`_Im_NetworkSession_CheckPointFirewall`](../asim/im-networksession-checkpointfirewall.md) | Hunting |
| [`_Im_NetworkSession_CiscoASA`](../asim/im-networksession-ciscoasa.md) | Hunting |
| [`_Im_NetworkSession_CiscoFirepower`](../asim/im-networksession-ciscofirepower.md) | Hunting |
| [`_Im_NetworkSession_CiscoISE`](../asim/im-networksession-ciscoise.md) | Hunting |
| [`_Im_NetworkSession_CiscoMeraki`](../asim/im-networksession-ciscomeraki.md) | Hunting |
| [`_Im_NetworkSession_CiscoMerakiSyslog`](../asim/im-networksession-ciscomerakisyslog.md) | Hunting |
| [`_Im_NetworkSession_CrowdStrikeFalconHost`](../asim/im-networksession-crowdstrikefalconhost.md) | Hunting |
| [`_Im_NetworkSession_ForcePointFirewall`](../asim/im-networksession-forcepointfirewall.md) | Hunting |
| [`_Im_NetworkSession_FortinetFortiGate`](../asim/im-networksession-fortinetfortigate.md) | Hunting |
| [`_Im_NetworkSession_IllumioSaaSCore`](../asim/im-networksession-illumiosaascore.md) | Hunting |
| [`_Im_NetworkSession_LinuxSysmon`](../asim/im-networksession-linuxsysmon.md) | Hunting |
| [`_Im_NetworkSession_MD4IoTAgent`](../asim/im-networksession-md4iotagent.md) | Hunting |
| [`_Im_NetworkSession_MD4IoTSensor`](../asim/im-networksession-md4iotsensor.md) | Hunting |
| [`_Im_NetworkSession_Microsoft365Defender`](../asim/im-networksession-microsoft365defender.md) | Hunting |
| [`_Im_NetworkSession_MicrosoftSecurityEventFirewall`](../asim/im-networksession-microsoftsecurityeventfirewall.md) | Hunting |
| [`_Im_NetworkSession_MicrosoftSysmon`](../asim/im-networksession-microsoftsysmon.md) | Hunting |
| [`_Im_NetworkSession_MicrosoftSysmonWindowsEvent`](../asim/im-networksession-microsoftsysmonwindowsevent.md) | Hunting |
| [`_Im_NetworkSession_MicrosoftWindowsEventFirewall`](../asim/im-networksession-microsoftwindowseventfirewall.md) | Hunting |
| [`_Im_NetworkSession_NTANetAnalytics`](../asim/im-networksession-ntanetanalytics.md) | Hunting |
| [`_Im_NetworkSession_Native`](../asim/im-networksession-native.md) | Hunting |
| [`_Im_NetworkSession_PaloAltoCEF`](../asim/im-networksession-paloaltocef.md) | Hunting |
| [`_Im_NetworkSession_PaloAltoCortexDataLake`](../asim/im-networksession-paloaltocortexdatalake.md) | Hunting |
| [`_Im_NetworkSession_SentinelOne`](../asim/im-networksession-sentinelone.md) | Hunting |
| [`_Im_NetworkSession_SonicWallFirewall`](../asim/im-networksession-sonicwallfirewall.md) | Hunting |
| [`_Im_NetworkSession_VMConnection`](../asim/im-networksession-vmconnection.md) | Hunting |
| [`_Im_NetworkSession_VMwareCarbonBlackCloud`](../asim/im-networksession-vmwarecarbonblackcloud.md) | Hunting |
| [`_Im_NetworkSession_VectraAI`](../asim/im-networksession-vectraai.md) | Hunting |
| [`_Im_NetworkSession_WatchGuardFirewareOS`](../asim/im-networksession-watchguardfirewareos.md) | Hunting |
| [`_Im_NetworkSession_ZscalerZIA`](../asim/im-networksession-zscalerzia.md) | Hunting |
| [`_Im_ProcessCreateTrendMicroVisionOne`](../asim/im-processcreatetrendmicrovisionone.md) | Hunting |
| [`_Im_ProcessCreate_LinuxSysmon`](../asim/im-processcreate-linuxsysmon.md) | Hunting |
| [`_Im_ProcessCreate_MD4IoT`](../asim/im-processcreate-md4iot.md) | Hunting |
| [`_Im_ProcessCreate_MicrosoftSecurityEvents`](../asim/im-processcreate-microsoftsecurityevents.md) | Hunting |
| [`_Im_ProcessCreate_MicrosoftSysmon`](../asim/im-processcreate-microsoftsysmon.md) | Hunting |
| [`_Im_ProcessCreate_MicrosoftWindowsEvents`](../asim/im-processcreate-microsoftwindowsevents.md) | Hunting |
| [`_Im_ProcessCreate_SentinelOne`](../asim/im-processcreate-sentinelone.md) | Hunting |
| [`_Im_ProcessCreate_VMwareCarbonBlackCloud`](../asim/im-processcreate-vmwarecarbonblackcloud.md) | Hunting |
| [`_Im_ProcessEvent_Microsoft365D`](../asim/im-processevent-microsoft365d.md) | Hunting |
| [`_Im_ProcessEvent_Native`](../asim/im-processevent-native.md) | Hunting |
| [`_Im_RegistryEvent_Microsoft365D`](../asim/im-registryevent-microsoft365d.md) | Hunting |
| [`_Im_RegistryEvent_MicrosoftSecurityEvent`](../asim/im-registryevent-microsoftsecurityevent.md) | Hunting |
| [`_Im_RegistryEvent_MicrosoftSysmon`](../asim/im-registryevent-microsoftsysmon.md) | Hunting |
| [`_Im_RegistryEvent_MicrosoftSysmonWindowsEvent`](../asim/im-registryevent-microsoftsysmonwindowsevent.md) | Hunting |
| [`_Im_RegistryEvent_MicrosoftWindowsEvent`](../asim/im-registryevent-microsoftwindowsevent.md) | Hunting |
| [`_Im_RegistryEvent_Native`](../asim/im-registryevent-native.md) | Hunting |
| [`_Im_RegistryEvent_SentinelOne`](../asim/im-registryevent-sentinelone.md) | Hunting |
| [`_Im_RegistryEvent_TrendMicroVisionOne`](../asim/im-registryevent-trendmicrovisionone.md) | Hunting |
| [`_Im_RegistryEvent_VMwareCarbonBlackCloud`](../asim/im-registryevent-vmwarecarbonblackcloud.md) | Hunting |
| [`_im_NetworkSession_CorelightZeek`](../asim/im-networksession-corelightzeek.md) | Hunting |

## Tables Used

This solution queries **9 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Hunting |
| [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md) | Hunting |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Hunting |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | Hunting |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | Hunting |
| [`Event`](../tables/event.md) | Hunting |
| [`SecurityEvent`](../tables/securityevent.md) | Hunting |
| [`VMConnection`](../tables/vmconnection.md) | Hunting |
| [`WindowsEvent`](../tables/windowsevent.md) | Hunting |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | Hunting |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 10 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Connection from external IP to OMI related Ports](../content/legacy-ioc-based-threat-protection-connection-from-external-ip-to-omi-related-ports-767b8f6d-8029-4c92-afe1-282167d9d49a-0ad0779a.md) | Reconnaissance, InitialAccess | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_AWSVPC`](../asim/im-networksession-awsvpc.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_AppGateSDP`](../asim/im-networksession-appgatesdp.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_AzureFirewall`](../asim/im-networksession-azurefirewall.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_AzureNSG`](../asim/im-networksession-azurensg.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_BarracudaCEF`](../asim/im-networksession-barracudacef.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_BarracudaWAF`](../asim/im-networksession-barracudawaf.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_CheckPointFirewall`](../asim/im-networksession-checkpointfirewall.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_CiscoASA`](../asim/im-networksession-ciscoasa.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_CiscoFirepower`](../asim/im-networksession-ciscofirepower.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_CiscoISE`](../asim/im-networksession-ciscoise.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_CiscoMeraki`](../asim/im-networksession-ciscomeraki.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_CiscoMerakiSyslog`](../asim/im-networksession-ciscomerakisyslog.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_CrowdStrikeFalconHost`](../asim/im-networksession-crowdstrikefalconhost.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_ForcePointFirewall`](../asim/im-networksession-forcepointfirewall.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_FortinetFortiGate`](../asim/im-networksession-fortinetfortigate.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_IllumioSaaSCore`](../asim/im-networksession-illumiosaascore.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_LinuxSysmon`](../asim/im-networksession-linuxsysmon.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_MD4IoTAgent`](../asim/im-networksession-md4iotagent.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_MD4IoTSensor`](../asim/im-networksession-md4iotsensor.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_Microsoft365Defender`](../asim/im-networksession-microsoft365defender.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_MicrosoftSecurityEventFirewall`](../asim/im-networksession-microsoftsecurityeventfirewall.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_MicrosoftSysmon`](../asim/im-networksession-microsoftsysmon.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_MicrosoftSysmonWindowsEvent`](../asim/im-networksession-microsoftsysmonwindowsevent.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_MicrosoftWindowsEventFirewall`](../asim/im-networksession-microsoftwindowseventfirewall.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_NTANetAnalytics`](../asim/im-networksession-ntanetanalytics.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_Native`](../asim/im-networksession-native.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_PaloAltoCEF`](../asim/im-networksession-paloaltocef.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_PaloAltoCortexDataLake`](../asim/im-networksession-paloaltocortexdatalake.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_SentinelOne`](../asim/im-networksession-sentinelone.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_SonicWallFirewall`](../asim/im-networksession-sonicwallfirewall.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_VMConnection`](../asim/im-networksession-vmconnection.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_VMwareCarbonBlackCloud`](../asim/im-networksession-vmwarecarbonblackcloud.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_VectraAI`](../asim/im-networksession-vectraai.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_WatchGuardFirewareOS`](../asim/im-networksession-watchguardfirewareos.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession_ZscalerZIA`](../asim/im-networksession-zscalerzia.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_im_NetworkSession_CorelightZeek`](../asim/im-networksession-corelightzeek.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)<br>[`VMConnection`](../tables/vmconnection.md) |
| [Dev-0056 Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0056-command-line-activity-november-2021-e2629949-2043-4421-8064-bca23c8491dd-1cdb73c2.md) | CommandAndControl | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dev-0322 Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0322-command-line-activity-november-2021-78fa22f9-0c13-4847-bbe6-6a7aa1b47547-84856956.md) | Persistence, LateralMovement, CommandAndControl | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dev-0322 Command Line Activity November 2021 (ASIM Version)](../content/legacy-ioc-based-threat-protection-dev-0322-command-line-activity-november-2021-asim-version-6bfea14f-2122-46b3-8f8b-3947e0fb6d92-de921320.md) | Persistence, LateralMovement, CommandAndControl | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dev-0322 File Drop Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0322-file-drop-activity-november-2021-5bf2d4d8-ea03-4673-aaf8-716a61446022-414e8f6c.md) | Persistence, CommandAndControl | [`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Dev-0322 File Drop Activity November 2021 (ASIM Version)](../content/legacy-ioc-based-threat-protection-dev-0322-file-drop-activity-november-2021-asim-version-9b72769e-6ab1-4736-988b-018d92dc5e62-87c81fe1.md) | Persistence, CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_AzureBlobStorage`](../asim/im-fileevent-azureblobstorage.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_AzureFileStorage`](../asim/im-fileevent-azurefilestorage.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_AzureQueueStorage`](../asim/im-fileevent-azurequeuestorage.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_AzureTableStorage`](../asim/im-fileevent-azuretablestorage.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_GoogleWorkspace`](../asim/im-fileevent-googleworkspace.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_LinuxSysmonFileCreated`](../asim/im-fileevent-linuxsysmonfilecreated.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_LinuxSysmonFileDeleted`](../asim/im-fileevent-linuxsysmonfiledeleted.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_Microsoft365D`](../asim/im-fileevent-microsoft365d.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_MicrosoftSecurityEvents`](../asim/im-fileevent-microsoftsecurityevents.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_MicrosoftSharePoint`](../asim/im-fileevent-microsoftsharepoint.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_MicrosoftSysmon`](../asim/im-fileevent-microsoftsysmon.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_MicrosoftSysmonWindowsEvent`](../asim/im-fileevent-microsoftsysmonwindowsevent.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_MicrosoftWindowsEvents`](../asim/im-fileevent-microsoftwindowsevents.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_Native`](../asim/im-fileevent-native.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_SentinelOne`](../asim/im-fileevent-sentinelone.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent_VMwareCarbonBlackCloud`](../asim/im-fileevent-vmwarecarbonblackcloud.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Known Nylon Typhoon Registry modifications patterns](../content/legacy-ioc-based-threat-protection-known-nylon-typhoon-registry-modifications-patterns-f090f8f4a-b986-42d2-b536-e0795c723e25-f442d105.md) | Persistence | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_RegistryEvent_Microsoft365D`](../asim/im-registryevent-microsoft365d.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_RegistryEvent_MicrosoftSecurityEvent`](../asim/im-registryevent-microsoftsecurityevent.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_RegistryEvent_MicrosoftSysmon`](../asim/im-registryevent-microsoftsysmon.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_RegistryEvent_MicrosoftSysmonWindowsEvent`](../asim/im-registryevent-microsoftsysmonwindowsevent.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_RegistryEvent_MicrosoftWindowsEvent`](../asim/im-registryevent-microsoftwindowsevent.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_RegistryEvent_Native`](../asim/im-registryevent-native.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_RegistryEvent_SentinelOne`](../asim/im-registryevent-sentinelone.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_RegistryEvent_TrendMicroVisionOne`](../asim/im-registryevent-trendmicrovisionone.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_RegistryEvent_VMwareCarbonBlackCloud`](../asim/im-registryevent-vmwarecarbonblackcloud.md)<br>[`Event`](../tables/event.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Nylon Typhoon Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-nylon-typhoon-command-line-activity-november-2021-bb30abbc-9af6-4a37-9536-e9207e023989-bdd1efea.md) | Collection | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_ProcessCreateTrendMicroVisionOne`](../asim/im-processcreatetrendmicrovisionone.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_ProcessCreate_LinuxSysmon`](../asim/im-processcreate-linuxsysmon.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_ProcessCreate_MD4IoT`](../asim/im-processcreate-md4iot.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_ProcessCreate_MicrosoftSecurityEvents`](../asim/im-processcreate-microsoftsecurityevents.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_ProcessCreate_MicrosoftSysmon`](../asim/im-processcreate-microsoftsysmon.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_ProcessCreate_MicrosoftWindowsEvents`](../asim/im-processcreate-microsoftwindowsevents.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_ProcessCreate_SentinelOne`](../asim/im-processcreate-sentinelone.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_ProcessCreate_VMwareCarbonBlackCloud`](../asim/im-processcreate-vmwarecarbonblackcloud.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_ProcessEvent_Microsoft365D`](../asim/im-processevent-microsoft365d.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_ProcessEvent_Native`](../asim/im-processevent-native.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Retrospective hunt for Forest Blizzard IP IOCs](../content/legacy-ioc-based-threat-protection-retrospective-hunt-for-forest-blizzard-ip-iocs-b8b7574f-1cd6-4308-822a-ab07256106f8-95c2528a.md) | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [SolarWinds Inventory](../content/legacy-ioc-based-threat-protection-solarwinds-inventory-278592b5-612b-48a4-bb38-4c01ff8ee2a5-c7f23741.md) | Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`Event`](../tables/event.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.0.5       | 03-06-2024                     | Added missing AMA **Data Connector** reference in **Hunting Query**     |
| 3.0.4       | 22-02-2024                     | Tagged for dependent solutions for deployment                                  |
| 3.0.3       | 19-12-2023                     | Corrected typo mistake *Microsoft Windows DNS* to *Windows Server DNS*         |                           
| 3.0.2       | 12-12-2023                     | Removed deprecated **Analytical Rules**                                        |
| 3.0.1       | 07-11-2023                     | Changes for rebranding from Azure Active Directory to Microsoft Entra ID & Microsoft 365 Defender to Microsoft Defender XDR   |
| 3.0.0       | 19-05-2023                     | Deprecating outdated IOC Based **Analytic Rules** 		                        |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

