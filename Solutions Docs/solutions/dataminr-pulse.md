# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Dataminr Pulse

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/DataminrPulse.svg" alt="Dataminr Pulse Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

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
| **Solution Folder** | [Dataminr Pulse](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dataminr%20Pulse) |

Dataminr Pulse brings the most advanced AI-powered real-time intelligence into Microsoft Sentinel, easily fitting into your workflows and enabling rapid identification and mitigation of emerging threats so you can deliver faster time to detection and response.

## Contents

- [ASIM Pre-requisites](#asim-pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## <a id="asim-pre-requisites"></a><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Pre-requisites

This solution uses the [`ASimAuditEvent`](../asim/asimauditevent.md), [`ASimDns`](../asim/asimdns.md), [`ASimNetworkSession`](../asim/asimnetworksession.md), [`ASimProcessEvent`](../asim/asimprocessevent.md), [`ASimWebSession`](../asim/asimwebsession.md), and [`imFileEvent`](../asim/imfileevent.md) [ASIM (Advanced Security Information Model)](https://learn.microsoft.com/azure/sentinel/normalization) parsers to provide normalized, source-agnostic data access, expanding detection coverage without modifying queries.

### Supported Products

| Product | Dependency Solution |
|:--------|:--------------------|
| [AWS VPC](../asim/asim-products-index.md#aws-vpc) | [AWS VPC Flow Logs](aws-vpc-flow-logs.md) |
| [Apache HTTP Server](../asim/asim-products-index.md#apache-http-server) | [CustomLogsAma](customlogsama.md) |
| [AppGate SDP](../asim/asim-products-index.md#appgate-sdp) | [Syslog](syslog.md) |
| [Azure Firewall](../asim/asim-products-index.md#azure-firewall) | [Azure Firewall](azure-firewall.md) |
| [Azure NSG flows](../asim/asim-products-index.md#azure-nsg-flows) | - |
| [Azure NTANetAnalytics](../asim/asim-products-index.md#azure-ntanetanalytics) | - |
| [Barracuda WAF](../asim/asim-products-index.md#barracuda-waf) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [CheckPointFirewall](../asim/asim-products-index.md#checkpointfirewall) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Cisco Firepower](../asim/asim-products-index.md#cisco-firepower) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Cisco ISE](../asim/asim-products-index.md#cisco-ise) | [Syslog](syslog.md) |
| [Cisco Meraki](../asim/asim-products-index.md#cisco-meraki) | [Cisco SD-WAN](cisco-sd-wan.md)<br>[CiscoMeraki](ciscomeraki.md)<br>[CustomLogsAma](customlogsama.md)<br>[Forescout (Legacy)](forescout-legacy.md)<br>[Syslog](syslog.md) |
| [Cisco Umbrella](../asim/asim-products-index.md#cisco-umbrella) | [CiscoUmbrella](ciscoumbrella.md) |
| [CiscoASA](../asim/asim-products-index.md#ciscoasa) | [CiscoASA](ciscoasa.md)<br>[Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Citrix NetScaler](../asim/asim-products-index.md#citrix-netscaler) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Corelight Zeek](../asim/asim-products-index.md#corelight-zeek) | [Corelight](corelight.md) |
| [CrowdStrike Falcon Endpoint Protection](../asim/asim-products-index.md#crowdstrike-falcon-endpoint-protection) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [F5 BIG-IP Application Security Manager (ASM)](../asim/asim-products-index.md#f5-big-ip-application-security-manager-asm) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [ForcePointFirewall](../asim/asim-products-index.md#forcepointfirewall) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Fortinet FortiGate](../asim/asim-products-index.md#fortinet-fortigate) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [GCP Cloud DNS](../asim/asim-products-index.md#gcp-cloud-dns) | - |
| [Google Workspace](../asim/asim-products-index.md#google-workspace) | - |
| [Illumio Core](../asim/asim-products-index.md#illumio-core) | [IllumioSaaS](illumiosaas.md) |
| [Illumio SaaS Core](../asim/asim-products-index.md#illumio-saas-core) | [IllumioSaaS](illumiosaas.md) |
| [Infoblox BloxOne](../asim/asim-products-index.md#infoblox-bloxone) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Infoblox NIOS](../asim/asim-products-index.md#infoblox-nios) | [Syslog](syslog.md) |
| [Internet Information Services (IIS)](../asim/asim-products-index.md#internet-information-services-iis) | [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md) |
| [M365 Defender for Endpoint](../asim/asim-products-index.md#m365-defender-for-endpoint) | - |
| [MS DNS Events](../asim/asim-products-index.md#ms-dns-events) | [NXLogDNSLogs](nxlogdnslogs.md)<br>[Windows Server DNS](windows-server-dns.md) |
| [Microsoft 365 Defender for EndPoint](../asim/asim-products-index.md#microsoft-365-defender-for-endpoint) | - |
| [Microsoft 365 Defender for endpoint](../asim/asim-products-index.md#microsoft-365-defender-for-endpoint) | - |
| [Microsoft Azure](../asim/asim-products-index.md#microsoft-azure) | [Azure Activity](azure-activity.md) |
| [Microsoft Azure Blob Storage](../asim/asim-products-index.md#microsoft-azure-blob-storage) | [Azure Storage](azure-storage.md) |
| [Microsoft Azure File Storage](../asim/asim-products-index.md#microsoft-azure-file-storage) | [Azure Storage](azure-storage.md) |
| [Microsoft Azure Queue Storage](../asim/asim-products-index.md#microsoft-azure-queue-storage) | [Azure Storage](azure-storage.md) |
| [Microsoft Azure Table Storage](../asim/asim-products-index.md#microsoft-azure-table-storage) | [Azure Storage](azure-storage.md) |
| [Microsoft Defender for IoT](../asim/asim-products-index.md#microsoft-defender-for-iot) | - |
| [Microsoft SharePoint](../asim/asim-products-index.md#microsoft-sharepoint) | - |
| [Microsoft Sysmon for Linux](../asim/asim-products-index.md#microsoft-sysmon-for-linux) | [Syslog](syslog.md) |
| [Microsoft Windows](../asim/asim-products-index.md#microsoft-windows) | [Windows Forwarded Events](windows-forwarded-events.md)<br>[Windows Security Events](windows-security-events.md) |
| [Microsoft Windows Events](../asim/asim-products-index.md#microsoft-windows-events) | [Windows Forwarded Events](windows-forwarded-events.md)<br>[Windows Security Events](windows-security-events.md) |
| [Microsoft Windows Events Sysmon](../asim/asim-products-index.md#microsoft-windows-events-sysmon) | [Windows Forwarded Events](windows-forwarded-events.md) |
| [Native](../asim/asim-products-index.md#native) | [Cisco Meraki Events via REST API](cisco-meraki-events-via-rest-api.md)<br>[CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](vmware-carbon-black-cloud.md)<br>[Workday](workday.md) |
| [Palo Alto Cortex Data Lake](../asim/asim-products-index.md#palo-alto-cortex-data-lake) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Palo Alto Networks](../asim/asim-products-index.md#palo-alto-networks) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Palo Alto PanOS](../asim/asim-products-index.md#palo-alto-panos) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Security Events](../asim/asim-products-index.md#security-events) | [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md)<br>[Windows Forwarded Events](windows-forwarded-events.md)<br>[Windows Security Events](windows-security-events.md) |
| [SentinelOne](../asim/asim-products-index.md#sentinelone) | [SentinelOne](sentinelone.md) |
| [SonicWall](../asim/asim-products-index.md#sonicwall) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Squid Proxy](../asim/asim-products-index.md#squid-proxy) | [CustomLogsAma](customlogsama.md) |
| [Sysmon](../asim/asim-products-index.md#sysmon) | [Windows Forwarded Events](windows-forwarded-events.md) |
| [Sysmon for Linux](../asim/asim-products-index.md#sysmon-for-linux) | [Syslog](syslog.md) |
| [Trend Micro Vision One](../asim/asim-products-index.md#trend-micro-vision-one) | [Trend Micro Vision One](trend-micro-vision-one.md) |
| [VMConnection](../asim/asim-products-index.md#vmconnection) | - |
| [VMware Carbon Black Cloud](../asim/asim-products-index.md#vmware-carbon-black-cloud) | [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md) |
| [Vectra](../asim/asim-products-index.md#vectra) | [Vectra XDR](vectra-xdr.md) |
| [Vectra AI Streams](../asim/asim-products-index.md#vectra-ai-streams) | [CustomLogsAma](customlogsama.md)<br>[Vectra AI Stream](vectra-ai-stream.md) |
| [WatchGuard Fireware OS](../asim/asim-products-index.md#watchguard-fireware-os) | [Syslog](syslog.md) |
| [Windows Firewall](../asim/asim-products-index.md#windows-firewall) | [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md)<br>[Windows Forwarded Events](windows-forwarded-events.md)<br>[Windows Security Events](windows-security-events.md) |
| [Windows Sysmon](../asim/asim-products-index.md#windows-sysmon) | [Windows Forwarded Events](windows-forwarded-events.md) |
| [Zscaler ZIA](../asim/asim-products-index.md#zscaler-zia) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Zscaler ZIA DNS](../asim/asim-products-index.md#zscaler-zia-dns) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Zscaler ZIA Firewall](../asim/asim-products-index.md#zscaler-zia-firewall) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Dataminr Pulse Alerts Data Connector](../connectors/dataminrpulsealerts.md)

Connectors from dependency solutions:

- [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) 🔶 *(dependency on [Vectra AI Stream](vectra-ai-stream.md))*
- [Windows DNS Events via AMA](../connectors/asimdnsactivitylogs.md) *(dependency on [Windows Server DNS](windows-server-dns.md))*
- [Amazon Web Services S3 VPC Flow Logs](../connectors/awss3vpcflowlogsparquetdefinition.md) *(dependency on [AWS VPC Flow Logs](aws-vpc-flow-logs.md))*
- [Azure Activity](../connectors/azureactivity.md) *(dependency on [Azure Activity](azure-activity.md))*
- [Azure Firewall](../connectors/azurefirewall.md) 🔶 *(dependency on [Azure Firewall](azure-firewall.md))*
- [Azure Storage Account](../connectors/azurestorageaccount.md) *(dependency on [Azure Storage](azure-storage.md))*
- [Common Event Format (CEF)](../connectors/cef.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Common Event Format (CEF) via AMA](../connectors/cefama.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md) *(dependency on [CiscoASA](ciscoasa.md))*
- [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) *(dependency on [CiscoASA](ciscoasa.md))*
- [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) 🔶 *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) 🔶 *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) *(dependency on [Cisco Meraki Events via REST API](cisco-meraki-events-via-rest-api.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) 🔶 *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Cisco Software Defined WAN](../connectors/ciscosdwan.md) 🔶 *(dependency on [Cisco SD-WAN](cisco-sd-wan.md))*
- [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) 🔶 *(dependency on [CiscoUmbrella](ciscoumbrella.md))*
- [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) 🔶 *(dependency on [CiscoUmbrella](ciscoumbrella.md))*
- [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) 🔶 *(dependency on [Corelight](corelight.md))*
- [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Adversary Intelligence ](../connectors/crowdstrikefalconadversaryintelligence.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [[Deprecated] CrowdStrike Falcon Endpoint Protection via Legacy Agent](../connectors/crowdstrikefalconendpointprotection.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [[Deprecated] CrowdStrike Falcon Endpoint Protection via AMA](../connectors/crowdstrikefalconendpointprotectionama.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) 🔶 *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) 🔶 *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [Custom logs via AMA](../connectors/customlogsviaama.md) 🔶 *(dependency on [CustomLogsAma](customlogsama.md))*
- [DNS](../connectors/dns.md) *(dependency on [Windows Server DNS](windows-server-dns.md))*
- [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) 🔶 *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Exchange Security Insights On-Premises Collector](../connectors/esi-exchangeonpremisescollector.md) 🔶 *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [IIS Logs of Microsoft Exchange Servers](../connectors/esi-opt5exchangeiislogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Message Tracking Logs](../connectors/esi-opt6exchangemessagetrackinglogs.md) 🔶 *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange HTTP Proxy Logs](../connectors/esi-opt7exchangehttpproxylogs.md) 🔶 *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Forescout](../connectors/forescout.md) *(dependency on [Forescout (Legacy)](forescout-legacy.md))*
- [Illumio SaaS](../connectors/illumiosaasdataconnector.md) *(dependency on [IllumioSaaS](illumiosaas.md))*
- [Illumio Saas](../connectors/illumiosaasccfdefinition.md) *(dependency on [IllumioSaaS](illumiosaas.md))*
- [NXLog DNS Logs](../connectors/nxlogdnslogs.md) 🔶 *(dependency on [NXLogDNSLogs](nxlogdnslogs.md))*
- [Security Events via Legacy Agent](../connectors/securityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*
- [SentinelOne](../connectors/sentinelone.md) 🔶 *(dependency on [SentinelOne](sentinelone.md))*
- [SentinelOne](../connectors/sentineloneccp.md) 🔶 *(dependency on [SentinelOne](sentinelone.md))*
- [Syslog via Legacy Agent](../connectors/syslog.md) *(dependency on [Syslog](syslog.md))*
- [Syslog via AMA](../connectors/syslogama.md) *(dependency on [Syslog](syslog.md))*
- [Trend Vision One](../connectors/trendmicroxdr.md) 🔶 *(dependency on [Trend Micro Vision One](trend-micro-vision-one.md))*
- [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) 🔶 *(dependency on [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md))*
- [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) 🔶 *(dependency on [Vectra AI Stream](vectra-ai-stream.md))*
- [Vectra XDR](../connectors/vectraxdr.md) *(dependency on [Vectra XDR](vectra-xdr.md))*
- [VirtualMetric Director Proxy](../connectors/virtualmetricdirectorproxy.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [VirtualMetric DataStream for Microsoft Sentinel](../connectors/virtualmetricmssentinelconnector.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [VirtualMetric DataStream for Microsoft Sentinel data lake](../connectors/virtualmetricmssentineldatalakeconnector.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [Windows Forwarded Events](../connectors/windowsforwardedevents.md) *(dependency on [Windows Forwarded Events](windows-forwarded-events.md))*
- [Windows Security Events via AMA](../connectors/windowssecurityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*
- [Workday User Activity](../connectors/workdayccpdefinition.md) *(dependency on [Workday](workday.md))*
- [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) *(dependency on [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md))*

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **239 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) | [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) (dependency), [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency), [Workday User Activity](../connectors/workdayccpdefinition.md) (dependency) | - |
| [`ASimAuthenticationEventLogs`](../tables/asimauthenticationeventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency), [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`ASimAuthenticationEventLogs_CL`](../tables/asimauthenticationeventlogs-cl.md) 🔶 | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimDnsActivityLogs`](../tables/asimdnsactivitylogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency), [Windows DNS Events via AMA](../connectors/asimdnsactivitylogs.md) (dependency) | - |
| [`ASimFileEventLogs`](../tables/asimfileeventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency), [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`ASimFileEventLogs_CL`](../tables/asimfileeventlogs-cl.md) 🔶 | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) (dependency), [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency), [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`ASimProcessEventLogs`](../tables/asimprocesseventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency), [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`ASimProcessEventLogs_CL`](../tables/asimprocesseventlogs-cl.md) 🔶 | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimRegistryEventLogs`](../tables/asimregistryeventlogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency), [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`ASimRegistryEventLogs_CL`](../tables/asimregistryeventlogs-cl.md) 🔶 | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimUserManagementActivityLogs`](../tables/asimusermanagementactivitylogs.md) | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimUserManagementLogs_CL`](../tables/asimusermanagementlogs-cl.md) 🔶 | [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`ASimWebSessionLogs`](../tables/asimwebsessionlogs.md) | [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) (dependency) | - |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | [Amazon Web Services S3 VPC Flow Logs](../connectors/awss3vpcflowlogsparquetdefinition.md) (dependency) | - |
| [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWDnsQuery`](../tables/azfwdnsquery.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWFatFlow`](../tables/azfwfatflow.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWFlowTrace`](../tables/azfwflowtrace.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWIdpsSignature`](../tables/azfwidpssignature.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWInternalFqdnResolutionFailure`](../tables/azfwinternalfqdnresolutionfailure.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWNatRule`](../tables/azfwnatrule.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWNetworkRule`](../tables/azfwnetworkrule.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWThreatIntel`](../tables/azfwthreatintel.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`Audits_Data_CL`](../tables/audits-data-cl.md) | [Vectra XDR](../connectors/vectraxdr.md) (dependency) | - |
| [`AzureActivity`](../tables/azureactivity.md) | [Azure Activity](../connectors/azureactivity.md) (dependency) | - |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) 🔶 | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AzureMetrics`](../tables/azuremetrics.md) | [Azure Storage Account](../connectors/azurestorageaccount.md) (dependency) | - |
| [`CarbonBlackAuditLogs_CL`](../tables/carbonblackauditlogs-cl.md) 🔶 | [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) (dependency) | - |
| [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md) 🔶 | [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) (dependency) | - |
| [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md) 🔶 | [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) (dependency) | - |
| [`CarbonBlack_Alerts_CL`](../tables/carbonblack-alerts-cl.md) | [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`CarbonBlack_Watchlist_CL`](../tables/carbonblack-watchlist-cl.md) | [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`CiscoMerakiNativePoller_CL`](../tables/ciscomerakinativepoller-cl.md) | [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) (dependency), [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) (dependency), [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) (dependency) | - |
| [`CiscoSDWANNetflow_CL`](../tables/ciscosdwannetflow-cl.md) 🔶 | [Cisco Software Defined WAN](../connectors/ciscosdwan.md) (dependency) | - |
| [`Cisco_Umbrella_audit_CL`](../tables/cisco-umbrella-audit-cl.md) 🔶 | [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) (dependency), [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) (dependency) | - |
| [`Cisco_Umbrella_cloudfirewall_CL`](../tables/cisco-umbrella-cloudfirewall-cl.md) 🔶 | [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) (dependency), [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) (dependency) | - |
| [`Cisco_Umbrella_dlp_CL`](../tables/cisco-umbrella-dlp-cl.md) 🔶 | [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) (dependency), [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) (dependency) | - |
| [`Cisco_Umbrella_dns_CL`](../tables/cisco-umbrella-dns-cl.md) 🔶 | [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) (dependency), [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) (dependency) | - |
| [`Cisco_Umbrella_fileevent_CL`](../tables/cisco-umbrella-fileevent-cl.md) 🔶 | [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) (dependency), [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) (dependency) | - |
| [`Cisco_Umbrella_firewall_CL`](../tables/cisco-umbrella-firewall-cl.md) 🔶 | [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) (dependency), [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) (dependency) | - |
| [`Cisco_Umbrella_intrusion_CL`](../tables/cisco-umbrella-intrusion-cl.md) 🔶 | [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) (dependency), [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) (dependency) | - |
| [`Cisco_Umbrella_ip_CL`](../tables/cisco-umbrella-ip-cl.md) 🔶 | [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) (dependency), [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) (dependency) | - |
| [`Cisco_Umbrella_proxy_CL`](../tables/cisco-umbrella-proxy-cl.md) 🔶 | [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) (dependency), [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) (dependency) | - |
| [`Cisco_Umbrella_ravpnlogs_CL`](../tables/cisco-umbrella-ravpnlogs-cl.md) 🔶 | [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) (dependency), [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) (dependency) | - |
| [`Cisco_Umbrella_ztaflow_CL`](../tables/cisco-umbrella-ztaflow-cl.md) 🔶 | [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) (dependency), [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) (dependency) | - |
| [`Cisco_Umbrella_ztna_CL`](../tables/cisco-umbrella-ztna-cl.md) 🔶 | [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) (dependency), [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) (dependency) | - |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md) (dependency), [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) (dependency), [Common Event Format (CEF)](../connectors/cef.md) (dependency), [Common Event Format (CEF) via AMA](../connectors/cefama.md) (dependency), [VirtualMetric DataStream for Microsoft Sentinel](../connectors/virtualmetricmssentinelconnector.md) (dependency), [VirtualMetric DataStream for Microsoft Sentinel data lake](../connectors/virtualmetricmssentineldatalakeconnector.md) (dependency), [VirtualMetric Director Proxy](../connectors/virtualmetricdirectorproxy.md) (dependency), [[Deprecated] CrowdStrike Falcon Endpoint Protection via AMA](../connectors/crowdstrikefalconendpointprotectionama.md) (dependency), [[Deprecated] CrowdStrike Falcon Endpoint Protection via Legacy Agent](../connectors/crowdstrikefalconendpointprotection.md) (dependency) | - |
| [`Corelight_CL`](../tables/corelight-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_bacnet_CL`](../tables/corelight-v2-bacnet-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_capture_loss_CL`](../tables/corelight-v2-capture-loss-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_cip_CL`](../tables/corelight-v2-cip-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_conn_CL`](../tables/corelight-v2-conn-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_conn_long_CL`](../tables/corelight-v2-conn-long-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_conn_red_CL`](../tables/corelight-v2-conn-red-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_corelight_burst_CL`](../tables/corelight-v2-corelight-burst-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_corelight_overall_capture_loss_CL`](../tables/corelight-v2-corelight-overall-capture-loss-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_corelight_profiling_CL`](../tables/corelight-v2-corelight-profiling-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_datared_CL`](../tables/corelight-v2-datared-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dce_rpc_CL`](../tables/corelight-v2-dce-rpc-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dga_CL`](../tables/corelight-v2-dga-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dhcp_CL`](../tables/corelight-v2-dhcp-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dnp3_CL`](../tables/corelight-v2-dnp3-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dns_CL`](../tables/corelight-v2-dns-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dns_red_CL`](../tables/corelight-v2-dns-red-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_dpd_CL`](../tables/corelight-v2-dpd-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_encrypted_dns_CL`](../tables/corelight-v2-encrypted-dns-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_enip_CL`](../tables/corelight-v2-enip-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_enip_debug_CL`](../tables/corelight-v2-enip-debug-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_enip_list_identity_CL`](../tables/corelight-v2-enip-list-identity-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_etc_viz_CL`](../tables/corelight-v2-etc-viz-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_files_CL`](../tables/corelight-v2-files-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_files_red_CL`](../tables/corelight-v2-files-red-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ftp_CL`](../tables/corelight-v2-ftp-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_generic_dns_tunnels_CL`](../tables/corelight-v2-generic-dns-tunnels-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_generic_icmp_tunnels_CL`](../tables/corelight-v2-generic-icmp-tunnels-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_http2_CL`](../tables/corelight-v2-http2-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_http_CL`](../tables/corelight-v2-http-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_http_red_CL`](../tables/corelight-v2-http-red-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_icmp_specific_tunnels_CL`](../tables/corelight-v2-icmp-specific-tunnels-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_intel_CL`](../tables/corelight-v2-intel-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ipsec_CL`](../tables/corelight-v2-ipsec-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_irc_CL`](../tables/corelight-v2-irc-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_iso_cotp_CL`](../tables/corelight-v2-iso-cotp-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_kerberos_CL`](../tables/corelight-v2-kerberos-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_certs_CL`](../tables/corelight-v2-known-certs-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_devices_CL`](../tables/corelight-v2-known-devices-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_domains_CL`](../tables/corelight-v2-known-domains-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_hosts_CL`](../tables/corelight-v2-known-hosts-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_names_CL`](../tables/corelight-v2-known-names-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_remotes_CL`](../tables/corelight-v2-known-remotes-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_services_CL`](../tables/corelight-v2-known-services-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_known_users_CL`](../tables/corelight-v2-known-users-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_local_subnets_CL`](../tables/corelight-v2-local-subnets-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_local_subnets_dj_CL`](../tables/corelight-v2-local-subnets-dj-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_local_subnets_graphs_CL`](../tables/corelight-v2-local-subnets-graphs-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_log4shell_CL`](../tables/corelight-v2-log4shell-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_modbus_CL`](../tables/corelight-v2-modbus-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_mqtt_connect_CL`](../tables/corelight-v2-mqtt-connect-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_mqtt_publish_CL`](../tables/corelight-v2-mqtt-publish-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_mqtt_subscribe_CL`](../tables/corelight-v2-mqtt-subscribe-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_mysql_CL`](../tables/corelight-v2-mysql-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_notice_CL`](../tables/corelight-v2-notice-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ntlm_CL`](../tables/corelight-v2-ntlm-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ntp_CL`](../tables/corelight-v2-ntp-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ocsp_CL`](../tables/corelight-v2-ocsp-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_openflow_CL`](../tables/corelight-v2-openflow-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_packet_filter_CL`](../tables/corelight-v2-packet-filter-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_pe_CL`](../tables/corelight-v2-pe-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_profinet_CL`](../tables/corelight-v2-profinet-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_profinet_dce_rpc_CL`](../tables/corelight-v2-profinet-dce-rpc-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_profinet_debug_CL`](../tables/corelight-v2-profinet-debug-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_radius_CL`](../tables/corelight-v2-radius-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_rdp_CL`](../tables/corelight-v2-rdp-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_reporter_CL`](../tables/corelight-v2-reporter-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_rfb_CL`](../tables/corelight-v2-rfb-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_s7comm_CL`](../tables/corelight-v2-s7comm-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_signatures_CL`](../tables/corelight-v2-signatures-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_sip_CL`](../tables/corelight-v2-sip-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smartpcap_CL`](../tables/corelight-v2-smartpcap-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smartpcap_stats_CL`](../tables/corelight-v2-smartpcap-stats-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smb_files_CL`](../tables/corelight-v2-smb-files-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smb_mapping_CL`](../tables/corelight-v2-smb-mapping-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smtp_CL`](../tables/corelight-v2-smtp-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_smtp_links_CL`](../tables/corelight-v2-smtp-links-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_snmp_CL`](../tables/corelight-v2-snmp-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_socks_CL`](../tables/corelight-v2-socks-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_software_CL`](../tables/corelight-v2-software-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_specific_dns_tunnels_CL`](../tables/corelight-v2-specific-dns-tunnels-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ssh_CL`](../tables/corelight-v2-ssh-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ssl_CL`](../tables/corelight-v2-ssl-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_ssl_red_CL`](../tables/corelight-v2-ssl-red-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_stats_CL`](../tables/corelight-v2-stats-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_stepping_CL`](../tables/corelight-v2-stepping-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_stun_CL`](../tables/corelight-v2-stun-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_stun_nat_CL`](../tables/corelight-v2-stun-nat-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_suricata_corelight_CL`](../tables/corelight-v2-suricata-corelight-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_suricata_eve_CL`](../tables/corelight-v2-suricata-eve-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_suricata_stats_CL`](../tables/corelight-v2-suricata-stats-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_suricata_zeek_stats_CL`](../tables/corelight-v2-suricata-zeek-stats-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_syslog_CL`](../tables/corelight-v2-syslog-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_tds_CL`](../tables/corelight-v2-tds-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_tds_rpc_CL`](../tables/corelight-v2-tds-rpc-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_tds_sql_batch_CL`](../tables/corelight-v2-tds-sql-batch-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_traceroute_CL`](../tables/corelight-v2-traceroute-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_tunnel_CL`](../tables/corelight-v2-tunnel-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_unknown_smartpcap_CL`](../tables/corelight-v2-unknown-smartpcap-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_util_stats_CL`](../tables/corelight-v2-util-stats-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_vpn_CL`](../tables/corelight-v2-vpn-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_weird_CL`](../tables/corelight-v2-weird-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_weird_red_CL`](../tables/corelight-v2-weird-red-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_weird_stats_CL`](../tables/corelight-v2-weird-stats-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_wireguard_CL`](../tables/corelight-v2-wireguard-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_x509_CL`](../tables/corelight-v2-x509-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_x509_red_CL`](../tables/corelight-v2-x509-red-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`Corelight_v2_zeek_doctor_CL`](../tables/corelight-v2-zeek-doctor-cl.md) 🔶 | [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) (dependency) | - |
| [`CrowdStrikeAlerts`](../tables/crowdstrikealerts.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) (dependency) | - |
| [`CrowdStrikeCases`](../tables/crowdstrikecases.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) (dependency) | - |
| [`CrowdStrikeDetections`](../tables/crowdstrikedetections.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) (dependency) | - |
| [`CrowdStrikeHosts`](../tables/crowdstrikehosts.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) (dependency) | - |
| [`CrowdStrikeVulnerabilities`](../tables/crowdstrikevulnerabilities.md) | [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) (dependency) | - |
| [`CrowdStrike_Additional_Events_CL`](../tables/crowdstrike-additional-events-cl.md) 🔶 | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency), [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`CrowdStrike_Audit_Events_CL`](../tables/crowdstrike-audit-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_Auth_Events_CL`](../tables/crowdstrike-auth-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_DNS_Events_CL`](../tables/crowdstrike-dns-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_File_Events_CL`](../tables/crowdstrike-file-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_Network_Events_CL`](../tables/crowdstrike-network-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_Process_Events_CL`](../tables/crowdstrike-process-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_Registry_Events_CL`](../tables/crowdstrike-registry-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`CrowdStrike_Secondary_Data_CL`](../tables/crowdstrike-secondary-data-cl.md) 🔶 | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency), [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | - |
| [`CrowdStrike_User_Events_CL`](../tables/crowdstrike-user-events-cl.md) | [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) (dependency) | - |
| [`DataminrPulse_Alerts_CL`](../tables/dataminrpulse-alerts-cl.md) | [Dataminr Pulse Alerts Data Connector](../connectors/dataminrpulsealerts.md) | Analytics, Workbooks |
| [`Detections_Data_CL`](../tables/detections-data-cl.md) | [Vectra XDR](../connectors/vectraxdr.md) (dependency) | - |
| [`DnsEvents`](../tables/dnsevents.md) | [DNS](../connectors/dns.md) (dependency) | - |
| [`DnsInventory`](../tables/dnsinventory.md) | [DNS](../connectors/dns.md) (dependency) | - |
| [`ESIExchangeConfig_CL`](../tables/esiexchangeconfig-cl.md) 🔶 | [Exchange Security Insights On-Premises Collector](../connectors/esi-exchangeonpremisescollector.md) (dependency) | - |
| [`Entities_Data_CL`](../tables/entities-data-cl.md) | [Vectra XDR](../connectors/vectraxdr.md) (dependency) | - |
| [`Entity_Scoring_Data_CL`](../tables/entity-scoring-data-cl.md) | [Vectra XDR](../connectors/vectraxdr.md) (dependency) | - |
| [`Event`](../tables/event.md) | [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md) (dependency), [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | - |
| [`ExchangeHttpProxy_CL`](../tables/exchangehttpproxy-cl.md) 🔶 | [Microsoft Exchange HTTP Proxy Logs](../connectors/esi-opt7exchangehttpproxylogs.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | - |
| [`Health_Data_CL`](../tables/health-data-cl.md) | [Vectra XDR](../connectors/vectraxdr.md) (dependency) | - |
| [`Heartbeat`](../tables/heartbeat.md) | [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) (dependency) | - |
| [`IllumioFlowEventsV2_CL`](../tables/illumiofloweventsv2-cl.md) | [Illumio Saas](../connectors/illumiosaasccfdefinition.md) (dependency) | - |
| [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md) | [Illumio SaaS](../connectors/illumiosaasdataconnector.md) (dependency) | - |
| [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md) | [Illumio SaaS](../connectors/illumiosaasdataconnector.md) (dependency) | - |
| [`JBossEvent_CL`](../tables/jbossevent-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`JuniperIDP_CL`](../tables/juniperidp-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`Lockdown_Data_CL`](../tables/lockdown-data-cl.md) | [Vectra XDR](../connectors/vectraxdr.md) (dependency) | - |
| [`MarkLogicAudit_CL`](../tables/marklogicaudit-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`MessageTrackingLog_CL`](../tables/messagetrackinglog-cl.md) 🔶 | [Microsoft Exchange Message Tracking Logs](../connectors/esi-opt6exchangemessagetrackinglogs.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | - |
| [`MongoDBAudit_CL`](../tables/mongodbaudit-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`NGINX_CL`](../tables/nginx-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md) 🔶 | [NXLog DNS Logs](../connectors/nxlogdnslogs.md) (dependency) | - |
| [`OracleWebLogicServer_CL`](../tables/oracleweblogicserver-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`PostgreSQL_CL`](../tables/postgresql-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`SecurityBridgeLogs_CL`](../tables/securitybridgelogs-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`SecurityEvent`](../tables/securityevent.md) | [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) (dependency), [Security Events via Legacy Agent](../connectors/securityevents.md) (dependency), [Windows Security Events via AMA](../connectors/windowssecurityevents.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | - |
| [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md) 🔶 | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md) 🔶 | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md) 🔶 | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md) 🔶 | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md) 🔶 | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) 🔶 | [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SquidProxy_CL`](../tables/squidproxy-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`StorageBlobLogs`](../tables/storagebloblogs.md) | [Azure Storage Account](../connectors/azurestorageaccount.md) (dependency) | - |
| [`StorageFileLogs`](../tables/storagefilelogs.md) | [Azure Storage Account](../connectors/azurestorageaccount.md) (dependency) | - |
| [`StorageQueueLogs`](../tables/storagequeuelogs.md) | [Azure Storage Account](../connectors/azurestorageaccount.md) (dependency) | - |
| [`StorageTableLogs`](../tables/storagetablelogs.md) | [Azure Storage Account](../connectors/azurestorageaccount.md) (dependency) | - |
| [`Syslog`](../tables/syslog.md) | [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) (dependency), [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) (dependency), [Cisco Software Defined WAN](../connectors/ciscosdwan.md) (dependency), [Forescout](../connectors/forescout.md) (dependency), [Syslog via AMA](../connectors/syslogama.md) (dependency), [Syslog via Legacy Agent](../connectors/syslog.md) (dependency), [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) (dependency) | - |
| [`Tomcat_CL`](../tables/tomcat-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`TrendMicro_XDR_OAT_CL`](../tables/trendmicro-xdr-oat-cl.md) 🔶 | [Trend Vision One](../connectors/trendmicroxdr.md) (dependency) | - |
| [`TrendMicro_XDR_RCA_Result_CL`](../tables/trendmicro-xdr-rca-result-cl.md) 🔶 | [Trend Vision One](../connectors/trendmicroxdr.md) (dependency) | - |
| [`TrendMicro_XDR_RCA_Task_CL`](../tables/trendmicro-xdr-rca-task-cl.md) 🔶 | [Trend Vision One](../connectors/trendmicroxdr.md) (dependency) | - |
| [`TrendMicro_XDR_WORKBENCH_CL`](../tables/trendmicro-xdr-workbench-cl.md) 🔶 | [Trend Vision One](../connectors/trendmicroxdr.md) (dependency) | - |
| [`Ubiquiti_CL`](../tables/ubiquiti-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) 🔶 | [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) (dependency), [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`W3CIISLog`](../tables/w3ciislog.md) | [IIS Logs of Microsoft Exchange Servers](../connectors/esi-opt5exchangeiislogs.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | - |
| [`WindowsEvent`](../tables/windowsevent.md) | [Windows Forwarded Events](../connectors/windowsforwardedevents.md) (dependency) | - |
| [`ZPA_CL`](../tables/zpa-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`meraki_CL`](../tables/meraki-cl.md) 🔶 | [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) (dependency), [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) (dependency), [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency), [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) (dependency) | - |
| [`vcenter_CL`](../tables/vcenter-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`vectra_beacon_CL`](../tables/vectra-beacon-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_dcerpc_CL`](../tables/vectra-dcerpc-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_dhcp_CL`](../tables/vectra-dhcp-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_dns_CL`](../tables/vectra-dns-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_http_CL`](../tables/vectra-http-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_isession_CL`](../tables/vectra-isession-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_kerberos_CL`](../tables/vectra-kerberos-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_ldap_CL`](../tables/vectra-ldap-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_ntlm_CL`](../tables/vectra-ntlm-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_radius_CL`](../tables/vectra-radius-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_rdp_CL`](../tables/vectra-rdp-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_smbfiles_CL`](../tables/vectra-smbfiles-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_smbmapping_CL`](../tables/vectra-smbmapping-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_smtp_CL`](../tables/vectra-smtp-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_ssh_CL`](../tables/vectra-ssh-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_ssl_CL`](../tables/vectra-ssl-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |
| [`vectra_x509_CL`](../tables/vectra-x509-cl.md) 🔶 | [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) (dependency) | - |

### Internal Tables

The following **2 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | [CrowdStrike Falcon Adversary Intelligence ](../connectors/crowdstrikefalconadversaryintelligence.md) (dependency) | - |
| [`Watchlist`](../tables/watchlist.md) | - | Analytics, Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
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
| [Dataminr - urgent alerts detected](../content/dataminr-pulse-dataminr-urgent-alerts-detected-64a46029-3236-4d03-b5df-207366a623f1-d65138c6.md) | Medium | Persistence | [`DataminrPulse_Alerts_CL`](../tables/dataminrpulse-alerts-cl.md)<br>*Internal use:*<br>[`Watchlist`](../tables/watchlist.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [DataminrPulseAlerts](../content/dataminr-pulse-dataminrpulsealerts-d5436210.md) | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimAuditEvent`](../asim/asimauditevent.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimDns`](../asim/asimdns.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimNetworkSession`](../asim/asimnetworksession.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimProcessEvent`](../asim/asimprocessevent.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`ASimWebSession`](../asim/asimwebsession.md)<br><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`imFileEvent`](../asim/imfileevent.md)<br>[`DataminrPulse_Alerts_CL`](../tables/dataminrpulse-alerts-cl.md)<br>*Internal use:*<br>[`Watchlist`](../tables/watchlist.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DataminrPulseAlertEnrichment](../content/dataminr-pulse-dataminrpulsealertenrichment-262cc5df.md) | This playbook provides an end-to-end example of how alert enrichment works. This will extract the IP... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DataminrPulseAlerts](../parsers/dataminrpulsealerts.md) | - | [`DataminrPulse_Alerts_CL`](../tables/dataminrpulse-alerts-cl.md) *(read)*<br>[`watchlist`](../tables/watchlist.md) *(read)* |
| [DataminrPulseCyberAlerts](../parsers/dataminrpulsecyberalerts.md) | - | [`DataminrPulse_Alerts_CL`](../tables/dataminrpulse-alerts-cl.md) *(read)*<br>[`watchlist`](../tables/watchlist.md) *(read)* |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

