# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Threat Intelligence

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Threat Intelligence Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.1.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-18 |
| **Solution Folder** | [Threat Intelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Threat%20Intelligence) |

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

This solution provides **4 data connector(s)** (plus 1 discovered⚠️):

- [Microsoft Defender Threat Intelligence](../connectors/microsoftdefenderthreatintelligence.md)
- [Premium Microsoft Defender Threat Intelligence](../connectors/premiummicrosoftdefenderforthreatintelligence.md)
- [Threat Intelligence Platforms](../connectors/threatintelligence.md)
- [Threat intelligence - TAXII](../connectors/threatintelligencetaxii.md)
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
| [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md) 🔶 | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md) 🔶 | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md) 🔶 | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md) 🔶 | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md) 🔶 | [SentinelOne](../connectors/sentineloneccp.md) (dependency), [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) 🔶 | [SentinelOne](../connectors/sentinelone.md) (dependency) | - |
| [`SigninLogs`](../tables/signinlogs.md) | - | Analytics |
| [`SquidProxy_CL`](../tables/squidproxy-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`Syslog`](../tables/syslog.md) | [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) (dependency), [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) (dependency), [Cisco Software Defined WAN](../connectors/ciscosdwan.md) (dependency), [Forescout](../connectors/forescout.md) (dependency), [Syslog via AMA](../connectors/syslogama.md) (dependency), [Syslog via Legacy Agent](../connectors/syslog.md) (dependency), [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) (dependency) | Analytics, Hunting |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | [Microsoft Defender Threat Intelligence](../connectors/microsoftdefenderthreatintelligence.md), [Premium Microsoft Defender Threat Intelligence](../connectors/premiummicrosoftdefenderforthreatintelligence.md), [Threat Intelligence Platforms](../connectors/threatintelligence.md), [Threat Intelligence Upload API (Preview)](../connectors/threatintelligenceuploadindicatorsapi.md), [Threat intelligence - TAXII](../connectors/threatintelligencetaxii.md) | Analytics, Hunting, Workbooks |
| [`Tomcat_CL`](../tables/tomcat-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`Ubiquiti_CL`](../tables/ubiquiti-cl.md) 🔶 | [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`UrlClickEvents`](../tables/urlclickevents.md) | - | Analytics |
| [`VMConnection`](../tables/vmconnection.md) | - | Analytics, Hunting |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) 🔶 | [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) (dependency), [Custom logs via AMA](../connectors/customlogsviaama.md) (dependency) | - |
| [`W3CIISLog`](../tables/w3ciislog.md) | [IIS Logs of Microsoft Exchange Servers](../connectors/esi-opt5exchangeiislogs.md) (dependency), [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) (dependency) | Analytics |
| [`WindowsEvent`](../tables/windowsevent.md) | [Windows Forwarded Events](../connectors/windowsforwardedevents.md) (dependency) | Analytics |
| [`WireData`](../tables/wiredata.md) | - | Hunting |
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

