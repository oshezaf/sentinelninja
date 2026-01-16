# <img src="../images/asim-badge.png" alt="ASIM" height="32"> ASIM Parsers by Product

This index organizes ASIM parsers by the product or data source they normalize. Use this view to find ASIM support for a specific product, including which schemas are supported and which tables contain the source data.

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · **ASIM Products**

---

## Summary

| Metric | Count |
|:-------|------:|
| **Products** | 80 |
| **Source Parser Pairs*** | 82 |
| **Schemas Covered** | 11 |
| **Tables Used** | 80 |

\* *Each parser pair consists of an ASim filtering parser and a vim parameter-based parser.*

## Products Overview

| Product | Parsers | Schemas | Tables |
|:--------|--------:|--------:|-------:|
| [Apache HTTP Server](#apache-http-server) | 1 | 1 | 1 |
| [AppGate SDP](#appgate-sdp) | 1 | 1 | 1 |
| [AWS](#aws) | 1 | 1 | 1 |
| [AWS VPC](#aws-vpc) | 1 | 1 | 1 |
| [Azure Firewall](#azure-firewall) | 3 | 3 | 9 |
| [Azure NSG flows](#azure-nsg-flows) | 1 | 1 | 2 |
| [Azure NTANetAnalytics](#azure-ntanetanalytics) | 1 | 1 | 1 |
| [Barracuda WAF](#barracuda-waf) | 7 | 4 | 2 |
| [CheckPointFirewall](#checkpointfirewall) | 1 | 1 | 1 |
| [Cisco Adaptive Security Appliance (ASA)](#cisco-adaptive-security-appliance-asa) | 1 | 1 | 2 |
| [Cisco Firepower](#cisco-firepower) | 2 | 2 | 1 |
| [Cisco ISE](#cisco-ise) | 4 | 4 | 1 |
| [Cisco Meraki](#cisco-meraki) | 7 | 4 | 4 |
| [Cisco Umbrella](#cisco-umbrella) | 1 | 1 | 1 |
| [CiscoASA](#ciscoasa) | 1 | 1 | 1 |
| [Citrix NetScaler](#citrix-netscaler) | 1 | 1 | 1 |
| [Corelight Zeek](#corelight-zeek) | 2 | 2 | 1 |
| [CrowdStrike Falcon Endpoint Protection](#crowdstrike-falcon-endpoint-protection) | 3 | 3 | 2 |
| [F5 BIG-IP Application Security Manager (ASM)](#f5-big-ip-application-security-manager-asm) | 1 | 1 | 1 |
| [ForcePointFirewall](#forcepointfirewall) | 1 | 1 | 3 |
| [Fortinet FortiGate](#fortinet-fortigate) | 3 | 3 | 1 |
| [GCP Cloud DNS](#gcp-cloud-dns) | 1 | 1 | 1 |
| [Google Workspace](#google-workspace) | 2 | 2 | 2 |
| [Illumio](#illumio) | 1 | 1 | 1 |
| [Illumio Core](#illumio-core) | 1 | 1 | 1 |
| [Illumio SaaS Core](#illumio-saas-core) | 1 | 1 | 1 |
| [Infoblox BloxOne](#infoblox-bloxone) | 3 | 3 | 1 |
| [Infoblox NIOS](#infoblox-nios) | 1 | 1 | 1 |
| [Internet Information Services (IIS)](#internet-information-services-iis) | 1 | 1 | 1 |
| [M365 Defender for EndPoint](#m365-defender-for-endpoint) | 1 | 1 | 1 |
| [M365 Defender for Endpoint](#m365-defender-for-endpoint) | 1 | 1 | 1 |
| [Microsoft](#microsoft) | 1 | 1 | 1 |
| [Microsoft 365 Defender for EndPoint](#microsoft-365-defender-for-endpoint) | 1 | 1 | 1 |
| [Microsoft 365 Defender for endpoint](#microsoft-365-defender-for-endpoint) | 1 | 1 | 1 |
| [Microsoft 365 Defender for Endpoint](#microsoft-365-defender-for-endpoint) | 1 | 1 | 1 |
| [Microsoft Azure](#microsoft-azure) | 1 | 1 | 1 |
| [Microsoft Azure Blob Storage](#microsoft-azure-blob-storage) | 1 | 1 | 1 |
| [Microsoft Azure File Storage](#microsoft-azure-file-storage) | 1 | 1 | 1 |
| [Microsoft Azure Queue Storage](#microsoft-azure-queue-storage) | 1 | 1 | 1 |
| [Microsoft Azure Table Storage](#microsoft-azure-table-storage) | 1 | 1 | 1 |
| [Microsoft Defender for IoT](#microsoft-defender-for-iot) | 4 | 3 | 1 |
| [Microsoft Defender XDR](#microsoft-defender-xdr) | 1 | 1 | 1 |
| [Microsoft Entra ID](#microsoft-entra-id) | 4 | 1 | 4 |
| [Microsoft Security Event](#microsoft-security-event) | 1 | 1 | 1 |
| [Microsoft SharePoint](#microsoft-sharepoint) | 2 | 2 | 2 |
| [Microsoft Sysmon](#microsoft-sysmon) | 2 | 1 | 2 |
| [Microsoft Sysmon for Linux](#microsoft-sysmon-for-linux) | 2 | 1 | 1 |
| [Microsoft Windows](#microsoft-windows) | 3 | 1 | 5 |
| [Microsoft Windows Event](#microsoft-windows-event) | 1 | 1 | 1 |
| [Microsoft Windows Events](#microsoft-windows-events) | 2 | 1 | 2 |
| [Microsoft Windows Events Sysmon](#microsoft-windows-events-sysmon) | 4 | 2 | 2 |
| [MS DNS Events](#ms-dns-events) | 2 | 1 | 2 |
| [Native](#native) | 10 | 10 | 10 |
| [Okta](#okta) | 2 | 1 | 2 |
| [OpenSSH](#openssh) | 1 | 1 | 1 |
| [Palo Alto Cortex Data Lake](#palo-alto-cortex-data-lake) | 3 | 3 | 1 |
| [Palo Alto Networks](#palo-alto-networks) | 1 | 1 | 1 |
| [Palo Alto PanOS](#palo-alto-panos) | 1 | 1 | 1 |
| [PostgreSQL](#postgresql) | 1 | 1 | 1 |
| [Salesforce Service Cloud](#salesforce-service-cloud) | 1 | 1 | 1 |
| [Security Events](#security-events) | 6 | 2 | 5 |
| [SentinelOne](#sentinelone) | 9 | 9 | 3 |
| [SonicWall](#sonicwall) | 2 | 2 | 1 |
| [Squid Proxy](#squid-proxy) | 1 | 1 | 1 |
| [su](#su) | 1 | 1 | 1 |
| [sudo](#sudo) | 1 | 1 | 1 |
| [Sysmon](#sysmon) | 2 | 1 | 2 |
| [Sysmon for Linux](#sysmon-for-linux) | 3 | 2 | 1 |
| [Trend Micro Vision One](#trend-micro-vision-one) | 2 | 2 | 1 |
| [Vectra](#vectra) | 2 | 2 | 1 |
| [Vectra AI Streams](#vectra-ai-streams) | 3 | 3 | 1 |
| [VMConnection](#vmconnection) | 1 | 1 | 1 |
| [VMware Carbon Black Cloud](#vmware-carbon-black-cloud) | 7 | 6 | 5 |
| [WatchGuard Fireware OS](#watchguard-fireware-os) | 1 | 1 | 1 |
| [Windows Firewall](#windows-firewall) | 2 | 1 | 3 |
| [Windows Security Events](#windows-security-events) | 1 | 1 | 2 |
| [Windows Sysmon](#windows-sysmon) | 4 | 2 | 2 |
| [Zscaler ZIA](#zscaler-zia) | 1 | 1 | 1 |
| [Zscaler ZIA DNS](#zscaler-zia-dns) | 1 | 1 | 1 |
| [Zscaler ZIA Firewall](#zscaler-zia-firewall) | 1 | 1 | 1 |

## Apache HTTP Server

**Schemas:** WebSession

**Tables:** [ApacheHTTPServer_CL](../tables/apachehttpserver-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimWebSessionApacheHTTPServer](asimwebsessionapachehttpserver.md)<br>vim: [vimWebSessionApacheHTTPServer](vimwebsessionapachehttpserver.md) | WebSession | [ApacheHTTPServer_CL](../tables/apachehttpserver-cl.md) | 0.1 |

## AppGate SDP

**Schemas:** NetworkSession

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimNetworkSessionAppGateSDP](asimnetworksessionappgatesdp.md)<br>vim: [vimNetworkSessionAppGateSDP](vimnetworksessionappgatesdp.md) | NetworkSession | [Syslog](../tables/syslog.md) | 0.2 |

## AWS

**Schemas:** Authentication

**Tables:** [AWSCloudTrail](../tables/awscloudtrail.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuthenticationAWSCloudTrail](asimauthenticationawscloudtrail.md)<br>vim: [vimAuthenticationAWSCloudTrail](vimauthenticationawscloudtrail.md) | Authentication | [AWSCloudTrail](../tables/awscloudtrail.md) | 0.2.1 |

## AWS VPC

**Schemas:** NetworkSession

**Tables:** [AWSVPCFlow](../tables/awsvpcflow.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimNetworkSessionAWSVPC](asimnetworksessionawsvpc.md)<br>vim: [vimNetworkSessionAWSVPC](vimnetworksessionawsvpc.md) | NetworkSession | [AWSVPCFlow](../tables/awsvpcflow.md) | 0.3 |

## Azure Firewall

**Schemas:** Dns, NetworkSession, WebSession

**Tables:** [ALERT](../tables/alert.md), [AZFWApplicationRule](../tables/azfwapplicationrule.md), [AZFWDnsQuery](../tables/azfwdnsquery.md), [AZFWIdpsSignature](../tables/azfwidpssignature.md), [AZFWNatRule](../tables/azfwnatrule.md), [AZFWNetworkRule](../tables/azfwnetworkrule.md), [AZFWThreatIntel](../tables/azfwthreatintel.md), [AzureDiagnostics](../tables/azurediagnostics.md), [Event](../tables/event.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimDnsAzureFirewall](asimdnsazurefirewall.md)<br>vim: [vimDnsAzureFirewall](vimdnsazurefirewall.md) | Dns | [AZFWDnsQuery](../tables/azfwdnsquery.md), [AzureDiagnostics](../tables/azurediagnostics.md) | 0.4.0 |
| ASim: [ASimNetworkSessionAzureFirewall](asimnetworksessionazurefirewall.md)<br>vim: [vimNetworkSessionAzureFirewall](vimnetworksessionazurefirewall.md) | NetworkSession | [ALERT](../tables/alert.md), [AZFWIdpsSignature](../tables/azfwidpssignature.md), [AZFWNatRule](../tables/azfwnatrule.md), [AZFWNetworkRule](../tables/azfwnetworkrule.md), [AZFWThreatIntel](../tables/azfwthreatintel.md), [AzureDiagnostics](../tables/azurediagnostics.md), [Event](../tables/event.md) | 0.2.0 |
| ASim: [ASimWebSessionAzureFirewall](asimwebsessionazurefirewall.md)<br>vim: [vimWebSessionAzureFirewall](vimwebsessionazurefirewall.md) | WebSession | [AZFWApplicationRule](../tables/azfwapplicationrule.md) | 0.1.0 |

## Azure NSG flows

**Schemas:** NetworkSession

**Tables:** [AzureNetworkAnalytics_CL](../tables/azurenetworkanalytics-cl.md), [Event](../tables/event.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimNetworkSessionAzureNSG](asimnetworksessionazurensg.md)<br>vim: [vimNetworkSessionAzureNSG](vimnetworksessionazurensg.md) | NetworkSession | [AzureNetworkAnalytics_CL](../tables/azurenetworkanalytics-cl.md), [Event](../tables/event.md) | 0.1.1 |

## Azure NTANetAnalytics

**Schemas:** NetworkSession

**Tables:** [NTANetAnalytics](../tables/ntanetanalytics.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimNetworkSessionNTANetAnalytics](asimnetworksessionntanetanalytics.md)<br>vim: [vimNetworkSessionNTANetAnalytics](vimnetworksessionntanetanalytics.md) | NetworkSession | [NTANetAnalytics](../tables/ntanetanalytics.md) | 0.1.0 |

## Barracuda WAF

**Schemas:** AuditEvent, Authentication, NetworkSession, WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md), [barracuda_CL](../tables/barracuda-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuditEventBarracudaCEF](asimauditeventbarracudacef.md)<br>vim: [vimAuditEventBarracudaCEF](vimauditeventbarracudacef.md) | AuditEvent | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.2.1 |
| ASim: [ASimAuditEventBarracudaWAF](asimauditeventbarracudawaf.md)<br>vim: [vimAuditEventBarracudaWAF](vimauditeventbarracudawaf.md) | AuditEvent | [barracuda_CL](../tables/barracuda-cl.md) | 0.2.1 |
| ASim: [ASimAuthenticationBarracudaWAF](asimauthenticationbarracudawaf.md)<br>vim: [vimAuthenticationBarracudaWAF](vimauthenticationbarracudawaf.md) | Authentication | [CommonSecurityLog](../tables/commonsecuritylog.md), [barracuda_CL](../tables/barracuda-cl.md) | 0.1 |
| ASim: [ASimNetworkSessionBarracudaCEF](asimnetworksessionbarracudacef.md)<br>vim: [vimNetworkSessionBarracudaCEF](vimnetworksessionbarracudacef.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.2.1 |
| ASim: [ASimNetworkSessionBarracudaWAF](asimnetworksessionbarracudawaf.md)<br>vim: [vimNetworkSessionBarracudaWAF](vimnetworksessionbarracudawaf.md) | NetworkSession | [barracuda_CL](../tables/barracuda-cl.md) | 0.2.1 |
| ASim: [ASimWebSessionBarracudaCEF](asimwebsessionbarracudacef.md)<br>vim: [vimWebSessionBarracudaCEF](vimwebsessionbarracudacef.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.2.1 |
| ASim: [ASimWebSessionBarracudaWAF](asimwebsessionbarracudawaf.md)<br>vim: [vimWebSessionBarracudaWAF](vimwebsessionbarracudawaf.md) | WebSession | [barracuda_CL](../tables/barracuda-cl.md) | 0.2.2 |

## CheckPointFirewall

**Schemas:** NetworkSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimNetworkSessionCheckPointFirewall](asimnetworksessioncheckpointfirewall.md)<br>vim: [vimNetworkSessionCheckPointFirewall](vimnetworksessioncheckpointfirewall.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 1.2.0 |

## Cisco Adaptive Security Appliance (ASA)

**Schemas:** Authentication

**Tables:** [Alert](../tables/alert.md), [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuthenticationCiscoASA](asimauthenticationciscoasa.md)<br>vim: [vimAuthenticationCiscoASA](vimauthenticationciscoasa.md) | Authentication | [Alert](../tables/alert.md), [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.1 |

## Cisco Firepower

**Schemas:** NetworkSession, WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimNetworkSessionCiscoFirepower](asimnetworksessionciscofirepower.md)<br>vim: [vimNetworkSessionCiscoFirepower](vimnetworksessionciscofirepower.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| ASim: [ASimWebSessionCiscoFirepower](asimwebsessionciscofirepower.md)<br>vim: [vimWebSessionCiscoFirepower](vimwebsessionciscofirepower.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |

## Cisco ISE

**Schemas:** AuditEvent, Authentication, NetworkSession, UserManagement

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuditEventCiscoISE](asimauditeventciscoise.md)<br>vim: [vimAuditEventCiscoISE](vimauditeventciscoise.md) | AuditEvent | [Syslog](../tables/syslog.md) | 0.1 |
| ASim: [ASimAuthenticationCiscoISE](asimauthenticationciscoise.md)<br>vim: [vimAuthenticationCiscoISE](vimauthenticationciscoise.md) | Authentication | [Syslog](../tables/syslog.md) | 0.1.0 |
| ASim: [ASimNetworkSessionCiscoISE](asimnetworksessionciscoise.md)<br>vim: [vimNetworkSessionCiscoISE](vimnetworksessionciscoise.md) | NetworkSession | [Syslog](../tables/syslog.md) | 1.1.0 |
| ASim: [ASimUserManagementCiscoISE](asimusermanagementciscoise.md)<br>vim: [vimUserManagementCiscoISE](vimusermanagementciscoise.md) | UserManagement | [Syslog](../tables/syslog.md) | 0.1.2 |

## Cisco Meraki

**Schemas:** AuditEvent, Authentication, NetworkSession, WebSession

**Tables:** [Operation](../tables/operation.md), [Syslog](../tables/syslog.md), [Update](../tables/update.md), [meraki_CL](../tables/meraki-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuditEventCiscoMeraki](asimauditeventciscomeraki.md)<br>vim: [vimAuditEventCiscoMeraki](vimauditeventciscomeraki.md) | AuditEvent | [Operation](../tables/operation.md), [meraki_CL](../tables/meraki-cl.md) | 0.2.1 |
| ASim: [ASimAuditEventCiscoMerakiSyslog](asimauditeventciscomerakisyslog.md)<br>vim: [vimAuditEventCiscoMerakiSyslog](vimauditeventciscomerakisyslog.md) | AuditEvent | [Operation](../tables/operation.md), [Syslog](../tables/syslog.md) | 0.2.1 |
| ASim: [ASimAuthenticationCiscoMeraki](asimauthenticationciscomeraki.md)<br>vim: [vimAuthenticationCiscoMeraki](vimauthenticationciscomeraki.md) | Authentication | [meraki_CL](../tables/meraki-cl.md) | 0.2.1 |
| ASim: [ASimAuthenticationCiscoMerakiSyslog](asimauthenticationciscomerakisyslog.md)<br>vim: [vimAuthenticationCiscoMerakiSyslog](vimauthenticationciscomerakisyslog.md) | Authentication | [Syslog](../tables/syslog.md) | 0.2.1 |
| ASim: [ASimNetworkSessionCiscoMeraki](asimnetworksessionciscomeraki.md)<br>vim: [vimNetworkSessionCiscoMeraki](vimnetworksessionciscomeraki.md) | NetworkSession | [Update](../tables/update.md), [meraki_CL](../tables/meraki-cl.md) | 1.2.2 |
| ASim: [ASimNetworkSessionCiscoMerakiSyslog](asimnetworksessionciscomerakisyslog.md)<br>vim: [vimNetworkSessionCiscoMerakiSyslog](vimnetworksessionciscomerakisyslog.md) | NetworkSession | [Syslog](../tables/syslog.md), [Update](../tables/update.md) | 1.2.2 |
| ASim: [ASimWebSessionCiscoMeraki](asimwebsessionciscomeraki.md)<br>vim: [vimWebSessionCiscoMeraki](vimwebsessionciscomeraki.md) | WebSession | [Syslog](../tables/syslog.md), [meraki_CL](../tables/meraki-cl.md) | 0.1.1 |

## Cisco Umbrella

**Schemas:** Dns

**Tables:** [Cisco_Umbrella_dns_CL](../tables/cisco-umbrella-dns-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimDnsCiscoUmbrella](asimdnsciscoumbrella.md)<br>vim: [vimDnsCiscoUmbrella](vimdnsciscoumbrella.md) | Dns | [Cisco_Umbrella_dns_CL](../tables/cisco-umbrella-dns-cl.md) | 0.3 |

## CiscoASA

**Schemas:** NetworkSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimNetworkSessionCiscoASA](asimnetworksessionciscoasa.md)<br>vim: [vimNetworkSessionCiscoASA](vimnetworksessionciscoasa.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 1.1.0 |

## Citrix NetScaler

**Schemas:** WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimWebSessionCitrixNetScaler](asimwebsessioncitrixnetscaler.md)<br>vim: [vimWebSessionCitrixNetScaler](vimwebsessioncitrixnetscaler.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.1 |

## Corelight Zeek

**Schemas:** Dns, NetworkSession

**Tables:** [Corelight_CL](../tables/corelight-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimDnsCorelightZeek](asimdnscorelightzeek.md)<br>vim: [vimDnsCorelightZeek](vimdnscorelightzeek.md) | Dns | [Corelight_CL](../tables/corelight-cl.md) | 0.5 |
| ASim: [ASimNetworkSessionCorelightZeek](asimnetworksessioncorelightzeek.md)<br>vim: [vimNetworkSessionCorelightZeek](vimnetworksessioncorelightzeek.md) | NetworkSession | [Corelight_CL](../tables/corelight-cl.md) | 0.2 |

## CrowdStrike Falcon Endpoint Protection

**Schemas:** AuditEvent, Authentication, NetworkSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md), [Event](../tables/event.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuditEventCrowdStrikeFalconHost](asimauditeventcrowdstrikefalconhost.md)<br>vim: [vimAuditEventCrowdStrikeFalconHost](vimauditeventcrowdstrikefalconhost.md) | AuditEvent | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| ASim: [ASimAuthenticationCrowdStrikeFalconHost](asimauthenticationcrowdstrikefalconhost.md)<br>vim: [vimAuthenticationCrowdStrikeFalconHost](vimauthenticationcrowdstrikefalconhost.md) | Authentication | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| ASim: [ASimNetworkSessionCrowdStrikeFalconHost](asimnetworksessioncrowdstrikefalconhost.md)<br>vim: [vimNetworkSessionCrowdStrikeFalconHost](vimnetworksessioncrowdstrikefalconhost.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md), [Event](../tables/event.md) | 0.1.0 |

## F5 BIG-IP Application Security Manager (ASM)

**Schemas:** WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimWebSessionF5ASM](asimwebsessionf5asm.md)<br>vim: [vimWebSessionF5ASM](vimwebsessionf5asm.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |

## ForcePointFirewall

**Schemas:** NetworkSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md), [IMAP3](../tables/imap3.md), [IMAPS](../tables/imaps.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimNetworkSessionForcePointFirewall](asimnetworksessionforcepointfirewall.md)<br>vim: [vimNetworkSessionForcePointFirewall](vimnetworksessionforcepointfirewall.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md), [IMAP3](../tables/imap3.md), [IMAPS](../tables/imaps.md) | 0.1 |

## Fortinet FortiGate

**Schemas:** Dns, NetworkSession, WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimDnsFortinetFortiGate](asimdnsfortinetfortigate.md)<br>vim: [vimDnsFortinetFortiGate](vimdnsfortinetfortigate.md) | Dns | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.2 |
| ASim: [ASimNetworkSessionFortinetFortiGate](asimnetworksessionfortinetfortigate.md)<br>vim: [vimNetworkSessionFortinetFortiGate](vimnetworksessionfortinetfortigate.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.6.0 |
| ASim: [ASimWebSessionFortinetFortiGate](asimwebsessionfortinetfortigate.md)<br>vim: [vimWebSessionFortinetFortiGate](vimwebsessionfortinetfortigate.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.3.0 |

## GCP Cloud DNS

**Schemas:** Dns

**Tables:** [GCP_DNS_CL](../tables/gcp-dns-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimDnsGcp](asimdnsgcp.md)<br>vim: [vimDnsGcp](vimdnsgcp.md) | Dns | [GCP_DNS_CL](../tables/gcp-dns-cl.md) | 0.4 |

## Google Workspace

**Schemas:** Authentication, FileEvent

**Tables:** [GWorkspace_ReportsAPI_drive_CL](../tables/gworkspace-reportsapi-drive-cl.md), [GWorkspace_ReportsAPI_login_CL](../tables/gworkspace-reportsapi-login-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuthenticationGoogleWorkspace](asimauthenticationgoogleworkspace.md)<br>vim: [vimAuthenticationGoogleWorkspace](vimauthenticationgoogleworkspace.md) | Authentication | [GWorkspace_ReportsAPI_login_CL](../tables/gworkspace-reportsapi-login-cl.md) | 0.1.0 |
| ASim: [ASimFileEventGoogleWorkspace](asimfileeventgoogleworkspace.md)<br>vim: [vimFileEventGoogleWorkspace](vimfileeventgoogleworkspace.md) | FileEvent | [GWorkspace_ReportsAPI_drive_CL](../tables/gworkspace-reportsapi-drive-cl.md) | 0.1.0 |

## Illumio

**Schemas:** Authentication

**Tables:** [Illumio_Auditable_Events_CL](../tables/illumio-auditable-events-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuthenticationIllumioSaaSCore](asimauthenticationillumiosaascore.md)<br>vim: [vimAuthenticationIllumioSaaSCore](vimauthenticationillumiosaascore.md) | Authentication | [Illumio_Auditable_Events_CL](../tables/illumio-auditable-events-cl.md) | 0.3.0 |

## Illumio Core

**Schemas:** AuditEvent

**Tables:** [Illumio_Auditable_Events_CL](../tables/illumio-auditable-events-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuditEventIllumioSaaSCore](asimauditeventillumiosaascore.md)<br>vim: [vimAuditEventIllumioSaaSCore](vimauditeventillumiosaascore.md) | AuditEvent | [Illumio_Auditable_Events_CL](../tables/illumio-auditable-events-cl.md) | 0.2.1 |

## Illumio SaaS Core

**Schemas:** NetworkSession

**Tables:** [Illumio_Flow_Events_CL](../tables/illumio-flow-events-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimNetworkSessionIllumioSaaSCore](asimnetworksessionillumiosaascore.md)<br>vim: [vimNetworkSessionIllumioSaaSCore](vimnetworksessionillumiosaascore.md) | NetworkSession | [Illumio_Flow_Events_CL](../tables/illumio-flow-events-cl.md) | 0.1.0 |

## Infoblox BloxOne

**Schemas:** AuditEvent, DhcpEvent, Dns

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuditEventInfobloxBloxOne](asimauditeventinfobloxbloxone.md)<br>vim: [vimAuditEventInfobloxBloxOne](vimauditeventinfobloxbloxone.md) | AuditEvent | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| ASim: [ASimDhcpEventInfobloxBloxOne](asimdhcpeventinfobloxbloxone.md)<br>vim: [vimDhcpEventInfobloxBloxOne](vimdhcpeventinfobloxbloxone.md) | DhcpEvent | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| ASim: [ASimDnsInfobloxBloxOne](asimdnsinfobloxbloxone.md)<br>vim: [vimDnsInfobloxBloxOne](vimdnsinfobloxbloxone.md) | Dns | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |

## Infoblox NIOS

**Schemas:** Dns

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimDnsInfobloxNIOS](asimdnsinfobloxnios.md)<br>vim: [vimDnsInfobloxNIOS](vimdnsinfobloxnios.md) | Dns | [Syslog](../tables/syslog.md) | 0.6.1 |

## Internet Information Services (IIS)

**Schemas:** WebSession

**Tables:** [W3CIISLog](../tables/w3ciislog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimWebSessionIIS](asimwebsessioniis.md)<br>vim: [vimWebSessionIIS](vimwebsessioniis.md) | WebSession | [W3CIISLog](../tables/w3ciislog.md) | 0.2 |

## M365 Defender for EndPoint

**Schemas:** Authentication

**Tables:** [DeviceLogonEvents](../tables/devicelogonevents.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuthenticationM365Defender](asimauthenticationm365defender.md)<br>vim: [vimAuthenticationM365Defender](vimauthenticationm365defender.md) | Authentication | [DeviceLogonEvents](../tables/devicelogonevents.md) | 0.1.3 |

## M365 Defender for Endpoint

**Schemas:** NetworkSession

**Tables:** [DeviceNetworkEvents](../tables/devicenetworkevents.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimNetworkSessionMicrosoft365Defender](asimnetworksessionmicrosoft365defender.md)<br>vim: [vimNetworkSessionMicrosoft365Defender](vimnetworksessionmicrosoft365defender.md) | NetworkSession | [DeviceNetworkEvents](../tables/devicenetworkevents.md) | 0.4 |

## Microsoft

**Schemas:** UserManagement

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimUserManagementLinuxAuthpriv](asimusermanagementlinuxauthpriv.md)<br>vim: [vimUserManagementLinuxAuthpriv](vimusermanagementlinuxauthpriv.md) | UserManagement | [Syslog](../tables/syslog.md) | 0.1.1 |

## Microsoft 365 Defender for EndPoint

**Schemas:** FileEvent

**Tables:** [DeviceFileEvents](../tables/devicefileevents.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimFileEventMicrosoft365D](asimfileeventmicrosoft365d.md)<br>vim: [vimFileEventMicrosoft365D](vimfileeventmicrosoft365d.md) | FileEvent | [DeviceFileEvents](../tables/devicefileevents.md) | 0.2.1 |

## Microsoft 365 Defender for endpoint

**Schemas:** ProcessEvent

**Tables:** [DeviceProcessEvents](../tables/deviceprocessevents.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimProcessEventMicrosoft365D](asimprocesseventmicrosoft365d.md)<br>vim: [vimProcessEventMicrosoft365D](vimprocesseventmicrosoft365d.md) | ProcessEvent | [DeviceProcessEvents](../tables/deviceprocessevents.md) | 0.2.0 |

## Microsoft 365 Defender for Endpoint

**Schemas:** RegistryEvent

**Tables:** [DeviceRegistryEvents](../tables/deviceregistryevents.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimRegistryEventMicrosoft365D](asimregistryeventmicrosoft365d.md)<br>vim: [vimRegistryEventMicrosoft365D](vimregistryeventmicrosoft365d.md) | RegistryEvent | [DeviceRegistryEvents](../tables/deviceregistryevents.md) | 0.1.2 |

## Microsoft Azure

**Schemas:** AuditEvent

**Tables:** [AzureActivity](../tables/azureactivity.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuditEventAzureActivity](asimauditeventazureactivity.md)<br>vim: [vimAuditEventAzureActivity](vimauditeventazureactivity.md) | AuditEvent | [AzureActivity](../tables/azureactivity.md) | 0.2 |

## Microsoft Azure Blob Storage

**Schemas:** FileEvent

**Tables:** [StorageBlobLogs](../tables/storagebloblogs.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimFileEventAzureBlobStorage](asimfileeventazureblobstorage.md)<br>vim: [vimFileEventAzureBlobStorage](vimfileeventazureblobstorage.md) | FileEvent | [StorageBlobLogs](../tables/storagebloblogs.md) | 0.1.1 |

## Microsoft Azure File Storage

**Schemas:** FileEvent

**Tables:** [StorageFileLogs](../tables/storagefilelogs.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimFileEventAzureFileStorage](asimfileeventazurefilestorage.md)<br>vim: [vimFileEventAzureFileStorage](vimfileeventazurefilestorage.md) | FileEvent | [StorageFileLogs](../tables/storagefilelogs.md) | 0.1.1 |

## Microsoft Azure Queue Storage

**Schemas:** FileEvent

**Tables:** [StorageQueueLogs](../tables/storagequeuelogs.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimFileEventAzureQueueStorage](asimfileeventazurequeuestorage.md)<br>vim: [vimFileEventAzureQueueStorage](vimfileeventazurequeuestorage.md) | FileEvent | [StorageQueueLogs](../tables/storagequeuelogs.md) | 0.1.1 |

## Microsoft Azure Table Storage

**Schemas:** FileEvent

**Tables:** [StorageTableLogs](../tables/storagetablelogs.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimFileEventAzureTableStorage](asimfileeventazuretablestorage.md)<br>vim: [vimFileEventAzureTableStorage](vimfileeventazuretablestorage.md) | FileEvent | [StorageTableLogs](../tables/storagetablelogs.md) | 0.1.1 |

## Microsoft Defender for IoT

**Schemas:** Authentication, NetworkSession, ProcessEvent

**Tables:** [SecurityIoTRawEvent](../tables/securityiotrawevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuthenticationMD4IoT](asimauthenticationmd4iot.md)<br>vim: [vimAuthenticationMD4IoT](vimauthenticationmd4iot.md) | Authentication | [SecurityIoTRawEvent](../tables/securityiotrawevent.md) | 0.1.2 |
| ASim: [ASimNetworkSessionMD4IoTAgent](asimnetworksessionmd4iotagent.md)<br>vim: [vimNetworkSessionMD4IoTAgent](vimnetworksessionmd4iotagent.md) | NetworkSession | [SecurityIoTRawEvent](../tables/securityiotrawevent.md) | 0.2.1 |
| ASim: [ASimNetworkSessionMD4IoTSensor](asimnetworksessionmd4iotsensor.md)<br>vim: [vimNetworkSessionMD4IoTSensor](vimnetworksessionmd4iotsensor.md) | NetworkSession |  | 0.1 |
| ASim: [ASimProcessEventMD4IoT](asimprocesseventmd4iot.md)<br>vim: [vimProcessEventMD4IoT](vimprocesseventmd4iot.md) | ProcessEvent | [SecurityIoTRawEvent](../tables/securityiotrawevent.md) | 0.1.1 |

## Microsoft Defender XDR

**Schemas:** AlertEvent

**Tables:** [AlertEvidence](../tables/alertevidence.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAlertEventMicrosoftDefenderXDR](asimalerteventmicrosoftdefenderxdr.md)<br>vim: [vimAlertEventMicrosoftDefenderXDR](vimalerteventmicrosoftdefenderxdr.md) | AlertEvent | [AlertEvidence](../tables/alertevidence.md) | 0.1.0 |

## Microsoft Entra ID

**Schemas:** Authentication

**Tables:** [AADManagedIdentitySignInLogs](../tables/aadmanagedidentitysigninlogs.md), [AADNonInteractiveUserSignInLogs](../tables/aadnoninteractiveusersigninlogs.md), [AADServicePrincipalSignInLogs](../tables/aadserviceprincipalsigninlogs.md), [SigninLogs](../tables/signinlogs.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuthenticationAADManagedIdentitySignInLogs](asimauthenticationaadmanagedidentitysigninlogs.md)<br>vim: [vimAuthenticationAADManagedIdentitySignInLogs](vimauthenticationaadmanagedidentitysigninlogs.md) | Authentication | [AADManagedIdentitySignInLogs](../tables/aadmanagedidentitysigninlogs.md) | 0.2.2 |
| ASim: [ASimAuthenticationAADNonInteractiveUserSignInLogs](asimauthenticationaadnoninteractiveusersigninlogs.md)<br>vim: [vimAuthenticationAADNonInteractiveUserSignInLogs](vimauthenticationaadnoninteractiveusersigninlogs.md) | Authentication | [AADNonInteractiveUserSignInLogs](../tables/aadnoninteractiveusersigninlogs.md) | 0.2.2 |
| ASim: [ASimAuthenticationAADServicePrincipalSignInLogs](asimauthenticationaadserviceprincipalsigninlogs.md)<br>vim: [vimAuthenticationAADServicePrincipalSignInLogs](vimauthenticationaadserviceprincipalsigninlogs.md) | Authentication | [AADServicePrincipalSignInLogs](../tables/aadserviceprincipalsigninlogs.md) | 0.2.2 |
| ASim: [ASimAuthenticationSigninLogs](asimauthenticationsigninlogs.md)<br>vim: [vimAuthenticationSigninLogs](vimauthenticationsigninlogs.md) | Authentication | [SigninLogs](../tables/signinlogs.md) | 0.4.0 |

## Microsoft Security Event

**Schemas:** UserManagement

**Tables:** [SecurityEvent](../tables/securityevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimUserManagementMicrosoftSecurityEvent](asimusermanagementmicrosoftsecurityevent.md)<br>vim: [vimUserManagementMicrosoftSecurityEvent](vimusermanagementmicrosoftsecurityevent.md) | UserManagement | [SecurityEvent](../tables/securityevent.md) | 0.2.0 |

## Microsoft SharePoint

**Schemas:** AuditEvent, FileEvent

**Tables:** [OfficeActivity](../tables/officeactivity.md), [Operation](../tables/operation.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuditEventMicrosoftExchangeAdmin365](asimauditeventmicrosoftexchangeadmin365.md)<br>vim: [vimAuditEventMicrosoftExchangeAdmin365](vimauditeventmicrosoftexchangeadmin365.md) | AuditEvent | [OfficeActivity](../tables/officeactivity.md) | 0.2 |
| ASim: [ASimFileEventMicrosoftSharePoint](asimfileeventmicrosoftsharepoint.md)<br>vim: [vimFileEventMicrosoftSharePoint](vimfileeventmicrosoftsharepoint.md) | FileEvent | [OfficeActivity](../tables/officeactivity.md), [Operation](../tables/operation.md) | 0.3.1 |

## Microsoft Sysmon

**Schemas:** RegistryEvent

**Tables:** [Event](../tables/event.md), [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimRegistryEventMicrosoftSysmon](asimregistryeventmicrosoftsysmon.md)<br>vim: [vimRegistryEventMicrosoftSysmon](vimregistryeventmicrosoftsysmon.md) | RegistryEvent | [Event](../tables/event.md) | 0.3.1 |
| ASim: [ASimRegistryEventMicrosoftSysmonWindowsEvent](asimregistryeventmicrosoftsysmonwindowsevent.md)<br>vim: [vimRegistryEventMicrosoftSysmonWindowsEvent](vimregistryeventmicrosoftsysmonwindowsevent.md) | RegistryEvent | [WindowsEvent](../tables/windowsevent.md) | 0.3.1 |

## Microsoft Sysmon for Linux

**Schemas:** FileEvent

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimFileEventLinuxSysmonFileCreated](asimfileeventlinuxsysmonfilecreated.md)<br>vim: [vimFileEventLinuxSysmonFileCreated](vimfileeventlinuxsysmonfilecreated.md) | FileEvent | [Syslog](../tables/syslog.md) | 0.2.1 |
| ASim: [ASimFileEventLinuxSysmonFileDeleted](asimfileeventlinuxsysmonfiledeleted.md)<br>vim: [vimFileEventLinuxSysmonFileDeleted](vimfileeventlinuxsysmonfiledeleted.md) | FileEvent | [Syslog](../tables/syslog.md) | 0.2.1 |

## Microsoft Windows

**Schemas:** AuditEvent

**Tables:** [Event](../tables/event.md), [Operation](../tables/operation.md), [SecurityEvent](../tables/securityevent.md), [Update](../tables/update.md), [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuditEventMicrosoftEvent](asimauditeventmicrosoftevent.md)<br>vim: [vimAuditEventMicrosoftEvent](vimauditeventmicrosoftevent.md) | AuditEvent | [Event](../tables/event.md), [Operation](../tables/operation.md), [Update](../tables/update.md) | 0.2.1 |
| ASim: [ASimAuditEventMicrosoftSecurityEvents](asimauditeventmicrosoftsecurityevents.md)<br>vim: [vimAuditEventMicrosoftSecurityEvents](vimauditeventmicrosoftsecurityevents.md) | AuditEvent | [Event](../tables/event.md), [Operation](../tables/operation.md), [SecurityEvent](../tables/securityevent.md), [Update](../tables/update.md) | 0.2.1 |
| ASim: [ASimAuditEventMicrosoftWindowsEvents](asimauditeventmicrosoftwindowsevents.md)<br>vim: [vimAuditEventMicrosoftWindowsEvents](vimauditeventmicrosoftwindowsevents.md) | AuditEvent | [Event](../tables/event.md), [Operation](../tables/operation.md), [Update](../tables/update.md), [WindowsEvent](../tables/windowsevent.md) | 0.2.1 |

## Microsoft Windows Event

**Schemas:** UserManagement

**Tables:** [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimUserManagementMicrosoftWindowsEvent](asimusermanagementmicrosoftwindowsevent.md)<br>vim: [vimUserManagementMicrosoftWindowsEvent](vimusermanagementmicrosoftwindowsevent.md) | UserManagement | [WindowsEvent](../tables/windowsevent.md) | 0.2.1 |

## Microsoft Windows Events

**Schemas:** FileEvent

**Tables:** [SecurityEvent](../tables/securityevent.md), [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimFileEventMicrosoftSecurityEvents](asimfileeventmicrosoftsecurityevents.md)<br>vim: [vimFileEventMicrosoftSecurityEvents](vimfileeventmicrosoftsecurityevents.md) | FileEvent | [SecurityEvent](../tables/securityevent.md) | 0.2.0 |
| ASim: [ASimFileEventMicrosoftWindowsEvents](asimfileeventmicrosoftwindowsevents.md)<br>vim: [vimFileEventMicrosoftWindowsEvents](vimfileeventmicrosoftwindowsevents.md) | FileEvent | [WindowsEvent](../tables/windowsevent.md) | 0.2.0 |

## Microsoft Windows Events Sysmon

**Schemas:** Dns, ProcessEvent

**Tables:** [Event](../tables/event.md), [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimDnsMicrosoftSysmon](asimdnsmicrosoftsysmon.md)<br>vim: [vimDnsMicrosoftSysmon](vimdnsmicrosoftsysmon.md) | Dns | [Event](../tables/event.md) | 0.5.1 |
| ASim: [ASimDnsMicrosoftSysmonWindowsEvent](asimdnsmicrosoftsysmonwindowsevent.md)<br>vim: [vimDnsMicrosoftSysmonWindowsEvent](vimdnsmicrosoftsysmonwindowsevent.md) | Dns | [WindowsEvent](../tables/windowsevent.md) | 0.5.1 |
| ASim: [ASimProcessEventTerminateMicrosoftSysmon](asimprocesseventterminatemicrosoftsysmon.md)<br>vim: [vimProcessEventTerminateMicrosoftSysmon](vimprocesseventterminatemicrosoftsysmon.md) | ProcessEvent | [Event](../tables/event.md) | 0.3.1 |
| ASim: [ASimProcessEventTerminateMicrosoftSysmonWindowsEvent](asimprocesseventterminatemicrosoftsysmonwindowsevent.md)<br>vim: [vimProcessEventTerminateMicrosoftSysmonWindowsEvent](vimprocesseventterminatemicrosoftsysmonwindowsevent.md) | ProcessEvent | [WindowsEvent](../tables/windowsevent.md) | 0.4.1 |

## MS DNS Events

**Schemas:** Dns

**Tables:** [DnsEvents](../tables/dnsevents.md), [NXLog_DNS_Server_CL](../tables/nxlog-dns-server-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimDnsMicrosoftNXlog](asimdnsmicrosoftnxlog.md)<br>vim: [vimDnsMicrosoftNXlog](vimdnsmicrosoftnxlog.md) | Dns | [NXLog_DNS_Server_CL](../tables/nxlog-dns-server-cl.md) | 0.5.0 |
| ASim: [ASimDnsMicrosoftOMS](asimdnsmicrosoftoms.md)<br>vim: [vimDnsMicrosoftOMS](vimdnsmicrosoftoms.md) | Dns | [DnsEvents](../tables/dnsevents.md) | 0.4 |

## Native

**Schemas:** AuditEvent, Authentication, DhcpEvent, Dns, FileEvent, NetworkSession, ProcessEvent, RegistryEvent, UserManagement, WebSession

**Tables:** [ASimAuditEventLogs](../tables/asimauditeventlogs.md), [ASimAuthenticationEventLogs](../tables/asimauthenticationeventlogs.md), [ASimDhcpEventLogs](../tables/asimdhcpeventlogs.md), [ASimDnsActivityLogs](../tables/asimdnsactivitylogs.md), [ASimFileEventLogs](../tables/asimfileeventlogs.md), [ASimNetworkSessionLogs](../tables/asimnetworksessionlogs.md), [ASimProcessEventLogs](../tables/asimprocesseventlogs.md), [ASimRegistryEventLogs](../tables/asimregistryeventlogs.md), [ASimUserManagementActivityLogs](../tables/asimusermanagementactivitylogs.md), [ASimWebSessionLogs](../tables/asimwebsessionlogs.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuditEventNative](asimauditeventnative.md)<br>vim: [vimAuditEventNative](vimauditeventnative.md) | AuditEvent | [ASimAuditEventLogs](../tables/asimauditeventlogs.md) | 0.1.0 |
| ASim: [ASimAuthenticationNative](asimauthenticationnative.md)<br>vim: [vimAuthenticationNative](vimauthenticationnative.md) | Authentication | [ASimAuthenticationEventLogs](../tables/asimauthenticationeventlogs.md) | 0.1.0 |
| ASim: [ASimDhcpEventNative](asimdhcpeventnative.md)<br>vim: [vimDhcpEventNative](vimdhcpeventnative.md) | DhcpEvent | [ASimDhcpEventLogs](../tables/asimdhcpeventlogs.md) | 0.1.0 |
| ASim: [ASimDnsNative](asimdnsnative.md)<br>vim: [vimDnsNative](vimdnsnative.md) | Dns | [ASimDnsActivityLogs](../tables/asimdnsactivitylogs.md) | 0.6.1 |
| ASim: [ASimFileEventNative](asimfileeventnative.md)<br>vim: [vimFileEventNative](vimfileeventnative.md) | FileEvent | [ASimFileEventLogs](../tables/asimfileeventlogs.md) | 0.1.1 |
| ASim: [ASimNetworkSessionNative](asimnetworksessionnative.md)<br>vim: [vimNetworkSessionNative](vimnetworksessionnative.md) | NetworkSession | [ASimNetworkSessionLogs](../tables/asimnetworksessionlogs.md) | 0.3 |
| ASim: [ASimProcessEventNative](asimprocesseventnative.md)<br>vim: [vimProcessEventNative](vimprocesseventnative.md) | ProcessEvent | [ASimProcessEventLogs](../tables/asimprocesseventlogs.md) | 0.1.0 |
| ASim: [ASimRegistryEventNative](asimregistryeventnative.md)<br>vim: [vimRegistryEventNative](vimregistryeventnative.md) | RegistryEvent | [ASimRegistryEventLogs](../tables/asimregistryeventlogs.md) | 0.1.0 |
| ASim: [ASimUserManagementNative](asimusermanagementnative.md)<br>vim: [vimUserManagementNative](vimusermanagementnative.md) | UserManagement | [ASimUserManagementActivityLogs](../tables/asimusermanagementactivitylogs.md) | 0.1.0 |
| ASim: [ASimWebSessionNative](asimwebsessionnative.md)<br>vim: [vimWebSessionNative](vimwebsessionnative.md) | WebSession | [ASimWebSessionLogs](../tables/asimwebsessionlogs.md) | 0.1 |

## Okta

**Schemas:** Authentication

**Tables:** [OktaV2_CL](../tables/oktav2-cl.md), [Okta_CL](../tables/okta-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuthenticationOktaSSO](asimauthenticationoktasso.md)<br>vim: [vimAuthenticationOktaSSO](vimauthenticationoktasso.md) | Authentication | [Okta_CL](../tables/okta-cl.md) | 0.4.0 |
| ASim: [ASimAuthenticationOktaV2](asimauthenticationoktav2.md)<br>vim: [vimAuthenticationOktaV2](vimauthenticationoktav2.md) | Authentication | [OktaV2_CL](../tables/oktav2-cl.md) | 0.4.0 |

## OpenSSH

**Schemas:** Authentication

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuthenticationSshd](asimauthenticationsshd.md)<br>vim: [vimAuthenticationSshd](vimauthenticationsshd.md) | Authentication | [Syslog](../tables/syslog.md) | 0.2.4 |

## Palo Alto Cortex Data Lake

**Schemas:** Authentication, NetworkSession, WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuthenticationPaloAltoCortexDataLake](asimauthenticationpaloaltocortexdatalake.md)<br>vim: [vimAuthenticationPaloAltoCortexDataLake](vimauthenticationpaloaltocortexdatalake.md) | Authentication | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| ASim: [ASimNetworkSessionPaloAltoCortexDataLake](asimnetworksessionpaloaltocortexdatalake.md)<br>vim: [vimNetworkSessionPaloAltoCortexDataLake](vimnetworksessionpaloaltocortexdatalake.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.1 |
| ASim: [ASimWebSessionPaloAltoCortexDataLake](asimwebsessionpaloaltocortexdatalake.md)<br>vim: [vimWebSessionPaloAltoCortexDataLake](vimwebsessionpaloaltocortexdatalake.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.1 |

## Palo Alto Networks

**Schemas:** WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimWebSessionPaloAltoCEF](asimwebsessionpaloaltocef.md)<br>vim: [vimWebSessionPaloAltoCEF](vimwebsessionpaloaltocef.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.2 |

## Palo Alto PanOS

**Schemas:** NetworkSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimNetworkSessionPaloAltoCEF](asimnetworksessionpaloaltocef.md)<br>vim: [vimNetworkSessionPaloAltoCEF](vimnetworksessionpaloaltocef.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.7.1 |

## PostgreSQL

**Schemas:** Authentication

**Tables:** [PostgreSQL_CL](../tables/postgresql-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuthenticationPostgreSQL](asimauthenticationpostgresql.md)<br>vim: [vimAuthenticationPostgreSQL](vimauthenticationpostgresql.md) | Authentication | [PostgreSQL_CL](../tables/postgresql-cl.md) | 0.1.4 |

## Salesforce Service Cloud

**Schemas:** Authentication

**Tables:** [SalesforceServiceCloud_CL](../tables/salesforceservicecloud-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuthenticationSalesforceSC](asimauthenticationsalesforcesc.md)<br>vim: [vimAuthenticationSalesforceSC](vimauthenticationsalesforcesc.md) | Authentication | [SalesforceServiceCloud_CL](../tables/salesforceservicecloud-cl.md) | 0.1.0 |

## Security Events

**Schemas:** ProcessEvent, RegistryEvent

**Tables:** [ASIM_GetAccountType](../tables/asim-getaccounttype.md), [ASIM_ParseSecurityEvents](../tables/asim-parsesecurityevents.md), [ASIM_ParseWindowsEvents](../tables/asim-parsewindowsevents.md), [SecurityEvent](../tables/securityevent.md), [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimProcessCreateMicrosoftSecurityEvents](asimprocesscreatemicrosoftsecurityevents.md)<br>vim: [vimProcessCreateMicrosoftSecurityEvents](vimprocesscreatemicrosoftsecurityevents.md) | ProcessEvent | [SecurityEvent](../tables/securityevent.md) | 0.1.1 |
| ASim: [ASimProcessCreateMicrosoftWindowsEvents](asimprocesscreatemicrosoftwindowsevents.md)<br>vim: [vimProcessCreateMicrosoftWindowsEvents](vimprocesscreatemicrosoftwindowsevents.md) | ProcessEvent | [WindowsEvent](../tables/windowsevent.md) | 0.3 |
| ASim: [ASimProcessTerminateMicrosoftSecurityEvents](asimprocessterminatemicrosoftsecurityevents.md)<br>vim: [vimProcessTerminateMicrosoftSecurityEvents](vimprocessterminatemicrosoftsecurityevents.md) | ProcessEvent | [SecurityEvent](../tables/securityevent.md) | 0.2 |
| ASim: [ASimProcessTerminateMicrosoftWindowsEvents](asimprocessterminatemicrosoftwindowsevents.md)<br>vim: [vimProcessTerminateMicrosoftWindowsEvents](vimprocessterminatemicrosoftwindowsevents.md) | ProcessEvent | [WindowsEvent](../tables/windowsevent.md) | 0.2 |
| ASim: [ASimRegistryEventMicrosoftSecurityEvent](asimregistryeventmicrosoftsecurityevent.md)<br>vim: [vimRegistryEventMicrosoftSecurityEvent](vimregistryeventmicrosoftsecurityevent.md) | RegistryEvent | [ASIM_GetAccountType](../tables/asim-getaccounttype.md), [ASIM_ParseSecurityEvents](../tables/asim-parsesecurityevents.md), [SecurityEvent](../tables/securityevent.md) | 0.3.1 |
| ASim: [ASimRegistryEventMicrosoftWindowsEvent](asimregistryeventmicrosoftwindowsevent.md)<br>vim: [vimRegistryEventMicrosoftWindowsEvent](vimregistryeventmicrosoftwindowsevent.md) | RegistryEvent | [ASIM_GetAccountType](../tables/asim-getaccounttype.md), [ASIM_ParseWindowsEvents](../tables/asim-parsewindowsevents.md), [WindowsEvent](../tables/windowsevent.md) | 0.2.1 |

## SentinelOne

**Schemas:** AlertEvent, AuditEvent, Authentication, Dns, FileEvent, NetworkSession, ProcessEvent, RegistryEvent, UserManagement

**Tables:** [Event](../tables/event.md), [Operation](../tables/operation.md), [SentinelOne_CL](../tables/sentinelone-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAlertEventSentinelOneSingularity](asimalerteventsentinelonesingularity.md)<br>vim: [vimAlertEventSentinelOneSingularity](vimalerteventsentinelonesingularity.md) | AlertEvent | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| ASim: [ASimAuditEventSentinelOne](asimauditeventsentinelone.md)<br>vim: [vimAuditEventSentinelOne](vimauditeventsentinelone.md) | AuditEvent | [Event](../tables/event.md), [Operation](../tables/operation.md), [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| ASim: [ASimAuthenticationSentinelOne](asimauthenticationsentinelone.md)<br>vim: [vimAuthenticationSentinelOne](vimauthenticationsentinelone.md) | Authentication | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.1 |
| ASim: [ASimDnsSentinelOne](asimdnssentinelone.md)<br>vim: [vimDnsSentinelOne](vimdnssentinelone.md) | Dns | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| ASim: [ASimFileEventSentinelOne](asimfileeventsentinelone.md)<br>vim: [vimFileEventSentinelOne](vimfileeventsentinelone.md) | FileEvent | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| ASim: [ASimNetworkSessionSentinelOne](asimnetworksessionsentinelone.md)<br>vim: [vimNetworkSessionSentinelOne](vimnetworksessionsentinelone.md) | NetworkSession | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| ASim: [ASimProcessCreateSentinelOne](asimprocesscreatesentinelone.md)<br>vim: [vimProcessCreateSentinelOne](vimprocesscreatesentinelone.md) | ProcessEvent | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| ASim: [ASimRegistryEventSentinelOne](asimregistryeventsentinelone.md)<br>vim: [vimRegistryEventSentinelOne](vimregistryeventsentinelone.md) | RegistryEvent | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| ASim: [ASimUserManagementSentinelOne](asimusermanagementsentinelone.md)<br>vim: [vimUserManagementSentinelOne](vimusermanagementsentinelone.md) | UserManagement | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.1 |

## SonicWall

**Schemas:** NetworkSession, WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimNetworkSessionSonicWallFirewall](asimnetworksessionsonicwallfirewall.md)<br>vim: [vimNetworkSessionSonicWallFirewall](vimnetworksessionsonicwallfirewall.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| ASim: [ASimWebSessionSonicWallFirewall](asimwebsessionsonicwallfirewall.md)<br>vim: [vimWebSessionSonicWallFirewall](vimwebsessionsonicwallfirewall.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.1 |

## Squid Proxy

**Schemas:** WebSession

**Tables:** [SquidProxy_CL](../tables/squidproxy-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimWebSessionSquidProxy](asimwebsessionsquidproxy.md)<br>vim: [vimWebSessionSquidProxy](vimwebsessionsquidproxy.md) | WebSession | [SquidProxy_CL](../tables/squidproxy-cl.md) | 0.4.0 |

## su

**Schemas:** Authentication

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuthenticationSu](asimauthenticationsu.md)<br>vim: [vimAuthenticationSu](vimauthenticationsu.md) | Authentication | [Syslog](../tables/syslog.md) | 0.2.1 |

## sudo

**Schemas:** Authentication

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuthenticationSudo](asimauthenticationsudo.md)<br>vim: [vimAuthenticationSudo](vimauthenticationsudo.md) | Authentication | [Syslog](../tables/syslog.md) | 0.1.2 |

## Sysmon

**Schemas:** ProcessEvent

**Tables:** [Event](../tables/event.md), [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimProcessEventCreateMicrosoftSysmon](asimprocesseventcreatemicrosoftsysmon.md)<br>vim: [vimProcessEventCreateMicrosoftSysmon](vimprocesseventcreatemicrosoftsysmon.md) | ProcessEvent | [Event](../tables/event.md) | 0.4.1 |
| ASim: [ASimProcessEventCreateMicrosoftSysmonWindowsEvent](asimprocesseventcreatemicrosoftsysmonwindowsevent.md)<br>vim: [vimProcessEventCreateMicrosoftSysmonWindowsEvent](vimprocesseventcreatemicrosoftsysmonwindowsevent.md) | ProcessEvent | [WindowsEvent](../tables/windowsevent.md) | 0.4.1 |

## Sysmon for Linux

**Schemas:** NetworkSession, ProcessEvent

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimNetworkSessionLinuxSysmon](asimnetworksessionlinuxsysmon.md)<br>vim: [vimNetworkSessionLinuxSysmon](vimnetworksessionlinuxsysmon.md) | NetworkSession | [Syslog](../tables/syslog.md) | 0.3.1 |
| ASim: [ASimProcessCreateLinuxSysmon](asimprocesscreatelinuxsysmon.md)<br>vim: [vimProcessCreateLinuxSysmon](vimprocesscreatelinuxsysmon.md) | ProcessEvent | [Syslog](../tables/syslog.md) | 0.2.1 |
| ASim: [ASimProcessTerminateLinuxSysmon](asimprocessterminatelinuxsysmon.md)<br>vim: [vimProcessTerminateLinuxSysmon](vimprocessterminatelinuxsysmon.md) | ProcessEvent | [Syslog](../tables/syslog.md) | 0.1.1 |

## Trend Micro Vision One

**Schemas:** ProcessEvent, RegistryEvent

**Tables:** [TrendMicro_XDR_OAT_CL](../tables/trendmicro-xdr-oat-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimProcessCreateTrendMicroVisionOne](asimprocesscreatetrendmicrovisionone.md)<br>vim: [vimProcessCreateTrendMicroVisionOne](vimprocesscreatetrendmicrovisionone.md) | ProcessEvent | [TrendMicro_XDR_OAT_CL](../tables/trendmicro-xdr-oat-cl.md) | 0.1.0 |
| ASim: [ASimRegistryEventTrendMicroVisionOne](asimregistryeventtrendmicrovisionone.md)<br>vim: [vimRegistryEventTrendMicroVisionOne](vimregistryeventtrendmicrovisionone.md) | RegistryEvent | [TrendMicro_XDR_OAT_CL](../tables/trendmicro-xdr-oat-cl.md) | 0.1.0 |

## Vectra

**Schemas:** AuditEvent, Authentication

**Tables:** [Audits_Data_CL](../tables/audits-data-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuditEventVectraXDRAudit](asimauditeventvectraxdraudit.md)<br>vim: [vimAuditEventVectraXDRAudit](vimauditeventvectraxdraudit.md) | AuditEvent | [Audits_Data_CL](../tables/audits-data-cl.md) | 0.1.1 |
| ASim: [ASimAuthenticationVectraXDRAudit](asimauthenticationvectraxdraudit.md)<br>vim: [vimAuthenticationVectraXDRAudit](vimauthenticationvectraxdraudit.md) | Authentication | [Audits_Data_CL](../tables/audits-data-cl.md) | 0.1 |

## Vectra AI Streams

**Schemas:** Dns, NetworkSession, WebSession

**Tables:** [VectraStream_CL](../tables/vectrastream-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimDnsVectraAI](asimdnsvectraai.md)<br>vim: [vimDnsVectraAI](vimdnsvectraai.md) | Dns | [VectraStream_CL](../tables/vectrastream-cl.md) | 0.1.1 |
| ASim: [ASimNetworkSessionVectraAI](asimnetworksessionvectraai.md)<br>vim: [vimNetworkSessionVectraAI](vimnetworksessionvectraai.md) | NetworkSession | [VectraStream_CL](../tables/vectrastream-cl.md) | 0.2 |
| ASim: [ASimWebSessionVectraAI](asimwebsessionvectraai.md)<br>vim: [vimWebSessionVectraAI](vimwebsessionvectraai.md) | WebSession | [VectraStream_CL](../tables/vectrastream-cl.md) | 0.2 |

## VMConnection

**Schemas:** NetworkSession

**Tables:** [VMConnection](../tables/vmconnection.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimNetworkSessionVMConnection](asimnetworksessionvmconnection.md)<br>vim: [vimNetworkSessionVMConnection](vimnetworksessionvmconnection.md) | NetworkSession | [VMConnection](../tables/vmconnection.md) | 0.2.1 |

## VMware Carbon Black Cloud

**Schemas:** AuditEvent, Authentication, FileEvent, NetworkSession, ProcessEvent, RegistryEvent

**Tables:** [CarbonBlackAuditLogs_CL](../tables/carbonblackauditlogs-cl.md), [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md), [CarbonBlackNotifications_CL](../tables/carbonblacknotifications-cl.md), [alert](../tables/alert.md), [update](../tables/update.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuditEventVMwareCarbonBlackCloud](asimauditeventvmwarecarbonblackcloud.md)<br>vim: [vimAuditEventVMwareCarbonBlackCloud](vimauditeventvmwarecarbonblackcloud.md) | AuditEvent | [CarbonBlackAuditLogs_CL](../tables/carbonblackauditlogs-cl.md), [alert](../tables/alert.md), [update](../tables/update.md) | 0.2.0 |
| ASim: [ASimAuthenticationVMwareCarbonBlackCloud](asimauthenticationvmwarecarbonblackcloud.md)<br>vim: [vimAuthenticationVMwareCarbonBlackCloud](vimauthenticationvmwarecarbonblackcloud.md) | Authentication | [CarbonBlackAuditLogs_CL](../tables/carbonblackauditlogs-cl.md) | 0.1.0 |
| ASim: [ASimFileEventVMwareCarbonBlackCloud](asimfileeventvmwarecarbonblackcloud.md)<br>vim: [vimFileEventVMwareCarbonBlackCloud](vimfileeventvmwarecarbonblackcloud.md) | FileEvent | [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md) | 0.1.1 |
| ASim: [ASimNetworkSessionVMwareCarbonBlackCloud](asimnetworksessionvmwarecarbonblackcloud.md)<br>vim: [vimNetworkSessionVMwareCarbonBlackCloud](vimnetworksessionvmwarecarbonblackcloud.md) | NetworkSession | [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md), [CarbonBlackNotifications_CL](../tables/carbonblacknotifications-cl.md) | 0.1.1 |
| ASim: [ASimProcessCreateVMwareCarbonBlackCloud](asimprocesscreatevmwarecarbonblackcloud.md)<br>vim: [vimProcessCreateVMwareCarbonBlackCloud](vimprocesscreatevmwarecarbonblackcloud.md) | ProcessEvent | [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md), [CarbonBlackNotifications_CL](../tables/carbonblacknotifications-cl.md) | 0.1.1 |
| ASim: [ASimProcessTerminateVMwareCarbonBlackCloud](asimprocessterminatevmwarecarbonblackcloud.md)<br>vim: [vimProcessTerminateVMwareCarbonBlackCloud](vimprocessterminatevmwarecarbonblackcloud.md) | ProcessEvent | [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md) | 0.1.0 |
| ASim: [ASimRegistryEventVMwareCarbonBlackCloud](asimregistryeventvmwarecarbonblackcloud.md)<br>vim: [vimRegistryEventVMwareCarbonBlackCloud](vimregistryeventvmwarecarbonblackcloud.md) | RegistryEvent | [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md) | 0.1.1 |

## WatchGuard Fireware OS

**Schemas:** NetworkSession

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimNetworkSessionWatchGuardFirewareOS](asimnetworksessionwatchguardfirewareos.md)<br>vim: [vimNetworkSessionWatchGuardFirewareOS](vimnetworksessionwatchguardfirewareos.md) | NetworkSession | [Syslog](../tables/syslog.md) | 0.1.4 |

## Windows Firewall

**Schemas:** NetworkSession

**Tables:** [Event](../tables/event.md), [SecurityEvent](../tables/securityevent.md), [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimNetworkSessionMicrosoftSecurityEventFirewall](asimnetworksessionmicrosoftsecurityeventfirewall.md)<br>vim: [vimNetworkSessionMicrosoftSecurityEventFirewall](vimnetworksessionmicrosoftsecurityeventfirewall.md) | NetworkSession | [Event](../tables/event.md), [SecurityEvent](../tables/securityevent.md) | 0.5.0 |
| ASim: [ASimNetworkSessionMicrosoftWindowsEventFirewall](asimnetworksessionmicrosoftwindowseventfirewall.md)<br>vim: [vimNetworkSessionMicrosoftWindowsEventFirewall](vimnetworksessionmicrosoftwindowseventfirewall.md) | NetworkSession | [WindowsEvent](../tables/windowsevent.md) | 0.5.0 |

## Windows Security Events

**Schemas:** Authentication

**Tables:** [SecurityEvent](../tables/securityevent.md), [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimAuthenticationMicrosoftWindowsEvent](asimauthenticationmicrosoftwindowsevent.md)<br>vim: [vimAuthenticationMicrosoftWindowsEvent](vimauthenticationmicrosoftwindowsevent.md) | Authentication | [SecurityEvent](../tables/securityevent.md), [WindowsEvent](../tables/windowsevent.md) | 0.2.1 |

## Windows Sysmon

**Schemas:** FileEvent, NetworkSession

**Tables:** [Event](../tables/event.md), [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimFileEventMicrosoftSysmon](asimfileeventmicrosoftsysmon.md)<br>vim: [vimFileEventMicrosoftSysmon](vimfileeventmicrosoftsysmon.md) | FileEvent | [Event](../tables/event.md) | 0.5.1 |
| ASim: [ASimFileEventMicrosoftSysmonWindowsEvent](asimfileeventmicrosoftsysmonwindowsevent.md)<br>vim: [vimFileEventMicrosoftSysmonWindowsEvent](vimfileeventmicrosoftsysmonwindowsevent.md) | FileEvent | [WindowsEvent](../tables/windowsevent.md) | 0.4.1 |
| ASim: [ASimNetworkSessionMicrosoftSysmon](asimnetworksessionmicrosoftsysmon.md)<br>vim: [vimNetworkSessionMicrosoftSysmon](vimnetworksessionmicrosoftsysmon.md) | NetworkSession | [Event](../tables/event.md) | 0.2.0 |
| ASim: [ASimNetworkSessionMicrosoftSysmonWindowsEvent](asimnetworksessionmicrosoftsysmonwindowsevent.md)<br>vim: [vimNetworkSessionMicrosoftSysmonWindowsEvent](vimnetworksessionmicrosoftsysmonwindowsevent.md) | NetworkSession | [WindowsEvent](../tables/windowsevent.md) | 0.2.1 |

## Zscaler ZIA

**Schemas:** WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimWebSessionZscalerZIA](asimwebsessionzscalerzia.md)<br>vim: [vimWebSessionZscalerZIA](vimwebsessionzscalerzia.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.4.1 |

## Zscaler ZIA DNS

**Schemas:** Dns

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimDnsZscalerZIA](asimdnszscalerzia.md)<br>vim: [vimDnsZscalerZIA](vimdnszscalerzia.md) | Dns | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.6 |

## Zscaler ZIA Firewall

**Schemas:** NetworkSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| ASim: [ASimNetworkSessionZscalerZIA](asimnetworksessionzscalerzia.md)<br>vim: [vimNetworkSessionZscalerZIA](vimnetworksessionzscalerzia.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.4 |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · **ASIM Products**

