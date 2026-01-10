# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Google Threat Intelligence

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/GoogleThreatIntelligence.svg" alt="Google Threat Intelligence Logo" width="75" height="75">

This Google Threat Intelligence Solution contains Playbooks that can help enrich incident information with threat information and intelligence for IPs, file hashes and URLs from Google Threat Intelligence. Enriched information can help drive focused investigations in Security Operations.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Google |
| **Support Tier** | Partner |
| **Support Link** | [https://www.virustotal.com/gui/contact-us](https://www.virustotal.com/gui/contact-us) |
| **Categories** | domains |
| **Version** | 3.2.2 |
| **Author** | Google |
| **First Published** | 2024-10-26 |
| **Last Updated** | 2024-10-26 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence) |

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
| [Cisco](../asim/asim-products-index.md#cisco) |
| [Cisco Firepower](../asim/asim-products-index.md#cisco-firepower) |
| [Cisco ISE](../asim/asim-products-index.md#cisco-ise) |
| [Cisco Meraki](../asim/asim-products-index.md#cisco-meraki) |
| [CiscoASA](../asim/asim-products-index.md#ciscoasa) |
| [Citrix NetScaler](../asim/asim-products-index.md#citrix-netscaler) |
| [Corelight Zeek](../asim/asim-products-index.md#corelight-zeek) |
| [CrowdStrike Falcon Endpoint Protection](../asim/asim-products-index.md#crowdstrike-falcon-endpoint-protection) |
| [F5 BIG-IP Application Security Manager (ASM)](../asim/asim-products-index.md#f5-big-ip-application-security-manager-(asm)) |
| [ForcePointFirewall](../asim/asim-products-index.md#forcepointfirewall) |
| [Fortinet FortiGate](../asim/asim-products-index.md#fortinet-fortigate) |
| [GCP Cloud DNS](../asim/asim-products-index.md#gcp-cloud-dns) |
| [Google Workspace](../asim/asim-products-index.md#google-workspace) |
| [Illumio SaaS Core](../asim/asim-products-index.md#illumio-saas-core) |
| [Infoblox BloxOne](../asim/asim-products-index.md#infoblox-bloxone) |
| [Infoblox NIOS](../asim/asim-products-index.md#infoblox-nios) |
| [Internet Information Services (IIS)](../asim/asim-products-index.md#internet-information-services-(iis)) |
| [M365 Defender for Endpoint](../asim/asim-products-index.md#m365-defender-for-endpoint) |
| [MS DNS Events](../asim/asim-products-index.md#ms-dns-events) |
| [Microsoft](../asim/asim-products-index.md#microsoft) |
| [Microsoft 365 Defender for EndPoint](../asim/asim-products-index.md#microsoft-365-defender-for-endpoint) |
| [Microsoft Azure Blob Storage](../asim/asim-products-index.md#microsoft-azure-blob-storage) |
| [Microsoft Azure File Storage](../asim/asim-products-index.md#microsoft-azure-file-storage) |
| [Microsoft Azure Queue Storage](../asim/asim-products-index.md#microsoft-azure-queue-storage) |
| [Microsoft Azure Table Storage](../asim/asim-products-index.md#microsoft-azure-table-storage) |
| [Microsoft Defender for IoT](../asim/asim-products-index.md#microsoft-defender-for-iot) |
| [Microsoft Sentinel](../asim/asim-products-index.md#microsoft-sentinel) |
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
| [Zscaler ZIA DNS](../asim/asim-products-index.md#zscaler-zia-dns) |
| [Zscaler ZIA Firewall](../asim/asim-products-index.md#zscaler-zia-firewall) |
| [Zscaler ZIA Proxy](../asim/asim-products-index.md#zscaler-zia-proxy) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This solution uses **4 ASIM parser(s)** for normalized data:

| Table | Used By Content |
|-------|----------------|
| [`_Im_Dns`](../asim/imdns.md) | Analytics, Hunting |
| [`_Im_FileEvent`](../asim/imfileevent.md) | Analytics, Hunting |
| [`_Im_NetworkSession`](../asim/imnetworksession.md) | Analytics, Hunting |
| [`_Im_WebSession`](../asim/imwebsession.md) | Analytics, Hunting |

### Internal Tables

The following **1 table(s)** are used internally by this solution's playbooks:

| Table | Used By Content |
|-------|----------------|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | Analytics, Hunting |

## Content Items

This solution includes **16 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 8 |
| Analytic Rules | 4 |
| Hunting Queries | 4 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Google Threat Intelligence - Threat Hunting Domain](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-domain-d9e1646c-dc17-4150-ac85-581f5c9cb41f-473cd3b4.md) | Medium | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_Dns`](../asim/imdns.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Google Threat Intelligence - Threat Hunting Hash](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-hash-8f9cd0e5-b4ab-4821-95e2-1082fcd784c7-681b75ff.md) | Medium | Execution | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent`](../asim/imfileevent.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Google Threat Intelligence - Threat Hunting IP](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-ip-7edb2abb-7ef7-4685-92eb-a628703ccf9f-694732dc.md) | Medium | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession`](../asim/imnetworksession.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Google Threat Intelligence - Threat Hunting Url](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-url-89290690-54c4-4196-91c5-d32b1df5d873-c5fc6b01.md) | Medium | InitialAccess | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Google Threat Intelligence - Threat Hunting Domain](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-domain-34288e97-5194-4f2e-abf2-c2783189f6ae-2dfdacdc.md) | - | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_Dns`](../asim/imdns.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Google Threat Intelligence - Threat Hunting Hash](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-hash-0051a0d9-684f-4317-abbd-c1e5c24b39cb-5660b61d.md) | - | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_FileEvent`](../asim/imfileevent.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Google Threat Intelligence - Threat Hunting IP](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-ip-faa83502-2763-49ae-9216-e576fa1fdccb-c11a3364.md) | - | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession`](../asim/imnetworksession.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Google Threat Intelligence - Threat Hunting Url](../content/google-threat-intelligence-google-threat-intelligence-threat-hunting-url-a1705fa5-c904-4f1b-9e2d-a4ccb30377a2-b18588af.md) | - | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Google Threat Intelligence - Domain Enrichment](../content/google-threat-intelligence-google-threat-intelligence-domain-enrichment-4dd0e649.md) | This playbook will enrich Domain entities. | - |
| [Google Threat Intelligence - FileHash Enrichment](../content/google-threat-intelligence-google-threat-intelligence-filehash-enrichment-2c6963ed.md) | This playbook will enrich FileHash entities. | - |
| [Google Threat Intelligence - IOC Enrichment](../content/google-threat-intelligence-google-threat-intelligence-ioc-enrichment-6804cb8a.md) | This playbook will enrich IP, Hash, URL & Domain entities found in alerts. | - |
| [Google Threat Intelligence - IOC Enrichment](../content/google-threat-intelligence-google-threat-intelligence-ioc-enrichment-37b5ea42.md) | This playbook will enrich IP, Hash, URL & Domain entities found in incidents. | - |
| [Google Threat Intelligence - IP Enrichment](../content/google-threat-intelligence-google-threat-intelligence-ip-enrichment-e58dcaa4.md) | This playbook will enrich IP entities. | - |
| [Google Threat Intelligence - IoC Stream](../content/google-threat-intelligence-google-threat-intelligence-ioc-stream-01fc772a.md) | This playbook will ingest Google Threat Intelligence from your IoC Streams into Threat Intelligence ... | - |
| [Google Threat Intelligence - Threat List](../content/google-threat-intelligence-google-threat-intelligence-threat-list-c6635a88.md) | This playbook will ingest Google Threat Intelligence into Threat Intelligence Sentinel. | - |
| [Google Threat Intelligence - URL Enrichment](../content/google-threat-intelligence-google-threat-intelligence-url-enrichment-70256210.md) | This playbook will enrich URL entities. | - |

## Additional Documentation

> 📄 *Source: [Google Threat Intelligence/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/README.md)*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/GoogleThreatIntelligence.svg" alt="Google Threat Intelligence" style="width:150px; height:150px"/>

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             |
|-------------|--------------------------------|------------------------------------------------|
| 3.2.2       | 02-12-2025                     | - Included new Analytics Rules and Hunting Queries to improve detection capabilities and support proactive investigation. <br/>- Filtering threat lists<br/>- Migrating to Upload STIX Objects |
| 3.2.1       | 25-08-2025                     | Fix IoC Stream ingestion bug for results with more than 40 items due to a cursor iteration error. |
| 3.2.0       | 20-05-2025                     | New **Playbook** added *IoC Stream Threat Intelligence*.<br/> Added x-tool header in **Playbook** Customer Connector. |
| 3.1.0       | 29-01-2025                     | New *Threat Intelligence Ingestion* **Playbook** added. |
| 3.0.0       | 05-12-2024                     | Initial Solution Release.                       |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

