# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Legacy IOC based Threat Protection

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Legacy IOC based Threat Protection Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.5 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-12-19 |
| **Solution Folder** | [Legacy IOC based Threat Protection](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Legacy%20IOC%20based%20Threat%20Protection) |
| **Pre-requisites** | [SquidProxy](squidproxy.md), [Windows Server DNS](windows-server-dns.md), [CiscoASA](ciscoasa.md), [PaloAlto-PAN-OS](paloalto-pan-os.md), [Microsoft Defender XDR](microsoft-defender-xdr.md), [Azure Firewall](azure-firewall.md), [Zscaler Internet Access](zscaler-internet-access.md), [Infoblox NIOS](infoblox-nios.md), [GoogleCloudPlatformDNS](googlecloudplatformdns.md), [NXLogDNSLogs](nxlogdnslogs.md), [CiscoUmbrella](ciscoumbrella.md), [Corelight](corelight.md), [Amazon Web Services](amazon-web-services.md), [Windows Forwarded Events](windows-forwarded-events.md), [Microsoft Sysmon For Linux](microsoft-sysmon-for-linux.md), [Microsoft 365](microsoft-365.md), [Windows Security Events](windows-security-events.md), [Microsoft Entra ID](microsoft-entra-id.md), [Azure Activity](azure-activity.md), [F5 Big-IP](f5-big-ip.md), [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md), [Check Point](check-point.md), [Common Event Format](common-event-format.md), [Windows Firewall](windows-firewall.md) |

Microsoft Security Research, based on ongoing trends and exploits creates content that help identify existence of known IOCs based on known prevalent attacks and threat actor tactics/techniques, such as Nobelium, Gallium, Solorigate, etc. This solution contains packaged content written on some legacy IOCs that have been prevalent in the past but may still be relevant.

