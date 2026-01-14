# <img src="../images/asim-badge.png" alt="ASIM" height="32"> ASIM Parsers Index

The Advanced Security Information Model (ASIM) provides a layer of abstraction between the various data sources and the user. ASIM parsers normalize data from different sources to a common schema, enabling queries that work across multiple data sources.

📚 **Learn more:** [ASIM-based domain solutions for Microsoft Sentinel](https://learn.microsoft.com/azure/sentinel/domain-based-essential-solutions)

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

---

## Summary

| Metric | Count |
|:-------|------:|
| **Schemas** | 11 |
| **Source Parser Pairs*** | 82 |
| **Union Parser Pairs*** | 13 |
| **Empty Parsers** | 0 |

\* *Each parser pair consists of an ASim filtering parser and a vim parameter-based parser.*

## Schemas

- [AlertEvent](#alertevent) (1 source pairs, 1 union pair)
- [AuditEvent](#auditevent) (8 source pairs, 1 union pair)
- [Authentication](#authentication) (14 source pairs, 1 union pair)
- [DhcpEvent](#dhcpevent) (1 source pairs, 1 union pair)
- [Dns](#dns) (7 source pairs, 1 union pair)
- [FileEvent](#fileevent) (8 source pairs, 1 union pair)
- [NetworkSession](#networksession) (18 source pairs, 1 union pair)
- [ProcessEvent](#processevent) (8 source pairs, 3 union pairs)
- [RegistryEvent](#registryevent) (4 source pairs, 1 union pair)
- [UserManagement](#usermanagement) (3 source pairs, 1 union pair)
- [WebSession](#websession) (8 source pairs, 1 union pair)

## AlertEvent

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version | Description |
|:-------|:--------------|:--------|:------------|
| [ASimAlertEvent](asimalertevent.md) | `_ASim_AlertEvent` | 0.1.0 | This ASIM parser supports normalizing Alert logs from all supported sources t... |
| [imAlertEvent](imalertevent.md) | `_Im_AlertEvent` | 0.1.0 | This ASIM parser supports filtering and normalizing Alert logs from all suppo... |

### Supported Products

[Microsoft Defender XDR](asim-products-index.md#microsoft-defender-xdr), [SentinelOne](asim-products-index.md#sentinelone)

### Source Parsers

| Parser | Product | Tables | Version |
|:-------|:--------|:-------|:--------|
| [ASimAlertEventMicrosoftDefenderXDR](asimalerteventmicrosoftdefenderxdr.md) | Microsoft Defender XDR | 1 | 0.1.0 |
| [ASimAlertEventSentinelOneSingularity](asimalerteventsentinelonesingularity.md) | SentinelOne | 1 | 0.1.0 |

## AuditEvent

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version | Description |
|:-------|:--------------|:--------|:------------|
| [ASimAuditEvent](asimauditevent.md) | `_ASim_AuditEvent` | 0.1.3 | This ASIM parser supports normalizing audit events from all supported sources... |
| [imAuditEvent](imauditevent.md) | `_Im_AuditEvent` | 0.1.4 | This ASIM parser supports normalizing audit events from all supported sources... |

### Supported Products

[Barracuda WAF](asim-products-index.md#barracuda-waf), [Cisco ISE](asim-products-index.md#cisco-ise), [Cisco Meraki](asim-products-index.md#cisco-meraki), [CrowdStrike Falcon Endpoint Protection](asim-products-index.md#crowdstrike-falcon-endpoint-protection), [Illumio Core](asim-products-index.md#illumio-core), [Infoblox BloxOne](asim-products-index.md#infoblox-bloxone), [Microsoft Azure](asim-products-index.md#microsoft-azure), [Microsoft SharePoint](asim-products-index.md#microsoft-sharepoint), [Microsoft Windows](asim-products-index.md#microsoft-windows), [Native](asim-products-index.md#native), [SentinelOne](asim-products-index.md#sentinelone), [Vectra](asim-products-index.md#vectra), [VMware Carbon Black Cloud](asim-products-index.md#vmware-carbon-black-cloud)

### Source Parsers

| Parser | Product | Tables | Version |
|:-------|:--------|:-------|:--------|
| [ASimAuditEventAzureActivity](asimauditeventazureactivity.md) | Microsoft Azure | 1 | 0.2 |
| [ASimAuditEventBarracudaCEF](asimauditeventbarracudacef.md) | Barracuda WAF | 1 | 0.2.1 |
| [ASimAuditEventBarracudaWAF](asimauditeventbarracudawaf.md) | Barracuda WAF | 1 | 0.2.1 |
| [ASimAuditEventCiscoISE](asimauditeventciscoise.md) | Cisco ISE | 1 | 0.1 |
| [ASimAuditEventCiscoMeraki](asimauditeventciscomeraki.md) | Cisco Meraki | 2 | 0.2.1 |
| [ASimAuditEventCiscoMerakiSyslog](asimauditeventciscomerakisyslog.md) | Cisco Meraki | 2 | 0.2.1 |
| [ASimAuditEventCrowdStrikeFalconHost](asimauditeventcrowdstrikefalconhost.md) | CrowdStrike Falcon Endpoint Protection | 1 | 0.1.0 |
| [ASimAuditEventIllumioSaaSCore](asimauditeventillumiosaascore.md) | Illumio Core | 1 | 0.2.1 |
| [ASimAuditEventInfobloxBloxOne](asimauditeventinfobloxbloxone.md) | Infoblox BloxOne | 1 | 0.1.0 |
| [ASimAuditEventMicrosoftEvent](asimauditeventmicrosoftevent.md) | Microsoft Windows | 3 | 0.2.1 |
| [ASimAuditEventMicrosoftExchangeAdmin365](asimauditeventmicrosoftexchangeadmin365.md) | Microsoft SharePoint | 1 | 0.2 |
| [ASimAuditEventMicrosoftSecurityEvents](asimauditeventmicrosoftsecurityevents.md) | Microsoft Windows | 4 | 0.2.1 |
| [ASimAuditEventMicrosoftWindowsEvents](asimauditeventmicrosoftwindowsevents.md) | Microsoft Windows | 4 | 0.2.1 |
| [ASimAuditEventNative](asimauditeventnative.md) | Native | 1 | 0.1.0 |
| [ASimAuditEventSentinelOne](asimauditeventsentinelone.md) | SentinelOne | 3 | 0.1.0 |
| [ASimAuditEventVMwareCarbonBlackCloud](asimauditeventvmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | 3 | 0.2.0 |
| [ASimAuditEventVectraXDRAudit](asimauditeventvectraxdraudit.md) | Vectra | 1 | 0.1.1 |

## Authentication

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version | Description |
|:-------|:--------------|:--------|:------------|
| [ASimAuthentication](asimauthentication.md) | `_ASim_Authentication` | 0.2.6 | This ASIM parser supports normalizing Authentication logs from all supported ... |
| [imAuthentication](imauthentication.md) | `_Im_Authentication` | 0.3.3 | This ASIM parser supports filtering and normalizing Authentication logs from ... |

### Supported Products

[AWS](asim-products-index.md#aws), [Barracuda WAF](asim-products-index.md#barracuda-waf), [Cisco Adaptive Security Appliance (ASA)](asim-products-index.md#cisco-adaptive-security-appliance-asa), [Cisco ISE](asim-products-index.md#cisco-ise), [Cisco Meraki](asim-products-index.md#cisco-meraki), [CrowdStrike Falcon Endpoint Protection](asim-products-index.md#crowdstrike-falcon-endpoint-protection), [Google Workspace](asim-products-index.md#google-workspace), [Illumio](asim-products-index.md#illumio), [M365 Defender for EndPoint](asim-products-index.md#m365-defender-for-endpoint), [Microsoft Defender for IoT](asim-products-index.md#microsoft-defender-for-iot), [Microsoft Entra ID](asim-products-index.md#microsoft-entra-id), [Native](asim-products-index.md#native), [Okta](asim-products-index.md#okta), [OpenSSH](asim-products-index.md#openssh), [Palo Alto Cortex Data Lake](asim-products-index.md#palo-alto-cortex-data-lake), [PostgreSQL](asim-products-index.md#postgresql), [Salesforce Service Cloud](asim-products-index.md#salesforce-service-cloud), [SentinelOne](asim-products-index.md#sentinelone), [su](asim-products-index.md#su), [sudo](asim-products-index.md#sudo), [Vectra](asim-products-index.md#vectra), [VMware Carbon Black Cloud](asim-products-index.md#vmware-carbon-black-cloud), [Windows Security Events](asim-products-index.md#windows-security-events)

### Source Parsers

| Parser | Product | Tables | Version |
|:-------|:--------|:-------|:--------|
| [ASimAuthenticationAADManagedIdentitySignInLogs](asimauthenticationaadmanagedidentitysigninlogs.md) | Microsoft Entra ID | 1 | 0.2.2 |
| [ASimAuthenticationAADNonInteractiveUserSignInLogs](asimauthenticationaadnoninteractiveusersigninlogs.md) | Microsoft Entra ID | 1 | 0.2.2 |
| [ASimAuthenticationAADServicePrincipalSignInLogs](asimauthenticationaadserviceprincipalsigninlogs.md) | Microsoft Entra ID | 1 | 0.2.2 |
| [ASimAuthenticationAWSCloudTrail](asimauthenticationawscloudtrail.md) | AWS | 1 | 0.2.1 |
| [ASimAuthenticationBarracudaWAF](asimauthenticationbarracudawaf.md) | Barracuda WAF | 2 | 0.1 |
| [ASimAuthenticationCiscoASA](asimauthenticationciscoasa.md) | Cisco Adaptive Security Appliance (ASA) | 2 | 0.1.1 |
| [ASimAuthenticationCiscoISE](asimauthenticationciscoise.md) | Cisco ISE | 1 | 0.1.0 |
| [ASimAuthenticationCiscoMeraki](asimauthenticationciscomeraki.md) | Cisco Meraki | 1 | 0.2.1 |
| [ASimAuthenticationCiscoMerakiSyslog](asimauthenticationciscomerakisyslog.md) | Cisco Meraki | 1 | 0.2.1 |
| [ASimAuthenticationCrowdStrikeFalconHost](asimauthenticationcrowdstrikefalconhost.md) | CrowdStrike Falcon Endpoint Protection | 1 | 0.1.0 |
| [ASimAuthenticationGoogleWorkspace](asimauthenticationgoogleworkspace.md) | Google Workspace | 1 | 0.1.0 |
| [ASimAuthenticationIllumioSaaSCore](asimauthenticationillumiosaascore.md) | Illumio | 1 | 0.3.0 |
| [ASimAuthenticationM365Defender](asimauthenticationm365defender.md) | M365 Defender for EndPoint | 1 | 0.1.3 |
| [ASimAuthenticationMD4IoT](asimauthenticationmd4iot.md) | Microsoft Defender for IoT | 1 | 0.1.2 |
| [ASimAuthenticationMicrosoftWindowsEvent](asimauthenticationmicrosoftwindowsevent.md) | Windows Security Events | 2 | 0.2.1 |
| [ASimAuthenticationNative](asimauthenticationnative.md) | Native | 1 | 0.1.0 |
| [ASimAuthenticationOktaSSO](asimauthenticationoktasso.md) | Okta | 1 | 0.3.0 |
| [ASimAuthenticationOktaV2](asimauthenticationoktav2.md) | Okta | 1 | 0.3.1 |
| [ASimAuthenticationPaloAltoCortexDataLake](asimauthenticationpaloaltocortexdatalake.md) | Palo Alto Cortex Data Lake | 1 | 0.1.0 |
| [ASimAuthenticationPostgreSQL](asimauthenticationpostgresql.md) | PostgreSQL | 1 | 0.1.4 |
| [ASimAuthenticationSalesforceSC](asimauthenticationsalesforcesc.md) | Salesforce Service Cloud | 1 | 0.1.0 |
| [ASimAuthenticationSentinelOne](asimauthenticationsentinelone.md) | SentinelOne | 1 | 0.1.1 |
| [ASimAuthenticationSigninLogs](asimauthenticationsigninlogs.md) | Microsoft Entra ID | 1 | 0.3.2 |
| [ASimAuthenticationSshd](asimauthenticationsshd.md) | OpenSSH | 1 | 0.2.4 |
| [ASimAuthenticationSu](asimauthenticationsu.md) | su | 1 | 0.2.1 |
| [ASimAuthenticationSudo](asimauthenticationsudo.md) | sudo | 1 | 0.1.2 |
| [ASimAuthenticationVMwareCarbonBlackCloud](asimauthenticationvmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | 1 | 0.1.0 |
| [ASimAuthenticationVectraXDRAudit](asimauthenticationvectraxdraudit.md) | Vectra | 1 | 0.1 |

## DhcpEvent

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version | Description |
|:-------|:--------------|:--------|:------------|
| [ASimDhcpEvent](asimdhcpevent.md) | `_ASim_DhcpEvent` | 0.1.0 | This ASIM parser supports normalizing Dhcp event logs from all supported sour... |
| [imDhcpEvent](imdhcpevent.md) | `_Im_DhcpEvent` | 0.1.0 | This ASIM parser supports filtering and normalizing Dhcp event logs from all ... |

### Supported Products

[Infoblox BloxOne](asim-products-index.md#infoblox-bloxone), [Native](asim-products-index.md#native)

### Source Parsers

| Parser | Product | Tables | Version |
|:-------|:--------|:-------|:--------|
| [ASimDhcpEventInfobloxBloxOne](asimdhcpeventinfobloxbloxone.md) | Infoblox BloxOne | 1 | 0.1.0 |
| [ASimDhcpEventNative](asimdhcpeventnative.md) | Native | 1 | 0.1.0 |

## Dns

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version | Description |
|:-------|:--------------|:--------|:------------|
| [ASimDns](asimdns.md) | `_ASim_Dns` | 0.5.2 | This ASIM parser supports normalizing DNS activity logs from all supported so... |
| [imDns](imdns.md) | `_Im_Dns` | 0.5.2 | This ASIM parser supports filtering and normalizing DNS activity logs from al... |

### Supported Products

[Azure Firewall](asim-products-index.md#azure-firewall), [Cisco Umbrella](asim-products-index.md#cisco-umbrella), [Corelight Zeek](asim-products-index.md#corelight-zeek), [Fortinet FortiGate](asim-products-index.md#fortinet-fortigate), [GCP Cloud DNS](asim-products-index.md#gcp-cloud-dns), [Infoblox BloxOne](asim-products-index.md#infoblox-bloxone), [Infoblox NIOS](asim-products-index.md#infoblox-nios), [Microsoft Windows Events Sysmon](asim-products-index.md#microsoft-windows-events-sysmon), [MS DNS Events](asim-products-index.md#ms-dns-events), [Native](asim-products-index.md#native), [SentinelOne](asim-products-index.md#sentinelone), [Vectra AI Streams](asim-products-index.md#vectra-ai-streams), [Zscaler ZIA DNS](asim-products-index.md#zscaler-zia-dns)

### Source Parsers

| Parser | Product | Tables | Version |
|:-------|:--------|:-------|:--------|
| [ASimDnsAzureFirewall](asimdnsazurefirewall.md) | Azure Firewall | 2 | 0.4.0 |
| [ASimDnsCiscoUmbrella](asimdnsciscoumbrella.md) | Cisco Umbrella | 1 | 0.3 |
| [ASimDnsCorelightZeek](asimdnscorelightzeek.md) | Corelight Zeek | 1 | 0.5 |
| [ASimDnsFortinetFortiGate](asimdnsfortinetfortigate.md) | Fortinet FortiGate | 1 | 0.1.2 |
| [ASimDnsGcp](asimdnsgcp.md) | GCP Cloud DNS | 1 | 0.4 |
| [ASimDnsInfobloxBloxOne](asimdnsinfobloxbloxone.md) | Infoblox BloxOne | 1 | 0.1.0 |
| [ASimDnsInfobloxNIOS](asimdnsinfobloxnios.md) | Infoblox NIOS | 1 | 0.6.1 |
| [ASimDnsMicrosoftNXlog](asimdnsmicrosoftnxlog.md) | MS DNS Events | 1 | 0.5.0 |
| [ASimDnsMicrosoftOMS](asimdnsmicrosoftoms.md) | MS DNS Events | 1 | 0.4 |
| [ASimDnsMicrosoftSysmon](asimdnsmicrosoftsysmon.md) | Microsoft Windows Events Sysmon | 1 | 0.5.1 |
| [ASimDnsMicrosoftSysmonWindowsEvent](asimdnsmicrosoftsysmonwindowsevent.md) | Microsoft Windows Events Sysmon | 1 | 0.5.1 |
| [ASimDnsNative](asimdnsnative.md) | Native | 1 | 0.6.1 |
| [ASimDnsSentinelOne](asimdnssentinelone.md) | SentinelOne | 1 | 0.1.0 |
| [ASimDnsVectraAI](asimdnsvectraai.md) | Vectra AI Streams | 1 | 0.1.1 |
| [ASimDnsZscalerZIA](asimdnszscalerzia.md) | Zscaler ZIA DNS | 1 | 0.6 |

## FileEvent

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version | Description |
|:-------|:--------------|:--------|:------------|
| [ASimFileEvent](asimfileevent.md) | `_ASim_FileEvent` | 0.1.3 | This ASIM parser supports normalizing File activity logs from all supported s... |
| [imFileEvent](imfileevent.md) | `_Im_FileEvent` | 0.2.1 | This ASIM parser supports normalizing File activity logs from all supported s... |

### Supported Products

[Google Workspace](asim-products-index.md#google-workspace), [Microsoft 365 Defender for EndPoint](asim-products-index.md#microsoft-365-defender-for-endpoint), [Microsoft Azure Blob Storage](asim-products-index.md#microsoft-azure-blob-storage), [Microsoft Azure File Storage](asim-products-index.md#microsoft-azure-file-storage), [Microsoft Azure Queue Storage](asim-products-index.md#microsoft-azure-queue-storage), [Microsoft Azure Table Storage](asim-products-index.md#microsoft-azure-table-storage), [Microsoft SharePoint](asim-products-index.md#microsoft-sharepoint), [Microsoft Sysmon for Linux](asim-products-index.md#microsoft-sysmon-for-linux), [Microsoft Windows Events](asim-products-index.md#microsoft-windows-events), [Native](asim-products-index.md#native), [SentinelOne](asim-products-index.md#sentinelone), [VMware Carbon Black Cloud](asim-products-index.md#vmware-carbon-black-cloud), [Windows Sysmon](asim-products-index.md#windows-sysmon)

### Source Parsers

| Parser | Product | Tables | Version |
|:-------|:--------|:-------|:--------|
| [ASimFileEventAzureBlobStorage](asimfileeventazureblobstorage.md) | Microsoft Azure Blob Storage | 1 | 0.1.1 |
| [ASimFileEventAzureFileStorage](asimfileeventazurefilestorage.md) | Microsoft Azure File Storage | 1 | 0.1.1 |
| [ASimFileEventAzureQueueStorage](asimfileeventazurequeuestorage.md) | Microsoft Azure Queue Storage | 1 | 0.1.1 |
| [ASimFileEventAzureTableStorage](asimfileeventazuretablestorage.md) | Microsoft Azure Table Storage | 1 | 0.1.1 |
| [ASimFileEventGoogleWorkspace](asimfileeventgoogleworkspace.md) | Google Workspace | 1 | 0.1.0 |
| [ASimFileEventLinuxSysmonFileCreated](asimfileeventlinuxsysmonfilecreated.md) | Microsoft Sysmon for Linux | 1 | 0.2.1 |
| [ASimFileEventLinuxSysmonFileDeleted](asimfileeventlinuxsysmonfiledeleted.md) | Microsoft Sysmon for Linux | 1 | 0.2.1 |
| [ASimFileEventMicrosoft365D](asimfileeventmicrosoft365d.md) | Microsoft 365 Defender for EndPoint | 1 | 0.2.1 |
| [ASimFileEventMicrosoftSecurityEvents](asimfileeventmicrosoftsecurityevents.md) | Microsoft Windows Events | 1 | 0.2.0 |
| [ASimFileEventMicrosoftSharePoint](asimfileeventmicrosoftsharepoint.md) | Microsoft SharePoint | 2 | 0.3.1 |
| [ASimFileEventMicrosoftSysmon](asimfileeventmicrosoftsysmon.md) | Windows Sysmon | 1 | 0.5.1 |
| [ASimFileEventMicrosoftSysmonWindowsEvent](asimfileeventmicrosoftsysmonwindowsevent.md) | Windows Sysmon | 1 | 0.4.1 |
| [ASimFileEventMicrosoftWindowsEvents](asimfileeventmicrosoftwindowsevents.md) | Microsoft Windows Events | 1 | 0.2.0 |
| [ASimFileEventNative](asimfileeventnative.md) | Native | 1 | 0.1.1 |
| [ASimFileEventSentinelOne](asimfileeventsentinelone.md) | SentinelOne | 1 | 0.1.0 |
| [ASimFileEventVMwareCarbonBlackCloud](asimfileeventvmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | 1 | 0.1.1 |

## NetworkSession

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version | Description |
|:-------|:--------------|:--------|:------------|
| [ASimNetworkSession](asimnetworksession.md) | `_ASim_NetworkSession` | 0.7.1 | This ASIM parser supports normalizing Network Session logs from all supported... |
| [imNetworkSession](imnetworksession.md) | `_Im_NetworkSession` | 0.6.2 | This ASIM parser supports filtering and normalizing Network Session logs from... |

### Supported Products

[AppGate SDP](asim-products-index.md#appgate-sdp), [AWS VPC](asim-products-index.md#aws-vpc), [Azure Firewall](asim-products-index.md#azure-firewall), [Azure NSG flows](asim-products-index.md#azure-nsg-flows), [Azure NTANetAnalytics](asim-products-index.md#azure-ntanetanalytics), [Barracuda WAF](asim-products-index.md#barracuda-waf), [CheckPointFirewall](asim-products-index.md#checkpointfirewall), [Cisco Firepower](asim-products-index.md#cisco-firepower), [Cisco ISE](asim-products-index.md#cisco-ise), [Cisco Meraki](asim-products-index.md#cisco-meraki), [CiscoASA](asim-products-index.md#ciscoasa), [Corelight Zeek](asim-products-index.md#corelight-zeek), [CrowdStrike Falcon Endpoint Protection](asim-products-index.md#crowdstrike-falcon-endpoint-protection), [ForcePointFirewall](asim-products-index.md#forcepointfirewall), [Fortinet FortiGate](asim-products-index.md#fortinet-fortigate), [Illumio SaaS Core](asim-products-index.md#illumio-saas-core), [M365 Defender for Endpoint](asim-products-index.md#m365-defender-for-endpoint), [Microsoft Defender for IoT](asim-products-index.md#microsoft-defender-for-iot), [Native](asim-products-index.md#native), [Palo Alto Cortex Data Lake](asim-products-index.md#palo-alto-cortex-data-lake), [Palo Alto PanOS](asim-products-index.md#palo-alto-panos), [SentinelOne](asim-products-index.md#sentinelone), [SonicWall](asim-products-index.md#sonicwall), [Sysmon for Linux](asim-products-index.md#sysmon-for-linux), [Vectra AI Streams](asim-products-index.md#vectra-ai-streams), [VMConnection](asim-products-index.md#vmconnection), [VMware Carbon Black Cloud](asim-products-index.md#vmware-carbon-black-cloud), [WatchGuard Fireware OS](asim-products-index.md#watchguard-fireware-os), [Windows Firewall](asim-products-index.md#windows-firewall), [Windows Sysmon](asim-products-index.md#windows-sysmon), [Zscaler ZIA Firewall](asim-products-index.md#zscaler-zia-firewall)

### Source Parsers

| Parser | Product | Tables | Version |
|:-------|:--------|:-------|:--------|
| [ASimNetworkSessionAWSVPC](asimnetworksessionawsvpc.md) | AWS VPC | 1 | 0.3 |
| [ASimNetworkSessionAppGateSDP](asimnetworksessionappgatesdp.md) | AppGate SDP | 1 | 0.2 |
| [ASimNetworkSessionAzureFirewall](asimnetworksessionazurefirewall.md) | Azure Firewall | 7 | 0.2.0 |
| [ASimNetworkSessionAzureNSG](asimnetworksessionazurensg.md) | Azure NSG flows | 2 | 0.1.1 |
| [ASimNetworkSessionBarracudaCEF](asimnetworksessionbarracudacef.md) | Barracuda WAF | 1 | 0.2.1 |
| [ASimNetworkSessionBarracudaWAF](asimnetworksessionbarracudawaf.md) | Barracuda WAF | 1 | 0.2.1 |
| [ASimNetworkSessionCheckPointFirewall](asimnetworksessioncheckpointfirewall.md) | CheckPointFirewall | 1 | 1.2.0 |
| [ASimNetworkSessionCiscoASA](asimnetworksessionciscoasa.md) | CiscoASA | 1 | 1.1.0 |
| [ASimNetworkSessionCiscoFirepower](asimnetworksessionciscofirepower.md) | Cisco Firepower | 1 | 0.1.0 |
| [ASimNetworkSessionCiscoISE](asimnetworksessionciscoise.md) | Cisco ISE | 1 | 1.1.0 |
| [ASimNetworkSessionCiscoMeraki](asimnetworksessionciscomeraki.md) | Cisco Meraki | 2 | 1.2.2 |
| [ASimNetworkSessionCiscoMerakiSyslog](asimnetworksessionciscomerakisyslog.md) | Cisco Meraki | 2 | 1.2.2 |
| [ASimNetworkSessionCorelightZeek](asimnetworksessioncorelightzeek.md) | Corelight Zeek | 1 | 0.2 |
| [ASimNetworkSessionCrowdStrikeFalconHost](asimnetworksessioncrowdstrikefalconhost.md) | CrowdStrike Falcon Endpoint Protection | 2 | 0.1.0 |
| [ASimNetworkSessionForcePointFirewall](asimnetworksessionforcepointfirewall.md) | ForcePointFirewall | 1 | 0.1 |
| [ASimNetworkSessionFortinetFortiGate](asimnetworksessionfortinetfortigate.md) | Fortinet FortiGate | 1 | 0.6.0 |
| [ASimNetworkSessionIllumioSaaSCore](asimnetworksessionillumiosaascore.md) | Illumio SaaS Core | 1 | 0.1.0 |
| [ASimNetworkSessionLinuxSysmon](asimnetworksessionlinuxsysmon.md) | Sysmon for Linux | 1 | 0.3.1 |
| [ASimNetworkSessionMD4IoTAgent](asimnetworksessionmd4iotagent.md) | Microsoft Defender for IoT | 1 | 0.2.1 |
| [ASimNetworkSessionMD4IoTSensor](asimnetworksessionmd4iotsensor.md) | Microsoft Defender for IoT | 0 | 0.1 |
| [ASimNetworkSessionMicrosoft365Defender](asimnetworksessionmicrosoft365defender.md) | M365 Defender for Endpoint | 1 | 0.4 |
| [ASimNetworkSessionMicrosoftSecurityEventFirewall](asimnetworksessionmicrosoftsecurityeventfirewall.md) | Windows Firewall | 2 | 0.5.0 |
| [ASimNetworkSessionMicrosoftSysmon](asimnetworksessionmicrosoftsysmon.md) | Windows Sysmon | 1 | 0.2.0 |
| [ASimNetworkSessionMicrosoftSysmonWindowsEvent](asimnetworksessionmicrosoftsysmonwindowsevent.md) | Windows Sysmon | 1 | 0.2.1 |
| [ASimNetworkSessionMicrosoftWindowsEventFirewall](asimnetworksessionmicrosoftwindowseventfirewall.md) | Windows Firewall | 1 | 0.5.0 |
| [ASimNetworkSessionNTANetAnalytics](asimnetworksessionntanetanalytics.md) | Azure NTANetAnalytics | 1 | 0.1.0 |
| [ASimNetworkSessionNative](asimnetworksessionnative.md) | Native | 1 | 0.3 |
| [ASimNetworkSessionPaloAltoCEF](asimnetworksessionpaloaltocef.md) | Palo Alto PanOS | 1 | 0.7.1 |
| [ASimNetworkSessionPaloAltoCortexDataLake](asimnetworksessionpaloaltocortexdatalake.md) | Palo Alto Cortex Data Lake | 1 | 0.1.1 |
| [ASimNetworkSessionSentinelOne](asimnetworksessionsentinelone.md) | SentinelOne | 1 | 0.1.0 |
| [ASimNetworkSessionSonicWallFirewall](asimnetworksessionsonicwallfirewall.md) | SonicWall | 1 | 0.1.0 |
| [ASimNetworkSessionVMConnection](asimnetworksessionvmconnection.md) | VMConnection | 1 | 0.2.1 |
| [ASimNetworkSessionVMwareCarbonBlackCloud](asimnetworksessionvmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | 2 | 0.1.1 |
| [ASimNetworkSessionVectraAI](asimnetworksessionvectraai.md) | Vectra AI Streams | 1 | 0.2 |
| [ASimNetworkSessionWatchGuardFirewareOS](asimnetworksessionwatchguardfirewareos.md) | WatchGuard Fireware OS | 1 | 0.1.4 |
| [ASimNetworkSessionZscalerZIA](asimnetworksessionzscalerzia.md) | Zscaler ZIA Firewall | 1 | 0.4 |

## ProcessEvent

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version | Description |
|:-------|:--------------|:--------|:------------|
| [ASimProcessEvent](asimprocessevent.md) | `_ASim_ProcessEvent` | 0.1.2 | This ASIM parser supports normalizing process event logs from all supported s... |
| [ASimProcessEventCreate](asimprocesseventcreate.md) | `_ASim_ProcessEvent_Create` | 0.1.1 | This ASIM parser supports normalizing process create event logs from all supp... |
| [ASimProcessEventTerminate](asimprocesseventterminate.md) | `_ASim_ProcessEvent_Terminate` | 0.1.1 | This ASIM parser supports normalizing process terminate event logs from all s... |
| [imProcessCreate](improcesscreate.md) | `_Im_ProcessCreate` | 0.1.2 | This ASIM parser supports normalizing process create event logs from all supp... |
| [imProcessEvent](improcessevent.md) | `_Im_ProcessEvent` | 0.1.3 | This ASIM parser supports normalizing process event logs from all supported s... |
| [imProcessTerminate](improcessterminate.md) | `_Im_ProcessTerminate` | 0.1.2 | This ASIM parser supports normalizing process terminate event logs from all s... |

### Supported Products

[Microsoft 365 Defender for endpoint](asim-products-index.md#microsoft-365-defender-for-endpoint), [Microsoft Defender for IoT](asim-products-index.md#microsoft-defender-for-iot), [Microsoft Windows Events Sysmon](asim-products-index.md#microsoft-windows-events-sysmon), [Native](asim-products-index.md#native), [Security Events](asim-products-index.md#security-events), [SentinelOne](asim-products-index.md#sentinelone), [Sysmon](asim-products-index.md#sysmon), [Sysmon for Linux](asim-products-index.md#sysmon-for-linux), [Trend Micro Vision One](asim-products-index.md#trend-micro-vision-one), [VMware Carbon Black Cloud](asim-products-index.md#vmware-carbon-black-cloud)

### Source Parsers

| Parser | Product | Tables | Version |
|:-------|:--------|:-------|:--------|
| [ASimProcessCreateLinuxSysmon](asimprocesscreatelinuxsysmon.md) | Sysmon for Linux | 1 | 0.2.1 |
| [ASimProcessCreateMicrosoftSecurityEvents](asimprocesscreatemicrosoftsecurityevents.md) | Security Events | 1 | 0.1.1 |
| [ASimProcessCreateMicrosoftWindowsEvents](asimprocesscreatemicrosoftwindowsevents.md) | Security Events | 1 | 0.3 |
| [ASimProcessCreateSentinelOne](asimprocesscreatesentinelone.md) | SentinelOne | 1 | 0.1.0 |
| [ASimProcessCreateTrendMicroVisionOne](asimprocesscreatetrendmicrovisionone.md) | Trend Micro Vision One | 1 | 0.1.0 |
| [ASimProcessCreateVMwareCarbonBlackCloud](asimprocesscreatevmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | 2 | 0.1.1 |
| [ASimProcessEventCreateMicrosoftSysmon](asimprocesseventcreatemicrosoftsysmon.md) | Sysmon | 1 | 0.4.1 |
| [ASimProcessEventCreateMicrosoftSysmonWindowsEvent](asimprocesseventcreatemicrosoftsysmonwindowsevent.md) | Sysmon | 1 | 0.4.1 |
| [ASimProcessEventMD4IoT](asimprocesseventmd4iot.md) | Microsoft Defender for IoT | 1 | 0.1.1 |
| [ASimProcessEventMicrosoft365D](asimprocesseventmicrosoft365d.md) | Microsoft 365 Defender for endpoint | 1 | 0.1.2 |
| [ASimProcessEventNative](asimprocesseventnative.md) | Native | 1 | 0.1.0 |
| [ASimProcessEventTerminateMicrosoftSysmon](asimprocesseventterminatemicrosoftsysmon.md) | Microsoft Windows Events Sysmon | 1 | 0.3.1 |
| [ASimProcessEventTerminateMicrosoftSysmonWindowsEvent](asimprocesseventterminatemicrosoftsysmonwindowsevent.md) | Microsoft Windows Events Sysmon | 1 | 0.4.1 |
| [ASimProcessTerminateLinuxSysmon](asimprocessterminatelinuxsysmon.md) | Sysmon for Linux | 1 | 0.1.1 |
| [ASimProcessTerminateMicrosoftSecurityEvents](asimprocessterminatemicrosoftsecurityevents.md) | Security Events | 1 | 0.2 |
| [ASimProcessTerminateMicrosoftWindowsEvents](asimprocessterminatemicrosoftwindowsevents.md) | Security Events | 1 | 0.2 |
| [ASimProcessTerminateVMwareCarbonBlackCloud](asimprocessterminatevmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | 1 | 0.1.0 |

## RegistryEvent

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version | Description |
|:-------|:--------------|:--------|:------------|
| [ASimRegistry](asimregistry.md) | `_ASim_RegistryEvent` | 0.1.3 | This ASIM parser supports normalizing Registry Event logs from all supported ... |
| [imRegistry](imregistry.md) | `_Im_RegistryEvent` | 0.1.4 | This ASIM parser supports normalizing Registry Event logs from all supported ... |

### Supported Products

[Microsoft 365 Defender for Endpoint](asim-products-index.md#microsoft-365-defender-for-endpoint), [Microsoft Sysmon](asim-products-index.md#microsoft-sysmon), [Native](asim-products-index.md#native), [Security Events](asim-products-index.md#security-events), [SentinelOne](asim-products-index.md#sentinelone), [Trend Micro Vision One](asim-products-index.md#trend-micro-vision-one), [VMware Carbon Black Cloud](asim-products-index.md#vmware-carbon-black-cloud)

### Source Parsers

| Parser | Product | Tables | Version |
|:-------|:--------|:-------|:--------|
| [ASimRegistryEventMicrosoft365D](asimregistryeventmicrosoft365d.md) | Microsoft 365 Defender for Endpoint | 1 | 0.1.2 |
| [ASimRegistryEventMicrosoftSecurityEvent](asimregistryeventmicrosoftsecurityevent.md) | Security Events | 1 | 0.3.1 |
| [ASimRegistryEventMicrosoftSysmon](asimregistryeventmicrosoftsysmon.md) | Microsoft Sysmon | 1 | 0.3.1 |
| [ASimRegistryEventMicrosoftSysmonWindowsEvent](asimregistryeventmicrosoftsysmonwindowsevent.md) | Microsoft Sysmon | 1 | 0.3.1 |
| [ASimRegistryEventMicrosoftWindowsEvent](asimregistryeventmicrosoftwindowsevent.md) | Security Events | 1 | 0.2.1 |
| [ASimRegistryEventNative](asimregistryeventnative.md) | Native | 1 | 0.1.0 |
| [ASimRegistryEventSentinelOne](asimregistryeventsentinelone.md) | SentinelOne | 1 | 0.1.0 |
| [ASimRegistryEventTrendMicroVisionOne](asimregistryeventtrendmicrovisionone.md) | Trend Micro Vision One | 1 | 0.1.0 |
| [ASimRegistryEventVMwareCarbonBlackCloud](asimregistryeventvmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | 1 | 0.1.1 |

## UserManagement

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version | Description |
|:-------|:--------------|:--------|:------------|
| [ASimUserManagement](asimusermanagement.md) | `_ASim_UserManagement` | 0.1.2 | This ASIM parser supports normalizing User Management logs from all supported... |
| [imUserManagement](imusermanagement.md) | `_Im_UserManagement` | 0.1.3 | This ASIM parser supports normalizing User Management logs from all supported... |

### Supported Products

[Cisco ISE](asim-products-index.md#cisco-ise), [Microsoft](asim-products-index.md#microsoft), [Microsoft Security Event](asim-products-index.md#microsoft-security-event), [Microsoft Windows Event](asim-products-index.md#microsoft-windows-event), [Native](asim-products-index.md#native), [SentinelOne](asim-products-index.md#sentinelone)

### Source Parsers

| Parser | Product | Tables | Version |
|:-------|:--------|:-------|:--------|
| [ASimUserManagementCiscoISE](asimusermanagementciscoise.md) | Cisco ISE | 1 | 0.1.2 |
| [ASimUserManagementLinuxAuthpriv](asimusermanagementlinuxauthpriv.md) | Microsoft | 1 | 0.1.1 |
| [ASimUserManagementMicrosoftSecurityEvent](asimusermanagementmicrosoftsecurityevent.md) | Microsoft Security Event | 1 | 0.2.0 |
| [ASimUserManagementMicrosoftWindowsEvent](asimusermanagementmicrosoftwindowsevent.md) | Microsoft Windows Event | 1 | 0.2.1 |
| [ASimUserManagementNative](asimusermanagementnative.md) | Native | 1 | 0.1.0 |
| [ASimUserManagementSentinelOne](asimusermanagementsentinelone.md) | SentinelOne | 1 | 0.1.1 |

## WebSession

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version | Description |
|:-------|:--------------|:--------|:------------|
| [ASimWebSession](asimwebsession.md) | `_ASim_WebSession` | 0.5.4 | This ASIM parser supports normalizing Web Session logs from all supported sou... |
| [imWebSession](imwebsession.md) | `_Im_WebSession` | 0.6.2 | This ASIM parser supports filtering and normalizing Web Session logs from all... |

### Supported Products

[Apache HTTP Server](asim-products-index.md#apache-http-server), [Azure Firewall](asim-products-index.md#azure-firewall), [Barracuda WAF](asim-products-index.md#barracuda-waf), [Cisco Firepower](asim-products-index.md#cisco-firepower), [Cisco Meraki](asim-products-index.md#cisco-meraki), [Citrix NetScaler](asim-products-index.md#citrix-netscaler), [F5 BIG-IP Application Security Manager (ASM)](asim-products-index.md#f5-big-ip-application-security-manager-asm), [Fortinet FortiGate](asim-products-index.md#fortinet-fortigate), [Internet Information Services (IIS)](asim-products-index.md#internet-information-services-iis), [Native](asim-products-index.md#native), [Palo Alto Cortex Data Lake](asim-products-index.md#palo-alto-cortex-data-lake), [Palo Alto Networks](asim-products-index.md#palo-alto-networks), [SonicWall](asim-products-index.md#sonicwall), [Squid Proxy](asim-products-index.md#squid-proxy), [Vectra AI Streams](asim-products-index.md#vectra-ai-streams), [Zscaler ZIA](asim-products-index.md#zscaler-zia)

### Source Parsers

| Parser | Product | Tables | Version |
|:-------|:--------|:-------|:--------|
| [ASimWebSessionApacheHTTPServer](asimwebsessionapachehttpserver.md) | Apache HTTP Server | 1 | 0.1 |
| [ASimWebSessionAzureFirewall](asimwebsessionazurefirewall.md) | Azure Firewall | 1 | 0.1.0 |
| [ASimWebSessionBarracudaCEF](asimwebsessionbarracudacef.md) | Barracuda WAF | 1 | 0.2.1 |
| [ASimWebSessionBarracudaWAF](asimwebsessionbarracudawaf.md) | Barracuda WAF | 1 | 0.2.2 |
| [ASimWebSessionCiscoFirepower](asimwebsessionciscofirepower.md) | Cisco Firepower | 1 | 0.1.0 |
| [ASimWebSessionCiscoMeraki](asimwebsessionciscomeraki.md) | Cisco Meraki | 2 | 0.1.1 |
| [ASimWebSessionCitrixNetScaler](asimwebsessioncitrixnetscaler.md) | Citrix NetScaler | 1 | 0.1.1 |
| [ASimWebSessionF5ASM](asimwebsessionf5asm.md) | F5 BIG-IP Application Security Manager (ASM) | 1 | 0.1.0 |
| [ASimWebSessionFortinetFortiGate](asimwebsessionfortinetfortigate.md) | Fortinet FortiGate | 1 | 0.3.0 |
| [ASimWebSessionIIS](asimwebsessioniis.md) | Internet Information Services (IIS) | 1 | 0.2 |
| [ASimWebSessionNative](asimwebsessionnative.md) | Native | 1 | 0.1 |
| [ASimWebSessionPaloAltoCEF](asimwebsessionpaloaltocef.md) | Palo Alto Networks | 1 | 0.2 |
| [ASimWebSessionPaloAltoCortexDataLake](asimwebsessionpaloaltocortexdatalake.md) | Palo Alto Cortex Data Lake | 1 | 0.1.1 |
| [ASimWebSessionSonicWallFirewall](asimwebsessionsonicwallfirewall.md) | SonicWall | 1 | 0.1.1 |
| [ASimWebSessionSquidProxy](asimwebsessionsquidproxy.md) | Squid Proxy | 1 | 0.4.0 |
| [ASimWebSessionVectraAI](asimwebsessionvectraai.md) | Vectra AI Streams | 1 | 0.2 |
| [ASimWebSessionZscalerZIA](asimwebsessionzscalerzia.md) | Zscaler ZIA | 1 | 0.4.1 |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