The following **3 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | - | Analytics, Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | - | Workbooks |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | [CrowdStrike Falcon Adversary Intelligence ](../connectors/crowdstrikefalconadversaryintelligence.md) (dependency) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`).
## Content Items

This solution includes **58 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 52 |
| Hunting Queries | 5 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Preview - TI map Domain entity to Cloud App Events](../content/threat-intelligence-preview-ti-map-domain-entity-to-cloud-app-events-b97e118c-b7fa-42a6-84de-2e13443fbb8f-9a4d26f1.md) | Medium | CommandAndControl | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [Preview - TI map Email entity to Cloud App Events](../content/threat-intelligence-preview-ti-map-email-entity-to-cloud-app-events-47b9bb10-d216-4359-8cef-08ca2c67e5be-e757d151.md) | Medium | InitialAccess | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [Preview - TI map IP entity to Cloud App Events](../content/threat-intelligence-preview-ti-map-ip-entity-to-cloud-app-events-4e0a6fc8-697e-4455-be47-831b41ea91ac-e0fcbf3b.md) | Medium | CommandAndControl | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [Preview - TI map URL entity to Cloud App Events](../content/threat-intelligence-preview-ti-map-url-entity-to-cloud-app-events-e8ae92dd-1d41-4530-8be8-85c5014c7b47-7067e6da.md) | Medium | CommandAndControl | [`CloudAppEvents`](../tables/cloudappevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map Domain Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-domain-entity-to-devicenetworkevents-c308b2f3-eebe-4a20-905c-cb8293b062db-1b8b91ec.md) | Medium | CommandAndControl | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map IP Entity to Azure SQL Security Audit Events](../content/threat-intelligence-ti-map-ip-entity-to-azure-sql-security-audit-events-d0aa8969-1bbe-4da3-9e76-09e5f67c9d85-cbef7484.md) | Medium | CommandAndControl | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map IP Entity to AzureActivity](../content/threat-intelligence-ti-map-ip-entity-to-azureactivity-2441bce9-02e4-407b-8cc7-7d597f38b8b0-eefa9066.md) | Medium | CommandAndControl | [`AzureActivity`](../tables/azureactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map IP Entity to CommonSecurityLog](../content/threat-intelligence-ti-map-ip-entity-to-commonsecuritylog-66c81ae2-1f89-4433-be00-2fbbd9ba5ebe-1afb299b.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map IP Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-ip-entity-to-devicenetworkevents-b2df4979-d34a-48b3-a7d9-f473a4bf8058-1cf5dff4.md) | Medium | CommandAndControl | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map IP Entity to DnsEvents](../content/threat-intelligence-ti-map-ip-entity-to-dnsevents-69b7723c-2889-469f-8b55-a2d355ed9c87-bb4a4c77.md) | Medium | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map IP Entity to Duo Security](../content/threat-intelligence-ti-map-ip-entity-to-duo-security-d23ed927-5be3-4902-a9c1-85f841eb4fa1-cf610585.md) | Medium | CommandAndControl | [`DuoSecurityAuthentication_CL`](../tables/duosecurityauthentication-cl.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map IP Entity to SigninLogs](../content/threat-intelligence-ti-map-ip-entity-to-signinlogs-f2eb15bd-8a88-4b24-9281-e133edfba315-bfc1548d.md) | Medium | CommandAndControl | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map IP Entity to VMConnection](../content/threat-intelligence-ti-map-ip-entity-to-vmconnection-9713e3c0-1410-468d-b79e-383448434b2d-c87f4032.md) | Medium | CommandAndControl | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`VMConnection`](../tables/vmconnection.md) |
| [TI Map IP Entity to W3CIISLog](../content/threat-intelligence-ti-map-ip-entity-to-w3ciislog-5e45930c-09b1-4430-b2d1-cc75ada0dc0f-b8687c20.md) | Medium | CommandAndControl | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`W3CIISLog`](../tables/w3ciislog.md) |
| [TI Map URL Entity to AuditLogs](../content/threat-intelligence-ti-map-url-entity-to-auditlogs-712fab52-2a7d-401e-a08c-ff939cc7c25e-fa07e25e.md) | Medium | CommandAndControl | [`AuditLogs`](../tables/auditlogs.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map URL Entity to DeviceNetworkEvents](../content/threat-intelligence-ti-map-url-entity-to-devicenetworkevents-6ddbd892-a9be-47be-bab7-521241695bd6-16a87b1d.md) | Medium | CommandAndControl | [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map URL Entity to EmailUrlInfo](../content/threat-intelligence-ti-map-url-entity-to-emailurlinfo-a0038239-72f4-4f7b-90ff-37f89f7881e0-2ee2a116.md) | Medium | CommandAndControl | [`EmailEvents`](../tables/emailevents.md)<br>[`EmailUrlInfo`](../tables/emailurlinfo.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map URL Entity to OfficeActivity Data [Deprecated]](../content/threat-intelligence-ti-map-url-entity-to-officeactivity-data-[deprecated]-36a9c9e5-3dc1-4ed9-afaa-1d13617bfc2b-bab823d6.md) | Medium | CommandAndControl | - |
| [TI Map URL Entity to PaloAlto Data](../content/threat-intelligence-ti-map-url-entity-to-paloalto-data-106813db-679e-4382-a51b-1bfc463befc3-df95f41e.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map URL Entity to SecurityAlert Data](../content/threat-intelligence-ti-map-url-entity-to-securityalert-data-f30a47c1-65fb-42b1-a7f4-00941c12550b-d5b8e27a.md) | Medium | CommandAndControl | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [TI Map URL Entity to Syslog Data](../content/threat-intelligence-ti-map-url-entity-to-syslog-data-b31037ea-6f68-4fbd-bab2-d0d0f44c2fcf-b70131e6.md) | Medium | CommandAndControl | [`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map URL Entity to UrlClickEvents](../content/threat-intelligence-ti-map-url-entity-to-urlclickevents-23391c84-87d8-452f-a84c-47a62f01e115-1f8657e0.md) | Medium | CommandAndControl | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`UrlClickEvents`](../tables/urlclickevents.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [TI map Domain entity to Dns Events (ASIM DNS Schema)](../content/threat-intelligence-ti-map-domain-entity-to-dns-events-asim-dns-schema-999e9f5d-db4a-4b07-a206-29c4e667b7e8-820c58df.md) | Medium | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_Dns`](../asim/imdns.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Domain entity to DnsEvents](../content/threat-intelligence-ti-map-domain-entity-to-dnsevents-85aca4d1-5d15-4001-abd9-acb86ca1786a-1658942e.md) | Medium | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Domain entity to EmailEvents](../content/threat-intelligence-ti-map-domain-entity-to-emailevents-96307710-8bb9-4b45-8363-a90c72ebf86f-5727bb74.md) | Medium | InitialAccess | [`EmailEvents`](../tables/emailevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Domain entity to EmailUrlInfo](../content/threat-intelligence-ti-map-domain-entity-to-emailurlinfo-87cc75df-d7b2-44f1-b064-ee924edfc879-da6a50ae.md) | Medium | InitialAccess | [`EmailEvents`](../tables/emailevents.md)<br>[`EmailUrlInfo`](../tables/emailurlinfo.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Domain entity to PaloAlto](../content/threat-intelligence-ti-map-domain-entity-to-paloalto-ec21493c-2684-4acd-9bc2-696dbad72426-30f0e4c8.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Domain entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-ti-map-domain-entity-to-paloalto-commonsecuritylog-dd0a6029-ecef-4507-89c4-fc355ac52111-78fcc05f.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Domain entity to SecurityAlert](../content/threat-intelligence-ti-map-domain-entity-to-securityalert-87890d78-3e05-43ec-9ab9-ba32f4e01250-cbcbd86c.md) | Medium | CommandAndControl | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [TI map Domain entity to Syslog](../content/threat-intelligence-ti-map-domain-entity-to-syslog-532f62c1-fba6-4baa-bbb6-4a32a4ef32fa-afa2706f.md) | Medium | CommandAndControl | [`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [TI map Domain entity to Web Session Events (ASIM Web Session schema)](../content/threat-intelligence-ti-map-domain-entity-to-web-session-events-asim-web-session-schema-b1832f60-6c3d-4722-a0a5-3d564ee61a63-56583a86.md) | Medium | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Email entity to AzureActivity](../content/threat-intelligence-ti-map-email-entity-to-azureactivity-cca3b4d9-ac39-4109-8b93-65bb284003e6-d3038f92.md) | Medium | InitialAccess | [`AzureActivity`](../tables/azureactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Email entity to EmailEvents](../content/threat-intelligence-ti-map-email-entity-to-emailevents-11f7c6e3-f066-4b3c-9a81-b487ec0a6873-db576d3c.md) | Medium | InitialAccess | [`EmailEvents`](../tables/emailevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Email entity to OfficeActivity](../content/threat-intelligence-ti-map-email-entity-to-officeactivity-4a3f5ed7-8da5-4ce2-af6f-c9ada45060f2-5a438de0.md) | Medium | InitialAccess | [`OfficeActivity`](../tables/officeactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Email entity to PaloAlto CommonSecurityLog](../content/threat-intelligence-ti-map-email-entity-to-paloalto-commonsecuritylog-ffcd575b-3d54-482a-a6d8-d0de13b6ac63-7a9927d1.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map Email entity to SecurityAlert](../content/threat-intelligence-ti-map-email-entity-to-securityalert-a2e36ce0-da4d-4b6e-88c6-4e40161c5bfc-2cc60265.md) | Medium | InitialAccess | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [TI map Email entity to SecurityEvent](../content/threat-intelligence-ti-map-email-entity-to-securityevent-2fc5d810-c9cc-491a-b564-841427ae0e50-9cb621b7.md) | Medium | InitialAccess | [`SecurityEvent`](../tables/securityevent.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [TI map Email entity to SigninLogs](../content/threat-intelligence-ti-map-email-entity-to-signinlogs-30fa312c-31eb-43d8-b0cc-bcbdfb360822-7878c95a.md) | Medium | InitialAccess | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map File Hash to CommonSecurityLog Event](../content/threat-intelligence-ti-map-file-hash-to-commonsecuritylog-event-5d33fc63-b83b-4913-b95e-94d13f0d379f-27089def.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map File Hash to DeviceFileEvents Event](../content/threat-intelligence-ti-map-file-hash-to-devicefileevents-event-bc0eca2e-db50-44e6-8fa3-b85f91ff5ee7-89fca104.md) | Medium | CommandAndControl | [`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map File Hash to Security Event](../content/threat-intelligence-ti-map-file-hash-to-security-event-a7427ed7-04b4-4e3b-b323-08b981b9b4bf-a0646697.md) | Medium | CommandAndControl | [`SecurityEvent`](../tables/securityevent.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [TI map IP entity to AWSCloudTrail](../content/threat-intelligence-ti-map-ip-entity-to-awscloudtrail-f110287e-1358-490d-8147-ed804b328514-010bee9c.md) | Medium | CommandAndControl | [`AWSCloudTrail`](../tables/awscloudtrail.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map IP entity to AppServiceHTTPLogs](../content/threat-intelligence-ti-map-ip-entity-to-appservicehttplogs-f9949656-473f-4503-bf43-a9d9890f7d08-106c6a94.md) | Medium | CommandAndControl | [`AppServiceHTTPLogs`](../tables/appservicehttplogs.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map IP entity to Azure Key Vault logs](../content/threat-intelligence-ti-map-ip-entity-to-azure-key-vault-logs-57c7e832-64eb-411f-8928-4133f01f4a25-7c3f7a41.md) | Medium | CommandAndControl | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map IP entity to AzureFirewall](../content/threat-intelligence-ti-map-ip-entity-to-azurefirewall-0b904747-1336-4363-8d84-df2710bfe5e7-30fad35b.md) | Medium | CommandAndControl | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map IP entity to AzureNetworkAnalytics_CL (NSG Flow Logs)](../content/threat-intelligence-ti-map-ip-entity-to-azurenetworkanalytics-cl-nsg-flow-logs-a4025a76-6490-4e6b-bb69-d02be4b03f07-8964f465.md) | Medium | CommandAndControl | [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [TI map IP entity to DNS Events (ASIM DNS schema)](../content/threat-intelligence-ti-map-ip-entity-to-dns-events-asim-dns-schema-67775878-7f8b-4380-ac54-115e1e828901-a15c3e60.md) | Medium | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_Dns`](../asim/imdns.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map IP entity to GitHub_CL](../content/threat-intelligence-ti-map-ip-entity-to-github-cl-aac495a9-feb1-446d-b08e-a1164a539452-00a98102.md) | Medium | CommandAndControl | [`GitHub_CL`](../tables/github-cl.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threat-intelligence-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-e2399891-383c-4caf-ae67-68a008b9f89e-f1153622.md) | Medium | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession`](../asim/imnetworksession.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map IP entity to OfficeActivity](../content/threat-intelligence-ti-map-ip-entity-to-officeactivity-f15370f4-c6fa-42c5-9be4-1d308f40284e-72906e4b.md) | Medium | CommandAndControl | [`OfficeActivity`](../tables/officeactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [TI map IP entity to Web Session Events (ASIM Web Session schema)](../content/threat-intelligence-ti-map-ip-entity-to-web-session-events-asim-web-session-schema-e2559891-383c-4caf-ae67-55a008b9f89e-289eb7c1.md) | Medium | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI map IP entity to Workday(ASimAuditEventLogs)](../content/threat-intelligence-ti-map-ip-entity-to-workday-asimauditeventlogs-a924d317-03d2-4420-a71f-4d347bda4bd8-7032e2e7.md) | Medium | CommandAndControl | [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [TI Map File Entity to OfficeActivity Event](../content/threat-intelligence-ti-map-file-entity-to-officeactivity-event-410da56d-4a63-4d22-b68c-9fb1a303be6d-69933815.md) | Impact | [`OfficeActivity`](../tables/officeactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map File Entity to Security Event](../content/threat-intelligence-ti-map-file-entity-to-security-event-233441b9-cc92-4c9b-87fa-73b855fcd4b8-14557cf7.md) | Impact | [`SecurityEvent`](../tables/securityevent.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map File Entity to Syslog Event](../content/threat-intelligence-ti-map-file-entity-to-syslog-event-18f7de84-de55-4983-aca3-a18bc846b4e0-26e4aa14.md) | Impact | [`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [TI Map File Entity to VMConnection Event](../content/threat-intelligence-ti-map-file-entity-to-vmconnection-event-172a321b-c46b-4508-87c6-e2691c778107-debef4d0.md) | Impact | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`VMConnection`](../tables/vmconnection.md) |
| [TI Map File Entity to WireData Event](../content/threat-intelligence-ti-map-file-entity-to-wiredata-event-689a9475-440b-4e69-8ab1-a5e241685f39-12f328f6.md) | Impact | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>[`WireData`](../tables/wiredata.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ThreatIntelligence](../content/threat-intelligence-threatintelligence-3dd5d2b4.md) | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.1.3       | 20-01-2026                     | Updated **Analytical Rule** to include the missing column. |
| 3.1.2       | 26-06-2025                     | Updated TI Map IP Entity to CommonSecurityLog **Analytical Rules** to exclude private ips |
| 3.1.1       | 22-01-2025                     | Fixed feature flag configs for PMDTI, MDTI, and UploadAPI based on the new FeatureStates. Fix api-version and documentation link for UploadAPI. |
| 3.1.0       | 15-01-2025                     | Updated feature flags for PMDTI and MDTI for GA, and Upload API for PP. |
| 3.0.9		  | 04-12-2024					   | Modified DomainEntity_EmailUrlInfo **Analytic Rule** to resolve memory issues |
| 3.0.8		  | 28-11-2024					   | Removed (Preview) from name for **Data Connectors** Microsoft Defender Threat Intelligence and Premium Microsoft Defender Threat Intelligence, make the MDTI and PMDTI data connctors available in gov solution, and update descriptions of data connectors. |
| 3.0.7		  | 24-10-2024					   | Updated Columns of **Analytical Rules** 				 			  |
| 3.0.6		  | 24-09-2024					   | Updated Entity Mappings of **Analytical Rules** 				 			  |
| 3.0.5       | 19-08-2024                     | Updated isConnectedQuery for **Data Connector** of "Threat Intelligence Upload Indicators API". |
| 3.0.4       | 22-05-2024                     | Updated connectivity criteria for **Data Connector** and added New **Data Connector** for Premium Microsoft Defender Threat Intelligence (Preview)   					  |
| 3.0.3		  | 21-03-2024					   | Updated Entity Mappings of **Analytical Rules**				 			  |
| 3.0.2       | 23-10-2023                     | Updated KQL of analytic rules to improve performance in large datasets 	  |
| 3.0.1       | 22-08-2023                     | Removed (Preview) from Name field in **Analytical Rules** |
| 3.0.0       | 14-08-2023                     | Modified **Analytical Rule** (TI map Domain entity to SecurityAlert). Updated dynamic([1]) to dynamic([1,1]) so as to make result array of array consistent.   |
|             |                                | Updated **Hunting Queries** to have descriptions that meet the 255 characters limit.      |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

