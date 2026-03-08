# <img src="../images/asim-badge.png" alt="ASIM" height="32"> SecurityThreatEssentialSolution

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="SecurityThreatEssentialSolution Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft Corporation - support@microsoft.com |
| **First Published** | 2022-03-30 |
| **Solution Folder** | [SecurityThreatEssentialSolution](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SecurityThreatEssentialSolution) |
| **Pre-requisites** | [Microsoft Entra ID](microsoft-entra-id.md), [Microsoft 365](microsoft-365.md), [Azure Activity](azure-activity.md), [CiscoASA](ciscoasa.md), [PaloAlto-PAN-OS](paloalto-pan-os.md), [Zscaler Internet Access](zscaler-internet-access.md) |

This solution published by Microsoft is based on the continuous evaluation of threat campaigns and provides out-of-the-box security content that helps you to enhance your security posture.
This solution leverages the following tables:
 
 • AuditLogs 
 
 • AzureActivity 
 
 • CommonSecurityLog 
 
 • OfficeActivity 
 
 • SigninLogs 
 
 • VMConnection


## Contents

- [Pre-requisites](#pre-requisites)
- [ASIM Pre-requisites](#asim-pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Pre-requisites

This solution depends on **6 other solution(s)**:

| Solution |
|:---------|
| [Azure Activity](azure-activity.md) |
| [CiscoASA](ciscoasa.md) |
| [Microsoft 365](microsoft-365.md) |
| [Microsoft Entra ID](microsoft-entra-id.md) |
| [PaloAlto-PAN-OS](paloalto-pan-os.md) |
| [Zscaler Internet Access](zscaler-internet-access.md) |

## <a id="asim-pre-requisites"></a><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Pre-requisites

This solution uses the [`_Im_WebSession`](../asim/imwebsession.md) [ASIM (Advanced Security Information Model)](https://learn.microsoft.com/azure/sentinel/normalization) parser to provide normalized, source-agnostic data access, expanding detection coverage without modifying queries.

### Supported Products

| Product | Dependency Solution |
|:--------|:--------------------|
| [Apache HTTP Server](../asim/asim-products-index.md#apache-http-server) | [CustomLogsAma](customlogsama.md) |
| [Azure Firewall](../asim/asim-products-index.md#azure-firewall) | - |
| [Barracuda WAF](../asim/asim-products-index.md#barracuda-waf) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Cisco Firepower](../asim/asim-products-index.md#cisco-firepower) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Cisco Meraki](../asim/asim-products-index.md#cisco-meraki) | [Cisco SD-WAN](cisco-sd-wan.md)<br>[CiscoMeraki](ciscomeraki.md)<br>[CustomLogsAma](customlogsama.md)<br>[Forescout (Legacy)](forescout-legacy.md) |
| [Citrix NetScaler](../asim/asim-products-index.md#citrix-netscaler) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [F5 BIG-IP Application Security Manager (ASM)](../asim/asim-products-index.md#f5-big-ip-application-security-manager-asm) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Fortinet FortiGate](../asim/asim-products-index.md#fortinet-fortigate) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Internet Information Services (IIS)](../asim/asim-products-index.md#internet-information-services-iis) | [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md) |
| [Native](../asim/asim-products-index.md#native) | [Cisco Meraki Events via REST API](cisco-meraki-events-via-rest-api.md) |
| [Palo Alto Cortex Data Lake](../asim/asim-products-index.md#palo-alto-cortex-data-lake) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Palo Alto Networks](../asim/asim-products-index.md#palo-alto-networks) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [SonicWall](../asim/asim-products-index.md#sonicwall) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |
| [Squid Proxy](../asim/asim-products-index.md#squid-proxy) | [CustomLogsAma](customlogsama.md) |
| [Vectra AI Streams](../asim/asim-products-index.md#vectra-ai-streams) | [CustomLogsAma](customlogsama.md)<br>[Vectra AI Stream](vectra-ai-stream.md) |
| [Zscaler ZIA](../asim/asim-products-index.md#zscaler-zia) | [Common Event Format](common-event-format.md)<br>[VirtualMetric DataStream](virtualmetric-datastream.md) |

## Data Connectors

**This solution does not include its own data connectors** but uses connectors from dependency solutions:

- [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) *(dependency on [Vectra AI Stream](vectra-ai-stream.md))*
- [Microsoft Entra ID](../connectors/azureactivedirectory.md) *(dependency on [Microsoft Entra ID](microsoft-entra-id.md))*
- [Azure Activity](../connectors/azureactivity.md) *(dependency on [Azure Activity](azure-activity.md))*
- [Common Event Format (CEF)](../connectors/cef.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Common Event Format (CEF) via AMA](../connectors/cefama.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md) *(dependency on [CiscoASA](ciscoasa.md))*
- [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) *(dependency on [CiscoASA](ciscoasa.md))*
- [[Deprecated] Cisco Meraki](../connectors/ciscomeraki.md) *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomeraki-usingrestapi.md) *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomerakimultirule.md) *(dependency on [Cisco Meraki Events via REST API](cisco-meraki-events-via-rest-api.md))*
- [Cisco Meraki (using REST API)](../connectors/ciscomerakinativepoller.md) *(dependency on [CiscoMeraki](ciscomeraki.md))*
- [Cisco Software Defined WAN](../connectors/ciscosdwan.md) *(dependency on [Cisco SD-WAN](cisco-sd-wan.md))*
- [Custom logs via AMA](../connectors/customlogsviaama.md) *(dependency on [CustomLogsAma](customlogsama.md))*
- [[Deprecated] Microsoft Exchange Logs and Events](../connectors/esi-exchangeadminauditlogevents.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Exchange Security Insights On-Premises Collector](../connectors/esi-exchangeonpremisescollector.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Admin Audit Logs by Event Logs](../connectors/esi-opt1exchangeadminauditlogsbyeventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Logs and Events](../connectors/esi-opt2exchangeserverseventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [ Microsoft Active-Directory Domain Controllers Security Event Logs](../connectors/esi-opt34domaincontrollerssecurityeventlogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [IIS Logs of Microsoft Exchange Servers](../connectors/esi-opt5exchangeiislogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange Message Tracking Logs](../connectors/esi-opt6exchangemessagetrackinglogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Microsoft Exchange HTTP Proxy Logs](../connectors/esi-opt7exchangehttpproxylogs.md) *(dependency on [Microsoft Exchange Security - Exchange On-Premises](microsoft-exchange-security-exchange-on-premises.md))*
- [Forescout](../connectors/forescout.md) *(dependency on [Forescout (Legacy)](forescout-legacy.md))*
- [Microsoft 365 (formerly, Office 365)](../connectors/office365.md) *(dependency on [Microsoft 365](microsoft-365.md))*
- [[Deprecated] Palo Alto Networks (Firewall) via Legacy Agent](../connectors/paloaltonetworks.md) *(dependency on [PaloAlto-PAN-OS](paloalto-pan-os.md))*
- [[Deprecated] Palo Alto Networks (Firewall) via AMA](../connectors/paloaltonetworksama.md) *(dependency on [PaloAlto-PAN-OS](paloalto-pan-os.md))*
- [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) *(dependency on [Vectra AI Stream](vectra-ai-stream.md))*
- [VirtualMetric Director Proxy](../connectors/virtualmetricdirectorproxy.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [VirtualMetric DataStream for Microsoft Sentinel](../connectors/virtualmetricmssentinelconnector.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [VirtualMetric DataStream for Microsoft Sentinel data lake](../connectors/virtualmetricmssentineldatalakeconnector.md) *(dependency on [VirtualMetric DataStream](virtualmetric-datastream.md))*
- [[Deprecated] Zscaler via Legacy Agent](../connectors/zscaler.md) *(dependency on [Zscaler Internet Access](zscaler-internet-access.md))*
- [[Deprecated] Zscaler via AMA](../connectors/zscalerama.md) *(dependency on [Zscaler Internet Access](zscaler-internet-access.md))*

## Tables Used

This solution queries **6 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AuditLogs`](../tables/auditlogs.md) | Analytics |
| [`AzureActivity`](../tables/azureactivity.md) | Analytics |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Analytics |
| [`OfficeActivity`](../tables/officeactivity.md) | Analytics |
| [`SigninLogs`](../tables/signinlogs.md) | Analytics, Hunting |
| [`VMConnection`](../tables/vmconnection.md) | Analytics |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`Anomalies`](../tables/anomalies.md) | Analytics |

## Content Items

This solution includes **9 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 7 |
| Hunting Queries | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Possible AiTM Phishing Attempt Against Microsoft Entra ID](../content/securitythreatessentialsolution-possible-aitm-phishing-attempt-against-microsoft-entra-id-16daa67c-b137-48dc-8eb7-76598a44791a-98f6165b.md) | Medium | InitialAccess, DefenseEvasion, CredentialAccess | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_WebSession`](../asim/imwebsession.md)<br>[`SigninLogs`](../tables/signinlogs.md) |
| [Threat Essentials - Mail redirect via ExO transport rule](../content/securitythreatessentialsolution-threat-essentials-mail-redirect-via-exo-transport-rule-d7c575b2-84f5-48cb-92c5-70d7e8246284-30414fca.md) | Medium | Collection, Exfiltration | [`OfficeActivity`](../tables/officeactivity.md) |
| [Threat Essentials - Mass Cloud resource deletions Time Series Anomaly](../content/securitythreatessentialsolution-threat-essentials-mass-cloud-resource-deletions-time-series-anomaly-fa2658fe-3714-4c55-bb12-2b7275c628e8-119af452.md) | Medium | Impact | [`AzureActivity`](../tables/azureactivity.md) |
| [Threat Essentials - Multiple admin membership removals from newly created admin.](../content/securitythreatessentialsolution-threat-essentials-multiple-admin-membership-removals-from-newly-created--199978c5-cd6d-4194-b505-8ef5800739df-5a0ad1e1.md) | Medium | Impact | [`AuditLogs`](../tables/auditlogs.md) |
| [Threat Essentials - NRT User added to Microsoft Entra ID Privileged Groups](../content/securitythreatessentialsolution-threat-essentials-nrt-user-added-to-microsoft-entra-id-privileged-groups-0a627f29-f0dd-4924-be92-c3d6dac84367-54eec993.md) | Medium | Persistence, PrivilegeEscalation | [`AuditLogs`](../tables/auditlogs.md) |
| [Threat Essentials - Time series anomaly for data size transferred to public internet](../content/securitythreatessentialsolution-threat-essentials-time-series-anomaly-for-data-size-transferred-to-publi-b49a1093-cbf6-4973-89ac-2eef98f533c6-bc9cced1.md) | Medium | Exfiltration | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`VMConnection`](../tables/vmconnection.md)<br>*Internal use:*<br>[`Anomalies`](../tables/anomalies.md) |
| [Threat Essentials - User Assigned Privileged Role](../content/securitythreatessentialsolution-threat-essentials-user-assigned-privileged-role-b09795c9-8dce-47ab-8f75-5a4afb78ef0c-6f988146.md) | High | Persistence | [`AuditLogs`](../tables/auditlogs.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Threat Essentials - Signins From VPS Providers](../content/securitythreatessentialsolution-threat-essentials-signins-from-vps-providers-f347ff55-6443-46b6-9abb-4f8f9b3209f8-41e64544.md) | InitialAccess | [`SigninLogs`](../tables/signinlogs.md) |
| [Threat Essentials - Signins from Nord VPN Providers](../content/securitythreatessentialsolution-threat-essentials-signins-from-nord-vpn-providers-1eaad895-7796-466b-8bf3-cec0fa78d0e4-2239dde4.md) | InitialAccess | [`SigninLogs`](../tables/signinlogs.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                        |
|-------------|--------------------------------|---------------------------------------------------------------------------|
| 3.0.3       | 05-06-2024                     | Added missing AMA **Data Connector** reference in **Analytic Rule**       |
| 3.0.2       | 18-03-2024                     | Tagged for dependent solutions for deployment                             |
| 3.0.1       | 10-11-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.  |
| 3.0.0       | 06-07-2023                     | Updating **Analytic rule** query for KQL failure                          |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Solutions Index](../solutions-index.md)

