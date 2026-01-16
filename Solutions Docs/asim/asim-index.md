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
| ASim: [ASimAlertEventMicrosoftDefenderXDR](asimalerteventmicrosoftdefenderxdr.md)<br>vim: [vimAlertEventMicrosoftDefenderXDR](vimalerteventmicrosoftdefenderxdr.md) | Microsoft Defender XDR | 1 | 0.1.0 |
| ASim: [ASimAlertEventSentinelOneSingularity](asimalerteventsentinelonesingularity.md)<br>vim: [vimAlertEventSentinelOneSingularity](vimalerteventsentinelonesingularity.md) | SentinelOne | 1 | 0.1.0 |

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
| ASim: [ASimAuditEventAzureActivity](asimauditeventazureactivity.md)<br>vim: [vimAuditEventAzureActivity](vimauditeventazureactivity.md) | Microsoft Azure | 1 | 0.2 |
| ASim: [ASimAuditEventBarracudaCEF](asimauditeventbarracudacef.md)<br>vim: [vimAuditEventBarracudaCEF](vimauditeventbarracudacef.md) | Barracuda WAF | 1 | 0.2.1 |
| ASim: [ASimAuditEventBarracudaWAF](asimauditeventbarracudawaf.md)<br>vim: [vimAuditEventBarracudaWAF](vimauditeventbarracudawaf.md) | Barracuda WAF | 1 | 0.2.1 |
| ASim: [ASimAuditEventCiscoISE](asimauditeventciscoise.md)<br>vim: [vimAuditEventCiscoISE](vimauditeventciscoise.md) | Cisco ISE | 1 | 0.1 |
| ASim: [ASimAuditEventCiscoMeraki](asimauditeventciscomeraki.md)<br>vim: [vimAuditEventCiscoMeraki](vimauditeventciscomeraki.md) | Cisco Meraki | 2 | 0.2.1 |
| ASim: [ASimAuditEventCiscoMerakiSyslog](asimauditeventciscomerakisyslog.md)<br>vim: [vimAuditEventCiscoMerakiSyslog](vimauditeventciscomerakisyslog.md) | Cisco Meraki | 2 | 0.2.1 |
| ASim: [ASimAuditEventCrowdStrikeFalconHost](asimauditeventcrowdstrikefalconhost.md)<br>vim: [vimAuditEventCrowdStrikeFalconHost](vimauditeventcrowdstrikefalconhost.md) | CrowdStrike Falcon Endpoint Protection | 1 | 0.1.0 |
| ASim: [ASimAuditEventIllumioSaaSCore](asimauditeventillumiosaascore.md)<br>vim: [vimAuditEventIllumioSaaSCore](vimauditeventillumiosaascore.md) | Illumio Core | 1 | 0.2.1 |
| ASim: [ASimAuditEventInfobloxBloxOne](asimauditeventinfobloxbloxone.md)<br>vim: [vimAuditEventInfobloxBloxOne](vimauditeventinfobloxbloxone.md) | Infoblox BloxOne | 1 | 0.1.0 |
| ASim: [ASimAuditEventMicrosoftEvent](asimauditeventmicrosoftevent.md)<br>vim: [vimAuditEventMicrosoftEvent](vimauditeventmicrosoftevent.md) | Microsoft Windows | 3 | 0.2.1 |
| ASim: [ASimAuditEventMicrosoftExchangeAdmin365](asimauditeventmicrosoftexchangeadmin365.md)<br>vim: [vimAuditEventMicrosoftExchangeAdmin365](vimauditeventmicrosoftexchangeadmin365.md) | Microsoft SharePoint | 1 | 0.2 |
| ASim: [ASimAuditEventMicrosoftSecurityEvents](asimauditeventmicrosoftsecurityevents.md)<br>vim: [vimAuditEventMicrosoftSecurityEvents](vimauditeventmicrosoftsecurityevents.md) | Microsoft Windows | 4 | 0.2.1 |
| ASim: [ASimAuditEventMicrosoftWindowsEvents](asimauditeventmicrosoftwindowsevents.md)<br>vim: [vimAuditEventMicrosoftWindowsEvents](vimauditeventmicrosoftwindowsevents.md) | Microsoft Windows | 4 | 0.2.1 |
| ASim: [ASimAuditEventNative](asimauditeventnative.md)<br>vim: [vimAuditEventNative](vimauditeventnative.md) | Native | 1 | 0.1.0 |
| ASim: [ASimAuditEventSentinelOne](asimauditeventsentinelone.md)<br>vim: [vimAuditEventSentinelOne](vimauditeventsentinelone.md) | SentinelOne | 3 | 0.1.0 |
| ASim: [ASimAuditEventVMwareCarbonBlackCloud](asimauditeventvmwarecarbonblackcloud.md)<br>vim: [vimAuditEventVMwareCarbonBlackCloud](vimauditeventvmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | 3 | 0.2.0 |
| ASim: [ASimAuditEventVectraXDRAudit](asimauditeventvectraxdraudit.md)<br>vim: [vimAuditEventVectraXDRAudit](vimauditeventvectraxdraudit.md) | Vectra | 1 | 0.1.1 |

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
| ASim: [ASimAuthenticationAADManagedIdentitySignInLogs](asimauthenticationaadmanagedidentitysigninlogs.md)<br>vim: [vimAuthenticationAADManagedIdentitySignInLogs](vimauthenticationaadmanagedidentitysigninlogs.md) | Microsoft Entra ID | 1 | 0.2.2 |
| ASim: [ASimAuthenticationAADNonInteractiveUserSignInLogs](asimauthenticationaadnoninteractiveusersigninlogs.md)<br>vim: [vimAuthenticationAADNonInteractiveUserSignInLogs](vimauthenticationaadnoninteractiveusersigninlogs.md) | Microsoft Entra ID | 1 | 0.2.2 |
| ASim: [ASimAuthenticationAADServicePrincipalSignInLogs](asimauthenticationaadserviceprincipalsigninlogs.md)<br>vim: [vimAuthenticationAADServicePrincipalSignInLogs](vimauthenticationaadserviceprincipalsigninlogs.md) | Microsoft Entra ID | 1 | 0.2.2 |
| ASim: [ASimAuthenticationAWSCloudTrail](asimauthenticationawscloudtrail.md)<br>vim: [vimAuthenticationAWSCloudTrail](vimauthenticationawscloudtrail.md) | AWS | 1 | 0.2.1 |
| ASim: [ASimAuthenticationBarracudaWAF](asimauthenticationbarracudawaf.md)<br>vim: [vimAuthenticationBarracudaWAF](vimauthenticationbarracudawaf.md) | Barracuda WAF | 2 | 0.1 |
| ASim: [ASimAuthenticationCiscoASA](asimauthenticationciscoasa.md)<br>vim: [vimAuthenticationCiscoASA](vimauthenticationciscoasa.md) | Cisco Adaptive Security Appliance (ASA) | 2 | 0.1.1 |
| ASim: [ASimAuthenticationCiscoISE](asimauthenticationciscoise.md)<br>vim: [vimAuthenticationCiscoISE](vimauthenticationciscoise.md) | Cisco ISE | 1 | 0.1.0 |
| ASim: [ASimAuthenticationCiscoMeraki](asimauthenticationciscomeraki.md)<br>vim: [vimAuthenticationCiscoMeraki](vimauthenticationciscomeraki.md) | Cisco Meraki | 1 | 0.2.1 |
| ASim: [ASimAuthenticationCiscoMerakiSyslog](asimauthenticationciscomerakisyslog.md)<br>vim: [vimAuthenticationCiscoMerakiSyslog](vimauthenticationciscomerakisyslog.md) | Cisco Meraki | 1 | 0.2.1 |
| ASim: [ASimAuthenticationCrowdStrikeFalconHost](asimauthenticationcrowdstrikefalconhost.md)<br>vim: [vimAuthenticationCrowdStrikeFalconHost](vimauthenticationcrowdstrikefalconhost.md) | CrowdStrike Falcon Endpoint Protection | 1 | 0.1.0 |
| ASim: [ASimAuthenticationGoogleWorkspace](asimauthenticationgoogleworkspace.md)<br>vim: [vimAuthenticationGoogleWorkspace](vimauthenticationgoogleworkspace.md) | Google Workspace | 1 | 0.1.0 |
| ASim: [ASimAuthenticationIllumioSaaSCore](asimauthenticationillumiosaascore.md)<br>vim: [vimAuthenticationIllumioSaaSCore](vimauthenticationillumiosaascore.md) | Illumio | 1 | 0.3.0 |
| ASim: [ASimAuthenticationM365Defender](asimauthenticationm365defender.md)<br>vim: [vimAuthenticationM365Defender](vimauthenticationm365defender.md) | M365 Defender for EndPoint | 1 | 0.1.3 |
| ASim: [ASimAuthenticationMD4IoT](asimauthenticationmd4iot.md)<br>vim: [vimAuthenticationMD4IoT](vimauthenticationmd4iot.md) | Microsoft Defender for IoT | 1 | 0.1.2 |
| ASim: [ASimAuthenticationMicrosoftWindowsEvent](asimauthenticationmicrosoftwindowsevent.md)<br>vim: [vimAuthenticationMicrosoftWindowsEvent](vimauthenticationmicrosoftwindowsevent.md) | Windows Security Events | 2 | 0.2.1 |
| ASim: [ASimAuthenticationNative](asimauthenticationnative.md)<br>vim: [vimAuthenticationNative](vimauthenticationnative.md) | Native | 1 | 0.1.0 |
| ASim: [ASimAuthenticationOktaSSO](asimauthenticationoktasso.md)<br>vim: [vimAuthenticationOktaSSO](vimauthenticationoktasso.md) | Okta | 1 | 0.4.0 |
| ASim: [ASimAuthenticationOktaV2](asimauthenticationoktav2.md)<br>vim: [vimAuthenticationOktaV2](vimauthenticationoktav2.md) | Okta | 1 | 0.4.0 |
| ASim: [ASimAuthenticationPaloAltoCortexDataLake](asimauthenticationpaloaltocortexdatalake.md)<br>vim: [vimAuthenticationPaloAltoCortexDataLake](vimauthenticationpaloaltocortexdatalake.md) | Palo Alto Cortex Data Lake | 1 | 0.1.0 |
| ASim: [ASimAuthenticationPostgreSQL](asimauthenticationpostgresql.md)<br>vim: [vimAuthenticationPostgreSQL](vimauthenticationpostgresql.md) | PostgreSQL | 1 | 0.1.4 |
| ASim: [ASimAuthenticationSalesforceSC](asimauthenticationsalesforcesc.md)<br>vim: [vimAuthenticationSalesforceSC](vimauthenticationsalesforcesc.md) | Salesforce Service Cloud | 1 | 0.1.0 |
| ASim: [ASimAuthenticationSentinelOne](asimauthenticationsentinelone.md)<br>vim: [vimAuthenticationSentinelOne](vimauthenticationsentinelone.md) | SentinelOne | 1 | 0.1.1 |
| ASim: [ASimAuthenticationSigninLogs](asimauthenticationsigninlogs.md)<br>vim: [vimAuthenticationSigninLogs](vimauthenticationsigninlogs.md) | Microsoft Entra ID | 1 | 0.4.0 |
| ASim: [ASimAuthenticationSshd](asimauthenticationsshd.md)<br>vim: [vimAuthenticationSshd](vimauthenticationsshd.md) | OpenSSH | 1 | 0.2.4 |
| ASim: [ASimAuthenticationSu](asimauthenticationsu.md)<br>vim: [vimAuthenticationSu](vimauthenticationsu.md) | su | 1 | 0.2.1 |
| ASim: [ASimAuthenticationSudo](asimauthenticationsudo.md)<br>vim: [vimAuthenticationSudo](vimauthenticationsudo.md) | sudo | 1 | 0.1.2 |
| ASim: [ASimAuthenticationVMwareCarbonBlackCloud](asimauthenticationvmwarecarbonblackcloud.md)<br>vim: [vimAuthenticationVMwareCarbonBlackCloud](vimauthenticationvmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | 1 | 0.1.0 |
| ASim: [ASimAuthenticationVectraXDRAudit](asimauthenticationvectraxdraudit.md)<br>vim: [vimAuthenticationVectraXDRAudit](vimauthenticationvectraxdraudit.md) | Vectra | 1 | 0.1 |

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
| ASim: [ASimDhcpEventInfobloxBloxOne](asimdhcpeventinfobloxbloxone.md)<br>vim: [vimDhcpEventInfobloxBloxOne](vimdhcpeventinfobloxbloxone.md) | Infoblox BloxOne | 1 | 0.1.0 |
| ASim: [ASimDhcpEventNative](asimdhcpeventnative.md)<br>vim: [vimDhcpEventNative](vimdhcpeventnative.md) | Native | 1 | 0.1.0 |

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
| ASim: [ASimDnsAzureFirewall](asimdnsazurefirewall.md)<br>vim: [vimDnsAzureFirewall](vimdnsazurefirewall.md) | Azure Firewall | 2 | 0.4.0 |
| ASim: [ASimDnsCiscoUmbrella](asimdnsciscoumbrella.md)<br>vim: [vimDnsCiscoUmbrella](vimdnsciscoumbrella.md) | Cisco Umbrella | 1 | 0.3 |
| ASim: [ASimDnsCorelightZeek](asimdnscorelightzeek.md)<br>vim: [vimDnsCorelightZeek](vimdnscorelightzeek.md) | Corelight Zeek | 1 | 0.5 |
| ASim: [ASimDnsFortinetFortiGate](asimdnsfortinetfortigate.md)<br>vim: [vimDnsFortinetFortiGate](vimdnsfortinetfortigate.md) | Fortinet FortiGate | 1 | 0.1.2 |
| ASim: [ASimDnsGcp](asimdnsgcp.md)<br>vim: [vimDnsGcp](vimdnsgcp.md) | GCP Cloud DNS | 1 | 0.4 |
| ASim: [ASimDnsInfobloxBloxOne](asimdnsinfobloxbloxone.md)<br>vim: [vimDnsInfobloxBloxOne](vimdnsinfobloxbloxone.md) | Infoblox BloxOne | 1 | 0.1.0 |
| ASim: [ASimDnsInfobloxNIOS](asimdnsinfobloxnios.md)<br>vim: [vimDnsInfobloxNIOS](vimdnsinfobloxnios.md) | Infoblox NIOS | 1 | 0.6.1 |
| ASim: [ASimDnsMicrosoftNXlog](asimdnsmicrosoftnxlog.md)<br>vim: [vimDnsMicrosoftNXlog](vimdnsmicrosoftnxlog.md) | MS DNS Events | 1 | 0.5.0 |
| ASim: [ASimDnsMicrosoftOMS](asimdnsmicrosoftoms.md)<br>vim: [vimDnsMicrosoftOMS](vimdnsmicrosoftoms.md) | MS DNS Events | 1 | 0.4 |
| ASim: [ASimDnsMicrosoftSysmon](asimdnsmicrosoftsysmon.md)<br>vim: [vimDnsMicrosoftSysmon](vimdnsmicrosoftsysmon.md) | Microsoft Windows Events Sysmon | 1 | 0.5.1 |
| ASim: [ASimDnsMicrosoftSysmonWindowsEvent](asimdnsmicrosoftsysmonwindowsevent.md)<br>vim: [vimDnsMicrosoftSysmonWindowsEvent](vimdnsmicrosoftsysmonwindowsevent.md) | Microsoft Windows Events Sysmon | 1 | 0.5.1 |
| ASim: [ASimDnsNative](asimdnsnative.md)<br>vim: [vimDnsNative](vimdnsnative.md) | Native | 1 | 0.6.1 |
| ASim: [ASimDnsSentinelOne](asimdnssentinelone.md)<br>vim: [vimDnsSentinelOne](vimdnssentinelone.md) | SentinelOne | 1 | 0.1.0 |
| ASim: [ASimDnsVectraAI](asimdnsvectraai.md)<br>vim: [vimDnsVectraAI](vimdnsvectraai.md) | Vectra AI Streams | 1 | 0.1.1 |
| ASim: [ASimDnsZscalerZIA](asimdnszscalerzia.md)<br>vim: [vimDnsZscalerZIA](vimdnszscalerzia.md) | Zscaler ZIA DNS | 1 | 0.6 |

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
| ASim: [ASimFileEventAzureBlobStorage](asimfileeventazureblobstorage.md)<br>vim: [vimFileEventAzureBlobStorage](vimfileeventazureblobstorage.md) | Microsoft Azure Blob Storage | 1 | 0.1.1 |
| ASim: [ASimFileEventAzureFileStorage](asimfileeventazurefilestorage.md)<br>vim: [vimFileEventAzureFileStorage](vimfileeventazurefilestorage.md) | Microsoft Azure File Storage | 1 | 0.1.1 |
| ASim: [ASimFileEventAzureQueueStorage](asimfileeventazurequeuestorage.md)<br>vim: [vimFileEventAzureQueueStorage](vimfileeventazurequeuestorage.md) | Microsoft Azure Queue Storage | 1 | 0.1.1 |
| ASim: [ASimFileEventAzureTableStorage](asimfileeventazuretablestorage.md)<br>vim: [vimFileEventAzureTableStorage](vimfileeventazuretablestorage.md) | Microsoft Azure Table Storage | 1 | 0.1.1 |
| ASim: [ASimFileEventGoogleWorkspace](asimfileeventgoogleworkspace.md)<br>vim: [vimFileEventGoogleWorkspace](vimfileeventgoogleworkspace.md) | Google Workspace | 1 | 0.1.0 |
| ASim: [ASimFileEventLinuxSysmonFileCreated](asimfileeventlinuxsysmonfilecreated.md)<br>vim: [vimFileEventLinuxSysmonFileCreated](vimfileeventlinuxsysmonfilecreated.md) | Microsoft Sysmon for Linux | 1 | 0.2.1 |
| ASim: [ASimFileEventLinuxSysmonFileDeleted](asimfileeventlinuxsysmonfiledeleted.md)<br>vim: [vimFileEventLinuxSysmonFileDeleted](vimfileeventlinuxsysmonfiledeleted.md) | Microsoft Sysmon for Linux | 1 | 0.2.1 |
| ASim: [ASimFileEventMicrosoft365D](asimfileeventmicrosoft365d.md)<br>vim: [vimFileEventMicrosoft365D](vimfileeventmicrosoft365d.md) | Microsoft 365 Defender for EndPoint | 1 | 0.2.1 |
| ASim: [ASimFileEventMicrosoftSecurityEvents](asimfileeventmicrosoftsecurityevents.md)<br>vim: [vimFileEventMicrosoftSecurityEvents](vimfileeventmicrosoftsecurityevents.md) | Microsoft Windows Events | 1 | 0.2.0 |
| ASim: [ASimFileEventMicrosoftSharePoint](asimfileeventmicrosoftsharepoint.md)<br>vim: [vimFileEventMicrosoftSharePoint](vimfileeventmicrosoftsharepoint.md) | Microsoft SharePoint | 2 | 0.3.1 |
| ASim: [ASimFileEventMicrosoftSysmon](asimfileeventmicrosoftsysmon.md)<br>vim: [vimFileEventMicrosoftSysmon](vimfileeventmicrosoftsysmon.md) | Windows Sysmon | 1 | 0.5.1 |
| ASim: [ASimFileEventMicrosoftSysmonWindowsEvent](asimfileeventmicrosoftsysmonwindowsevent.md)<br>vim: [vimFileEventMicrosoftSysmonWindowsEvent](vimfileeventmicrosoftsysmonwindowsevent.md) | Windows Sysmon | 1 | 0.4.1 |
| ASim: [ASimFileEventMicrosoftWindowsEvents](asimfileeventmicrosoftwindowsevents.md)<br>vim: [vimFileEventMicrosoftWindowsEvents](vimfileeventmicrosoftwindowsevents.md) | Microsoft Windows Events | 1 | 0.2.0 |
| ASim: [ASimFileEventNative](asimfileeventnative.md)<br>vim: [vimFileEventNative](vimfileeventnative.md) | Native | 1 | 0.1.1 |
| ASim: [ASimFileEventSentinelOne](asimfileeventsentinelone.md)<br>vim: [vimFileEventSentinelOne](vimfileeventsentinelone.md) | SentinelOne | 1 | 0.1.0 |
| ASim: [ASimFileEventVMwareCarbonBlackCloud](asimfileeventvmwarecarbonblackcloud.md)<br>vim: [vimFileEventVMwareCarbonBlackCloud](vimfileeventvmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | 1 | 0.1.1 |

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
| ASim: [ASimNetworkSessionAWSVPC](asimnetworksessionawsvpc.md)<br>vim: [vimNetworkSessionAWSVPC](vimnetworksessionawsvpc.md) | AWS VPC | 1 | 0.3 |
| ASim: [ASimNetworkSessionAppGateSDP](asimnetworksessionappgatesdp.md)<br>vim: [vimNetworkSessionAppGateSDP](vimnetworksessionappgatesdp.md) | AppGate SDP | 1 | 0.2 |
| ASim: [ASimNetworkSessionAzureFirewall](asimnetworksessionazurefirewall.md)<br>vim: [vimNetworkSessionAzureFirewall](vimnetworksessionazurefirewall.md) | Azure Firewall | 7 | 0.2.0 |
| ASim: [ASimNetworkSessionAzureNSG](asimnetworksessionazurensg.md)<br>vim: [vimNetworkSessionAzureNSG](vimnetworksessionazurensg.md) | Azure NSG flows | 2 | 0.1.1 |
| ASim: [ASimNetworkSessionBarracudaCEF](asimnetworksessionbarracudacef.md)<br>vim: [vimNetworkSessionBarracudaCEF](vimnetworksessionbarracudacef.md) | Barracuda WAF | 1 | 0.2.1 |
| ASim: [ASimNetworkSessionBarracudaWAF](asimnetworksessionbarracudawaf.md)<br>vim: [vimNetworkSessionBarracudaWAF](vimnetworksessionbarracudawaf.md) | Barracuda WAF | 1 | 0.2.1 |
| ASim: [ASimNetworkSessionCheckPointFirewall](asimnetworksessioncheckpointfirewall.md)<br>vim: [vimNetworkSessionCheckPointFirewall](vimnetworksessioncheckpointfirewall.md) | CheckPointFirewall | 1 | 1.2.0 |
| ASim: [ASimNetworkSessionCiscoASA](asimnetworksessionciscoasa.md)<br>vim: [vimNetworkSessionCiscoASA](vimnetworksessionciscoasa.md) | CiscoASA | 1 | 1.1.0 |
| ASim: [ASimNetworkSessionCiscoFirepower](asimnetworksessionciscofirepower.md)<br>vim: [vimNetworkSessionCiscoFirepower](vimnetworksessionciscofirepower.md) | Cisco Firepower | 1 | 0.1.0 |
| ASim: [ASimNetworkSessionCiscoISE](asimnetworksessionciscoise.md)<br>vim: [vimNetworkSessionCiscoISE](vimnetworksessionciscoise.md) | Cisco ISE | 1 | 1.1.0 |
| ASim: [ASimNetworkSessionCiscoMeraki](asimnetworksessionciscomeraki.md)<br>vim: [vimNetworkSessionCiscoMeraki](vimnetworksessionciscomeraki.md) | Cisco Meraki | 2 | 1.2.2 |
| ASim: [ASimNetworkSessionCiscoMerakiSyslog](asimnetworksessionciscomerakisyslog.md)<br>vim: [vimNetworkSessionCiscoMerakiSyslog](vimnetworksessionciscomerakisyslog.md) | Cisco Meraki | 2 | 1.2.2 |
| ASim: [ASimNetworkSessionCorelightZeek](asimnetworksessioncorelightzeek.md)<br>vim: [vimNetworkSessionCorelightZeek](vimnetworksessioncorelightzeek.md) | Corelight Zeek | 1 | 0.2 |
| ASim: [ASimNetworkSessionCrowdStrikeFalconHost](asimnetworksessioncrowdstrikefalconhost.md)<br>vim: [vimNetworkSessionCrowdStrikeFalconHost](vimnetworksessioncrowdstrikefalconhost.md) | CrowdStrike Falcon Endpoint Protection | 2 | 0.1.0 |
| ASim: [ASimNetworkSessionForcePointFirewall](asimnetworksessionforcepointfirewall.md)<br>vim: [vimNetworkSessionForcePointFirewall](vimnetworksessionforcepointfirewall.md) | ForcePointFirewall | 3 | 0.1 |
| ASim: [ASimNetworkSessionFortinetFortiGate](asimnetworksessionfortinetfortigate.md)<br>vim: [vimNetworkSessionFortinetFortiGate](vimnetworksessionfortinetfortigate.md) | Fortinet FortiGate | 1 | 0.6.0 |
| ASim: [ASimNetworkSessionIllumioSaaSCore](asimnetworksessionillumiosaascore.md)<br>vim: [vimNetworkSessionIllumioSaaSCore](vimnetworksessionillumiosaascore.md) | Illumio SaaS Core | 1 | 0.1.0 |
| ASim: [ASimNetworkSessionLinuxSysmon](asimnetworksessionlinuxsysmon.md)<br>vim: [vimNetworkSessionLinuxSysmon](vimnetworksessionlinuxsysmon.md) | Sysmon for Linux | 1 | 0.3.1 |
| ASim: [ASimNetworkSessionMD4IoTAgent](asimnetworksessionmd4iotagent.md)<br>vim: [vimNetworkSessionMD4IoTAgent](vimnetworksessionmd4iotagent.md) | Microsoft Defender for IoT | 1 | 0.2.1 |
| ASim: [ASimNetworkSessionMD4IoTSensor](asimnetworksessionmd4iotsensor.md)<br>vim: [vimNetworkSessionMD4IoTSensor](vimnetworksessionmd4iotsensor.md) | Microsoft Defender for IoT | 0 | 0.1 |
| ASim: [ASimNetworkSessionMicrosoft365Defender](asimnetworksessionmicrosoft365defender.md)<br>vim: [vimNetworkSessionMicrosoft365Defender](vimnetworksessionmicrosoft365defender.md) | M365 Defender for Endpoint | 1 | 0.4 |
| ASim: [ASimNetworkSessionMicrosoftSecurityEventFirewall](asimnetworksessionmicrosoftsecurityeventfirewall.md)<br>vim: [vimNetworkSessionMicrosoftSecurityEventFirewall](vimnetworksessionmicrosoftsecurityeventfirewall.md) | Windows Firewall | 2 | 0.5.0 |
| ASim: [ASimNetworkSessionMicrosoftSysmon](asimnetworksessionmicrosoftsysmon.md)<br>vim: [vimNetworkSessionMicrosoftSysmon](vimnetworksessionmicrosoftsysmon.md) | Windows Sysmon | 1 | 0.2.0 |
| ASim: [ASimNetworkSessionMicrosoftSysmonWindowsEvent](asimnetworksessionmicrosoftsysmonwindowsevent.md)<br>vim: [vimNetworkSessionMicrosoftSysmonWindowsEvent](vimnetworksessionmicrosoftsysmonwindowsevent.md) | Windows Sysmon | 1 | 0.2.1 |
| ASim: [ASimNetworkSessionMicrosoftWindowsEventFirewall](asimnetworksessionmicrosoftwindowseventfirewall.md)<br>vim: [vimNetworkSessionMicrosoftWindowsEventFirewall](vimnetworksessionmicrosoftwindowseventfirewall.md) | Windows Firewall | 1 | 0.5.0 |
| ASim: [ASimNetworkSessionNTANetAnalytics](asimnetworksessionntanetanalytics.md)<br>vim: [vimNetworkSessionNTANetAnalytics](vimnetworksessionntanetanalytics.md) | Azure NTANetAnalytics | 1 | 0.1.0 |
| ASim: [ASimNetworkSessionNative](asimnetworksessionnative.md)<br>vim: [vimNetworkSessionNative](vimnetworksessionnative.md) | Native | 1 | 0.3 |
| ASim: [ASimNetworkSessionPaloAltoCEF](asimnetworksessionpaloaltocef.md)<br>vim: [vimNetworkSessionPaloAltoCEF](vimnetworksessionpaloaltocef.md) | Palo Alto PanOS | 1 | 0.7.1 |
| ASim: [ASimNetworkSessionPaloAltoCortexDataLake](asimnetworksessionpaloaltocortexdatalake.md)<br>vim: [vimNetworkSessionPaloAltoCortexDataLake](vimnetworksessionpaloaltocortexdatalake.md) | Palo Alto Cortex Data Lake | 1 | 0.1.1 |
| ASim: [ASimNetworkSessionSentinelOne](asimnetworksessionsentinelone.md)<br>vim: [vimNetworkSessionSentinelOne](vimnetworksessionsentinelone.md) | SentinelOne | 1 | 0.1.0 |
| ASim: [ASimNetworkSessionSonicWallFirewall](asimnetworksessionsonicwallfirewall.md)<br>vim: [vimNetworkSessionSonicWallFirewall](vimnetworksessionsonicwallfirewall.md) | SonicWall | 1 | 0.1.0 |
| ASim: [ASimNetworkSessionVMConnection](asimnetworksessionvmconnection.md)<br>vim: [vimNetworkSessionVMConnection](vimnetworksessionvmconnection.md) | VMConnection | 1 | 0.2.1 |
| ASim: [ASimNetworkSessionVMwareCarbonBlackCloud](asimnetworksessionvmwarecarbonblackcloud.md)<br>vim: [vimNetworkSessionVMwareCarbonBlackCloud](vimnetworksessionvmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | 2 | 0.1.1 |
| ASim: [ASimNetworkSessionVectraAI](asimnetworksessionvectraai.md)<br>vim: [vimNetworkSessionVectraAI](vimnetworksessionvectraai.md) | Vectra AI Streams | 1 | 0.2 |
| ASim: [ASimNetworkSessionWatchGuardFirewareOS](asimnetworksessionwatchguardfirewareos.md)<br>vim: [vimNetworkSessionWatchGuardFirewareOS](vimnetworksessionwatchguardfirewareos.md) | WatchGuard Fireware OS | 1 | 0.1.4 |
| ASim: [ASimNetworkSessionZscalerZIA](asimnetworksessionzscalerzia.md)<br>vim: [vimNetworkSessionZscalerZIA](vimnetworksessionzscalerzia.md) | Zscaler ZIA Firewall | 1 | 0.4 |

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
| ASim: [ASimProcessCreateLinuxSysmon](asimprocesscreatelinuxsysmon.md)<br>vim: [vimProcessCreateLinuxSysmon](vimprocesscreatelinuxsysmon.md) | Sysmon for Linux | 1 | 0.2.1 |
| ASim: [ASimProcessCreateMicrosoftSecurityEvents](asimprocesscreatemicrosoftsecurityevents.md)<br>vim: [vimProcessCreateMicrosoftSecurityEvents](vimprocesscreatemicrosoftsecurityevents.md) | Security Events | 1 | 0.1.1 |
| ASim: [ASimProcessCreateMicrosoftWindowsEvents](asimprocesscreatemicrosoftwindowsevents.md)<br>vim: [vimProcessCreateMicrosoftWindowsEvents](vimprocesscreatemicrosoftwindowsevents.md) | Security Events | 1 | 0.3 |
| ASim: [ASimProcessCreateSentinelOne](asimprocesscreatesentinelone.md)<br>vim: [vimProcessCreateSentinelOne](vimprocesscreatesentinelone.md) | SentinelOne | 1 | 0.1.0 |
| ASim: [ASimProcessCreateTrendMicroVisionOne](asimprocesscreatetrendmicrovisionone.md)<br>vim: [vimProcessCreateTrendMicroVisionOne](vimprocesscreatetrendmicrovisionone.md) | Trend Micro Vision One | 1 | 0.1.0 |
| ASim: [ASimProcessCreateVMwareCarbonBlackCloud](asimprocesscreatevmwarecarbonblackcloud.md)<br>vim: [vimProcessCreateVMwareCarbonBlackCloud](vimprocesscreatevmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | 2 | 0.1.1 |
| ASim: [ASimProcessEventCreateMicrosoftSysmon](asimprocesseventcreatemicrosoftsysmon.md)<br>vim: [vimProcessEventCreateMicrosoftSysmon](vimprocesseventcreatemicrosoftsysmon.md) | Sysmon | 1 | 0.4.1 |
| ASim: [ASimProcessEventCreateMicrosoftSysmonWindowsEvent](asimprocesseventcreatemicrosoftsysmonwindowsevent.md)<br>vim: [vimProcessEventCreateMicrosoftSysmonWindowsEvent](vimprocesseventcreatemicrosoftsysmonwindowsevent.md) | Sysmon | 1 | 0.4.1 |
| ASim: [ASimProcessEventMD4IoT](asimprocesseventmd4iot.md)<br>vim: [vimProcessEventMD4IoT](vimprocesseventmd4iot.md) | Microsoft Defender for IoT | 1 | 0.1.1 |
| ASim: [ASimProcessEventMicrosoft365D](asimprocesseventmicrosoft365d.md)<br>vim: [vimProcessEventMicrosoft365D](vimprocesseventmicrosoft365d.md) | Microsoft 365 Defender for endpoint | 1 | 0.2.0 |
| ASim: [ASimProcessEventNative](asimprocesseventnative.md)<br>vim: [vimProcessEventNative](vimprocesseventnative.md) | Native | 1 | 0.1.0 |
| ASim: [ASimProcessEventTerminateMicrosoftSysmon](asimprocesseventterminatemicrosoftsysmon.md)<br>vim: [vimProcessEventTerminateMicrosoftSysmon](vimprocesseventterminatemicrosoftsysmon.md) | Microsoft Windows Events Sysmon | 1 | 0.3.1 |
| ASim: [ASimProcessEventTerminateMicrosoftSysmonWindowsEvent](asimprocesseventterminatemicrosoftsysmonwindowsevent.md)<br>vim: [vimProcessEventTerminateMicrosoftSysmonWindowsEvent](vimprocesseventterminatemicrosoftsysmonwindowsevent.md) | Microsoft Windows Events Sysmon | 1 | 0.4.1 |
| ASim: [ASimProcessTerminateLinuxSysmon](asimprocessterminatelinuxsysmon.md)<br>vim: [vimProcessTerminateLinuxSysmon](vimprocessterminatelinuxsysmon.md) | Sysmon for Linux | 1 | 0.1.1 |
| ASim: [ASimProcessTerminateMicrosoftSecurityEvents](asimprocessterminatemicrosoftsecurityevents.md)<br>vim: [vimProcessTerminateMicrosoftSecurityEvents](vimprocessterminatemicrosoftsecurityevents.md) | Security Events | 1 | 0.2 |
| ASim: [ASimProcessTerminateMicrosoftWindowsEvents](asimprocessterminatemicrosoftwindowsevents.md)<br>vim: [vimProcessTerminateMicrosoftWindowsEvents](vimprocessterminatemicrosoftwindowsevents.md) | Security Events | 1 | 0.2 |
| ASim: [ASimProcessTerminateVMwareCarbonBlackCloud](asimprocessterminatevmwarecarbonblackcloud.md)<br>vim: [vimProcessTerminateVMwareCarbonBlackCloud](vimprocessterminatevmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | 1 | 0.1.0 |

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
| ASim: [ASimRegistryEventMicrosoft365D](asimregistryeventmicrosoft365d.md)<br>vim: [vimRegistryEventMicrosoft365D](vimregistryeventmicrosoft365d.md) | Microsoft 365 Defender for Endpoint | 1 | 0.1.2 |
| ASim: [ASimRegistryEventMicrosoftSecurityEvent](asimregistryeventmicrosoftsecurityevent.md)<br>vim: [vimRegistryEventMicrosoftSecurityEvent](vimregistryeventmicrosoftsecurityevent.md) | Security Events | 3 | 0.3.1 |
| ASim: [ASimRegistryEventMicrosoftSysmon](asimregistryeventmicrosoftsysmon.md)<br>vim: [vimRegistryEventMicrosoftSysmon](vimregistryeventmicrosoftsysmon.md) | Microsoft Sysmon | 1 | 0.3.1 |
| ASim: [ASimRegistryEventMicrosoftSysmonWindowsEvent](asimregistryeventmicrosoftsysmonwindowsevent.md)<br>vim: [vimRegistryEventMicrosoftSysmonWindowsEvent](vimregistryeventmicrosoftsysmonwindowsevent.md) | Microsoft Sysmon | 1 | 0.3.1 |
| ASim: [ASimRegistryEventMicrosoftWindowsEvent](asimregistryeventmicrosoftwindowsevent.md)<br>vim: [vimRegistryEventMicrosoftWindowsEvent](vimregistryeventmicrosoftwindowsevent.md) | Security Events | 3 | 0.2.1 |
| ASim: [ASimRegistryEventNative](asimregistryeventnative.md)<br>vim: [vimRegistryEventNative](vimregistryeventnative.md) | Native | 1 | 0.1.0 |
| ASim: [ASimRegistryEventSentinelOne](asimregistryeventsentinelone.md)<br>vim: [vimRegistryEventSentinelOne](vimregistryeventsentinelone.md) | SentinelOne | 1 | 0.1.0 |
| ASim: [ASimRegistryEventTrendMicroVisionOne](asimregistryeventtrendmicrovisionone.md)<br>vim: [vimRegistryEventTrendMicroVisionOne](vimregistryeventtrendmicrovisionone.md) | Trend Micro Vision One | 1 | 0.1.0 |
| ASim: [ASimRegistryEventVMwareCarbonBlackCloud](asimregistryeventvmwarecarbonblackcloud.md)<br>vim: [vimRegistryEventVMwareCarbonBlackCloud](vimregistryeventvmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | 1 | 0.1.1 |

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
| ASim: [ASimUserManagementCiscoISE](asimusermanagementciscoise.md)<br>vim: [vimUserManagementCiscoISE](vimusermanagementciscoise.md) | Cisco ISE | 1 | 0.1.2 |
| ASim: [ASimUserManagementLinuxAuthpriv](asimusermanagementlinuxauthpriv.md)<br>vim: [vimUserManagementLinuxAuthpriv](vimusermanagementlinuxauthpriv.md) | Microsoft | 1 | 0.1.1 |
| ASim: [ASimUserManagementMicrosoftSecurityEvent](asimusermanagementmicrosoftsecurityevent.md)<br>vim: [vimUserManagementMicrosoftSecurityEvent](vimusermanagementmicrosoftsecurityevent.md) | Microsoft Security Event | 1 | 0.2.0 |
| ASim: [ASimUserManagementMicrosoftWindowsEvent](asimusermanagementmicrosoftwindowsevent.md)<br>vim: [vimUserManagementMicrosoftWindowsEvent](vimusermanagementmicrosoftwindowsevent.md) | Microsoft Windows Event | 1 | 0.2.1 |
| ASim: [ASimUserManagementNative](asimusermanagementnative.md)<br>vim: [vimUserManagementNative](vimusermanagementnative.md) | Native | 1 | 0.1.0 |
| ASim: [ASimUserManagementSentinelOne](asimusermanagementsentinelone.md)<br>vim: [vimUserManagementSentinelOne](vimusermanagementsentinelone.md) | SentinelOne | 1 | 0.1.1 |

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
| ASim: [ASimWebSessionApacheHTTPServer](asimwebsessionapachehttpserver.md)<br>vim: [vimWebSessionApacheHTTPServer](vimwebsessionapachehttpserver.md) | Apache HTTP Server | 1 | 0.1 |
| ASim: [ASimWebSessionAzureFirewall](asimwebsessionazurefirewall.md)<br>vim: [vimWebSessionAzureFirewall](vimwebsessionazurefirewall.md) | Azure Firewall | 1 | 0.1.0 |
| ASim: [ASimWebSessionBarracudaCEF](asimwebsessionbarracudacef.md)<br>vim: [vimWebSessionBarracudaCEF](vimwebsessionbarracudacef.md) | Barracuda WAF | 1 | 0.2.1 |
| ASim: [ASimWebSessionBarracudaWAF](asimwebsessionbarracudawaf.md)<br>vim: [vimWebSessionBarracudaWAF](vimwebsessionbarracudawaf.md) | Barracuda WAF | 1 | 0.2.2 |
| ASim: [ASimWebSessionCiscoFirepower](asimwebsessionciscofirepower.md)<br>vim: [vimWebSessionCiscoFirepower](vimwebsessionciscofirepower.md) | Cisco Firepower | 1 | 0.1.0 |
| ASim: [ASimWebSessionCiscoMeraki](asimwebsessionciscomeraki.md)<br>vim: [vimWebSessionCiscoMeraki](vimwebsessionciscomeraki.md) | Cisco Meraki | 2 | 0.1.1 |
| ASim: [ASimWebSessionCitrixNetScaler](asimwebsessioncitrixnetscaler.md)<br>vim: [vimWebSessionCitrixNetScaler](vimwebsessioncitrixnetscaler.md) | Citrix NetScaler | 1 | 0.1.1 |
| ASim: [ASimWebSessionF5ASM](asimwebsessionf5asm.md)<br>vim: [vimWebSessionF5ASM](vimwebsessionf5asm.md) | F5 BIG-IP Application Security Manager (ASM) | 1 | 0.1.0 |
| ASim: [ASimWebSessionFortinetFortiGate](asimwebsessionfortinetfortigate.md)<br>vim: [vimWebSessionFortinetFortiGate](vimwebsessionfortinetfortigate.md) | Fortinet FortiGate | 1 | 0.3.0 |
| ASim: [ASimWebSessionIIS](asimwebsessioniis.md)<br>vim: [vimWebSessionIIS](vimwebsessioniis.md) | Internet Information Services (IIS) | 1 | 0.2 |
| ASim: [ASimWebSessionNative](asimwebsessionnative.md)<br>vim: [vimWebSessionNative](vimwebsessionnative.md) | Native | 1 | 0.1 |
| ASim: [ASimWebSessionPaloAltoCEF](asimwebsessionpaloaltocef.md)<br>vim: [vimWebSessionPaloAltoCEF](vimwebsessionpaloaltocef.md) | Palo Alto Networks | 1 | 0.2 |
| ASim: [ASimWebSessionPaloAltoCortexDataLake](asimwebsessionpaloaltocortexdatalake.md)<br>vim: [vimWebSessionPaloAltoCortexDataLake](vimwebsessionpaloaltocortexdatalake.md) | Palo Alto Cortex Data Lake | 1 | 0.1.1 |
| ASim: [ASimWebSessionSonicWallFirewall](asimwebsessionsonicwallfirewall.md)<br>vim: [vimWebSessionSonicWallFirewall](vimwebsessionsonicwallfirewall.md) | SonicWall | 1 | 0.1.1 |
| ASim: [ASimWebSessionSquidProxy](asimwebsessionsquidproxy.md)<br>vim: [vimWebSessionSquidProxy](vimwebsessionsquidproxy.md) | Squid Proxy | 1 | 0.4.0 |
| ASim: [ASimWebSessionVectraAI](asimwebsessionvectraai.md)<br>vim: [vimWebSessionVectraAI](vimwebsessionvectraai.md) | Vectra AI Streams | 1 | 0.2 |
| ASim: [ASimWebSessionZscalerZIA](asimwebsessionzscalerzia.md)<br>vim: [vimWebSessionZscalerZIA](vimwebsessionzscalerzia.md) | Zscaler ZIA | 1 | 0.4.1 |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