For details on the data sources and ASIM parsers supported by this solution, see the [ASIM Pre-requisites](#asim-pre-requisites) section below.

## Contents

- [Pre-requisites](#pre-requisites)
- [ASIM Pre-requisites](#asim-pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Pre-requisites

This solution depends on **24 other solution(s)**:

| Solution | Details |
|:---------|:--------|
| [Amazon Web Services](amazon-web-services.md) | - |
| [Azure Activity](azure-activity.md) | - |
| [Azure Firewall](azure-firewall.md) | Also provides ASIM schemas: NetworkSession |
| [Check Point](check-point.md) | - |
| [CiscoASA](ciscoasa.md) | Also provides ASIM schemas: NetworkSession |
| [CiscoUmbrella](ciscoumbrella.md) | - |
| [Common Event Format](common-event-format.md) | Also provides ASIM schemas: NetworkSession |
| [Corelight](corelight.md) | Also provides ASIM schemas: NetworkSession |
| [F5 Big-IP](f5-big-ip.md) | - |
| [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md) | - |
| [GoogleCloudPlatformDNS](googlecloudplatformdns.md) | - |
| [Infoblox NIOS](infoblox-nios.md) | - |
| [Microsoft 365](microsoft-365.md) | - |
| [Microsoft Defender XDR](microsoft-defender-xdr.md) | Also provides ASIM schemas: RegistryEvent |
| [Microsoft Entra ID](microsoft-entra-id.md) | - |
| [Microsoft Sysmon For Linux](microsoft-sysmon-for-linux.md) | - |
| [NXLogDNSLogs](nxlogdnslogs.md) | - |
| [PaloAlto-PAN-OS](paloalto-pan-os.md) | - |
| [SquidProxy](squidproxy.md) | - |
| [Windows Firewall](windows-firewall.md) | - |
| [Windows Forwarded Events](windows-forwarded-events.md) | Also provides ASIM schemas: FileEvent, NetworkSession, ProcessEvent, RegistryEvent |
| [Windows Security Events](windows-security-events.md) | Also provides ASIM schemas: FileEvent, NetworkSession, ProcessEvent, RegistryEvent |
| [Windows Server DNS](windows-server-dns.md) | - |
| [Zscaler Internet Access](zscaler-internet-access.md) | - |

## <a id="asim-pre-requisites"></a><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Pre-requisites

This solution uses the [`imFileEvent`](../asim/imfileevent.md), [`imNetworkSession`](../asim/imnetworksession.md), [`imProcessCreate`](../asim/improcesscreate.md), and [`imRegistry`](../asim/imregistry.md) [ASIM (Advanced Security Information Model)](https://learn.microsoft.com/azure/sentinel/normalization) parsers to provide normalized, source-agnostic data access, expanding detection coverage without modifying queries.

### Supported Products

| Product | Dependency Solution |
|:--------|:--------------------|
| [AWS VPC](../asim/asim-products-index.md#aws-vpc) | [AWS VPC Flow Logs](aws-vpc-flow-logs.md) |
| [AppGate SDP](../asim/asim-products-index.md#appgate-sdp) | [Syslog](syslog.md) |
| [Azure Firewall](../asim/asim-products-index.md#azure-firewall) | [Azure Firewall](azure-firewall.md) |
| [Azure NSG flows](../asim/asim-products-index.md#azure-nsg-flows) | - |
| [Azure NTANetAnalytics](../asim/asim-products-index.md#azure-ntanetanalytics) | - |
| [Barracuda WAF](../asim/asim-products-index.md#barracuda-waf) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [CheckPointFirewall](../asim/asim-products-index.md#checkpointfirewall) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Cisco Firepower](../asim/asim-products-index.md#cisco-firepower) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Cisco ISE](../asim/asim-products-index.md#cisco-ise) | [Syslog](syslog.md) |
| [Cisco Meraki](../asim/asim-products-index.md#cisco-meraki) | [CiscoMeraki](ciscomeraki.md)<br>[CustomLogsAma](customlogsama.md)<br>[Syslog](syslog.md) |
| [CiscoASA](../asim/asim-products-index.md#ciscoasa) | [CiscoASA](ciscoasa.md)<br>[Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [CrowdStrike Falcon Endpoint Protection](../asim/asim-products-index.md#crowdstrike-falcon-endpoint-protection) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [ForcePointFirewall](../asim/asim-products-index.md#forcepointfirewall) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Fortinet FortiGate](../asim/asim-products-index.md#fortinet-fortigate) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Google Workspace](../asim/asim-products-index.md#google-workspace) | - |
| [Illumio SaaS Core](../asim/asim-products-index.md#illumio-saas-core) | [IllumioSaaS](illumiosaas.md) |
| [M365 Defender for Endpoint](../asim/asim-products-index.md#m365-defender-for-endpoint) | - |
| [Microsoft 365 Defender for EndPoint](../asim/asim-products-index.md#microsoft-365-defender-for-endpoint) | - |
| [Microsoft 365 Defender for Endpoint](../asim/asim-products-index.md#microsoft-365-defender-for-endpoint) | [Microsoft Defender XDR](microsoft-defender-xdr.md) |
| [Microsoft 365 Defender for endpoint](../asim/asim-products-index.md#microsoft-365-defender-for-endpoint) | - |
| [Microsoft Azure Blob Storage](../asim/asim-products-index.md#microsoft-azure-blob-storage) | [Azure Storage](azure-storage.md) |
| [Microsoft Azure File Storage](../asim/asim-products-index.md#microsoft-azure-file-storage) | [Azure Storage](azure-storage.md) |
| [Microsoft Azure Queue Storage](../asim/asim-products-index.md#microsoft-azure-queue-storage) | [Azure Storage](azure-storage.md) |
| [Microsoft Azure Table Storage](../asim/asim-products-index.md#microsoft-azure-table-storage) | [Azure Storage](azure-storage.md) |
| [Microsoft Defender for IoT](../asim/asim-products-index.md#microsoft-defender-for-iot) | - |
| [Microsoft SharePoint](../asim/asim-products-index.md#microsoft-sharepoint) | - |
| [Microsoft Sysmon](../asim/asim-products-index.md#microsoft-sysmon) | [Windows Forwarded Events](windows-forwarded-events.md) |
| [Microsoft Sysmon for Linux](../asim/asim-products-index.md#microsoft-sysmon-for-linux) | [Syslog](syslog.md) |
| [Microsoft Windows Events](../asim/asim-products-index.md#microsoft-windows-events) | [Windows Forwarded Events](windows-forwarded-events.md)<br>[Windows Security Events](windows-security-events.md) |
| [Native](../asim/asim-products-index.md#native) | [Cisco Meraki Events via REST API](cisco-meraki-events-via-rest-api.md)<br>[CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](vmware-carbon-black-cloud.md) |
| [Palo Alto Cortex Data Lake](../asim/asim-products-index.md#palo-alto-cortex-data-lake) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Palo Alto PanOS](../asim/asim-products-index.md#palo-alto-panos) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Security Events](../asim/asim-products-index.md#security-events) | [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md)<br>[Windows Forwarded Events](windows-forwarded-events.md)<br>[Windows Security Events](windows-security-events.md) |
| [SentinelOne](../asim/asim-products-index.md#sentinelone) | [SentinelOne](sentinelone.md) |
| [SonicWall](../asim/asim-products-index.md#sonicwall) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Sysmon for Linux](../asim/asim-products-index.md#sysmon-for-linux) | [Syslog](syslog.md) |
| [Trend Micro Vision One](../asim/asim-products-index.md#trend-micro-vision-one) | [Trend Micro Vision One](trend-micro-vision-one.md) |
| [VMConnection](../asim/asim-products-index.md#vmconnection) | - |
| [VMware Carbon Black Cloud](../asim/asim-products-index.md#vmware-carbon-black-cloud) | [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md) |
| [Vectra AI Streams](../asim/asim-products-index.md#vectra-ai-streams) | [CustomLogsAma](customlogsama.md)<br>[Vectra AI Stream](vectra-ai-stream.md) |
| [WatchGuard Fireware OS](../asim/asim-products-index.md#watchguard-fireware-os) | [Syslog](syslog.md) |
| [Windows Firewall](../asim/asim-products-index.md#windows-firewall) | [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md)<br>[Windows Forwarded Events](windows-forwarded-events.md)<br>[Windows Security Events](windows-security-events.md) |
| [Windows Sysmon](../asim/asim-products-index.md#windows-sysmon) | [Windows Forwarded Events](windows-forwarded-events.md) |
| [Zscaler ZIA Firewall](../asim/asim-products-index.md#zscaler-zia-firewall) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| - | [Corelight](corelight.md) |

## Data Connectors

**This solution does not include its own data connectors** but uses connectors from dependency solutions:

- [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) *(dependency on [Vectra AI Stream](vectra-ai-stream.md))*
- [Windows DNS Events via AMA](../connectors/asimdnsactivitylogs.md) *(dependency on [Windows Server DNS](windows-server-dns.md))*
- [Amazon Web Services](../connectors/aws.md) *(dependency on [Amazon Web Services](amazon-web-services.md))*
- [Amazon Web Services S3 VPC Flow Logs](../connectors/awss3vpcflowlogsparquetdefinition.md) *(dependency on [AWS VPC Flow Logs](aws-vpc-flow-logs.md))*
- [Amazon Web Services S3](../connectors/awss3.md) *(dependency on [Amazon Web Services](amazon-web-services.md))*
- [Amazon Web Services S3 WAF](../connectors/awss3wafccpdefinition.md) *(dependency on [Amazon Web Services](amazon-web-services.md))*
- [Microsoft Entra ID](../connectors/azureactivedirectory.md) *(dependency on [Microsoft Entra ID](microsoft-entra-id.md))*
- [Azure Activity](../connectors/azureactivity.md) *(dependency on [Azure Activity](azure-activity.md))*
- [Azure Firewall](../connectors/azurefirewall.md) *(dependency on [Azure Firewall](azure-firewall.md))*
- [Azure Storage Account](../connectors/azurestorageaccount.md) *(dependency on [Azure Storage](azure-storage.md))*
- [Common Event Format (CEF)](../connectors/cef.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Common Event Format (CEF) via AMA](../connectors/cefama.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md) *(dependency on [CiscoASA](ciscoasa.md))*
- [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) *(dependency on [CiscoASA](ciscoasa.md))*
- [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) *(dependency on [Cisco Meraki Events via REST API](cisco-meraki-events-via-rest-api.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) *(dependency on [CiscoUmbrella](ciscoumbrella.md))*
- [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) *(dependency on [CiscoUmbrella](ciscoumbrella.md))*
- [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) *(dependency on [Corelight](corelight.md))*
- [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Adversary Intelligence ](../connectors/crowdstrikefalconadversaryintelligence.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [[Deprecated] CrowdStrike Falcon Endpoint Protection via Legacy Agent](../connectors/crowdstrikefalconendpointprotection.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [[Deprecated] CrowdStrike Falcon Endpoint Protection via AMA](../connectors/crowdstrikefalconendpointprotectionama.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [Custom logs via AMA](../connectors/customlogsviaama.md) *(dependency on [CustomLogsAma](customlogsama.md))*
- [DNS](../connectors/dns.md) *(dependency on [Windows Server DNS](windows-server-dns.md))*
- [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Exchange Security Insights On-Premises Collector](../connectors/esi-exchangeonpremisescollector.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [IIS Logs of Microsoft Exchange Servers](../connectors/esi-opt5exchangeiislogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Message Tracking Logs](../connectors/esi-opt6exchangemessagetrackinglogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange HTTP Proxy Logs](../connectors/esi-opt7exchangehttpproxylogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [F5 BIG-IP](../connectors/f5bigip.md) *(dependency on [F5 Big-IP](f5-big-ip.md))*
- [[Deprecated] Fortinet via Legacy Agent](../connectors/fortinet.md) *(dependency on [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md))*
- [[Deprecated] Fortinet via AMA](../connectors/fortinetama.md) *(dependency on [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md))*
- [[DEPRECATED] Google Cloud Platform DNS](../connectors/gcpdnsdataconnector.md) *(dependency on [GoogleCloudPlatformDNS](googlecloudplatformdns.md))*
- [Google Cloud Platform DNS (via Codeless Connector Framework)](../connectors/gcpdnslogsccpdefinition.md) *(dependency on [GoogleCloudPlatformDNS](googlecloudplatformdns.md))*
- [Illumio SaaS](../connectors/illumiosaasdataconnector.md) *(dependency on [IllumioSaaS](illumiosaas.md))*
- [Illumio Saas](../connectors/illumiosaasccfdefinition.md) *(dependency on [IllumioSaaS](illumiosaas.md))*
- [[Deprecated] Infoblox NIOS](../connectors/infobloxnios.md) *(dependency on [Infoblox NIOS](infoblox-nios.md))*
- [[Deprecated] Microsoft Sysmon For Linux](../connectors/microsoftsysmonforlinux.md) *(dependency on [Microsoft Sysmon For Linux](microsoft-sysmon-for-linux.md))*
- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) *(dependency on [Microsoft Defender XDR](microsoft-defender-xdr.md))*
- [NXLog DNS Logs](../connectors/nxlogdnslogs.md) *(dependency on [NXLogDNSLogs](nxlogdnslogs.md))*
- [Microsoft 365 (formerly, Office 365)](../connectors/office365.md) *(dependency on [Microsoft 365](microsoft-365.md))*
- [[Deprecated] Palo Alto Networks (Firewall) via Legacy Agent](../connectors/paloaltonetworks.md) *(dependency on [PaloAlto-PAN-OS](paloalto-pan-os.md))*
- [[Deprecated] Palo Alto Networks (Firewall) via AMA](../connectors/paloaltonetworksama.md) *(dependency on [PaloAlto-PAN-OS](paloalto-pan-os.md))*
- [Security Events via Legacy Agent](../connectors/securityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*
- [SentinelOne](../connectors/sentinelone.md) *(dependency on [SentinelOne](sentinelone.md))*
- [SentinelOne](../connectors/sentineloneccp.md) *(dependency on [SentinelOne](sentinelone.md))*
- [[Deprecated] Squid Proxy](../connectors/squidproxy.md) *(dependency on [SquidProxy](squidproxy.md))*
- [Syslog via Legacy Agent](../connectors/syslog.md) *(dependency on [Syslog](syslog.md))*
- [Syslog via AMA](../connectors/syslogama.md) *(dependency on [Syslog](syslog.md))*
- [Trend Vision One](../connectors/trendmicroxdr.md) *(dependency on [Trend Micro Vision One](trend-micro-vision-one.md))*
- [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) *(dependency on [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md))*
- [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) *(dependency on [Vectra AI Stream](vectra-ai-stream.md))*
- [VirtualMetric Director Proxy](../connectors/virtualmetricdirectorproxy.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [VirtualMetric DataStream for Microsoft Sentinel](../connectors/virtualmetricmssentinelconnector.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [VirtualMetric DataStream for Microsoft Sentinel data lake](../connectors/virtualmetricmssentineldatalakeconnector.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [Windows Firewall](../connectors/windowsfirewall.md) *(dependency on [Windows Firewall](windows-firewall.md))*
- [Windows Firewall Events via AMA](../connectors/windowsfirewallama.md) *(dependency on [Windows Firewall](windows-firewall.md))*
- [Windows Forwarded Events](../connectors/windowsforwardedevents.md) *(dependency on [Windows Forwarded Events](windows-forwarded-events.md))*
- [Windows Security Events via AMA](../connectors/windowssecurityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*
- [[Deprecated] Zscaler via Legacy Agent](../connectors/zscaler.md) *(dependency on [Zscaler Internet Access](zscaler-internet-access.md))*
- [[Deprecated] Zscaler via AMA](../connectors/zscalerama.md) *(dependency on [Zscaler Internet Access](zscaler-internet-access.md))*
- [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) *(dependency on [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md))*

## Tables Used

This solution queries **11 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Hunting |
| [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md) | Hunting |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Hunting |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | Hunting |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | Hunting |
| [`Event`](../tables/event.md) | Hunting |
| [`Image`](../tables/image.md) | Hunting |
| [`SecurityEvent`](../tables/securityevent.md) | Hunting |
| [`VMConnection`](../tables/vmconnection.md) | Hunting |
| [`WindowsEvent`](../tables/windowsevent.md) | Hunting |
| [`imProcess`](../tables/improcess.md) | Hunting |

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
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Connection from external IP to OMI related Ports](../content/legacy-ioc-based-threat-protection-connection-from-external-ip-to-omi-related-ports-767b8f6d-8029-4c92-afe1-282167d9d49a-0ad0779a.md) | Reconnaissance, InitialAccess | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`imNetworkSession`](../asim/imnetworksession.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)<br>[`VMConnection`](../tables/vmconnection.md) |
| [Dev-0056 Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0056-command-line-activity-november-2021-e2629949-2043-4421-8064-bca23c8491dd-1cdb73c2.md) | CommandAndControl | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dev-0322 Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0322-command-line-activity-november-2021-78fa22f9-0c13-4847-bbe6-6a7aa1b47547-84856956.md) | Persistence, LateralMovement, CommandAndControl | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dev-0322 Command Line Activity November 2021 (ASIM Version)](../content/legacy-ioc-based-threat-protection-dev-0322-command-line-activity-november-2021-asim-version-6bfea14f-2122-46b3-8f8b-3947e0fb6d92-de921320.md) | Persistence, LateralMovement, CommandAndControl | [`imProcess`](../tables/improcess.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dev-0322 File Drop Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0322-file-drop-activity-november-2021-5bf2d4d8-ea03-4673-aaf8-716a61446022-414e8f6c.md) | Persistence, CommandAndControl | [`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Dev-0322 File Drop Activity November 2021 (ASIM Version)](../content/legacy-ioc-based-threat-protection-dev-0322-file-drop-activity-november-2021-asim-version-9b72769e-6ab1-4736-988b-018d92dc5e62-87c81fe1.md) | Persistence, CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`imFileEvent`](../asim/imfileevent.md)<br>[`imProcess`](../tables/improcess.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Known Nylon Typhoon Registry modifications patterns](../content/legacy-ioc-based-threat-protection-known-nylon-typhoon-registry-modifications-patterns-f090f8f4a-b986-42d2-b536-e0795c723e25-f442d105.md) | Persistence | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`imRegistry`](../asim/imregistry.md)<br>[`Event`](../tables/event.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Nylon Typhoon Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-nylon-typhoon-command-line-activity-november-2021-bb30abbc-9af6-4a37-9536-e9207e023989-bdd1efea.md) | Collection | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`imProcessCreate`](../asim/improcesscreate.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Retrospective hunt for Forest Blizzard IP IOCs](../content/legacy-ioc-based-threat-protection-retrospective-hunt-for-forest-blizzard-ip-iocs-b8b7574f-1cd6-4308-822a-ab07256106f8-95c2528a.md) | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [SolarWinds Inventory](../content/legacy-ioc-based-threat-protection-solarwinds-inventory-278592b5-612b-48a4-bb38-4c01ff8ee2a5-c7f23741.md) | Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`Event`](../tables/event.md)<br>[`Image`](../tables/image.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Solutions Index](../solutions-index.md)

