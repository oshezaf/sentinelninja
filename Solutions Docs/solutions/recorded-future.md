# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Recorded Future

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/RecordedFuture.svg" alt="Recorded Future Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

[Recorded Future](https://www.recordedfuture.com/) is the worlds largest provider of intelligence for enterprise security. By combining persistent and pervasive automated data collection and analytics with human analysis, Recorded Future delivers intelligence that is timely, accurate, and actionable.

Underlying Microsoft Technologies used:
This solution depends on underlying Microsoft technologies. Some of these dependencies either may be in Preview state or might result in additional ingestion or operational costs:
* [Log Analytics](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/workspace-design)
* [Logic apps](https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-pricing)
* [Threat Indicators](https://learn.microsoft.com/en-us/azure/sentinel/upload-indicators-api)


## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Recorded Future Support Team |
| **Support Tier** | Partner |
| **Support Link** | [http://support.recordedfuture.com/](http://support.recordedfuture.com/) |
| **Categories** | domains |
| **Version** | 3.2.17 |
| **Author** | Recorded Future Premier Integrations - support@recordedfuture.com |
| **First Published** | 2021-11-01 |
| **Last Updated** | 2023-09-19 |
| **Solution Folder** | [Recorded Future](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future) |

## Dependencies

This solution depends on **26 other solution(s)**:

| Solution | Dependency Type | Details |
|:---------|:----------------|:--------|
| [AWS VPC Flow Logs](aws-vpc-flow-logs.md) | ASIM | ASIM schemas: NetworkSession |
| [Azure Firewall](azure-firewall.md) | ASIM | ASIM schemas: Dns |
| [Azure Storage](azure-storage.md) | ASIM | ASIM schemas: FileEvent |
| [Cisco Meraki Events via REST API](cisco-meraki-events-via-rest-api.md) | ASIM | ASIM schemas: NetworkSession, WebSession |
| [Cisco SD-WAN](cisco-sd-wan.md) | ASIM | ASIM schemas: WebSession |
| [CiscoASA](ciscoasa.md) | ASIM | ASIM schemas: NetworkSession |
| [CiscoMeraki](ciscomeraki.md) | ASIM | ASIM schemas: NetworkSession, WebSession |
| [CiscoUmbrella](ciscoumbrella.md) | ASIM | ASIM schemas: Dns |
| [Common Event Format](common-event-format.md) | ASIM | ASIM schemas: Dns, NetworkSession, WebSession |
| [Corelight](corelight.md) | ASIM | ASIM schemas: Dns, NetworkSession |
| [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md) | ASIM | ASIM schemas: Dns, FileEvent, NetworkSession |
| [CustomLogsAma](customlogsama.md) | ASIM | ASIM schemas: Dns, NetworkSession, WebSession |
| [Forescout (Legacy)](forescout-legacy.md) | ASIM | ASIM schemas: WebSession |
| [IllumioSaaS](illumiosaas.md) | ASIM | ASIM schemas: NetworkSession |
| [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md) | ASIM | ASIM schemas: NetworkSession, WebSession |
| [MimecastTIRegional](mimecasttiregional.md) | ASIM | ASIM schemas: Dns, FileEvent, NetworkSession |
| [NXLogDNSLogs](nxlogdnslogs.md) | ASIM | ASIM schemas: Dns |
| [SentinelOne](sentinelone.md) | ASIM | ASIM schemas: Dns, FileEvent, NetworkSession |
| [SlashNext](slashnext.md) | ASIM | ASIM schemas: Dns, NetworkSession |
| [Syslog](syslog.md) | ASIM | ASIM schemas: Dns, FileEvent, NetworkSession |
| [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md) | ASIM | ASIM schemas: FileEvent, NetworkSession |
| [Vectra AI Stream](vectra-ai-stream.md) | ASIM | ASIM schemas: Dns, NetworkSession, WebSession |
| [VirtualMetric DataStream](virtualmetric-datastream.md) | ASIM | ASIM schemas: Dns, NetworkSession, WebSession |
| [Windows Forwarded Events](windows-forwarded-events.md) | ASIM | ASIM schemas: Dns, FileEvent, NetworkSession |
| [Windows Security Events](windows-security-events.md) | ASIM | ASIM schemas: FileEvent, NetworkSession |
| [Windows Server DNS](windows-server-dns.md) | ASIM | ASIM schemas: Dns |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> Supported Products

This solution uses ASIM parsers and supports the following products:

| Product |
|:--------|
| [AWS VPC](../asim/asim-products-index.md#aws-vpc) |
| [Apache HTTP Server](../asim/asim-products-index.md#apache-http-server) |
| [AppGate SDP](../asim/asim-products-index.md#appgate-sdp) |
| [Azure Firewall](../asim/asim-products-index.md#azure-firewall) |
| [Azure NSG flows](../asim/asim-products-index.md#azure-nsg-flows) |
| [Azure NTANetAnalytics](../asim/asim-products-index.md#azure-ntanetanalytics) |
| [Barracuda WAF](../asim/asim-products-index.md#barracuda-waf) |
| [CheckPointFirewall](../asim/asim-products-index.md#checkpointfirewall) |
| [Cisco Firepower](../asim/asim-products-index.md#cisco-firepower) |
| [Cisco ISE](../asim/asim-products-index.md#cisco-ise) |
| [Cisco Meraki](../asim/asim-products-index.md#cisco-meraki) |
| [Cisco Umbrella](../asim/asim-products-index.md#cisco-umbrella) |
| [CiscoASA](../asim/asim-products-index.md#ciscoasa) |
| [Citrix NetScaler](../asim/asim-products-index.md#citrix-netscaler) |
| [Corelight Zeek](../asim/asim-products-index.md#corelight-zeek) |
| [CrowdStrike Falcon Endpoint Protection](../asim/asim-products-index.md#crowdstrike-falcon-endpoint-protection) |
| [F5 BIG-IP Application Security Manager (ASM)](../asim/asim-products-index.md#f5-big-ip-application-security-manager-asm) |
| [ForcePointFirewall](../asim/asim-products-index.md#forcepointfirewall) |
| [Fortinet FortiGate](../asim/asim-products-index.md#fortinet-fortigate) |
| [GCP Cloud DNS](../asim/asim-products-index.md#gcp-cloud-dns) |
| [Google Workspace](../asim/asim-products-index.md#google-workspace) |
| [Illumio SaaS Core](../asim/asim-products-index.md#illumio-saas-core) |
| [Infoblox BloxOne](../asim/asim-products-index.md#infoblox-bloxone) |
| [Infoblox NIOS](../asim/asim-products-index.md#infoblox-nios) |
| [Internet Information Services (IIS)](../asim/asim-products-index.md#internet-information-services-iis) |
| [M365 Defender for Endpoint](../asim/asim-products-index.md#m365-defender-for-endpoint) |
| [MS DNS Events](../asim/asim-products-index.md#ms-dns-events) |
| [Microsoft 365 Defender for EndPoint](../asim/asim-products-index.md#microsoft-365-defender-for-endpoint) |
| [Microsoft Azure Blob Storage](../asim/asim-products-index.md#microsoft-azure-blob-storage) |
| [Microsoft Azure File Storage](../asim/asim-products-index.md#microsoft-azure-file-storage) |
| [Microsoft Azure Queue Storage](../asim/asim-products-index.md#microsoft-azure-queue-storage) |
| [Microsoft Azure Table Storage](../asim/asim-products-index.md#microsoft-azure-table-storage) |
| [Microsoft Defender for IoT](../asim/asim-products-index.md#microsoft-defender-for-iot) |
| [Microsoft SharePoint](../asim/asim-products-index.md#microsoft-sharepoint) |
| [Microsoft Sysmon for Linux](../asim/asim-products-index.md#microsoft-sysmon-for-linux) |
| [Microsoft Windows Events](../asim/asim-products-index.md#microsoft-windows-events) |
| [Microsoft Windows Events Sysmon](../asim/asim-products-index.md#microsoft-windows-events-sysmon) |
| [Native](../asim/asim-products-index.md#native) |
| [Palo Alto Cortex Data Lake](../asim/asim-products-index.md#palo-alto-cortex-data-lake) |
| [Palo Alto Networks](../asim/asim-products-index.md#palo-alto-networks) |
| [Palo Alto PanOS](../asim/asim-products-index.md#palo-alto-panos) |
| [SentinelOne](../asim/asim-products-index.md#sentinelone) |
| [SonicWall](../asim/asim-products-index.md#sonicwall) |
| [Squid Proxy](../asim/asim-products-index.md#squid-proxy) |
| [Sysmon for Linux](../asim/asim-products-index.md#sysmon-for-linux) |
| [VMConnection](../asim/asim-products-index.md#vmconnection) |
| [VMware Carbon Black Cloud](../asim/asim-products-index.md#vmware-carbon-black-cloud) |
| [Vectra AI Streams](../asim/asim-products-index.md#vectra-ai-streams) |
| [WatchGuard Fireware OS](../asim/asim-products-index.md#watchguard-fireware-os) |
| [Windows Firewall](../asim/asim-products-index.md#windows-firewall) |
| [Windows Sysmon](../asim/asim-products-index.md#windows-sysmon) |
| [Zscaler ZIA](../asim/asim-products-index.md#zscaler-zia) |
| [Zscaler ZIA DNS](../asim/asim-products-index.md#zscaler-zia-dns) |
| [Zscaler ZIA Firewall](../asim/asim-products-index.md#zscaler-zia-firewall) |

## Data Connectors

**This solution does not include its own data connectors** but uses connectors from dependency solutions:

- [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) *(dependency on [Vectra AI Stream](vectra-ai-stream.md))*
- [Windows DNS Events via AMA](../connectors/asimdnsactivitylogs.md) *(dependency on [Windows Server DNS](windows-server-dns.md))*
- [Amazon Web Services S3 VPC Flow Logs](../connectors/awss3vpcflowlogsparquetdefinition.md) *(dependency on [AWS VPC Flow Logs](aws-vpc-flow-logs.md))*
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
- [Cisco Software Defined WAN](../connectors/ciscosdwan.md) *(dependency on [Cisco SD-WAN](cisco-sd-wan.md))*
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
- [Forescout](../connectors/forescout.md) *(dependency on [Forescout (Legacy)](forescout-legacy.md))*
- [Illumio SaaS](../connectors/illumiosaasdataconnector.md) *(dependency on [IllumioSaaS](illumiosaas.md))*
- [Illumio Saas](../connectors/illumiosaasccfdefinition.md) *(dependency on [IllumioSaaS](illumiosaas.md))*
- [Mimecast Intelligence for Microsoft - Microsoft Sentinel](../connectors/mimecasttiregionalconnectorazurefunctions.md) *(dependency on [MimecastTIRegional](mimecasttiregional.md))*
- [NXLog DNS Logs](../connectors/nxlogdnslogs.md) *(dependency on [NXLogDNSLogs](nxlogdnslogs.md))*
- [Security Events via Legacy Agent](../connectors/securityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*
- [SentinelOne](../connectors/sentinelone.md) *(dependency on [SentinelOne](sentinelone.md))*
- [SentinelOne](../connectors/sentineloneccp.md) *(dependency on [SentinelOne](sentinelone.md))*
- [SlashNext Function App](../connectors/slashnextfunctionapp.md) *(dependency on [SlashNext](slashnext.md))*
- [Syslog via Legacy Agent](../connectors/syslog.md) *(dependency on [Syslog](syslog.md))*
- [Syslog via AMA](../connectors/syslogama.md) *(dependency on [Syslog](syslog.md))*
- [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) *(dependency on [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md))*
- [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) *(dependency on [Vectra AI Stream](vectra-ai-stream.md))*
- [VirtualMetric Director Proxy](../connectors/virtualmetricdirectorproxy.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [VirtualMetric DataStream for Microsoft Sentinel](../connectors/virtualmetricmssentinelconnector.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [VirtualMetric DataStream for Microsoft Sentinel data lake](../connectors/virtualmetricmssentineldatalakeconnector.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [Windows Forwarded Events](../connectors/windowsforwardedevents.md) *(dependency on [Windows Forwarded Events](windows-forwarded-events.md))*
- [Windows Security Events via AMA](../connectors/windowssecurityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*
- [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) *(dependency on [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md))*

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This solution uses **4 ASIM parser(s)** for normalized data:

| Table | Used By Content |
|-------|----------------|
| [`_Im_Dns`](../asim/imdns.md) | Analytics, Hunting |
| [`_Im_NetworkSession`](../asim/imnetworksession.md) | Analytics, Hunting |
| [`_Im_WebSession`](../asim/imwebsession.md) | Analytics, Hunting |
| [`imFileEvent`](../asim/imfileevent.md) | Analytics, Hunting |

## Tables Used

This solution queries **2 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`RecordedFuturePlaybookAlerts_CL`](../tables/recordedfutureplaybookalerts-cl.md) | Playbooks (writes) |
| [`RecordedFuturePortalAlerts_CL`](../tables/recordedfutureportalalerts-cl.md) | Playbooks (writes) |

### Internal Tables

The following **3 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`RecordedFutureThreatMapMalware_CL`](../tables/recordedfuturethreatmapmalware-cl.md) | Playbooks (writes), Workbooks |
| [`RecordedFutureThreatMap_CL`](../tables/recordedfuturethreatmap-cl.md) | Playbooks (writes), Workbooks |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **37 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 21 |
| Workbooks | 8 |
| Analytic Rules | 4 |
| Hunting Queries | 4 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [RecordedFuture Threat Hunting Domain All Actors](../content/recorded-future-recordedfuture-threat-hunting-domain-all-actors-acbf7ef6-f964-44c3-9031-7834ec68175f-9002c0d5.md) | Medium | InitialAccess, CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_Dns`](../asim/imdns.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [RecordedFuture Threat Hunting Hash All Actors](../content/recorded-future-recordedfuture-threat-hunting-hash-all-actors-6db6a8e6-2959-440b-ba57-a505875fcb37-f0b99a01.md) | Medium | InitialAccess, Execution, Persistence | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`imFileEvent`](../asim/imfileevent.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [RecordedFuture Threat Hunting IP All Actors](../content/recorded-future-recordedfuture-threat-hunting-ip-all-actors-e31bc14e-2b4c-42a4-af34-5bfd7d768aea-57f811e9.md) | Medium | Exfiltration, CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession`](../asim/imnetworksession.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [RecordedFuture Threat Hunting Url All Actors](../content/recorded-future-recordedfuture-threat-hunting-url-all-actors-3f6f0d1a-f2f9-4e01-881a-c55a4a71905b-8b23fa82.md) | Medium | Persistence, PrivilegeEscalation, DefenseEvasion | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [RecordedFuture Threat Hunting Domain All Actors](../content/recorded-future-recordedfuture-threat-hunting-domain-all-actors-d641a534-ead8-41aa-a7c8-2b35e6b64c9f-095de712.md) ⚠️ | - | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_Dns`](../asim/imdns.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [RecordedFuture Threat Hunting Hash All Actors](../content/recorded-future-recordedfuture-threat-hunting-hash-all-actors-905da21a-c7d2-4f5b-b8fc-c8321da3ee83-003a7b7a.md) ⚠️ | - | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`imFileEvent`](../asim/imfileevent.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [RecordedFuture Threat Hunting IP All Actors](../content/recorded-future-recordedfuture-threat-hunting-ip-all-actors-7b5eb44d-3533-440e-9774-73a4d99bc2b2-0bac2271.md) ⚠️ | - | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession`](../asim/imnetworksession.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [RecordedFuture Threat Hunting URL All Actors](../content/recorded-future-recordedfuture-threat-hunting-url-all-actors-dbc2438a-0d16-4890-aaae-cbe0dc433b08-1c8d9da1.md) ⚠️ | - | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [RecordedFutureAlertOverview](../content/recorded-future-recordedfuturealertoverview-51eb79fd.md) | - |
| [RecordedFutureDomainCorrelation](../content/recorded-future-recordedfuturedomaincorrelation-be3669be.md) | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [RecordedFutureHashCorrelation](../content/recorded-future-recordedfuturehashcorrelation-1e41d39d.md) | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [RecordedFutureIPCorrelation](../content/recorded-future-recordedfutureipcorrelation-65ad70f0.md) | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [RecordedFutureMalwareThreatHunting](../content/recorded-future-recordedfuturemalwarethreathunting-8c8ddaa1.md) | *Internal use:*<br>[`RecordedFutureThreatMapMalware_CL`](../tables/recordedfuturethreatmapmalware-cl.md) |
| [RecordedFuturePlaybookAlertOverview](../content/recorded-future-recordedfutureplaybookalertoverview-60ee4c91.md) | - |
| [RecordedFutureThreatActorHunting](../content/recorded-future-recordedfuturethreatactorhunting-26a6d59e.md) | *Internal use:*<br>[`RecordedFutureThreatMap_CL`](../tables/recordedfuturethreatmap-cl.md) |
| [RecordedFutureURLCorrelation](../content/recorded-future-recordedfutureurlcorrelation-7c307c28.md) | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [RecordedFuture-ActorThreatHunt-IndicatorImport](../content/recorded-future-recordedfuture-actorthreathunt-indicatorimport-9d175248.md) | This playbook will write Recorded Future threat hunting indicators to ThreatIntelligenceIndicator lo... | - |
| [RecordedFuture-Alert-Importer](../content/recorded-future-recordedfuture-alert-importer-744ed2e2.md) | This playbook imports alerts from Recorded Future and stores them in a custom log in the log analyti... | [`RecordedFuturePortalAlerts_CL`](../tables/recordedfutureportalalerts-cl.md) *(read/write)* |
| [RecordedFuture-DOMAIN-C2_DNS_Name-TIProcessor](../content/recorded-future-recordedfuture-domain-c2-dns-name-tiprocessor-fa1b7c55.md) | **[Deprecated]** Deprecated due to changes in the Threat Intelligence Platform. Use the new Indicato... | - |
| [RecordedFuture-Domain-IndicatorImport](../content/recorded-future-recordedfuture-domain-indicatorimport-6bac2a40.md) | This playbook imports Domain risk lists from Recorded Future and stores them as Threat Intelligence ... | - |
| [RecordedFuture-HASH-Obs_in_Underground-TIProcessor](../content/recorded-future-recordedfuture-hash-obs-in-underground-tiprocessor-bc84e786.md) | **[Deprecated]** Deprecated due to changes in the Threat Intelligence Platform. Use the new Indicato... | - |
| [RecordedFuture-Hash-IndicatorImport](../content/recorded-future-recordedfuture-hash-indicatorimport-a3134338.md) | This playbook imports Hash risk lists from Recorded Future and stores them as Threat Intelligence In... | - |
| [RecordedFuture-IOC_Enrichment](../content/recorded-future-recordedfuture-ioc-enrichment-dda73772.md) | This playbook leverages the Recorded Future API to enrich IP, Domain, Url & Hash indicators, found i... | - |
| [RecordedFuture-IP-Actively_Comm_C2_Server-TIProcessor](../content/recorded-future-recordedfuture-ip-actively-comm-c2-server-tiprocessor-5ba5fd7f.md) | **[Deprecated]** Deprecated due to changes in the Threat Intelligence Platform. Use the new Indicato... | - |
| [RecordedFuture-IP-IndicatorImport](../content/recorded-future-recordedfuture-ip-indicatorimport-12100b20.md) | This playbook imports IP risk lists from Recorded Future and stores them as Threat Intelligence Indi... | - |
| [RecordedFuture-ImportToSentinel](../content/recorded-future-recordedfuture-importtosentinel-375c16d8.md) | **[Deprecated]** Deprecated due to changes in the Threat Intelligence Platform. Use the new Indicato... | - |
| [RecordedFuture-MalwareThreatHunt-IndicatorImport](../content/recorded-future-recordedfuture-malwarethreathunt-indicatorimport-557fcc9b.md) | This playbook will write Recorded Future threat hunting indicators to ThreatIntelligenceIndicator lo... | - |
| [RecordedFuture-Playbook-Alert-Importer](../content/recorded-future-recordedfuture-playbook-alert-importer-3166bf69.md) | This playbook imports alerts from Recorded Future and stores them in a custom log in the log analyti... | [`RecordedFuturePlaybookAlerts_CL`](../tables/recordedfutureplaybookalerts-cl.md) *(write)* |
| [RecordedFuture-Sandbox_Enrichment-Url](../content/recorded-future-recordedfuture-sandbox-enrichment-url-500e284d.md) | This playbook will enrich url entities in an incident and send them to Recorded Future Sandbox. The ... | - |
| [RecordedFuture-Sandbox_Outlook_Attachment](../content/recorded-future-recordedfuture-sandbox-outlook-attachment-124e2932.md) | This playbook will trigger on emails with attachmets and send them to Recorded Future Sandbox. The r... | - |
| [RecordedFuture-Sandbox_StorageAccount](../content/recorded-future-recordedfuture-sandbox-storageaccount-9566f274.md) | This playbook will trigger on files in a Storage Account and send them to Recorded Future Sandbox. T... | - |
| [RecordedFuture-ThreatIntelligenceImport](../content/recorded-future-recordedfuture-threatintelligenceimport-ef10c4ab.md) | This playbook will write indicators in batch to ThreatIntelligenceIndicator log analytics table. | - |
| [RecordedFuture-ThreatMap-Importer](../content/recorded-future-recordedfuture-threatmap-importer-58b1d1a3.md) | This playbook will import Threat Map data from Recorded Future and store it in a custom log. | *Internal use:*<br>[`RecordedFutureThreatMap_CL`](../tables/recordedfuturethreatmap-cl.md) *(write)* |
| [RecordedFuture-ThreatMapMalware-Importer](../content/recorded-future-recordedfuture-threatmapmalware-importer-001905e9.md) | This playbook will import Threat Map data from Recorded Future and store it in a custom log. | *Internal use:*<br>[`RecordedFutureThreatMapMalware_CL`](../tables/recordedfuturethreatmapmalware-cl.md) *(write)* |
| [RecordedFuture-URL-IndicatorImport](../content/recorded-future-recordedfuture-url-indicatorimport-6e39cf42.md) | This playbook imports URL risk lists from Recorded Future and stores them as Threat Intelligence Ind... | - |
| [RecordedFuture-URL-Recent_Rep_by_Insikt-TIProcessor](../content/recorded-future-recordedfuture-url-recent-rep-by-insikt-tiprocessor-0e7085c0.md) | **[Deprecated]** Deprecated due to changes in the Threat Intelligence Platform. Use the new Indicato... | - |
| [RecordedFuture-Ukraine-IndicatorProcessor](../content/recorded-future-recordedfuture-ukraine-indicatorprocessor-803dc885.md) | **[Deprecated]** Deprecated due to changes in the Threat Intelligence Platform. Use the new Indicato... | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Additional Documentation

> 📄 *Source: [Recorded Future/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/README.md)*

[<img alt="Recorded Future" src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Playbooks/Enrichment/RecordedFuture-IOC_Enrichment/images/RecordedFuture.png"  />](https://www.recordedfuture.com/)
# Recorded Future Intelligence for Microsoft Sentinel

Instructions how to install and use Recorded Future Solution for Microsoft Sentinel or how to install individual playbooks can be found in the main [readme.md](Playbooks/readme.md) in the Playbook sub directory in this repository.

Recorded Future also provide standalone Playbooks in this repository for EntraID (identity) and Defender for endpoints.

**Recorded Future Intelligence Solution**
- [Installation guide](Playbooks/readme.md)

**Recorded Future Defender Integrations**
- [Recorded Future Defender playbooks](../../Playbooks/RecordedFuture-Block-IPs-and-Domains-on-Microsoft-Defender-for-Endpoint/)
- [Recorded Future Defender SCF playbooks](../../Playbooks/RecordedFuture_IP_SCF/)

**Recorded Future for Identity**
- [Recorded Future Identity](../Recorded%20Future%20Identity/Playbooks/readme.md)

# About Recorded Future

Recorded Future is the world's largest provider of intelligence for enterprise security. By seamlessly combining automated data collection, pervasive analytics, and expert human analysis, Recorded Future delivers timely, accurate, and actionable intelligence.

**Benefits of Recorded Future integrations** 
- Detect indicators of compromise (IOCs) in your environment.
- Triage alerts faster with elite, real-time intelligence.
- Respond quickly with transparency and context around internal telemetry data.
- Maximize your investment in Microsoft Sentinel.

[Learn more about Recorded Future for Microsoft Sentinel](https://www.recordedfuture.com/microsoft-azure-sentinel-integration)

[Start a 30-day free trial of Recorded Future for Microsoft Sentinel from here!](https://go.recordedfuture.com/microsoft-azure-sentinel-free-trial?utm_campaign=&utm_source=microsoft&utm_medium=gta)

<a id="keyfeatures"></a>
# Key Features
Recorded Future for Microsoft Sentinel offers a range of powerful intelligence capabilities, some of the key features include:
## **IOC Detection (Detect)**

The TI-IndicatorImport playbooks pulls risk lists from Recorded Future and writes the contained indicators to the Microsoft Sentinel ThreatIntelligenceIndicator table via the RecordedFuture-ThreatIntelligenceImport playbook. 
![](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Playbooks/Images/2023-04-19-17-08-46.png)\
Microsoft Sentinel analytic rules correlates threat intelligence indicators with logs provided to Microsoft Sentinel and creates alerts/incidents for matches found.\
![](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Playbooks/Images/2023-04-19-17-46-32.png)

## **IOC Enrichment (Respond)**

Automation rules triggers on each incident and enriches incidents with Recorded Future intelligence. 

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
3.2.17       |  12-08-2025                    | Updated **Indicator imports** with deterministic **STIX ID** that should reduce the number duplicate IOCs. Updated `RecordedFuture-Playbook-Alert-Importer` to improve the description formatting. Updated documentation with typo fixes and clarifications.	|
3.2.16       |  08-05-2025                    | Updated **workbooks**, **analytic rules** and **hunting queries** to new `ThreatIntelIndicators` schema. Removed deprecated **analytic rules**. Updated documentation to reflect changes.	|
| 3.2.15       |  12-03-2025                    | Fixed description of **Playbooks**.	|
| 3.2.14       |  30-01-2025                    | Fix the name of `IntelligenceCloud` parameter in `RecordedFuture-CustomConnector` + other minor renames.	|
| 3.2.13       |  08-01-2025                    | Removed Custom Entity mappings from **Analytic rules**.	|
| 3.2.12       |  28-11-2024                    | Fix API connection bug in RecordedFuture-AlertImporter **Playbook**. |
| 3.2.11       |  31-10-2024                    | Fix API connection bug in RecordedFuture-ThreatMap-Importer **Playbook**, documentation improvements. |
| 3.2.10       |  01-10-2024                    | Updated install README for multiple **Playbooks**, added protocol check for URL enrichments in RecordedFuture-IOC_Enrichment **Playbook**, moved parameters from important to advanced and internal in RecordedFuture-CustomConnector.|
| 3.2.9       |  23-09-2024                    | Updated RecordedFuture-Alert-Importer **Playbook** improved text encoding and added utm links.  |
| 3.2.8       |  23-08-2024                    | Updated RecordedFuture-Alert-Importer **Playbook** added text encoding and latest_event_date bugfix.  |
| 3.2.7       |  01-08-2024                    | Updated **Analytic rules** for entity mappings.  |
| 3.2.6       |  03-08-2024                     | Added incident creation to RecordedFuture-Alert-Importer **Playbook**.<br/> Update concurrency in RecordedFuture-IOC_Enrichment **Playbook**.  |
| 3.2.5       |  24-06-2024                    | Added missing AMA **Data Connector** reference in **Analytic rules**.  |
| 3.2.4       |  08-03-2024                     | Change default Recurrence for pulling data in Fix parse json in RecordedFuture-ThreatMap-Importer **Playbook**.<br/> Update solution description, referencing release notes.  |
| 3.2.3       |  27-02-2024                     | Fix parsing in RecordedFuture-PlaybookAlert-Importer **Playbook**.<br/> Added Recorded Future AI Summary to Alert **workbook**.<br/> Added Statues to **Playbook** alert **Workbook**. |
| 3.2.1       |  08-02-2024                     | Fix parse json in RecordedFuture-Alert-Importer **Playbook**.<br/> Fixed broken links in readme.md |
| 3.2.0       |  27-12-2023                    | Added (Recorded Future Malware Threat Map) **Workbook**<br/> Added (ThreatMapMalware-Importer) **Playbook**.<br/> Added (MalwareThreatHunt-IndicatorImport) **Playbook**.<br/> Fix defaults on RecordedFuture-ActorThreatHunt-IndicatorImport **Playbook** <br/> Fixed description on RecordedFutureThreatHuntingDomainAllActors **Analytic Rules**.<br/> Fixed description on RecordedFutureThreatHuntingHashAllActors **Analytic Rules**. <br/> Added Malware endpoints to RecordedFuture-CustomConnector **Playbook**. <br/> Fixed defaults on Playbook-Alert-Importer **Playbook**.<br/> Updated API connection names for all **Playbooks** to ease API connection configuration. <br>Changed connectorId for Hunting **Analytic Rules**. <br/>Updated documentation. <br/> |
| 3.1.1       |  27-12-2023                    | Minor fix, added Release Notes to Solution description. |
| 3.1.0       |  01-12-2023                    | Added (Recorded Future Threat Actor Map) **Workbook**.<br/> Added (RecordedFuture-ThreatMap-Importer) **Playbook**.<br/> Added (RecordedFuture-ActorThreatHunt-IndicatorImport) **Playbook**.<br/> Added 4 **Analytic Rules** to be used for Recorded Future Threat Hunt. <br/> Documentation update.<br/> Removed 6 deprecated **Playbooks** from Solution package. |
| 3.0.2       | 02-11-2023                     | Encoding Fix to the (RecordedFuture-Alert-Importer) **Playbook**.<br/> Changed defaults in (RecordedFuture-Playbook-Alert-Importer). |
| 3.0.1       | 26-10-2023                     | Fix to the (RecordedFuture-ThreatIntelligenceImport) **Playbook**.  |
| 3.0.0       | 20-09-2023                     | Added **Workbooks** for correlating Recorded Future and logs containing IoC of type IP, DNS, URL and Hash <br/> Generate Markdown/HTML response for enrichment comments.<br/> (Recorded Future Playbook Alerts) **Playbook** and  **Workbook** for visualization.<br/> (Recorded Future Classic Alerts) **Playbook** and **Workbook** for visualization.<br/> Leveraging new API for importing threat indicators and deprecating old **Playbooks**. |
| 2.4.0       | 29-05-2023                     | (Sandbox URL enrichment) **Playbook** included in the solution. <br/> Sandbox( of outlook attachment Playbook) provided as an example outside the solution. <br/> Sandbox of files in Azure storage accounts provided as example outside the solution. <br/> Fix to (IOC enrichment playbook) don’t report 404 (not found) as an error. |
| 2.3.0       | 13-02-2023                     | Layout improvements to the (incident enrichment Playbook). <br/>Added **Detections** from collective insights to enrichment playbooks.<br/>IncidentId and MITRE Att&ck code added to collective insights.<br/>Fix for image in incident comment. |
| 2.2.2       | 23-01-2023                     | Fixes for all risk list import **Playbooks**. |
| 2.2.1       | 23-12-2022                     | Display severity for risk rules in enrichment of IOCs.<br/>Sorting of risk rules, showing very malicious rules first. |
| 2.2.0       | 14-12-2022                     | Improvements to the (incident enrichment playbook).<br/>Added Recorded Future links to enrichment comment.<br/> Improved layout of the enrichment, adding Recorded Future logo, table layout. |
| 2.1.0       | 20-09-2022                     | Updated all **Playbooks** to use RecordedFutureV2 connector, which requires new API keys. <br/>Added **Playbooks** for importing Ukraine Russia conflict risk lists. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

