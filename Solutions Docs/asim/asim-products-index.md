# <img src="../images/asim-badge.png" alt="ASIM" height="32"> ASIM Parsers by Product

This index organizes ASIM parsers by the product or data source they normalize. Use this view to find ASIM support for a specific product, including which schemas are supported and which tables contain the source data.

## Summary

| Metric | Count |
|:-------|------:|
| **Products** | 82 |
| **Source Parser Pairs*** | 166 |
| **Schemas Covered** | 11 |
| **Tables Used** | 75 |

\* *Each parser pair consists of an ASim filtering parser and a vim parameter-based parser.*

## Products Overview

| Product | Parser Pairs* | Schemas | Tables |
|:--------|-------------:|--------:|-------:|
| [Apache HTTP Server](#apache-http-server) | 1 | 1 | 1 |
| [AppGate SDP](#appgate-sdp) | 1 | 1 | 1 |
| [AWS](#aws) | 1 | 1 | 1 |
| [AWS VPC](#aws-vpc) | 1 | 1 | 1 |
| [Azure Firewall](#azure-firewall) | 3 | 3 | 9 |
| [Azure NSG flows](#azure-nsg-flows) | 1 | 1 | 1 |
| [Azure NTANetAnalytics](#azure-ntanetanalytics) | 1 | 1 | 1 |
| [Barracuda WAF](#barracuda-waf) | 7 | 4 | 3 |
| [CheckPointFirewall](#checkpointfirewall) | 1 | 1 | 1 |
| [Cisco](#cisco) | 0 | 1 | 1 |
| [Cisco Adaptive Security Appliance (ASA)](#cisco-adaptive-security-appliance-asa) | 1 | 1 | 2 |
| [Cisco Firepower](#cisco-firepower) | 2 | 2 | 1 |
| [Cisco ISE](#cisco-ise) | 4 | 4 | 1 |
| [Cisco Meraki](#cisco-meraki) | 7 | 4 | 4 |
| [Cisco Umbrella](#cisco-umbrella) | 0 | 1 | 1 |
| [CiscoASA](#ciscoasa) | 1 | 1 | 1 |
| [Citrix NetScaler](#citrix-netscaler) | 1 | 1 | 1 |
| [Corelight Zeek](#corelight-zeek) | 2 | 2 | 1 |
| [CrowdStrike Falcon Endpoint Protection](#crowdstrike-falcon-endpoint-protection) | 3 | 3 | 1 |
| [F5 BIG-IP Application Security Manager (ASM)](#f5-big-ip-application-security-manager-asm) | 1 | 1 | 1 |
| [ForcePointFirewall](#forcepointfirewall) | 1 | 1 | 1 |
| [Fortinet FortiGate](#fortinet-fortigate) | 3 | 3 | 1 |
| [GCP Cloud DNS](#gcp-cloud-dns) | 1 | 1 | 1 |
| [Google Workspace](#google-workspace) | 2 | 2 | 0 |
| [Illumio](#illumio) | 1 | 1 | 1 |
| [Illumio Core](#illumio-core) | 1 | 1 | 1 |
| [Illumio SaaS Core](#illumio-saas-core) | 1 | 1 | 1 |
| [Infoblox BloxOne](#infoblox-bloxone) | 3 | 3 | 1 |
| [Infoblox NIOS](#infoblox-nios) | 1 | 1 | 1 |
| [Internet Information Services (IIS)](#internet-information-services-iis) | 1 | 1 | 1 |
| [M365 Defender for EndPoint](#m365-defender-for-endpoint) | 1 | 1 | 1 |
| [M365 Defender for Endpoint](#m365-defender-for-endpoint) | 1 | 1 | 1 |
| [Microsoft](#microsoft) | 2 | 1 | 4 |
| [Microsoft 365 Defender for EndPoint](#microsoft-365-defender-for-endpoint) | 1 | 1 | 1 |
| [Microsoft 365 Defender for endpoint](#microsoft-365-defender-for-endpoint) | 1 | 1 | 1 |
| [Microsoft 365 Defender for Endpoint](#microsoft-365-defender-for-endpoint) | 1 | 1 | 1 |
| [Microsoft Azure](#microsoft-azure) | 1 | 1 | 1 |
| [Microsoft Azure Blob Storage](#microsoft-azure-blob-storage) | 1 | 1 | 1 |
| [Microsoft Azure File Storage](#microsoft-azure-file-storage) | 1 | 1 | 1 |
| [Microsoft Azure Queue Storage](#microsoft-azure-queue-storage) | 1 | 1 | 1 |
| [Microsoft Azure Table Storage](#microsoft-azure-table-storage) | 1 | 1 | 1 |
| [Microsoft Defender for IoT](#microsoft-defender-for-iot) | 5 | 3 | 1 |
| [Microsoft Defender XDR](#microsoft-defender-xdr) | 1 | 1 | 1 |
| [Microsoft Entra ID](#microsoft-entra-id) | 4 | 1 | 4 |
| [Microsoft Security Event](#microsoft-security-event) | 0 | 1 | 1 |
| [Microsoft SharePoint](#microsoft-sharepoint) | 2 | 2 | 1 |
| [Microsoft Sysmon](#microsoft-sysmon) | 2 | 1 | 2 |
| [Microsoft Sysmon for Linux](#microsoft-sysmon-for-linux) | 2 | 1 | 1 |
| [Microsoft Windows](#microsoft-windows) | 3 | 1 | 6 |
| [Microsoft Windows Event](#microsoft-windows-event) | 0 | 1 | 1 |
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
| [Security Events](#security-events) | 6 | 2 | 2 |
| [SentinelOne](#sentinelone) | 9 | 9 | 4 |
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
| [VMware Carbon Black Cloud](#vmware-carbon-black-cloud) | 7 | 6 | 6 |
| [WatchGuard Fireware OS](#watchguard-fireware-os) | 1 | 1 | 1 |
| [Windows Firewall](#windows-firewall) | 2 | 1 | 2 |
| [Windows Security Events](#windows-security-events) | 1 | 1 | 2 |
| [Windows Sysmon](#windows-sysmon) | 4 | 2 | 2 |
| [Zscaler ZIA](#zscaler-zia) | 0 | 1 | 1 |
| [Zscaler ZIA DNS](#zscaler-zia-dns) | 1 | 1 | 1 |
| [Zscaler ZIA Firewall](#zscaler-zia-firewall) | 1 | 1 | 1 |
| [Zscaler ZIA Proxy](#zscaler-zia-proxy) | 0 | 1 | 1 |

\* *Each parser pair consists of an ASim filtering parser and a vim parameter-based parser.*

## Apache HTTP Server

**Schemas:** WebSession

**Tables:** [ApacheHTTPServer_CL](../tables/apachehttpserver-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimWebSessionApacheHTTPServer](asimwebsessionapachehttpserver.md) | WebSession | [ApacheHTTPServer_CL](../tables/apachehttpserver-cl.md) | 0.1 |
| [vimWebSessionApacheHTTPServer](vimwebsessionapachehttpserver.md) | WebSession | [ApacheHTTPServer_CL](../tables/apachehttpserver-cl.md) | 0.1 |

## AppGate SDP

**Schemas:** NetworkSession

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimNetworkSessionAppGateSDP](asimnetworksessionappgatesdp.md) | NetworkSession | [Syslog](../tables/syslog.md) | 0.2 |
| [vimNetworkSessionAppGateSDP](vimnetworksessionappgatesdp.md) | NetworkSession | [Syslog](../tables/syslog.md) | 0.2.0 |

## AWS

**Schemas:** Authentication

**Tables:** [AWSCloudTrail](../tables/awscloudtrail.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuthenticationAWSCloudTrail](asimauthenticationawscloudtrail.md) | Authentication | [AWSCloudTrail](../tables/awscloudtrail.md) | 0.2.1 |
| [vimAuthenticationAWSCloudTrail](vimauthenticationawscloudtrail.md) | Authentication | [AWSCloudTrail](../tables/awscloudtrail.md) | 0.2.2 |

## AWS VPC

**Schemas:** NetworkSession

**Tables:** [AWSVPCFlow](../tables/awsvpcflow.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimNetworkSessionAWSVPC](asimnetworksessionawsvpc.md) | NetworkSession | [AWSVPCFlow](../tables/awsvpcflow.md) | 0.3 |
| [vimNetworkSessionAWSVPC](vimnetworksessionawsvpc.md) | NetworkSession | [AWSVPCFlow](../tables/awsvpcflow.md) | 0.3.1 |

## Azure Firewall

**Schemas:** Dns, NetworkSession, WebSession

**Tables:** [ALERT](../tables/alert.md), [AZFWApplicationRule](../tables/azfwapplicationrule.md), [AZFWDnsQuery](../tables/azfwdnsquery.md), [AZFWIdpsSignature](../tables/azfwidpssignature.md), [AZFWNatRule](../tables/azfwnatrule.md), [AZFWNetworkRule](../tables/azfwnetworkrule.md), [AZFWThreatIntel](../tables/azfwthreatintel.md), [AzureDiagnostics](../tables/azurediagnostics.md), [Event](../tables/event.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimDnsAzureFirewall](asimdnsazurefirewall.md) | Dns | [AZFWDnsQuery](../tables/azfwdnsquery.md), [AzureDiagnostics](../tables/azurediagnostics.md) | 0.4.0 |
| [vimDnsAzureFirewall](vimdnsazurefirewall.md) | Dns | [AZFWDnsQuery](../tables/azfwdnsquery.md), [AzureDiagnostics](../tables/azurediagnostics.md) | 0.4.0 |
| [ASimNetworkSessionAzureFirewall](asimnetworksessionazurefirewall.md) | NetworkSession | [ALERT](../tables/alert.md), [AZFWIdpsSignature](../tables/azfwidpssignature.md), [AZFWNatRule](../tables/azfwnatrule.md), [AZFWNetworkRule](../tables/azfwnetworkrule.md), [AZFWThreatIntel](../tables/azfwthreatintel.md), [AzureDiagnostics](../tables/azurediagnostics.md), [Event](../tables/event.md) | 0.2.0 |
| [vimNetworkSessionAzureFirewall](vimnetworksessionazurefirewall.md) | NetworkSession | [ALERT](../tables/alert.md), [AZFWIdpsSignature](../tables/azfwidpssignature.md), [AZFWNatRule](../tables/azfwnatrule.md), [AZFWNetworkRule](../tables/azfwnetworkrule.md), [AZFWThreatIntel](../tables/azfwthreatintel.md), [AzureDiagnostics](../tables/azurediagnostics.md), [Event](../tables/event.md) | 0.2.0 |
| [ASimWebSessionAzureFirewall](asimwebsessionazurefirewall.md) | WebSession | [AZFWApplicationRule](../tables/azfwapplicationrule.md) | 0.1.0 |
| [vimWebSessionAzureFirewall](vimwebsessionazurefirewall.md) | WebSession | [AZFWApplicationRule](../tables/azfwapplicationrule.md) | 0.1.0 |

## Azure NSG flows

**Schemas:** NetworkSession

**Tables:** [AzureNetworkAnalytics_CL](../tables/azurenetworkanalytics-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimNetworkSessionAzureNSG](asimnetworksessionazurensg.md) | NetworkSession | [AzureNetworkAnalytics_CL](../tables/azurenetworkanalytics-cl.md) | 0.1.1 |
| [vimNetworkSessionAzureNSG](vimnetworksessionazurensg.md) | NetworkSession | [AzureNetworkAnalytics_CL](../tables/azurenetworkanalytics-cl.md) | 0.1.1 |

## Azure NTANetAnalytics

**Schemas:** NetworkSession

**Tables:** [NTANetAnalytics](../tables/ntanetanalytics.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimNetworkSessionNTANetAnalytics](asimnetworksessionntanetanalytics.md) | NetworkSession | [NTANetAnalytics](../tables/ntanetanalytics.md) | 0.1.0 |
| [vimNetworkSessionNTANetAnalytics](vimnetworksessionntanetanalytics.md) | NetworkSession | [NTANetAnalytics](../tables/ntanetanalytics.md) | 0.1.0 |

## Barracuda WAF

**Schemas:** AuditEvent, Authentication, NetworkSession, WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md), [Operation](../tables/operation.md), [barracuda_CL](../tables/barracuda-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuditEventBarracudaCEF](asimauditeventbarracudacef.md) | AuditEvent | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.2.1 |
| [ASimAuditEventBarracudaWAF](asimauditeventbarracudawaf.md) | AuditEvent | [barracuda_CL](../tables/barracuda-cl.md) | 0.2.1 |
| [vimAuditEventBarracudaCEF](vimauditeventbarracudacef.md) | AuditEvent | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.2.1 |
| [vimAuditEventBarracudaWAF](vimauditeventbarracudawaf.md) | AuditEvent | [Operation](../tables/operation.md), [barracuda_CL](../tables/barracuda-cl.md) | 0.2.1 |
| [ASimAuthenticationBarracudaWAF](asimauthenticationbarracudawaf.md) | Authentication | [CommonSecurityLog](../tables/commonsecuritylog.md), [barracuda_CL](../tables/barracuda-cl.md) | 0.1 |
| [vimAuthenticationBarracudaWAF](vimauthenticationbarracudawaf.md) | Authentication | [CommonSecurityLog](../tables/commonsecuritylog.md), [barracuda_CL](../tables/barracuda-cl.md) | 0.1.2 |
| [ASimNetworkSessionBarracudaCEF](asimnetworksessionbarracudacef.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.2.1 |
| [ASimNetworkSessionBarracudaWAF](asimnetworksessionbarracudawaf.md) | NetworkSession | [barracuda_CL](../tables/barracuda-cl.md) | 0.2.1 |
| [vimNetworkSessionBarracudaCEF](vimnetworksessionbarracudacef.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.2.1 |
| [vimNetworkSessionBarracudaWAF](vimnetworksessionbarracudawaf.md) | NetworkSession | [barracuda_CL](../tables/barracuda-cl.md) | 0.2.1 |
| [ASimWebSessionBarracudaCEF](asimwebsessionbarracudacef.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.2.1 |
| [ASimWebSessionBarracudaWAF](asimwebsessionbarracudawaf.md) | WebSession | [barracuda_CL](../tables/barracuda-cl.md) | 0.2.2 |
| [vimWebSessionBarracudaCEF](vimwebsessionbarracudacef.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.2.1 |
| [vimWebSessionBarracudaWAF](vimwebsessionbarracudawaf.md) | WebSession | [barracuda_CL](../tables/barracuda-cl.md) | 0.2.2 |

## CheckPointFirewall

**Schemas:** NetworkSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimNetworkSessionCheckPointFirewall](asimnetworksessioncheckpointfirewall.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 1.2.0 |
| [vimNetworkSessionCheckPointFirewall](vimnetworksessioncheckpointfirewall.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 1.2.0 |

## Cisco

**Schemas:** Dns

**Tables:** [Cisco_Umbrella_dns_CL](../tables/cisco-umbrella-dns-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [vimDnsCiscoUmbrella](vimdnsciscoumbrella.md) | Dns | [Cisco_Umbrella_dns_CL](../tables/cisco-umbrella-dns-cl.md) | 0.3 |

## Cisco Adaptive Security Appliance (ASA)

**Schemas:** Authentication

**Tables:** [Alert](../tables/alert.md), [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuthenticationCiscoASA](asimauthenticationciscoasa.md) | Authentication | [Alert](../tables/alert.md), [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.1 |
| [vimAuthenticationCiscoASA](vimauthenticationciscoasa.md) | Authentication | [Alert](../tables/alert.md), [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.1 |

## Cisco Firepower

**Schemas:** NetworkSession, WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimNetworkSessionCiscoFirepower](asimnetworksessionciscofirepower.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| [vimNetworkSessionCiscoFirepower](vimnetworksessionciscofirepower.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| [ASimWebSessionCiscoFirepower](asimwebsessionciscofirepower.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| [vimWebSessionCiscoFirepower](vimwebsessionciscofirepower.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |

## Cisco ISE

**Schemas:** AuditEvent, Authentication, NetworkSession, UserManagement

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuditEventCiscoISE](asimauditeventciscoise.md) | AuditEvent |  | 0.1 |
| [vimAuditEventCiscoISE](vimauditeventciscoise.md) | AuditEvent |  | 0.1 |
| [ASimAuthenticationCiscoISE](asimauthenticationciscoise.md) | Authentication |  | 0.1.0 |
| [vimAuthenticationCiscoISE](vimauthenticationciscoise.md) | Authentication |  | 0.1.1 |
| [ASimNetworkSessionCiscoISE](asimnetworksessionciscoise.md) | NetworkSession | [Syslog](../tables/syslog.md) | 1.1.0 |
| [vimNetworkSessionCiscoISE](vimnetworksessionciscoise.md) | NetworkSession |  | 1.1.0 |
| [ASimUserManagementCiscoISE](asimusermanagementciscoise.md) | UserManagement |  | 0.1.2 |
| [vimUserManagementCiscoISE](vimusermanagementciscoise.md) | UserManagement |  | 0.1.2 |

## Cisco Meraki

**Schemas:** AuditEvent, Authentication, NetworkSession, WebSession

**Tables:** [Operation](../tables/operation.md), [Syslog](../tables/syslog.md), [Update](../tables/update.md), [meraki_CL](../tables/meraki-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuditEventCiscoMeraki](asimauditeventciscomeraki.md) | AuditEvent | [Operation](../tables/operation.md), [meraki_CL](../tables/meraki-cl.md) | 0.2.1 |
| [ASimAuditEventCiscoMerakiSyslog](asimauditeventciscomerakisyslog.md) | AuditEvent | [Operation](../tables/operation.md), [Syslog](../tables/syslog.md) | 0.2.1 |
| [vimAuditEventCiscoMeraki](vimauditeventciscomeraki.md) | AuditEvent | [Operation](../tables/operation.md), [meraki_CL](../tables/meraki-cl.md) | 0.2.1 |
| [vimAuditEventCiscoMerakiSyslog](vimauditeventciscomerakisyslog.md) | AuditEvent | [Operation](../tables/operation.md), [Syslog](../tables/syslog.md) | 0.2.1 |
| [ASimAuthenticationCiscoMeraki](asimauthenticationciscomeraki.md) | Authentication | [meraki_CL](../tables/meraki-cl.md) | 0.2.1 |
| [ASimAuthenticationCiscoMerakiSyslog](asimauthenticationciscomerakisyslog.md) | Authentication | [Syslog](../tables/syslog.md) | 0.2.1 |
| [vimAuthenticationCiscoMeraki](vimauthenticationciscomeraki.md) | Authentication | [meraki_CL](../tables/meraki-cl.md) | 0.2.1 |
| [vimAuthenticationCiscoMerakiSyslog](vimauthenticationciscomerakisyslog.md) | Authentication | [Syslog](../tables/syslog.md) | 0.2.1 |
| [ASimNetworkSessionCiscoMeraki](asimnetworksessionciscomeraki.md) | NetworkSession | [Update](../tables/update.md), [meraki_CL](../tables/meraki-cl.md) | 1.2.2 |
| [ASimNetworkSessionCiscoMerakiSyslog](asimnetworksessionciscomerakisyslog.md) | NetworkSession | [Syslog](../tables/syslog.md), [Update](../tables/update.md) | 1.2.2 |
| [vimNetworkSessionCiscoMeraki](vimnetworksessionciscomeraki.md) | NetworkSession | [Update](../tables/update.md), [meraki_CL](../tables/meraki-cl.md) | 1.2.2 |
| [vimNetworkSessionCiscoMerakiSyslog](vimnetworksessionciscomerakisyslog.md) | NetworkSession | [Syslog](../tables/syslog.md), [Update](../tables/update.md) | 1.2.2 |
| [ASimWebSessionCiscoMeraki](asimwebsessionciscomeraki.md) | WebSession | [Syslog](../tables/syslog.md), [meraki_CL](../tables/meraki-cl.md) | 0.1.1 |
| [vimWebSessionCiscoMeraki](vimwebsessionciscomeraki.md) | WebSession | [Syslog](../tables/syslog.md), [meraki_CL](../tables/meraki-cl.md) | 0.1.1 |

## Cisco Umbrella

**Schemas:** Dns

**Tables:** [Cisco_Umbrella_dns_CL](../tables/cisco-umbrella-dns-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimDnsCiscoUmbrella](asimdnsciscoumbrella.md) | Dns | [Cisco_Umbrella_dns_CL](../tables/cisco-umbrella-dns-cl.md) | 0.3 |

## CiscoASA

**Schemas:** NetworkSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimNetworkSessionCiscoASA](asimnetworksessionciscoasa.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 1.1.0 |
| [vimNetworkSessionCiscoASA](vimnetworksessionciscoasa.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 1.1.0 |

## Citrix NetScaler

**Schemas:** WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimWebSessionCitrixNetScaler](asimwebsessioncitrixnetscaler.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.1 |
| [vimWebSessionCitrixNetScaler](vimwebsessioncitrixnetscaler.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.1 |

## Corelight Zeek

**Schemas:** Dns, NetworkSession

**Tables:** [Corelight_CL](../tables/corelight-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimDnsCorelightZeek](asimdnscorelightzeek.md) | Dns | [Corelight_CL](../tables/corelight-cl.md) | 0.5 |
| [vimDnsCorelightZeek](vimdnscorelightzeek.md) | Dns | [Corelight_CL](../tables/corelight-cl.md) | 0.5 |
| [ASimNetworkSessionCorelightZeek](asimnetworksessioncorelightzeek.md) | NetworkSession | [Corelight_CL](../tables/corelight-cl.md) | 0.2 |
| [vimNetworkSessionCorelightZeek](vimnetworksessioncorelightzeek.md) | NetworkSession | [Corelight_CL](../tables/corelight-cl.md) | 0.2.1 |

## CrowdStrike Falcon Endpoint Protection

**Schemas:** AuditEvent, Authentication, NetworkSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuditEventCrowdStrikeFalconHost](asimauditeventcrowdstrikefalconhost.md) | AuditEvent | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| [vimAuditEventCrowdStrikeFalconHost](vimauditeventcrowdstrikefalconhost.md) | AuditEvent | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| [ASimAuthenticationCrowdStrikeFalconHost](asimauthenticationcrowdstrikefalconhost.md) | Authentication | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| [vimAuthenticationCrowdStrikeFalconHost](vimauthenticationcrowdstrikefalconhost.md) | Authentication | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.1 |
| [ASimNetworkSessionCrowdStrikeFalconHost](asimnetworksessioncrowdstrikefalconhost.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| [vimNetworkSessionCrowdStrikeFalconHost](vimnetworksessioncrowdstrikefalconhost.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |

## F5 BIG-IP Application Security Manager (ASM)

**Schemas:** WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimWebSessionF5ASM](asimwebsessionf5asm.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| [vimWebSessionF5ASM](vimwebsessionf5asm.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |

## ForcePointFirewall

**Schemas:** NetworkSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimNetworkSessionForcePointFirewall](asimnetworksessionforcepointfirewall.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1 |
| [vimNetworkSessionForcePointFirewall](vimnetworksessionforcepointfirewall.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1 |

## Fortinet FortiGate

**Schemas:** Dns, NetworkSession, WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimDnsFortinetFortiGate](asimdnsfortinetfortigate.md) | Dns | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.2 |
| [vimDnsFortinetFortiGate](vimdnsfortinetfortigate.md) | Dns | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.2 |
| [ASimNetworkSessionFortinetFortiGate](asimnetworksessionfortinetfortigate.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.6.0 |
| [vimNetworkSessionFortinetFortiGate](vimnetworksessionfortinetfortigate.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.6.0 |
| [ASimWebSessionFortinetFortiGate](asimwebsessionfortinetfortigate.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.3.0 |
| [vimWebSessionFortinetFortiGate](vimwebsessionfortinetfortigate.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.3.0 |

## GCP Cloud DNS

**Schemas:** Dns

**Tables:** [GCP_DNS_CL](../tables/gcp-dns-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimDnsGcp](asimdnsgcp.md) | Dns | [GCP_DNS_CL](../tables/gcp-dns-cl.md) | 0.4 |
| [vimDnsGcp](vimdnsgcp.md) | Dns | [GCP_DNS_CL](../tables/gcp-dns-cl.md) | 0.4 |

## Google Workspace

**Schemas:** Authentication, FileEvent

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuthenticationGoogleWorkspace](asimauthenticationgoogleworkspace.md) | Authentication |  | 0.1.0 |
| [vimAuthenticationGoogleWorkspace](vimauthenticationgoogleworkspace.md) | Authentication |  | 0.1.1 |
| [ASimFileEventGoogleWorkspace](asimfileeventgoogleworkspace.md) | FileEvent |  | 0.1.0 |
| [vimFileEventGoogleWorkspace](vimfileeventgoogleworkspace.md) | FileEvent |  | 0.1.0 |

## Illumio

**Schemas:** Authentication

**Tables:** [Illumio_Auditable_Events_CL](../tables/illumio-auditable-events-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuthenticationIllumioSaaSCore](asimauthenticationillumiosaascore.md) | Authentication | [Illumio_Auditable_Events_CL](../tables/illumio-auditable-events-cl.md) | 0.3.0 |
| [vimAuthenticationIllumioSaaSCore](vimauthenticationillumiosaascore.md) | Authentication | [Illumio_Auditable_Events_CL](../tables/illumio-auditable-events-cl.md) | 0.3.0 |

## Illumio Core

**Schemas:** AuditEvent

**Tables:** [Illumio_Auditable_Events_CL](../tables/illumio-auditable-events-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuditEventIllumioSaaSCore](asimauditeventillumiosaascore.md) | AuditEvent | [Illumio_Auditable_Events_CL](../tables/illumio-auditable-events-cl.md) | 0.2.1 |
| [vimAuditEventIllumioSaaSCore](vimauditeventillumiosaascore.md) | AuditEvent | [Illumio_Auditable_Events_CL](../tables/illumio-auditable-events-cl.md) | 0.2.1 |

## Illumio SaaS Core

**Schemas:** NetworkSession

**Tables:** [Illumio_Flow_Events_CL](../tables/illumio-flow-events-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimNetworkSessionIllumioSaaSCore](asimnetworksessionillumiosaascore.md) | NetworkSession | [Illumio_Flow_Events_CL](../tables/illumio-flow-events-cl.md) | 0.1.0 |
| [vimNetworkSessionIllumioSaaSCore](vimnetworksessionillumiosaascore.md) | NetworkSession | [Illumio_Flow_Events_CL](../tables/illumio-flow-events-cl.md) | 0.1.0 |

## Infoblox BloxOne

**Schemas:** AuditEvent, DhcpEvent, Dns

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuditEventInfobloxBloxOne](asimauditeventinfobloxbloxone.md) | AuditEvent |  | 0.1.0 |
| [vimAuditEventInfbloxBloxOne](vimauditeventinfbloxbloxone.md) | AuditEvent | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| [ASimDhcpEventInfobloxBloxOne](asimdhcpeventinfobloxbloxone.md) | DhcpEvent |  | 0.1.0 |
| [vimDhcpEventInfobloxBloxOne](vimdhcpeventinfobloxbloxone.md) | DhcpEvent | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| [ASimDnsInfobloxBloxOne](asimdnsinfobloxbloxone.md) | Dns |  | 0.1.0 |
| [vimDnsInfobloxBloxOne](vimdnsinfobloxbloxone.md) | Dns | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |

## Infoblox NIOS

**Schemas:** Dns

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimDnsInfobloxNIOS](asimdnsinfobloxnios.md) | Dns | [Syslog](../tables/syslog.md) | 0.6.1 |
| [vimDnsInfobloxNIOS](vimdnsinfobloxnios.md) | Dns | [Syslog](../tables/syslog.md) | 0.5.1 |

## Internet Information Services (IIS)

**Schemas:** WebSession

**Tables:** [W3CIISLog](../tables/w3ciislog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimWebSessionIIS](asimwebsessioniis.md) | WebSession | [W3CIISLog](../tables/w3ciislog.md) | 0.2 |
| [vimWebSessionIIS](vimwebsessioniis.md) | WebSession | [W3CIISLog](../tables/w3ciislog.md) | 0.1.1 |

## M365 Defender for EndPoint

**Schemas:** Authentication

**Tables:** [DeviceLogonEvents](../tables/devicelogonevents.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuthenticationM365Defender](asimauthenticationm365defender.md) | Authentication | [DeviceLogonEvents](../tables/devicelogonevents.md) | 0.1.3 |
| [vimAuthenticationM365Defender](vimauthenticationm365defender.md) | Authentication | [DeviceLogonEvents](../tables/devicelogonevents.md) | 0.1.3 |

## M365 Defender for Endpoint

**Schemas:** NetworkSession

**Tables:** [DeviceNetworkEvents](../tables/devicenetworkevents.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimNetworkSessionMicrosoft365Defender](asimnetworksessionmicrosoft365defender.md) | NetworkSession | [DeviceNetworkEvents](../tables/devicenetworkevents.md) | 0.4 |
| [vimNetworkSessionMicrosoft365Defender](vimnetworksessionmicrosoft365defender.md) | NetworkSession | [DeviceNetworkEvents](../tables/devicenetworkevents.md) | 0.4 |

## Microsoft

**Schemas:** UserManagement

**Tables:** [SecurityEvent](../tables/securityevent.md), [Syslog](../tables/syslog.md), [WindowsEvent](../tables/windowsevent.md), [event](../tables/event.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimUserManagementLinuxAuthpriv](asimusermanagementlinuxauthpriv.md) | UserManagement | [Syslog](../tables/syslog.md) | 0.1.1 |
| [vimUserManagementLinuxAuthpriv](vimusermanagementlinuxauthpriv.md) | UserManagement | [Syslog](../tables/syslog.md) | 0.1.1 |
| [vimUserManagementMicrosoftSecurityEvent](vimusermanagementmicrosoftsecurityevent.md) | UserManagement | [SecurityEvent](../tables/securityevent.md), [event](../tables/event.md) | 0.2.0 |
| [vimUserManagementMicrosoftWindowsEvent](vimusermanagementmicrosoftwindowsevent.md) | UserManagement | [WindowsEvent](../tables/windowsevent.md) | 0.2.0 |

## Microsoft 365 Defender for EndPoint

**Schemas:** FileEvent

**Tables:** [DeviceFileEvents](../tables/devicefileevents.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimFileEventMicrosoft365D](asimfileeventmicrosoft365d.md) | FileEvent | [DeviceFileEvents](../tables/devicefileevents.md) | 0.2.1 |
| [vimFileEventMicrosoft365D](vimfileeventmicrosoft365d.md) | FileEvent | [DeviceFileEvents](../tables/devicefileevents.md) | 0.2.1 |

## Microsoft 365 Defender for endpoint

**Schemas:** ProcessEvent

**Tables:** [DeviceProcessEvents](../tables/deviceprocessevents.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimProcessEventMicrosoft365D](asimprocesseventmicrosoft365d.md) | ProcessEvent | [DeviceProcessEvents](../tables/deviceprocessevents.md) | 0.1.2 |
| [vimProcessEventMicrosoft365D](vimprocesseventmicrosoft365d.md) | ProcessEvent | [DeviceProcessEvents](../tables/deviceprocessevents.md) | 0.2.0 |

## Microsoft 365 Defender for Endpoint

**Schemas:** RegistryEvent

**Tables:** [DeviceRegistryEvents](../tables/deviceregistryevents.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimRegistryEventMicrosoft365D](asimregistryeventmicrosoft365d.md) | RegistryEvent | [DeviceRegistryEvents](../tables/deviceregistryevents.md) | 0.1.2 |
| [vimRegistryEventMicrosoft365D](vimregistryeventmicrosoft365d.md) | RegistryEvent | [DeviceRegistryEvents](../tables/deviceregistryevents.md) | 0.1.2 |

## Microsoft Azure

**Schemas:** AuditEvent

**Tables:** [AzureActivity](../tables/azureactivity.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuditEventAzureActivity](asimauditeventazureactivity.md) | AuditEvent | [AzureActivity](../tables/azureactivity.md) | 0.2 |
| [vimAuditEventAzureActivity](vimauditeventazureactivity.md) | AuditEvent | [AzureActivity](../tables/azureactivity.md) | 0.2 |

## Microsoft Azure Blob Storage

**Schemas:** FileEvent

**Tables:** [StorageBlobLogs](../tables/storagebloblogs.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimFileEventAzureBlobStorage](asimfileeventazureblobstorage.md) | FileEvent | [StorageBlobLogs](../tables/storagebloblogs.md) | 0.1.1 |
| [vimFileEventAzureBlobStorage](vimfileeventazureblobstorage.md) | FileEvent | [StorageBlobLogs](../tables/storagebloblogs.md) | 0.1.1 |

## Microsoft Azure File Storage

**Schemas:** FileEvent

**Tables:** [StorageFileLogs](../tables/storagefilelogs.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimFileEventAzureFileStorage](asimfileeventazurefilestorage.md) | FileEvent | [StorageFileLogs](../tables/storagefilelogs.md) | 0.1.1 |
| [vimFileEventAzureFileStorage](vimfileeventazurefilestorage.md) | FileEvent | [StorageFileLogs](../tables/storagefilelogs.md) | 0.1.1 |

## Microsoft Azure Queue Storage

**Schemas:** FileEvent

**Tables:** [StorageQueueLogs](../tables/storagequeuelogs.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimFileEventAzureQueueStorage](asimfileeventazurequeuestorage.md) | FileEvent | [StorageQueueLogs](../tables/storagequeuelogs.md) | 0.1.1 |
| [vimFileEventAzureQueueStorage](vimfileeventazurequeuestorage.md) | FileEvent | [StorageQueueLogs](../tables/storagequeuelogs.md) | 0.1.1 |

## Microsoft Azure Table Storage

**Schemas:** FileEvent

**Tables:** [StorageTableLogs](../tables/storagetablelogs.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimFileEventAzureTableStorage](asimfileeventazuretablestorage.md) | FileEvent | [StorageTableLogs](../tables/storagetablelogs.md) | 0.1.1 |
| [vimFileEventAzureTableStorage](vimfileeventazuretablestorage.md) | FileEvent | [StorageTableLogs](../tables/storagetablelogs.md) | 0.1.1 |

## Microsoft Defender for IoT

**Schemas:** Authentication, NetworkSession, ProcessEvent

**Tables:** [SecurityIoTRawEvent](../tables/securityiotrawevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuthenticationMD4IoT](asimauthenticationmd4iot.md) | Authentication | [SecurityIoTRawEvent](../tables/securityiotrawevent.md) | 0.1.2 |
| [vimAuthenticationMD4IoT](vimauthenticationmd4iot.md) | Authentication | [SecurityIoTRawEvent](../tables/securityiotrawevent.md) | 0.1.3 |
| [ASimNetworkSessionMD4IoTAgent](asimnetworksessionmd4iotagent.md) | NetworkSession | [SecurityIoTRawEvent](../tables/securityiotrawevent.md) | 0.2.1 |
| [ASimNetworkSessionMD4IoTSensor](asimnetworksessionmd4iotsensor.md) | NetworkSession |  | 0.1 |
| [vimNetworkSessionMD4IoTAgent](vimnetworksessionmd4iotagent.md) | NetworkSession | [SecurityIoTRawEvent](../tables/securityiotrawevent.md) | 0.2.1 |
| [vimNetworkSessionMD4IoTSensor](vimnetworksessionmd4iotsensor.md) | NetworkSession |  | 0.2.1 |
| [ASimProcessEventMD4IoT](asimprocesseventmd4iot.md) | ProcessEvent | [SecurityIoTRawEvent](../tables/securityiotrawevent.md) | 0.1.1 |
| [vimProcessCreateMD4IoT](vimprocesscreatemd4iot.md) | ProcessEvent | [SecurityIoTRawEvent](../tables/securityiotrawevent.md) | 0.1.0 |
| [vimProcessEventMD4IoT](vimprocesseventmd4iot.md) | ProcessEvent | [SecurityIoTRawEvent](../tables/securityiotrawevent.md) | 0.2.0 |
| [vimProcessTerminateMD4IoT](vimprocessterminatemd4iot.md) | ProcessEvent | [SecurityIoTRawEvent](../tables/securityiotrawevent.md) | 0.2.0 |

## Microsoft Defender XDR

**Schemas:** AlertEvent

**Tables:** [AlertEvidence](../tables/alertevidence.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAlertEventMicrosoftDefenderXDR](asimalerteventmicrosoftdefenderxdr.md) | AlertEvent | [AlertEvidence](../tables/alertevidence.md) | 0.1.0 |
| [vimAlertEventMicrosoftDefenderXDR](vimalerteventmicrosoftdefenderxdr.md) | AlertEvent | [AlertEvidence](../tables/alertevidence.md) | 0.1.0 |

## Microsoft Entra ID

**Schemas:** Authentication

**Tables:** [AADManagedIdentitySignInLogs](../tables/aadmanagedidentitysigninlogs.md), [AADNonInteractiveUserSignInLogs](../tables/aadnoninteractiveusersigninlogs.md), [AADServicePrincipalSignInLogs](../tables/aadserviceprincipalsigninlogs.md), [SigninLogs](../tables/signinlogs.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuthenticationAADManagedIdentitySignInLogs](asimauthenticationaadmanagedidentitysigninlogs.md) | Authentication | [AADManagedIdentitySignInLogs](../tables/aadmanagedidentitysigninlogs.md) | 0.2.2 |
| [ASimAuthenticationAADNonInteractiveUserSignInLogs](asimauthenticationaadnoninteractiveusersigninlogs.md) | Authentication | [AADNonInteractiveUserSignInLogs](../tables/aadnoninteractiveusersigninlogs.md) | 0.2.2 |
| [ASimAuthenticationAADServicePrincipalSignInLogs](asimauthenticationaadserviceprincipalsigninlogs.md) | Authentication | [AADServicePrincipalSignInLogs](../tables/aadserviceprincipalsigninlogs.md) | 0.2.2 |
| [ASimAuthenticationSigninLogs](asimauthenticationsigninlogs.md) | Authentication | [SigninLogs](../tables/signinlogs.md) | 0.3.2 |
| [vimAuthenticationAADManagedIdentitySignInLogs](vimauthenticationaadmanagedidentitysigninlogs.md) | Authentication | [AADManagedIdentitySignInLogs](../tables/aadmanagedidentitysigninlogs.md) | 0.2.2 |
| [vimAuthenticationAADNonInteractiveUserSignInLogs](vimauthenticationaadnoninteractiveusersigninlogs.md) | Authentication | [AADNonInteractiveUserSignInLogs](../tables/aadnoninteractiveusersigninlogs.md) | 0.2.2 |
| [vimAuthenticationAADServicePrincipalSignInLogs](vimauthenticationaadserviceprincipalsigninlogs.md) | Authentication | [AADServicePrincipalSignInLogs](../tables/aadserviceprincipalsigninlogs.md) | 0.2.2 |
| [vimAuthenticationSigninLogs](vimauthenticationsigninlogs.md) | Authentication | [SigninLogs](../tables/signinlogs.md) | 0.3.2 |

## Microsoft Security Event

**Schemas:** UserManagement

**Tables:** [SecurityEvent](../tables/securityevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimUserManagementMicrosoftSecurityEvent](asimusermanagementmicrosoftsecurityevent.md) | UserManagement | [SecurityEvent](../tables/securityevent.md) | 0.2.0 |

## Microsoft SharePoint

**Schemas:** AuditEvent, FileEvent

**Tables:** [OfficeActivity](../tables/officeactivity.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuditEventMicrosoftExchangeAdmin365](asimauditeventmicrosoftexchangeadmin365.md) | AuditEvent | [OfficeActivity](../tables/officeactivity.md) | 0.2 |
| [vimAuditEventMicrosoftExchangeAdmin365](vimauditeventmicrosoftexchangeadmin365.md) | AuditEvent | [OfficeActivity](../tables/officeactivity.md) | 0.2 |
| [ASimFileEventMicrosoftSharePoint](asimfileeventmicrosoftsharepoint.md) | FileEvent | [OfficeActivity](../tables/officeactivity.md) | 0.3.1 |
| [vimFileEventMicrosoftSharePoint](vimfileeventmicrosoftsharepoint.md) | FileEvent | [OfficeActivity](../tables/officeactivity.md) | 0.3.1 |

## Microsoft Sysmon

**Schemas:** RegistryEvent

**Tables:** [Event](../tables/event.md), [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimRegistryEventMicrosoftSysmon](asimregistryeventmicrosoftsysmon.md) | RegistryEvent | [Event](../tables/event.md) | 0.3.1 |
| [ASimRegistryEventMicrosoftSysmonWindowsEvent](asimregistryeventmicrosoftsysmonwindowsevent.md) | RegistryEvent | [WindowsEvent](../tables/windowsevent.md) | 0.3.1 |
| [vimRegistryEventMicrosoftSysmon](vimregistryeventmicrosoftsysmon.md) | RegistryEvent | [Event](../tables/event.md) | 0.3.1 |
| [vimRegistryEventMicrosoftSysmonWindowsEvent](vimregistryeventmicrosoftsysmonwindowsevent.md) | RegistryEvent | [WindowsEvent](../tables/windowsevent.md) | 0.3.1 |

## Microsoft Sysmon for Linux

**Schemas:** FileEvent

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimFileEventLinuxSysmonFileCreated](asimfileeventlinuxsysmonfilecreated.md) | FileEvent | [Syslog](../tables/syslog.md) | 0.2.1 |
| [ASimFileEventLinuxSysmonFileDeleted](asimfileeventlinuxsysmonfiledeleted.md) | FileEvent | [Syslog](../tables/syslog.md) | 0.2.1 |
| [vimFileEventLinuxSysmonFileCreated](vimfileeventlinuxsysmonfilecreated.md) | FileEvent | [Syslog](../tables/syslog.md) | 0.2.1 |
| [vimFileEventLinuxSysmonFileDeleted](vimfileeventlinuxsysmonfiledeleted.md) | FileEvent | [Syslog](../tables/syslog.md) | 0.2.1 |

## Microsoft Windows

**Schemas:** AuditEvent

**Tables:** [Event](../tables/event.md), [Operation](../tables/operation.md), [SecurityEvent](../tables/securityevent.md), [Update](../tables/update.md), [WindowsEvent](../tables/windowsevent.md), [WindowsFirewall](../tables/windowsfirewall.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuditEventMicrosoftEvent](asimauditeventmicrosoftevent.md) | AuditEvent | [Event](../tables/event.md), [Operation](../tables/operation.md), [Update](../tables/update.md), [WindowsFirewall](../tables/windowsfirewall.md) | 0.2.1 |
| [ASimAuditEventMicrosoftSecurityEvents](asimauditeventmicrosoftsecurityevents.md) | AuditEvent | [Event](../tables/event.md), [Operation](../tables/operation.md), [SecurityEvent](../tables/securityevent.md), [Update](../tables/update.md), [WindowsFirewall](../tables/windowsfirewall.md) | 0.2.1 |
| [ASimAuditEventMicrosoftWindowsEvents](asimauditeventmicrosoftwindowsevents.md) | AuditEvent | [Event](../tables/event.md), [Operation](../tables/operation.md), [Update](../tables/update.md), [WindowsEvent](../tables/windowsevent.md), [WindowsFirewall](../tables/windowsfirewall.md) | 0.2.1 |
| [vimAuditEventMicrosoftEvent](vimauditeventmicrosoftevent.md) | AuditEvent | [Event](../tables/event.md), [Operation](../tables/operation.md), [Update](../tables/update.md), [WindowsFirewall](../tables/windowsfirewall.md) | 0.2.1 |
| [vimAuditEventMicrosoftSecurityEvents](vimauditeventmicrosoftsecurityevents.md) | AuditEvent | [Event](../tables/event.md), [Operation](../tables/operation.md), [SecurityEvent](../tables/securityevent.md), [Update](../tables/update.md), [WindowsFirewall](../tables/windowsfirewall.md) | 0.2.1 |
| [vimAuditEventMicrosoftWindowsEvents](vimauditeventmicrosoftwindowsevents.md) | AuditEvent | [Event](../tables/event.md), [Operation](../tables/operation.md), [Update](../tables/update.md), [WindowsEvent](../tables/windowsevent.md), [WindowsFirewall](../tables/windowsfirewall.md) | 0.2.1 |

## Microsoft Windows Event

**Schemas:** UserManagement

**Tables:** [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimUserManagementMicrosoftWindowsEvent](asimusermanagementmicrosoftwindowsevent.md) | UserManagement | [WindowsEvent](../tables/windowsevent.md) | 0.2.1 |

## Microsoft Windows Events

**Schemas:** FileEvent

**Tables:** [SecurityEvent](../tables/securityevent.md), [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimFileEventMicrosoftSecurityEvents](asimfileeventmicrosoftsecurityevents.md) | FileEvent | [SecurityEvent](../tables/securityevent.md) | 0.2.0 |
| [ASimFileEventMicrosoftWindowsEvents](asimfileeventmicrosoftwindowsevents.md) | FileEvent | [WindowsEvent](../tables/windowsevent.md) | 0.2.0 |
| [vimFileEventMicrosoftSecurityEvents](vimfileeventmicrosoftsecurityevents.md) | FileEvent | [SecurityEvent](../tables/securityevent.md) | 0.2.0 |
| [vimFileEventMicrosoftWindowsEvents](vimfileeventmicrosoftwindowsevents.md) | FileEvent | [WindowsEvent](../tables/windowsevent.md) | 0.2.0 |

## Microsoft Windows Events Sysmon

**Schemas:** Dns, ProcessEvent

**Tables:** [Event](../tables/event.md), [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimDnsMicrosoftSysmon](asimdnsmicrosoftsysmon.md) | Dns | [Event](../tables/event.md) | 0.5.1 |
| [ASimDnsMicrosoftSysmonWindowsEvent](asimdnsmicrosoftsysmonwindowsevent.md) | Dns | [WindowsEvent](../tables/windowsevent.md) | 0.5.1 |
| [vimDnsMicrosoftSysmon](vimdnsmicrosoftsysmon.md) | Dns | [Event](../tables/event.md) | 0.5.1 |
| [vimDnsMicrosoftSysmonWindowsEvent](vimdnsmicrosoftsysmonwindowsevent.md) | Dns | [WindowsEvent](../tables/windowsevent.md) | 0.5.1 |
| [ASimProcessEventTerminateMicrosoftSysmon](asimprocesseventterminatemicrosoftsysmon.md) | ProcessEvent | [Event](../tables/event.md) | 0.3.1 |
| [ASimProcessEventTerminateMicrosoftSysmonWindowsEvent](asimprocesseventterminatemicrosoftsysmonwindowsevent.md) | ProcessEvent | [WindowsEvent](../tables/windowsevent.md) | 0.4.1 |
| [vimProcessEventTerminateMicrosoftSysmon](vimprocesseventterminatemicrosoftsysmon.md) | ProcessEvent | [Event](../tables/event.md) | 0.4.1 |
| [vimProcessEventTerminateMicrosoftSysmonWindowsEvent](vimprocesseventterminatemicrosoftsysmonwindowsevent.md) | ProcessEvent | [WindowsEvent](../tables/windowsevent.md) | 0.4.1 |

## MS DNS Events

**Schemas:** Dns

**Tables:** [DnsEvents](../tables/dnsevents.md), [NXLog_DNS_Server_CL](../tables/nxlog-dns-server-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimDnsMicrosoftNXlog](asimdnsmicrosoftnxlog.md) | Dns | [NXLog_DNS_Server_CL](../tables/nxlog-dns-server-cl.md) | 0.5.0 |
| [ASimDnsMicrosoftOMS](asimdnsmicrosoftoms.md) | Dns | [DnsEvents](../tables/dnsevents.md) | 0.4 |
| [vimDnsMicrosoftNXlog](vimdnsmicrosoftnxlog.md) | Dns | [NXLog_DNS_Server_CL](../tables/nxlog-dns-server-cl.md) | 0.5.0 |
| [vimDnsMicrosoftOMS](vimdnsmicrosoftoms.md) | Dns | [DnsEvents](../tables/dnsevents.md) | 0.4 |

## Native

**Schemas:** AuditEvent, Authentication, DhcpEvent, Dns, FileEvent, NetworkSession, ProcessEvent, RegistryEvent, UserManagement, WebSession

**Tables:** [ASimAuditEventLogs](../tables/asimauditeventlogs.md), [ASimAuthenticationEventLogs](../tables/asimauthenticationeventlogs.md), [ASimDhcpEventLogs](../tables/asimdhcpeventlogs.md), [ASimDnsActivityLogs](../tables/asimdnsactivitylogs.md), [ASimFileEventLogs](../tables/asimfileeventlogs.md), [ASimNetworkSessionLogs](../tables/asimnetworksessionlogs.md), [ASimProcessEventLogs](../tables/asimprocesseventlogs.md), [ASimRegistryEventLogs](../tables/asimregistryeventlogs.md), [ASimUserManagementActivityLogs](../tables/asimusermanagementactivitylogs.md), [ASimWebSessionLogs](../tables/asimwebsessionlogs.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuditEventNative](asimauditeventnative.md) | AuditEvent | [ASimAuditEventLogs](../tables/asimauditeventlogs.md) | 0.1.0 |
| [vimAuditEventNative](vimauditeventnative.md) | AuditEvent | [ASimAuditEventLogs](../tables/asimauditeventlogs.md) | 0.1.0 |
| [ASimAuthenticationNative](asimauthenticationnative.md) | Authentication | [ASimAuthenticationEventLogs](../tables/asimauthenticationeventlogs.md) | 0.1.0 |
| [vimAuthenticationNative](vimauthenticationnative.md) | Authentication | [ASimAuthenticationEventLogs](../tables/asimauthenticationeventlogs.md) | 0.1.0 |
| [ASimDhcpEventNative](asimdhcpeventnative.md) | DhcpEvent | [ASimDhcpEventLogs](../tables/asimdhcpeventlogs.md) | 0.1.0 |
| [vimDhcpEventNative](vimdhcpeventnative.md) | DhcpEvent | [ASimDhcpEventLogs](../tables/asimdhcpeventlogs.md) | 0.1.0 |
| [ASimDnsNative](asimdnsnative.md) | Dns | [ASimDnsActivityLogs](../tables/asimdnsactivitylogs.md) | 0.6.1 |
| [vimDnsNative](vimdnsnative.md) | Dns | [ASimDnsActivityLogs](../tables/asimdnsactivitylogs.md) | 0.6.1 |
| [ASimFileEventNative](asimfileeventnative.md) | FileEvent | [ASimFileEventLogs](../tables/asimfileeventlogs.md) | 0.1.1 |
| [vimFileEventNative](vimfileeventnative.md) | FileEvent | [ASimFileEventLogs](../tables/asimfileeventlogs.md) | 0.1.1 |
| [ASimNetworkSessionNative](asimnetworksessionnative.md) | NetworkSession | [ASimNetworkSessionLogs](../tables/asimnetworksessionlogs.md) | 0.3 |
| [vimNetworkSessionNative](vimnetworksessionnative.md) | NetworkSession | [ASimNetworkSessionLogs](../tables/asimnetworksessionlogs.md) | 0.3 |
| [ASimProcessEventNative](asimprocesseventnative.md) | ProcessEvent | [ASimProcessEventLogs](../tables/asimprocesseventlogs.md) | 0.1.0 |
| [vimProcessEventNative](vimprocesseventnative.md) | ProcessEvent | [ASimProcessEventLogs](../tables/asimprocesseventlogs.md) | 0.1.0 |
| [ASimRegistryEventNative](asimregistryeventnative.md) | RegistryEvent | [ASimRegistryEventLogs](../tables/asimregistryeventlogs.md) | 0.1.0 |
| [vimRegistryEventNative](vimregistryeventnative.md) | RegistryEvent | [ASimRegistryEventLogs](../tables/asimregistryeventlogs.md) | 0.1.0 |
| [ASimUserManagementNative](asimusermanagementnative.md) | UserManagement | [ASimUserManagementActivityLogs](../tables/asimusermanagementactivitylogs.md) | 0.1.0 |
| [vimUserManagementNative](vimusermanagementnative.md) | UserManagement | [ASimUserManagementActivityLogs](../tables/asimusermanagementactivitylogs.md) | 0.1.0 |
| [ASimWebSessionNative](asimwebsessionnative.md) | WebSession | [ASimWebSessionLogs](../tables/asimwebsessionlogs.md) | 0.1 |
| [vimWebSessionNative](vimwebsessionnative.md) | WebSession | [ASimWebSessionLogs](../tables/asimwebsessionlogs.md) | 0.1 |

## Okta

**Schemas:** Authentication

**Tables:** [OktaV2_CL](../tables/oktav2-cl.md), [Okta_CL](../tables/okta-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuthenticationOktaSSO](asimauthenticationoktasso.md) | Authentication | [Okta_CL](../tables/okta-cl.md) | 0.3.0 |
| [ASimAuthenticationOktaV2](asimauthenticationoktav2.md) | Authentication | [OktaV2_CL](../tables/oktav2-cl.md) | 0.3.1 |
| [vimAuthenticationOktaSSO](vimauthenticationoktasso.md) | Authentication | [Okta_CL](../tables/okta-cl.md) | 0.3.0 |
| [vimAuthenticationOktaV2](vimauthenticationoktav2.md) | Authentication | [OktaV2_CL](../tables/oktav2-cl.md) | 0.3.1 |

## OpenSSH

**Schemas:** Authentication

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuthenticationSshd](asimauthenticationsshd.md) | Authentication | [Syslog](../tables/syslog.md) | 0.2.4 |
| [vimAuthenticationSshd](vimauthenticationsshd.md) | Authentication | [Syslog](../tables/syslog.md) | 0.2.4 |

## Palo Alto Cortex Data Lake

**Schemas:** Authentication, NetworkSession, WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuthenticationPaloAltoCortexDataLake](asimauthenticationpaloaltocortexdatalake.md) | Authentication | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| [vimAuthenticationPaloAltoCortexDataLake](vimauthenticationpaloaltocortexdatalake.md) | Authentication | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.1 |
| [ASimNetworkSessionPaloAltoCortexDataLake](asimnetworksessionpaloaltocortexdatalake.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.1 |
| [vimNetworkSessionPaloAltoCortexDataLake](vimnetworksessionpaloaltocortexdatalake.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.1 |
| [ASimWebSessionPaloAltoCortexDataLake](asimwebsessionpaloaltocortexdatalake.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.1 |
| [vimWebSessionPaloAltoCortexDataLake](vimwebsessionpaloaltocortexdatalake.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.1 |

## Palo Alto Networks

**Schemas:** WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimWebSessionPaloAltoCEF](asimwebsessionpaloaltocef.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.2 |
| [vimWebSessionPaloAltoCEF](vimwebsessionpaloaltocef.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.2.2 |

## Palo Alto PanOS

**Schemas:** NetworkSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimNetworkSessionPaloAltoCEF](asimnetworksessionpaloaltocef.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.7.1 |
| [vimNetworkSessionPaloAltoCEF](vimnetworksessionpaloaltocef.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.7.2 |

## PostgreSQL

**Schemas:** Authentication

**Tables:** [PostgreSQL_CL](../tables/postgresql-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuthenticationPostgreSQL](asimauthenticationpostgresql.md) | Authentication | [PostgreSQL_CL](../tables/postgresql-cl.md) | 0.1.4 |
| [vimAuthenticationPostgreSQL](vimauthenticationpostgresql.md) | Authentication | [PostgreSQL_CL](../tables/postgresql-cl.md) | 0.1.4 |

## Salesforce Service Cloud

**Schemas:** Authentication

**Tables:** [SalesforceServiceCloud_CL](../tables/salesforceservicecloud-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuthenticationSalesforceSC](asimauthenticationsalesforcesc.md) | Authentication | [SalesforceServiceCloud_CL](../tables/salesforceservicecloud-cl.md) | 0.1.0 |
| [vimAuthenticationSalesforceSC](vimauthenticationsalesforcesc.md) | Authentication | [SalesforceServiceCloud_CL](../tables/salesforceservicecloud-cl.md) | 0.1.1 |

## Security Events

**Schemas:** ProcessEvent, RegistryEvent

**Tables:** [SecurityEvent](../tables/securityevent.md), [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimProcessCreateMicrosoftSecurityEvents](asimprocesscreatemicrosoftsecurityevents.md) | ProcessEvent | [SecurityEvent](../tables/securityevent.md) | 0.1.1 |
| [ASimProcessCreateMicrosoftWindowsEvents](asimprocesscreatemicrosoftwindowsevents.md) | ProcessEvent | [WindowsEvent](../tables/windowsevent.md) | 0.3 |
| [ASimProcessTerminateMicrosoftSecurityEvents](asimprocessterminatemicrosoftsecurityevents.md) | ProcessEvent | [SecurityEvent](../tables/securityevent.md) | 0.2 |
| [ASimProcessTerminateMicrosoftWindowsEvents](asimprocessterminatemicrosoftwindowsevents.md) | ProcessEvent | [WindowsEvent](../tables/windowsevent.md) | 0.2 |
| [vimProcessCreateMicrosoftSecurityEvents](vimprocesscreatemicrosoftsecurityevents.md) | ProcessEvent |  | 0.2.0 |
| [vimProcessCreateMicrosoftWindowsEvents](vimprocesscreatemicrosoftwindowsevents.md) | ProcessEvent | [WindowsEvent](../tables/windowsevent.md) | 0.3 |
| [vimProcessTerminateMicrosoftSecurityEvents](vimprocessterminatemicrosoftsecurityevents.md) | ProcessEvent | [SecurityEvent](../tables/securityevent.md) | 0.3 |
| [vimProcessTerminateMicrosoftWindowsEvents](vimprocessterminatemicrosoftwindowsevents.md) | ProcessEvent | [WindowsEvent](../tables/windowsevent.md) | 0.3 |
| [ASimRegistryEventMicrosoftSecurityEvent](asimregistryeventmicrosoftsecurityevent.md) | RegistryEvent | [SecurityEvent](../tables/securityevent.md) | 0.3.1 |
| [ASimRegistryEventMicrosoftWindowsEvent](asimregistryeventmicrosoftwindowsevent.md) | RegistryEvent | [WindowsEvent](../tables/windowsevent.md) | 0.2.1 |
| [vimRegistryEventMicrosoftSecurityEvent](vimregistryeventmicrosoftsecurityevent.md) | RegistryEvent | [SecurityEvent](../tables/securityevent.md) | 0.3.1 |
| [vimRegistryEventMicrosoftWindowsEvent](vimregistryeventmicrosoftwindowsevent.md) | RegistryEvent | [WindowsEvent](../tables/windowsevent.md) | 0.3.1 |

## SentinelOne

**Schemas:** AlertEvent, AuditEvent, Authentication, Dns, FileEvent, NetworkSession, ProcessEvent, RegistryEvent, UserManagement

**Tables:** [Event](../tables/event.md), [Operation](../tables/operation.md), [SentinelOne_CL](../tables/sentinelone-cl.md), [event](../tables/event.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAlertEventSentinelOneSingularity](asimalerteventsentinelonesingularity.md) | AlertEvent | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| [vimAlertEventSentinelOneSingularity](vimalerteventsentinelonesingularity.md) | AlertEvent | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| [ASimAuditEventSentinelOne](asimauditeventsentinelone.md) | AuditEvent | [Event](../tables/event.md), [Operation](../tables/operation.md), [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| [vimAuditEventSentinelOne](vimauditeventsentinelone.md) | AuditEvent | [Event](../tables/event.md), [Operation](../tables/operation.md), [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| [ASimAuthenticationSentinelOne](asimauthenticationsentinelone.md) | Authentication | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.1 |
| [vimAuthenticationSentinelOne](vimauthenticationsentinelone.md) | Authentication | [SentinelOne_CL](../tables/sentinelone-cl.md), [event](../tables/event.md) | 0.1.1 |
| [ASimDnsSentinelOne](asimdnssentinelone.md) | Dns | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| [vimDnsSentinelOne](vimdnssentinelone.md) | Dns | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| [ASimFileEventSentinelOne](asimfileeventsentinelone.md) | FileEvent | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| [vimFileEventSentinelOne](vimfileeventsentinelone.md) | FileEvent | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.1 |
| [ASimNetworkSessionSentinelOne](asimnetworksessionsentinelone.md) | NetworkSession | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| [vimNetworkSessionSentinelOne](vimnetworksessionsentinelone.md) | NetworkSession | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| [ASimProcessCreateSentinelOne](asimprocesscreatesentinelone.md) | ProcessEvent | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| [vimProcessCreateSentinelOne](vimprocesscreatesentinelone.md) | ProcessEvent | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| [ASimRegistryEventSentinelOne](asimregistryeventsentinelone.md) | RegistryEvent | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.0 |
| [vimRegistryEventSentinelOne](vimregistryeventsentinelone.md) | RegistryEvent | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.1 |
| [ASimUserManagementSentinelOne](asimusermanagementsentinelone.md) | UserManagement | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.1 |
| [vimUserManagementSentinelOne](vimusermanagementsentinelone.md) | UserManagement | [SentinelOne_CL](../tables/sentinelone-cl.md) | 0.1.1 |

## SonicWall

**Schemas:** NetworkSession, WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimNetworkSessionSonicWallFirewall](asimnetworksessionsonicwallfirewall.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| [vimNetworkSessionSonicWallFirewall](vimnetworksessionsonicwallfirewall.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.0 |
| [ASimWebSessionSonicWallFirewall](asimwebsessionsonicwallfirewall.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.1 |
| [vimWebSessionSonicWallFirewall](vimwebsessionsonicwallfirewall.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.1.1 |

## Squid Proxy

**Schemas:** WebSession

**Tables:** [SquidProxy_CL](../tables/squidproxy-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimWebSessionSquidProxy](asimwebsessionsquidproxy.md) | WebSession | [SquidProxy_CL](../tables/squidproxy-cl.md) | 0.4.0 |
| [vimWebSessionSquidProxy](vimwebsessionsquidproxy.md) | WebSession | [SquidProxy_CL](../tables/squidproxy-cl.md) | 0.7.0 |

## su

**Schemas:** Authentication

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuthenticationSu](asimauthenticationsu.md) | Authentication | [Syslog](../tables/syslog.md) | 0.2.1 |
| [vimAuthenticationSu](vimauthenticationsu.md) | Authentication | [Syslog](../tables/syslog.md) | 0.2.2 |

## sudo

**Schemas:** Authentication

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuthenticationSudo](asimauthenticationsudo.md) | Authentication | [Syslog](../tables/syslog.md) | 0.1.2 |
| [vimAuthenticationSudo](vimauthenticationsudo.md) | Authentication | [Syslog](../tables/syslog.md) | 0.1.1 |

## Sysmon

**Schemas:** ProcessEvent

**Tables:** [Event](../tables/event.md), [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimProcessEventCreateMicrosoftSysmon](asimprocesseventcreatemicrosoftsysmon.md) | ProcessEvent | [Event](../tables/event.md) | 0.4.1 |
| [ASimProcessEventCreateMicrosoftSysmonWindowsEvent](asimprocesseventcreatemicrosoftsysmonwindowsevent.md) | ProcessEvent | [WindowsEvent](../tables/windowsevent.md) | 0.4.1 |
| [vimProcessEventCreateMicrosoftSysmon](vimprocesseventcreatemicrosoftsysmon.md) | ProcessEvent | [Event](../tables/event.md) | 0.5.1 |
| [vimProcessEventCreateMicrosoftSysmonWindowsEvent](vimprocesseventcreatemicrosoftsysmonwindowsevent.md) | ProcessEvent | [WindowsEvent](../tables/windowsevent.md) | 0.5.1 |

## Sysmon for Linux

**Schemas:** NetworkSession, ProcessEvent

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimNetworkSessionLinuxSysmon](asimnetworksessionlinuxsysmon.md) | NetworkSession | [Syslog](../tables/syslog.md) | 0.3.1 |
| [vimNetworkSessionLinuxSysmon](vimnetworksessionlinuxsysmon.md) | NetworkSession | [Syslog](../tables/syslog.md) | 0.4 |
| [ASimProcessCreateLinuxSysmon](asimprocesscreatelinuxsysmon.md) | ProcessEvent | [Syslog](../tables/syslog.md) | 0.2.1 |
| [ASimProcessTerminateLinuxSysmon](asimprocessterminatelinuxsysmon.md) | ProcessEvent | [Syslog](../tables/syslog.md) | 0.1.1 |
| [vimProcessCreateLinuxSysmon](vimprocesscreatelinuxsysmon.md) | ProcessEvent | [Syslog](../tables/syslog.md) | 0.3.0 |
| [vimProcessTerminateLinuxSysmon](vimprocessterminatelinuxsysmon.md) | ProcessEvent | [Syslog](../tables/syslog.md) | 0.2.0 |

## Trend Micro Vision One

**Schemas:** ProcessEvent, RegistryEvent

**Tables:** [TrendMicro_XDR_OAT_CL](../tables/trendmicro-xdr-oat-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimProcessCreateTrendMicroVisionOne](asimprocesscreatetrendmicrovisionone.md) | ProcessEvent | [TrendMicro_XDR_OAT_CL](../tables/trendmicro-xdr-oat-cl.md) | 0.1.0 |
| [vimProcessCreateTrendMicroVisionOne](vimprocesscreatetrendmicrovisionone.md) | ProcessEvent | [TrendMicro_XDR_OAT_CL](../tables/trendmicro-xdr-oat-cl.md) | 0.1.0 |
| [ASimRegistryEventTrendMicroVisionOne](asimregistryeventtrendmicrovisionone.md) | RegistryEvent | [TrendMicro_XDR_OAT_CL](../tables/trendmicro-xdr-oat-cl.md) | 0.1.0 |
| [vimRegistryEventTrendMicroVisionOne](vimregistryeventtrendmicrovisionone.md) | RegistryEvent | [TrendMicro_XDR_OAT_CL](../tables/trendmicro-xdr-oat-cl.md) | 0.1.0 |

## Vectra

**Schemas:** AuditEvent, Authentication

**Tables:** [Audits_Data_CL](../tables/audits-data-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuditEventVectraXDRAudit](asimauditeventvectraxdraudit.md) | AuditEvent | [Audits_Data_CL](../tables/audits-data-cl.md) | 0.1.1 |
| [vimAuditEventVectraXDRAudit](vimauditeventvectraxdraudit.md) | AuditEvent | [Audits_Data_CL](../tables/audits-data-cl.md) | 0.1.1 |
| [ASimAuthenticationVectraXDRAudit](asimauthenticationvectraxdraudit.md) | Authentication | [Audits_Data_CL](../tables/audits-data-cl.md) | 0.1 |
| [vimAuthenticationVectraXDRAudit](vimauthenticationvectraxdraudit.md) | Authentication | [Audits_Data_CL](../tables/audits-data-cl.md) | 0.1.1 |

## Vectra AI Streams

**Schemas:** Dns, NetworkSession, WebSession

**Tables:** [VectraStream_CL](../tables/vectrastream-cl.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimDnsVectraAI](asimdnsvectraai.md) | Dns | [VectraStream_CL](../tables/vectrastream-cl.md) | 0.1.1 |
| [vimDnsVectraAI](vimdnsvectraai.md) | Dns | [VectraStream_CL](../tables/vectrastream-cl.md) | 0.1.1 |
| [ASimNetworkSessionVectraAI](asimnetworksessionvectraai.md) | NetworkSession | [VectraStream_CL](../tables/vectrastream-cl.md) | 0.2 |
| [vimNetworkSessionVectraAI](vimnetworksessionvectraai.md) | NetworkSession | [VectraStream_CL](../tables/vectrastream-cl.md) | 0.2 |
| [ASimWebSessionVectraAI](asimwebsessionvectraai.md) | WebSession | [VectraStream_CL](../tables/vectrastream-cl.md) | 0.2 |
| [vimWebSessionVectraAI](vimwebsessionvectraai.md) | WebSession | [VectraStream_CL](../tables/vectrastream-cl.md) | 0.2 |

## VMConnection

**Schemas:** NetworkSession

**Tables:** [VMConnection](../tables/vmconnection.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimNetworkSessionVMConnection](asimnetworksessionvmconnection.md) | NetworkSession | [VMConnection](../tables/vmconnection.md) | 0.2.1 |
| [vimNetworkSessionVMConnection](vimnetworksessionvmconnection.md) | NetworkSession | [VMConnection](../tables/vmconnection.md) | 0.2.2 |

## VMware Carbon Black Cloud

**Schemas:** AuditEvent, Authentication, FileEvent, NetworkSession, ProcessEvent, RegistryEvent

**Tables:** [CarbonBlackAuditLogs_CL](../tables/carbonblackauditlogs-cl.md), [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md), [CarbonBlackNotifications_CL](../tables/carbonblacknotifications-cl.md), [Operation](../tables/operation.md), [alert](../tables/alert.md), [update](../tables/update.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuditEventVMwareCarbonBlackCloud](asimauditeventvmwarecarbonblackcloud.md) | AuditEvent | [CarbonBlackAuditLogs_CL](../tables/carbonblackauditlogs-cl.md), [alert](../tables/alert.md), [update](../tables/update.md) | 0.2.0 |
| [vimAuditEventVMwareCarbonBlackCloud](vimauditeventvmwarecarbonblackcloud.md) | AuditEvent | [CarbonBlackAuditLogs_CL](../tables/carbonblackauditlogs-cl.md), [Operation](../tables/operation.md), [alert](../tables/alert.md), [update](../tables/update.md) | 0.2.0 |
| [ASimAuthenticationVMwareCarbonBlackCloud](asimauthenticationvmwarecarbonblackcloud.md) | Authentication | [CarbonBlackAuditLogs_CL](../tables/carbonblackauditlogs-cl.md) | 0.1.0 |
| [vimAuthenticationVMwareCarbonBlackCloud](vimauthenticationvmwarecarbonblackcloud.md) | Authentication | [CarbonBlackAuditLogs_CL](../tables/carbonblackauditlogs-cl.md) | 0.1.1 |
| [ASimFileEventVMwareCarbonBlackCloud](asimfileeventvmwarecarbonblackcloud.md) | FileEvent | [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md) | 0.1.1 |
| [vimFileEventVMwareCarbonBlackCloud](vimfileeventvmwarecarbonblackcloud.md) | FileEvent | [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md) | 0.1.1 |
| [ASimNetworkSessionVMwareCarbonBlackCloud](asimnetworksessionvmwarecarbonblackcloud.md) | NetworkSession | [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md), [CarbonBlackNotifications_CL](../tables/carbonblacknotifications-cl.md) | 0.1.1 |
| [vimNetworkSessionVMwareCarbonBlackCloud](vimnetworksessionvmwarecarbonblackcloud.md) | NetworkSession | [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md), [CarbonBlackNotifications_CL](../tables/carbonblacknotifications-cl.md) | 0.1.1 |
| [ASimProcessCreateVMwareCarbonBlackCloud](asimprocesscreatevmwarecarbonblackcloud.md) | ProcessEvent | [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md), [CarbonBlackNotifications_CL](../tables/carbonblacknotifications-cl.md) | 0.1.1 |
| [ASimProcessTerminateVMwareCarbonBlackCloud](asimprocessterminatevmwarecarbonblackcloud.md) | ProcessEvent | [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md) | 0.1.0 |
| [vimProcessCreateVMwareCarbonBlackCloud](vimprocesscreatevmwarecarbonblackcloud.md) | ProcessEvent | [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md), [CarbonBlackNotifications_CL](../tables/carbonblacknotifications-cl.md) | 0.1.1 |
| [vimProcessTerminateVMwareCarbonBlackCloud](vimprocessterminatevmwarecarbonblackcloud.md) | ProcessEvent | [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md) | 0.1.0 |
| [ASimRegistryEventVMwareCarbonBlackCloud](asimregistryeventvmwarecarbonblackcloud.md) | RegistryEvent | [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md) | 0.1.1 |
| [vimRegistryEventVMwareCarbonBlackCloud](vimregistryeventvmwarecarbonblackcloud.md) | RegistryEvent | [CarbonBlackEvents_CL](../tables/carbonblackevents-cl.md) | 0.1.1 |

## WatchGuard Fireware OS

**Schemas:** NetworkSession

**Tables:** [Syslog](../tables/syslog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimNetworkSessionWatchGuardFirewareOS](asimnetworksessionwatchguardfirewareos.md) | NetworkSession | [Syslog](../tables/syslog.md) | 0.1.4 |
| [vimNetworkSessionWatchGuardFirewareOS](vimnetworksessionwatchguardfirewareos.md) | NetworkSession | [Syslog](../tables/syslog.md) | 0.1.5 |

## Windows Firewall

**Schemas:** NetworkSession

**Tables:** [SecurityEvent](../tables/securityevent.md), [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimNetworkSessionMicrosoftSecurityEventFirewall](asimnetworksessionmicrosoftsecurityeventfirewall.md) | NetworkSession | [SecurityEvent](../tables/securityevent.md) | 0.5.0 |
| [ASimNetworkSessionMicrosoftWindowsEventFirewall](asimnetworksessionmicrosoftwindowseventfirewall.md) | NetworkSession | [WindowsEvent](../tables/windowsevent.md) | 0.5.0 |
| [vimNetworkSessionMicrosoftSecurityEventFirewall](vimnetworksessionmicrosoftsecurityeventfirewall.md) | NetworkSession | [SecurityEvent](../tables/securityevent.md) | 0.5.0 |
| [vimNetworkSessionMicrosoftWindowsEventFirewall](vimnetworksessionmicrosoftwindowseventfirewall.md) | NetworkSession | [WindowsEvent](../tables/windowsevent.md) | 0.5.0 |

## Windows Security Events

**Schemas:** Authentication

**Tables:** [SecurityEvent](../tables/securityevent.md), [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimAuthenticationMicrosoftWindowsEvent](asimauthenticationmicrosoftwindowsevent.md) | Authentication | [SecurityEvent](../tables/securityevent.md), [WindowsEvent](../tables/windowsevent.md) | 0.2.1 |
| [vimAuthenticationMicrosoftWindowsEvent](vimauthenticationmicrosoftwindowsevent.md) | Authentication | [SecurityEvent](../tables/securityevent.md), [WindowsEvent](../tables/windowsevent.md) | 0.3.1 |

## Windows Sysmon

**Schemas:** FileEvent, NetworkSession

**Tables:** [Event](../tables/event.md), [WindowsEvent](../tables/windowsevent.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimFileEventMicrosoftSysmon](asimfileeventmicrosoftsysmon.md) | FileEvent | [Event](../tables/event.md) | 0.5.1 |
| [ASimFileEventMicrosoftSysmonWindowsEvent](asimfileeventmicrosoftsysmonwindowsevent.md) | FileEvent | [WindowsEvent](../tables/windowsevent.md) | 0.4.1 |
| [vimFileEventMicrosoftSysmon](vimfileeventmicrosoftsysmon.md) | FileEvent | [Event](../tables/event.md) | 0.5.1 |
| [vimFileEventMicrosoftSysmonWindowsEvent](vimfileeventmicrosoftsysmonwindowsevent.md) | FileEvent | [WindowsEvent](../tables/windowsevent.md) | 0.5.1 |
| [ASimNetworkSessionMicrosoftSysmon](asimnetworksessionmicrosoftsysmon.md) | NetworkSession | [Event](../tables/event.md) | 0.2.0 |
| [ASimNetworkSessionMicrosoftSysmonWindowsEvent](asimnetworksessionmicrosoftsysmonwindowsevent.md) | NetworkSession | [WindowsEvent](../tables/windowsevent.md) | 0.2.1 |
| [vimNetworkSessionMicrosoftSysmon](vimnetworksessionmicrosoftsysmon.md) | NetworkSession | [Event](../tables/event.md) | 0.1.1 |
| [vimNetworkSessionMicrosoftSysmonWindowsEvent](vimnetworksessionmicrosoftsysmonwindowsevent.md) | NetworkSession | [WindowsEvent](../tables/windowsevent.md) | 0.1.1 |

## Zscaler ZIA

**Schemas:** WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimWebSessionZscalerZIA](asimwebsessionzscalerzia.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.4.1 |

## Zscaler ZIA DNS

**Schemas:** Dns

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimDnsZscalerZIA](asimdnszscalerzia.md) | Dns | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.6 |
| [vimDnsZscalerZIA](vimdnszscalerzia.md) | Dns | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.4 |

## Zscaler ZIA Firewall

**Schemas:** NetworkSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [ASimNetworkSessionZscalerZIA](asimnetworksessionzscalerzia.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.4 |
| [vimNetworkSessionZscalerZIA](vimnetworksessionzscalerzia.md) | NetworkSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.4 |

## Zscaler ZIA Proxy

**Schemas:** WebSession

**Tables:** [CommonSecurityLog](../tables/commonsecuritylog.md)

### Parsers

| Parser | Schema | Tables | Version |
|:-------|:-------|:-------|:--------|
| [vimWebSessionZscalerZIA](vimwebsessionzscalerzia.md) | WebSession | [CommonSecurityLog](../tables/commonsecuritylog.md) | 0.6.1 |

---

**Browse by:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md) (this page)

