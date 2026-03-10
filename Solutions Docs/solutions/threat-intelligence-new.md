# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Threat Intelligence (NEW)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Threat Intelligence (NEW) Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.13 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2025-04-02 |
| **Solution Folder** | [Threat Intelligence (NEW)](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Threat%20Intelligence%20%28NEW%29) |

Microsoft Sentinel has recently improved its threat intelligence hunting experience by incorporating support for STIX objects like Threat Actor, Attack Pattern, Identity, and Relationship. As a result, we have updated our TI Solutions to leverage the new ThreatIntelIndicator table.
[Work with STIX objects and indicators to enhance threat intelligence and threat hunting in Microsoft Sentinel (Preview) - Microsoft Sentinel | Microsoft Learn](https://learn.microsoft.com/azure/sentinel/work-with-stix-objects-indicators).

 The Threat Intelligence solution contains data connectors for import of supported STIX objects into Microsoft Sentinel, analytic rules for matching TI data with event data, workbook, and hunting queries. Threat indicators can be malicious IP's, URL's, filehashes, domains, email addresses etc.

## Contents

- [ASIM Pre-requisites](#asim-pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## <a id="asim-pre-requisites"></a><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Pre-requisites

This solution uses the [`_Im_Dns`](../asim/imdns.md), [`_Im_NetworkSession`](../asim/imnetworksession.md), and [`_Im_WebSession`](../asim/imwebsession.md) [ASIM (Advanced Security Information Model)](https://learn.microsoft.com/azure/sentinel/normalization) parsers to provide normalized, source-agnostic data access, expanding detection coverage without modifying queries.

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
| [Illumio SaaS Core](../asim/asim-products-index.md#illumio-saas-core) | [IllumioSaaS](illumiosaas.md) |
| [Infoblox BloxOne](../asim/asim-products-index.md#infoblox-bloxone) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Infoblox NIOS](../asim/asim-products-index.md#infoblox-nios) | [Syslog](syslog.md) |
| [Internet Information Services (IIS)](../asim/asim-products-index.md#internet-information-services-iis) | [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md) |
| [M365 Defender for Endpoint](../asim/asim-products-index.md#m365-defender-for-endpoint) | - |
| [MS DNS Events](../asim/asim-products-index.md#ms-dns-events) | [NXLogDNSLogs](nxlogdnslogs.md)<br>[Windows Server DNS](windows-server-dns.md) |
| [Microsoft Defender for IoT](../asim/asim-products-index.md#microsoft-defender-for-iot) | - |
| [Microsoft Windows Events Sysmon](../asim/asim-products-index.md#microsoft-windows-events-sysmon) | [Windows Forwarded Events](windows-forwarded-events.md) |
| [Native](../asim/asim-products-index.md#native) | [Cisco Meraki Events via REST API](cisco-meraki-events-via-rest-api.md)<br>[CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](vmware-carbon-black-cloud.md) |
| [Palo Alto Cortex Data Lake](../asim/asim-products-index.md#palo-alto-cortex-data-lake) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Palo Alto Networks](../asim/asim-products-index.md#palo-alto-networks) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Palo Alto PanOS](../asim/asim-products-index.md#palo-alto-panos) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [SentinelOne](../asim/asim-products-index.md#sentinelone) | [SentinelOne](sentinelone.md) |
| [SonicWall](../asim/asim-products-index.md#sonicwall) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Squid Proxy](../asim/asim-products-index.md#squid-proxy) | [CustomLogsAma](customlogsama.md) |
| [Sysmon for Linux](../asim/asim-products-index.md#sysmon-for-linux) | [Syslog](syslog.md) |
| [VMConnection](../asim/asim-products-index.md#vmconnection) | - |
| [VMware Carbon Black Cloud](../asim/asim-products-index.md#vmware-carbon-black-cloud) | [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md) |
| [Vectra AI Streams](../asim/asim-products-index.md#vectra-ai-streams) | [CustomLogsAma](customlogsama.md)<br>[Vectra AI Stream](vectra-ai-stream.md) |
| [WatchGuard Fireware OS](../asim/asim-products-index.md#watchguard-fireware-os) | [Syslog](syslog.md) |
| [Windows Firewall](../asim/asim-products-index.md#windows-firewall) | [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md)<br>[Windows Forwarded Events](windows-forwarded-events.md)<br>[Windows Security Events](windows-security-events.md) |
| [Windows Sysmon](../asim/asim-products-index.md#windows-sysmon) | [Windows Forwarded Events](windows-forwarded-events.md) |
| [Zscaler ZIA](../asim/asim-products-index.md#zscaler-zia) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Zscaler ZIA DNS](../asim/asim-products-index.md#zscaler-zia-dns) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Zscaler ZIA Firewall](../asim/asim-products-index.md#zscaler-zia-firewall) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |

## Data Connectors

This solution provides **5 data connector(s)** (plus 1 discovered⚠️):

- [Microsoft Defender Threat Intelligence](../connectors/microsoftdefenderthreatintelligence.md)
- [Premium Microsoft Defender Threat Intelligence](../connectors/premiummicrosoftdefenderforthreatintelligence.md)
- [Threat Intelligence Platforms](../connectors/threatintelligence.md)
- [Threat intelligence - TAXII](../connectors/threatintelligencetaxii.md)
- [Threat intelligence - TAXII Export (Preview)](../connectors/threatintelligencetaxiiexport.md)
- [Threat Intelligence Upload API (Preview)](../connectors/threatintelligenceuploadindicatorsapi.md) ⚠️

Connectors from dependency solutions:

- [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) 🔶 *(dependency on [Vectra AI Stream](vectra-ai-stream.md))*
- [Windows DNS Events via AMA](../connectors/asimdnsactivitylogs.md) *(dependency on [Windows Server DNS](windows-server-dns.md))*
- [Amazon Web Services S3 VPC Flow Logs](../connectors/awss3vpcflowlogsparquetdefinition.md) *(dependency on [AWS VPC Flow Logs](aws-vpc-flow-logs.md))*
- [Azure Firewall](../connectors/azurefirewall.md) 🔶 *(dependency on [Azure Firewall](azure-firewall.md))*
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
- [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) 🔶 *(dependency on [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md))*
- [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) 🔶 *(dependency on [Vectra AI Stream](vectra-ai-stream.md))*
- [VirtualMetric Director Proxy](../connectors/virtualmetricdirectorproxy.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [VirtualMetric DataStream for Microsoft Sentinel](../connectors/virtualmetricmssentinelconnector.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [VirtualMetric DataStream for Microsoft Sentinel data lake](../connectors/virtualmetricmssentineldatalakeconnector.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [Windows Forwarded Events](../connectors/windowsforwardedevents.md) *(dependency on [Windows Forwarded Events](windows-forwarded-events.md))*
- [Windows Security Events via AMA](../connectors/windowssecurityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*
- [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) *(dependency on [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md))*

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).

## Tables Used

This solution uses **241 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | - | Analytics |
| [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) | [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) (dependency), [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) (dependency) | Analytics |
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
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | - | Analytics |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | [Amazon Web Services S3 VPC Flow Logs](../connectors/awss3vpcflowlogsparquetdefinition.md) (dependency) | - |
| [`AZFWApplicationRule`](../tables/azfwapplicationrule.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | Analytics |
| [`AZFWDnsQuery`](../tables/azfwdnsquery.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWFatFlow`](../tables/azfwfatflow.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWFlowTrace`](../tables/azfwflowtrace.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWIdpsSignature`](../tables/azfwidpssignature.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWInternalFqdnResolutionFailure`](../tables/azfwinternalfqdnresolutionfailure.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWNatRule`](../tables/azfwnatrule.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`AZFWNetworkRule`](../tables/azfwnetworkrule.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | Analytics |
| [`AZFWThreatIntel`](../tables/azfwthreatintel.md) | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | - |
| [`ApacheHTTPServer_CL`](../tables/apachehttpserver-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`AppServiceHTTPLogs`](../tables/appservicehttplogs.md) | - | Analytics |
| [`AuditLogs`](../tables/auditlogs.md) | - | Analytics |
| [`AzureActivity`](../tables/azureactivity.md) | - | Analytics |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) 🔶 | [Azure Firewall](../connectors/azurefirewall.md) (dependency) | Analytics |
| [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md) 🔶 | - | Analytics |
| [`CarbonBlackAuditLogs_CL`](../tables/carbonblackauditlogs-cl.md) 🔶 | [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) (dependency) | - |
| [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md) 🔶 | [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) (dependency) | - |
| [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md) 🔶 | [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) (dependency) | - |
| [`CarbonBlack_Alerts_CL`](../tables/carbonblack-alerts-cl.md) | [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`CarbonBlack_Watchlist_CL`](../tables/carbonblack-watchlist-cl.md) | [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) (dependency) | - |
| [`CiscoMerakiNativePoller_CL`](../tables/ciscomerakinativepoller-cl.md) | [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) (dependency), [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) (dependency), [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) (dependency) | - |
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
| [`CloudAppEvents`](../tables/cloudappevents.md) | - | Analytics |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md) (dependency), [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) (dependency), [Common Event Format (CEF)](../connectors/cef.md) (dependency), [Common Event Format (CEF) via AMA](../connectors/cefama.md) (dependency), [Threat Intelligence Platforms](../connectors/threatintelligence.md), [VirtualMetric DataStream for Microsoft Sentinel](../connectors/virtualmetricmssentinelconnector.md) (dependency), [VirtualMetric DataStream for Microsoft Sentinel data lake](../connectors/virtualmetricmssentineldatalakeconnector.md) (dependency), [VirtualMetric Director Proxy](../connectors/virtualmetricdirectorproxy.md) (dependency), [[Deprecated] CrowdStrike Falcon Endpoint Protection via AMA](../connectors/crowdstrikefalconendpointprotectionama.md) (dependency), [[Deprecated] CrowdStrike Falcon Endpoint Protection via Legacy Agent](../connectors/crowdstrikefalconendpointprotection.md) (dependency) | Analytics |
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
| [`DeviceFileEvents`](../tables/devicefileevents.md) | - | Analytics |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | - | Analytics |
| [`DnsEvents`](../tables/dnsevents.md) | [DNS](../connectors/dns.md) (dependency) | Analytics |
| [`DnsInventory`](../tables/dnsinventory.md) | [DNS](../connectors/dns.md) (dependency) | - |
| [`DuoSecurityAuthentication_CL`](../tables/duosecurityauthentication-cl.md) 🔶 | - | Analytics |
| [`ESIExchangeConfig_CL`](../tables/esiexchangeconfig-cl.md) 🔶 | [Exchange Security Insights On-Premises Collector](../connectors/esi-exchangeonpremisescollector.md) (dependency) | - |
| [`EmailEvents`](../tables/emailevents.md) | - | Analytics |
| [`EmailUrlInfo`](../tables/emailurlinfo.md) | - | Analytics |
| [`Event`](../tables/event.md) | [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md) (dependency), [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | - |
| [`ExchangeHttpProxy_CL`](../tables/exchangehttpproxy-cl.md) 🔶 | [Microsoft Exchange HTTP Proxy Logs](../connectors/esi-opt7exchangehttpproxylogs.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | - |
| [`GitHub_CL`](../tables/github-cl.md) | - | Analytics |
| [`Heartbeat`](../tables/heartbeat.md) | [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) (dependency) | - |
| [`IllumioFlowEventsV2_CL`](../tables/illumiofloweventsv2-cl.md) | [Illumio Saas](../connectors/illumiosaasccfdefinition.md) (dependency) | - |
| [`Illumio_Auditable_Events_CL`](../tables/illumio-auditable-events-cl.md) | [Illumio SaaS](../connectors/illumiosaasdataconnector.md) (dependency) | - |
| [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md) | [Illumio SaaS](../connectors/illumiosaasdataconnector.md) (dependency) | - |
| [`JBossEvent_CL`](../tables/jbossevent-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`JuniperIDP_CL`](../tables/juniperidp-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`MarkLogicAudit_CL`](../tables/marklogicaudit-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`MessageTrackingLog_CL`](../tables/messagetrackinglog-cl.md) 🔶 | [Microsoft Exchange Message Tracking Logs](../connectors/esi-opt6exchangemessagetrackinglogs.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | - |
| [`MongoDBAudit_CL`](../tables/mongodbaudit-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`NGINX_CL`](../tables/nginx-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`NXLog_DNS_Server_CL`](../tables/nxlog-dns-server-cl.md) 🔶 | [NXLog DNS Logs](../connectors/nxlogdnslogs.md) (dependency) | - |
| [`OfficeActivity`](../tables/officeactivity.md) | - | Analytics, Hunting |
| [`OracleWebLogicServer_CL`](../tables/oracleweblogicserver-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`PostgreSQL_CL`](../tables/postgresql-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`SecurityBridgeLogs_CL`](../tables/securitybridgelogs-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`SecurityEvent`](../tables/securityevent.md) | [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) (dependency), [Security Events via Legacy Agent](../connectors/securityevents.md) (dependency), [Windows Security Events via AMA](../connectors/windowssecurityevents.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | Analytics, Hunting |
| [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md) 🔶 | [SentinelOne](../connectors/sentinelone.md) (dependency), [SentinelOne](../connectors/sentineloneccp.md) (dependency) | - |
| [`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md) 🔶 | [SentinelOne](../connectors/sentinelone.md) (dependency), [SentinelOne](../connectors/sentineloneccp.md) (dependency) | - |
| [`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md) 🔶 | [SentinelOne](../connectors/sentinelone.md) (dependency), [SentinelOne](../connectors/sentineloneccp.md) (dependency) | - |
| [`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md) 🔶 | [SentinelOne](../connectors/sentinelone.md) (dependency), [SentinelOne](../connectors/sentineloneccp.md) (dependency) | - |
| [`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md) 🔶 | [SentinelOne](../connectors/sentinelone.md) (dependency), [SentinelOne](../connectors/sentineloneccp.md) (dependency) | - |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) 🔶 | [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SigninLogs`](../tables/signinlogs.md) | - | Analytics |
| [`SquidProxy_CL`](../tables/squidproxy-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`Syslog`](../tables/syslog.md) | [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) (dependency), [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) (dependency), [Cisco Software Defined WAN](../connectors/ciscosdwan.md) (dependency), [Forescout](../connectors/forescout.md) (dependency), [Syslog via AMA](../connectors/syslogama.md) (dependency), [Syslog via Legacy Agent](../connectors/syslog.md) (dependency), [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) (dependency) | Analytics, Hunting |
| [`ThreatIntelExportOperation`](../tables/threatintelexportoperation.md) | [Threat intelligence - TAXII Export (Preview)](../connectors/threatintelligencetaxiiexport.md) | - |
| [`ThreatIntelObjects`](../tables/threatintelobjects.md) | [Microsoft Defender Threat Intelligence](../connectors/microsoftdefenderthreatintelligence.md), [Premium Microsoft Defender Threat Intelligence](../connectors/premiummicrosoftdefenderforthreatintelligence.md), [Threat Intelligence Platforms](../connectors/threatintelligence.md), [Threat Intelligence Upload API (Preview)](../connectors/threatintelligenceuploadindicatorsapi.md), [Threat intelligence - TAXII](../connectors/threatintelligencetaxii.md) | - |
| [`Tomcat_CL`](../tables/tomcat-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`Ubiquiti_CL`](../tables/ubiquiti-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`UrlClickEvents`](../tables/urlclickevents.md) | - | Analytics |
| [`VMConnection`](../tables/vmconnection.md) | - | Analytics, Hunting |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) 🔶 | [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) (dependency), [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`W3CIISLog`](../tables/w3ciislog.md) | [IIS Logs of Microsoft Exchange Servers](../connectors/esi-opt5exchangeiislogs.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | Analytics |
| [`WindowsEvent`](../tables/windowsevent.md) | [Windows Forwarded Events](../connectors/windowsforwardedevents.md) (dependency) | Analytics |
| [`ZPA_CL`](../tables/zpa-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`meraki_CL`](../tables/meraki-cl.md) 🔶 | [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) (dependency), [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) (dependency), [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency), [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) (dependency) | - |
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

The following **3 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | - | Analytics, Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | - | Workbooks |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | [CrowdStrike Falcon Adversary Intelligence ](../connectors/crowdstrikefalconadversaryintelligence.md) (dependency), [Microsoft Defender Threat Intelligence](../connectors/microsoftdefenderthreatintelligence.md), [Premium Microsoft Defender Threat Intelligence](../connectors/premiummicrosoftdefenderforthreatintelligence.md), [Threat Intelligence Platforms](../connectors/threatintelligence.md), [Threat Intelligence Upload API (Preview)](../connectors/threatintelligenceuploadindicatorsapi.md), [Threat intelligence - TAXII](../connectors/threatintelligencetaxii.md) | Analytics, Hunting, Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
## Content Items

This solution includes **58 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 51 |
| Hunting Queries | 5 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [TI Map Domain Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-domain-entity-to-devicenetworkevents-1546f3b3-de8a-4e62-bfea-815422154981-be5129ac.md) | Medium | CommandAndControl | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map IP Entity to Azure SQL Security Audit Events](../content/threat-intelligence-new-ti-map-ip-entity-to-azure-sql-security-audit-events-239d987e-ee1b-4c49-b146-e88d682930a4-fb7a1cf3.md) | Medium | CommandAndControl | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map IP Entity to AzureActivity](../content/threat-intelligence-new-ti-map-ip-entity-to-azureactivity-7a0c9989-1618-4126-9290-fb77b976d181-f4b651f6.md) | Medium | CommandAndControl | [`AzureActivity`](../tables/azureactivity.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map IP Entity to CommonSecurityLog](../content/threat-intelligence-new-ti-map-ip-entity-to-commonsecuritylog-cdd1933b-ef94-48a4-b94a-18d45b902751-8a8093d3.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map IP Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-ip-entity-to-devicenetworkevents-2474343c-9135-42ec-9c40-a1bace43da5c-3e3eda3e.md) | Medium | CommandAndControl | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map IP Entity to DnsEvents](../content/threat-intelligence-new-ti-map-ip-entity-to-dnsevents-6418fd33-92f2-407b-bd61-91c0d4bbcb8a-5cae9331.md) | Medium | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map IP Entity to Duo Security](../content/threat-intelligence-new-ti-map-ip-entity-to-duo-security-4988c238-a118-442c-80bd-6c689a1b2e97-43e39fdc.md) | Medium | CommandAndControl | [`DuoSecurityAuthentication_CL`](../tables/duosecurityauthentication-cl.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map IP Entity to SigninLogs](../content/threat-intelligence-new-ti-map-ip-entity-to-signinlogs-edfc9d8a-6fb3-49e2-80c9-fea15d941799-78ede5a3.md) | Medium | CommandAndControl | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map IP Entity to VMConnection](../content/threat-intelligence-new-ti-map-ip-entity-to-vmconnection-aed70d71-adb2-4f73-becd-02150b13950b-4964d0d5.md) | Medium | CommandAndControl | [`VMConnection`](../tables/vmconnection.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map IP Entity to W3CIISLog](../content/threat-intelligence-new-ti-map-ip-entity-to-w3ciislog-888c4736-e604-48eb-b2c7-3462356d9510-ad1df7ff.md) | Medium | CommandAndControl | [`W3CIISLog`](../tables/w3ciislog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map URL Entity to AuditLogs](../content/threat-intelligence-new-ti-map-url-entity-to-auditlogs-9991c277-e0a1-4079-8c40-fbfca2705615-eddd0de5.md) | Medium | CommandAndControl | [`AuditLogs`](../tables/auditlogs.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map URL Entity to DeviceNetworkEvents](../content/threat-intelligence-new-ti-map-url-entity-to-devicenetworkevents-4f0356b2-d344-4c19-9375-31b9575d80cb-edd30654.md) | Medium | CommandAndControl | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map URL Entity to EmailUrlInfo](../content/threat-intelligence-new-ti-map-url-entity-to-emailurlinfo-9e32e545-e60c-47de-9941-f9ca1ada0a42-4894c77c.md) | Medium | CommandAndControl | [`EmailEvents`](../tables/emailevents.md)<br>[`EmailUrlInfo`](../tables/emailurlinfo.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map URL Entity to PaloAlto Data](../content/threat-intelligence-new-ti-map-url-entity-to-paloalto-data-32b437c4-dddb-45b3-9aae-5188e80624b0-bf06198a.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map URL Entity to SecurityAlert Data](../content/threat-intelligence-new-ti-map-url-entity-to-securityalert-data-3b6bdb38-93c5-452f-ab3a-97a3d1320d16-46a3b027.md) | Medium | CommandAndControl | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map URL Entity to Syslog Data](../content/threat-intelligence-new-ti-map-url-entity-to-syslog-data-4de24a28-dcd0-4a0d-bf14-96d8483dc05a-607492d9.md) | Medium | CommandAndControl | [`Syslog`](../tables/syslog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map URL Entity to UrlClickEvents](../content/threat-intelligence-new-ti-map-url-entity-to-urlclickevents-ad4fa1f2-2189-459c-9458-f77d2039d2f5-105aa351.md) | Medium | CommandAndControl | [`UrlClickEvents`](../tables/urlclickevents.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Domain entity to Cloud App Events](../content/threat-intelligence-new-ti-map-domain-entity-to-cloud-app-events-a7d2b1e4-dd9c-40fd-9651-1a136eb8f0df-ec106ba0.md) | Medium | CommandAndControl | [`CloudAppEvents`](../tables/cloudappevents.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/threat-intelligence-new-ti-map-domain-entity-to-dns-events-asim-dns-schema-7c1ea2e6-6210-412c-92e4-180803a741b4-d24ac70c.md) | Medium | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_Dns`](../asim/imdns.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Domain entity to DnsEvents](../content/threat-intelligence-new-ti-map-domain-entity-to-dnsevents-03a8e294-3fc7-4d65-9da2-cff91fb5b6dc-1b58bbc8.md) | Medium | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Domain entity to EmailEvents](../content/threat-intelligence-new-ti-map-domain-entity-to-emailevents-bc3bb047-70b8-4a4b-ac21-e3b1172881a4-c3b01d85.md) | Medium | InitialAccess | [`EmailEvents`](../tables/emailevents.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Domain entity to EmailUrlInfo](../content/threat-intelligence-new-ti-map-domain-entity-to-emailurlinfo-b56e2290-c65b-45a5-9636-3651e85bbe5d-d68d3e26.md) | Medium | InitialAccess | [`EmailEvents`](../tables/emailevents.md)<br>[`EmailUrlInfo`](../tables/emailurlinfo.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Domain entity to PaloAlto](../content/threat-intelligence-new-ti-map-domain-entity-to-paloalto-418192ba-01b8-4be8-89b7-5b5396a9d062-3c5cbaa4.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Domain entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-new-ti-map-domain-entity-to-paloalto-commonsecuritylog-094a4e6e-1a0d-4d49-9d64-cfc3b01a0be1-b0f33009.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Domain entity to SecurityAlert](../content/threat-intelligence-new-ti-map-domain-entity-to-securityalert-df88b403-1cb9-49ea-a43d-b6613051cf7f-17792409.md) | Medium | CommandAndControl | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Domain entity to Syslog](../content/threat-intelligence-new-ti-map-domain-entity-to-syslog-cd19434e-10f2-4e2f-b3c1-ce6f08ac5357-10e0f11d.md) | Medium | CommandAndControl | [`Syslog`](../tables/syslog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [TI map Domain entity to Web Session Events (ASIM Web Session schema)](../content/threat-intelligence-new-ti-map-domain-entity-to-web-session-events-asim-web-session-schema-afa4cb9e-6fec-4742-a17f-f494b54c01e7-f312b638.md) | Medium | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Email entity to AzureActivity](../content/threat-intelligence-new-ti-map-email-entity-to-azureactivity-a9a4d1ee-0f52-4a1f-8def-a2fb4462104c-65a34698.md) | Medium | InitialAccess | [`AzureActivity`](../tables/azureactivity.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Email entity to Cloud App Events](../content/threat-intelligence-new-ti-map-email-entity-to-cloud-app-events-0385e99c-ae45-45f4-aecf-00104485cd6b-19029041.md) | Medium | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Email entity to EmailEvents](../content/threat-intelligence-new-ti-map-email-entity-to-emailevents-18b61c3f-55fa-4eb9-8721-72dabd1eb3cb-33ee20f1.md) | Medium | InitialAccess | [`EmailEvents`](../tables/emailevents.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Email entity to OfficeActivity](../content/threat-intelligence-new-ti-map-email-entity-to-officeactivity-795d43a3-6edc-4c99-971f-00d05841e5ac-5834b2a5.md) | Medium | InitialAccess | [`OfficeActivity`](../tables/officeactivity.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Email entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-new-ti-map-email-entity-to-paloalto-commonsecuritylog-17fe80fe-072f-44d4-b62c-97a5bce56a64-3f51c924.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Email entity to SecurityAlert](../content/threat-intelligence-new-ti-map-email-entity-to-securityalert-4b451ade-ed28-48e2-8fe7-60ae83ab2fa5-53e6c566.md) | Medium | InitialAccess | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Email entity to SecurityEvent](../content/threat-intelligence-new-ti-map-email-entity-to-securityevent-0a59051d-aed4-4fb6-bf84-bc80534482b2-60b9192e.md) | Medium | InitialAccess | [`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map Email entity to SigninLogs](../content/threat-intelligence-new-ti-map-email-entity-to-signinlogs-4b5a7f32-899d-4d22-8de2-0ec90b911a72-aaf060bd.md) | Medium | InitialAccess | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map File Hash to CommonSecurityLog Event](../content/threat-intelligence-new-ti-map-file-hash-to-commonsecuritylog-event-432996e9-8a93-4407-985f-13707b318a0b-a4223a3c.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map File Hash to DeviceFileEvents Event](../content/threat-intelligence-new-ti-map-file-hash-to-devicefileevents-event-d6f04915-4471-4cb3-b163-a8b72997cf72-94f54e22.md) | Medium | CommandAndControl | [`DeviceFileEvents`](../tables/devicefileevents.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map File Hash to Security Event](../content/threat-intelligence-new-ti-map-file-hash-to-security-event-9f7dc779-1e51-4925-ae4a-db1db933077f-d8ffe445.md) | Medium | CommandAndControl | [`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to AWSCloudTrail](../content/threat-intelligence-new-ti-map-ip-entity-to-awscloudtrail-69f55be4-1b13-42d0-b975-a1e59c996dd2-4cc25f87.md) | Medium | CommandAndControl | [`AWSCloudTrail`](../tables/awscloudtrail.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to AppServiceHTTPLogs](../content/threat-intelligence-new-ti-map-ip-entity-to-appservicehttplogs-206277b1-9a2c-4c62-9ee8-a4c888810d3c-7ce08041.md) | Medium | CommandAndControl | [`AppServiceHTTPLogs`](../tables/appservicehttplogs.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to Azure Key Vault logs](../content/threat-intelligence-new-ti-map-ip-entity-to-azure-key-vault-logs-7c8051a7-3d29-4c0d-a340-893423f7b0a5-565bd210.md) | Medium | CommandAndControl | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to AzureFirewall](../content/threat-intelligence-new-ti-map-ip-entity-to-azurefirewall-4992d2f3-d6c0-4271-adac-b23532ba4492-965a60e9.md) | Medium | CommandAndControl | [`AZFWApplicationRule`](../tables/azfwapplicationrule.md)<br>[`AZFWNetworkRule`](../tables/azfwnetworkrule.md)<br>[`AzureDiagnostics`](../tables/azurediagnostics.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to AzureNetworkAnalytics_CL (NSG Flow Logs)](../content/threat-intelligence-new-ti-map-ip-entity-to-azurenetworkanalytics-cl-nsg-flow-logs-929160b7-4449-4307-a3f9-bb742d1b8f01-d566e349.md) | Medium | CommandAndControl | [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to Cloud App Events](../content/threat-intelligence-new-ti-map-ip-entity-to-cloud-app-events-16a45aee-5e39-4d1b-b508-40f847c99353-f78512ba.md) | Medium | CommandAndControl | [`CloudAppEvents`](../tables/cloudappevents.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [TI map IP entity to DNS Events (ASIM DNS schema)](../content/threat-intelligence-new-ti-map-ip-entity-to-dns-events-asim-dns-schema-b306fba8-1a28-449f-aa24-30362e16d4f5-613a3814.md) | Medium | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_Dns`](../asim/imdns.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to GitHub_CL](../content/threat-intelligence-new-ti-map-ip-entity-to-github-cl-43d6c173-64c8-4416-b32e-636a9f318d15-5872ba25.md) | Medium | CommandAndControl | [`GitHub_CL`](../tables/github-cl.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threat-intelligence-new-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-54f4ceb4-fd83-4633-b5b0-c0de9feb8890-4e169efc.md) | Medium | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession`](../asim/imnetworksession.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to OfficeActivity](../content/threat-intelligence-new-ti-map-ip-entity-to-officeactivity-f50280e5-5eb1-4e95-99fd-9d584a987bdd-0c3d2238.md) | Medium | CommandAndControl | [`OfficeActivity`](../tables/officeactivity.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [TI map IP entity to Web Session Events (ASIM Web Session schema)](../content/threat-intelligence-new-ti-map-ip-entity-to-web-session-events-asim-web-session-schema-0548be6c-135e-4eb6-b9ff-14a09df62c77-0e576920.md) | Medium | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map IP entity to Workday(ASimAuditEventLogs)](../content/threat-intelligence-new-ti-map-ip-entity-to-workday-asimauditeventlogs-92e8e945-6e99-4e4b-bef8-468b4c19fc3a-7773b67f.md) | Medium | CommandAndControl | [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI map URL entity to Cloud App Events](../content/threat-intelligence-new-ti-map-url-entity-to-cloud-app-events-526df43b-f514-477c-af7a-c8d3586457fb-9db18791.md) | Medium | CommandAndControl | [`CloudAppEvents`](../tables/cloudappevents.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [TI Map File Entity to OfficeActivity Event](../content/threat-intelligence-new-ti-map-file-entity-to-officeactivity-event-bbdb951c-9aba-4d66-85df-f564a1f86881-bfe1f81a.md) | Impact | [`OfficeActivity`](../tables/officeactivity.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map File Entity to Security Event](../content/threat-intelligence-new-ti-map-file-entity-to-security-event-10f83299-c4e6-4af8-9627-5f9448dee24a-3651af8f.md) | Impact | [`SecurityEvent`](../tables/securityevent.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map File Entity to Syslog Event](../content/threat-intelligence-new-ti-map-file-entity-to-syslog-event-f624417d-9e4e-462e-93e7-53ab7686a479-b72d3476.md) | Impact | [`Syslog`](../tables/syslog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map File Entity to VMConnection Event](../content/threat-intelligence-new-ti-map-file-entity-to-vmconnection-event-f231cbcd-66d9-45be-a6a3-4a915e53d46c-00450027.md) | Impact | [`VMConnection`](../tables/vmconnection.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [TI Map File Entity to WireData Event](../content/threat-intelligence-new-ti-map-file-entity-to-wiredata-event-d2fd7661-de21-47ab-a9f9-e6ded983fabe-9e547c28.md) | Impact | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ThreatIntelligenceNew](../content/threat-intelligence-new-threatintelligencenew-535206c7.md) | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md)<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ThreatIntelIndicatorsv2](../parsers/threatintelindicatorsv2.md) | - | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.13      | 27-01-2026                     | Updated package to include latest query changes.                  |
| 3.0.12      | 23-12-2025                     | Replaces the 'AlertPriority' field with 'Severity' in the IPEntity_AppServiceHTTPLogs analytic rule and updates all related references.            |
| 3.0.11      | 02-12-2025                     | Update Threat Intelligence package and release notes 	 |
| 3.0.10      | 20-11-2025                     | Update Syntax for IPEntity_CloudAppEvents_Updated.yaml Rule		 |
| 3.0.9       | 07-11-2025                     | Updated EmailEntity_CloudAppEvents_Updated.yaml to adjust lookback periods to match the query period and frequency. |
| 3.0.8       | 18-10-2025                     | Update IPEntity_AzureFirewall.yaml to use Resource specific tables rather than AzureDiagnostics |
| 3.0.7       | 16-10-2025                     | Added new connector for **Threat Intelligence TAXII** export and now available in public preview.				|
| 3.0.6       | 08-09-2025                     | Fixed the problem related to the **Workbook** query					 |
| 3.0.5       | 03-09-2025                     | Support for a new data type, `ThreatIntelObjects`, across multiple Threat Intelligence **Data Connector** templates					 |
| 3.0.4       | 08-08-2025                     | Updated **Data Connectors** and **Analytic Rules** to ensures consistency and likely aligns with updated connector schemas or naming conventions|
| 3.0.3       | 25-07-2025                     | Added several new **Data Connectors** for Microsoft Sentinel, aimed at enhancing threat intelligence integration capabilities|
| 3.0.2       | 10-07-2025                     | Improve kql query efficiency and accuracy|
| 3.0.1       | 17-04-2025                     | Updated entity mappings of **Analytic Rules**|
| 3.0.0       | 02-04-2025                     | Initial solution release					 |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

