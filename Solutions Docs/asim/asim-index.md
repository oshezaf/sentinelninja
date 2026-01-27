# <img src="../images/asim-badge.png" alt="ASIM" height="32"> ASIM Parsers Index

The Advanced Security Information Model (ASIM) provides a layer of abstraction between the various data sources and the user. ASIM parsers normalize data from different sources to a common schema, enabling queries that work across multiple data sources.

📚 **Learn more:** [ASIM-based domain solutions for Microsoft Sentinel](https://learn.microsoft.com/azure/sentinel/domain-based-essential-solutions)

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

---

**11 schemas** with 82 source parser pairs and 13 union parser pairs. See [📊 Statistics](../statistics.md) for detailed breakdowns.

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

| Parser | Built-in Name | Version |
|:-------|:--------------|:--------|
| [ASimAlertEvent](asimalertevent.md) | `_ASim_AlertEvent` | 0.1.0 |
| [imAlertEvent](imalertevent.md) | `_Im_AlertEvent` | 0.1.0 |

### Supported Products

[Microsoft Defender XDR](asim-products-index.md#microsoft-defender-xdr), [SentinelOne](asim-products-index.md#sentinelone)

### Source Parsers

| Parser | Product | Solution | Version |
|:-------|:--------|:---------|:--------|
| [MicrosoftDefenderXDR](asimalerteventmicrosoftdefenderxdr.md) | Microsoft Defender XDR |  | 0.1.0 |
| [SentinelOneSingularity](asimalerteventsentinelonesingularity.md) | SentinelOne | [SentinelOne](../solutions/sentinelone.md) | 0.1.0 |

## AuditEvent

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version |
|:-------|:--------------|:--------|
| [ASimAuditEvent](asimauditevent.md) | `_ASim_AuditEvent` | 0.1.3 |
| [imAuditEvent](imauditevent.md) | `_Im_AuditEvent` | 0.1.4 |

### Supported Products

[Barracuda WAF](asim-products-index.md#barracuda-waf), [Cisco ISE](asim-products-index.md#cisco-ise), [Cisco Meraki](asim-products-index.md#cisco-meraki), [CrowdStrike Falcon Endpoint Protection](asim-products-index.md#crowdstrike-falcon-endpoint-protection), [Illumio Core](asim-products-index.md#illumio-core), [Infoblox BloxOne](asim-products-index.md#infoblox-bloxone), [Microsoft Azure](asim-products-index.md#microsoft-azure), [Microsoft SharePoint](asim-products-index.md#microsoft-sharepoint), [Microsoft Windows](asim-products-index.md#microsoft-windows), [Native](asim-products-index.md#native), [SentinelOne](asim-products-index.md#sentinelone), [Vectra](asim-products-index.md#vectra), [VMware Carbon Black Cloud](asim-products-index.md#vmware-carbon-black-cloud)

### Source Parsers

| Parser | Product | Solution | Version |
|:-------|:--------|:---------|:--------|
| [AzureActivity](asimauditeventazureactivity.md) | Microsoft Azure | [Azure Activity](../solutions/azure-activity.md) | 0.2 |
| [BarracudaCEF](asimauditeventbarracudacef.md) | Barracuda WAF | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.2.1 |
| [BarracudaWAF](asimauditeventbarracudawaf.md) | Barracuda WAF |  | 0.2.1 |
| [CiscoISE](asimauditeventciscoise.md) | Cisco ISE | [Syslog](../solutions/syslog.md) | 0.1 |
| [CiscoMeraki](asimauditeventciscomeraki.md) | Cisco Meraki | [CiscoMeraki](../solutions/ciscomeraki.md)<br>[CustomLogsAma](../solutions/customlogsama.md) | 0.2.1 |
| [CiscoMerakiSyslog](asimauditeventciscomerakisyslog.md) | Cisco Meraki | [Syslog](../solutions/syslog.md) | 0.2.1 |
| [CrowdStrikeFalconHost](asimauditeventcrowdstrikefalconhost.md) | CrowdStrike Falcon Endpoint Protection | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1.0 |
| [IllumioSaaSCore](asimauditeventillumiosaascore.md) | Illumio Core | [IllumioSaaS](../solutions/illumiosaas.md) | 0.2.1 |
| [InfobloxBloxOne](asimauditeventinfobloxbloxone.md) | Infoblox BloxOne | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1.0 |
| [MicrosoftEvent](asimauditeventmicrosoftevent.md) | Microsoft Windows | [MimecastTIRegional](../solutions/mimecasttiregional.md) | 0.2.1 |
| [MicrosoftExchangeAdmin365](asimauditeventmicrosoftexchangeadmin365.md) | Microsoft SharePoint |  | 0.2 |
| [MicrosoftSecurityEvents](asimauditeventmicrosoftsecurityevents.md) | Microsoft Windows | [Windows Security Events](../solutions/windows-security-events.md) | 0.2.1 |
| [MicrosoftWindowsEvents](asimauditeventmicrosoftwindowsevents.md) | Microsoft Windows | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) | 0.2.1 |
| [Native](asimauditeventnative.md) | Native | [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md)<br>[CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[Workday](../solutions/workday.md) | 0.1.0 |
| [SentinelOne](asimauditeventsentinelone.md) | SentinelOne | [SentinelOne](../solutions/sentinelone.md) | 0.1.0 |
| [VMwareCarbonBlackCloud](asimauditeventvmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) | 0.2.0 |
| [VectraXDRAudit](asimauditeventvectraxdraudit.md) | Vectra | [Vectra XDR](../solutions/vectra-xdr.md) | 0.1.1 |

## Authentication

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version |
|:-------|:--------------|:--------|
| [ASimAuthentication](asimauthentication.md) | `_ASim_Authentication` | 0.2.6 |
| [imAuthentication](imauthentication.md) | `_Im_Authentication` | 0.3.3 |

### Supported Products

[AWS](asim-products-index.md#aws), [Barracuda WAF](asim-products-index.md#barracuda-waf), [Cisco Adaptive Security Appliance (ASA)](asim-products-index.md#cisco-adaptive-security-appliance-asa), [Cisco ISE](asim-products-index.md#cisco-ise), [Cisco Meraki](asim-products-index.md#cisco-meraki), [CrowdStrike Falcon Endpoint Protection](asim-products-index.md#crowdstrike-falcon-endpoint-protection), [Google Workspace](asim-products-index.md#google-workspace), [Illumio](asim-products-index.md#illumio), [M365 Defender for EndPoint](asim-products-index.md#m365-defender-for-endpoint), [Microsoft Defender for IoT](asim-products-index.md#microsoft-defender-for-iot), [Microsoft Entra ID](asim-products-index.md#microsoft-entra-id), [Native](asim-products-index.md#native), [Okta](asim-products-index.md#okta), [OpenSSH](asim-products-index.md#openssh), [Palo Alto Cortex Data Lake](asim-products-index.md#palo-alto-cortex-data-lake), [PostgreSQL](asim-products-index.md#postgresql), [Salesforce Service Cloud](asim-products-index.md#salesforce-service-cloud), [SentinelOne](asim-products-index.md#sentinelone), [su](asim-products-index.md#su), [sudo](asim-products-index.md#sudo), [Vectra](asim-products-index.md#vectra), [VMware Carbon Black Cloud](asim-products-index.md#vmware-carbon-black-cloud), [Windows Security Events](asim-products-index.md#windows-security-events)

### Source Parsers

| Parser | Product | Solution | Version |
|:-------|:--------|:---------|:--------|
| [AADManagedIdentitySignInLogs](asimauthenticationaadmanagedidentitysigninlogs.md) | Microsoft Entra ID | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) | 0.2.2 |
| [AADNonInteractiveUserSignInLogs](asimauthenticationaadnoninteractiveusersigninlogs.md) | Microsoft Entra ID | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) | 0.2.2 |
| [AADServicePrincipalSignInLogs](asimauthenticationaadserviceprincipalsigninlogs.md) | Microsoft Entra ID | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) | 0.2.2 |
| [AWSCloudTrail](asimauthenticationawscloudtrail.md) | AWS | [Amazon Web Services](../solutions/amazon-web-services.md) | 0.2.1 |
| [BarracudaWAF](asimauthenticationbarracudawaf.md) | Barracuda WAF | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1 |
| [CiscoASA](asimauthenticationciscoasa.md) | Cisco Adaptive Security Appliance (ASA) | [CiscoASA](../solutions/ciscoasa.md)<br>[Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1.1 |
| [CiscoISE](asimauthenticationciscoise.md) | Cisco ISE | [Syslog](../solutions/syslog.md) | 0.1.0 |
| [CiscoMeraki](asimauthenticationciscomeraki.md) | Cisco Meraki | [CiscoMeraki](../solutions/ciscomeraki.md)<br>[CustomLogsAma](../solutions/customlogsama.md) | 0.2.1 |
| [CiscoMerakiSyslog](asimauthenticationciscomerakisyslog.md) | Cisco Meraki | [Syslog](../solutions/syslog.md) | 0.2.1 |
| [CrowdStrikeFalconHost](asimauthenticationcrowdstrikefalconhost.md) | CrowdStrike Falcon Endpoint Protection | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1.0 |
| [GoogleWorkspace](asimauthenticationgoogleworkspace.md) | Google Workspace |  | 0.1.0 |
| [IllumioSaaSCore](asimauthenticationillumiosaascore.md) | Illumio | [IllumioSaaS](../solutions/illumiosaas.md) | 0.3.0 |
| [M365Defender](asimauthenticationm365defender.md) | M365 Defender for EndPoint |  | 0.1.3 |
| [MD4IoT](asimauthenticationmd4iot.md) | Microsoft Defender for IoT |  | 0.1.2 |
| [MicrosoftWindowsEvent](asimauthenticationmicrosoftwindowsevent.md) | Windows Security Events | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)<br>[Windows Forwarded Events](../solutions/windows-forwarded-events.md)<br>[Windows Security Events](../solutions/windows-security-events.md) | 0.2.1 |
| [Native](asimauthenticationnative.md) | Native | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) | 0.1.0 |
| [OktaSSO](asimauthenticationoktasso.md) | Okta | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) | 0.4.0 |
| [OktaV2](asimauthenticationoktav2.md) | Okta | [Okta Single Sign-On](../solutions/okta-single-sign-on.md) | 0.4.0 |
| [PaloAltoCortexDataLake](asimauthenticationpaloaltocortexdatalake.md) | Palo Alto Cortex Data Lake | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1.0 |
| [PostgreSQL](asimauthenticationpostgresql.md) | PostgreSQL | [CustomLogsAma](../solutions/customlogsama.md) | 0.1.4 |
| [SalesforceSC](asimauthenticationsalesforcesc.md) | Salesforce Service Cloud |  | 0.1.0 |
| [SentinelOne](asimauthenticationsentinelone.md) | SentinelOne | [SentinelOne](../solutions/sentinelone.md) | 0.1.1 |
| [SigninLogs](asimauthenticationsigninlogs.md) | Microsoft Entra ID | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) | 0.4.0 |
| [Sshd](asimauthenticationsshd.md) | OpenSSH | [Syslog](../solutions/syslog.md) | 0.2.4 |
| [Su](asimauthenticationsu.md) | su | [Syslog](../solutions/syslog.md) | 0.2.1 |
| [Sudo](asimauthenticationsudo.md) | sudo | [Syslog](../solutions/syslog.md) | 0.1.2 |
| [VMwareCarbonBlackCloud](asimauthenticationvmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) | 0.1.0 |
| [VectraXDRAudit](asimauthenticationvectraxdraudit.md) | Vectra | [Vectra XDR](../solutions/vectra-xdr.md) | 0.1 |

## DhcpEvent

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version |
|:-------|:--------------|:--------|
| [ASimDhcpEvent](asimdhcpevent.md) | `_ASim_DhcpEvent` | 0.1.0 |
| [imDhcpEvent](imdhcpevent.md) | `_Im_DhcpEvent` | 0.1.0 |

### Supported Products

[Infoblox BloxOne](asim-products-index.md#infoblox-bloxone), [Native](asim-products-index.md#native)

### Source Parsers

| Parser | Product | Solution | Version |
|:-------|:--------|:---------|:--------|
| [InfobloxBloxOne](asimdhcpeventinfobloxbloxone.md) | Infoblox BloxOne | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1.0 |
| [Native](asimdhcpeventnative.md) | Native |  | 0.1.0 |

## Dns

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version |
|:-------|:--------------|:--------|
| [ASimDns](asimdns.md) | `_ASim_Dns` | 0.5.2 |
| [imDns](imdns.md) | `_Im_Dns` | 0.5.2 |

### Supported Products

[Azure Firewall](asim-products-index.md#azure-firewall), [Cisco Umbrella](asim-products-index.md#cisco-umbrella), [Corelight Zeek](asim-products-index.md#corelight-zeek), [Fortinet FortiGate](asim-products-index.md#fortinet-fortigate), [GCP Cloud DNS](asim-products-index.md#gcp-cloud-dns), [Infoblox BloxOne](asim-products-index.md#infoblox-bloxone), [Infoblox NIOS](asim-products-index.md#infoblox-nios), [Microsoft Windows Events Sysmon](asim-products-index.md#microsoft-windows-events-sysmon), [MS DNS Events](asim-products-index.md#ms-dns-events), [Native](asim-products-index.md#native), [SentinelOne](asim-products-index.md#sentinelone), [Vectra AI Streams](asim-products-index.md#vectra-ai-streams), [Zscaler ZIA DNS](asim-products-index.md#zscaler-zia-dns)

### Source Parsers

| Parser | Product | Solution | Version |
|:-------|:--------|:---------|:--------|
| [AzureFirewall](asimdnsazurefirewall.md) | Azure Firewall | [Azure Batch Account](../solutions/azure-batch-account.md)<br>[Azure Cognitive Search](../solutions/azure-cognitive-search.md)<br>[Azure Data Lake Storage Gen1](../solutions/azure-data-lake-storage-gen1.md)<br>[Azure Event Hubs](../solutions/azure-event-hubs.md)<br>[Azure Firewall](../solutions/azure-firewall.md)<br>[Azure Key Vault](../solutions/azure-key-vault.md)<br>[Azure Logic Apps](../solutions/azure-logic-apps.md)<br>[Azure Service Bus](../solutions/azure-service-bus.md)<br>[Azure Stream Analytics](../solutions/azure-stream-analytics.md)<br>[SlashNext](../solutions/slashnext.md) | 0.4.0 |
| [CiscoUmbrella](asimdnsciscoumbrella.md) | Cisco Umbrella | [CiscoUmbrella](../solutions/ciscoumbrella.md) | 0.3 |
| [CorelightZeek](asimdnscorelightzeek.md) | Corelight Zeek | [Corelight](../solutions/corelight.md) | 0.5 |
| [FortinetFortiGate](asimdnsfortinetfortigate.md) | Fortinet FortiGate | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1.2 |
| [Gcp](asimdnsgcp.md) | GCP Cloud DNS |  | 0.4 |
| [InfobloxBloxOne](asimdnsinfobloxbloxone.md) | Infoblox BloxOne | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1.0 |
| [InfobloxNIOS](asimdnsinfobloxnios.md) | Infoblox NIOS | [Syslog](../solutions/syslog.md) | 0.6.1 |
| [MicrosoftNXlog](asimdnsmicrosoftnxlog.md) | MS DNS Events | [NXLogDNSLogs](../solutions/nxlogdnslogs.md) | 0.5.0 |
| [MicrosoftOMS](asimdnsmicrosoftoms.md) | MS DNS Events | [Windows Server DNS](../solutions/windows-server-dns.md) | 0.4 |
| [MicrosoftSysmon](asimdnsmicrosoftsysmon.md) | Microsoft Windows Events Sysmon | [MimecastTIRegional](../solutions/mimecasttiregional.md) | 0.5.1 |
| [MicrosoftSysmonWindowsEvent](asimdnsmicrosoftsysmonwindowsevent.md) | Microsoft Windows Events Sysmon | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) | 0.5.1 |
| [Native](asimdnsnative.md) | Native | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) | 0.6.1 |
| [SentinelOne](asimdnssentinelone.md) | SentinelOne | [SentinelOne](../solutions/sentinelone.md) | 0.1.0 |
| [VectraAI](asimdnsvectraai.md) | Vectra AI Streams | [CustomLogsAma](../solutions/customlogsama.md)<br>[Vectra AI Stream](../solutions/vectra-ai-stream.md) | 0.1.1 |
| [ZscalerZIA](asimdnszscalerzia.md) | Zscaler ZIA DNS | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.6 |

## FileEvent

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version |
|:-------|:--------------|:--------|
| [ASimFileEvent](asimfileevent.md) | `_ASim_FileEvent` | 0.1.3 |
| [imFileEvent](imfileevent.md) | `_Im_FileEvent` | 0.2.1 |

### Supported Products

[Google Workspace](asim-products-index.md#google-workspace), [Microsoft 365 Defender for EndPoint](asim-products-index.md#microsoft-365-defender-for-endpoint), [Microsoft Azure Blob Storage](asim-products-index.md#microsoft-azure-blob-storage), [Microsoft Azure File Storage](asim-products-index.md#microsoft-azure-file-storage), [Microsoft Azure Queue Storage](asim-products-index.md#microsoft-azure-queue-storage), [Microsoft Azure Table Storage](asim-products-index.md#microsoft-azure-table-storage), [Microsoft SharePoint](asim-products-index.md#microsoft-sharepoint), [Microsoft Sysmon for Linux](asim-products-index.md#microsoft-sysmon-for-linux), [Microsoft Windows Events](asim-products-index.md#microsoft-windows-events), [Native](asim-products-index.md#native), [SentinelOne](asim-products-index.md#sentinelone), [VMware Carbon Black Cloud](asim-products-index.md#vmware-carbon-black-cloud), [Windows Sysmon](asim-products-index.md#windows-sysmon)

### Source Parsers

| Parser | Product | Solution | Version |
|:-------|:--------|:---------|:--------|
| [AzureBlobStorage](asimfileeventazureblobstorage.md) | Microsoft Azure Blob Storage | [Azure Storage](../solutions/azure-storage.md) | 0.1.1 |
| [AzureFileStorage](asimfileeventazurefilestorage.md) | Microsoft Azure File Storage | [Azure Storage](../solutions/azure-storage.md) | 0.1.1 |
| [AzureQueueStorage](asimfileeventazurequeuestorage.md) | Microsoft Azure Queue Storage | [Azure Storage](../solutions/azure-storage.md) | 0.1.1 |
| [AzureTableStorage](asimfileeventazuretablestorage.md) | Microsoft Azure Table Storage | [Azure Storage](../solutions/azure-storage.md) | 0.1.1 |
| [GoogleWorkspace](asimfileeventgoogleworkspace.md) | Google Workspace |  | 0.1.0 |
| [LinuxSysmonFileCreated](asimfileeventlinuxsysmonfilecreated.md) | Microsoft Sysmon for Linux | [Syslog](../solutions/syslog.md) | 0.2.1 |
| [LinuxSysmonFileDeleted](asimfileeventlinuxsysmonfiledeleted.md) | Microsoft Sysmon for Linux | [Syslog](../solutions/syslog.md) | 0.2.1 |
| [Microsoft365D](asimfileeventmicrosoft365d.md) | Microsoft 365 Defender for EndPoint |  | 0.2.1 |
| [MicrosoftSecurityEvents](asimfileeventmicrosoftsecurityevents.md) | Microsoft Windows Events | [Windows Security Events](../solutions/windows-security-events.md) | 0.2.0 |
| [MicrosoftSharePoint](asimfileeventmicrosoftsharepoint.md) | Microsoft SharePoint |  | 0.3.1 |
| [MicrosoftSysmon](asimfileeventmicrosoftsysmon.md) | Windows Sysmon | [MimecastTIRegional](../solutions/mimecasttiregional.md) | 0.5.1 |
| [MicrosoftSysmonWindowsEvent](asimfileeventmicrosoftsysmonwindowsevent.md) | Windows Sysmon | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) | 0.4.1 |
| [MicrosoftWindowsEvents](asimfileeventmicrosoftwindowsevents.md) | Microsoft Windows Events | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) | 0.2.0 |
| [Native](asimfileeventnative.md) | Native | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) | 0.1.1 |
| [SentinelOne](asimfileeventsentinelone.md) | SentinelOne | [SentinelOne](../solutions/sentinelone.md) | 0.1.0 |
| [VMwareCarbonBlackCloud](asimfileeventvmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) | 0.1.1 |

## NetworkSession

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version |
|:-------|:--------------|:--------|
| [ASimNetworkSession](asimnetworksession.md) | `_ASim_NetworkSession` | 0.7.1 |
| [imNetworkSession](imnetworksession.md) | `_Im_NetworkSession` | 0.6.2 |

### Supported Products

[AppGate SDP](asim-products-index.md#appgate-sdp), [AWS VPC](asim-products-index.md#aws-vpc), [Azure Firewall](asim-products-index.md#azure-firewall), [Azure NSG flows](asim-products-index.md#azure-nsg-flows), [Azure NTANetAnalytics](asim-products-index.md#azure-ntanetanalytics), [Barracuda WAF](asim-products-index.md#barracuda-waf), [CheckPointFirewall](asim-products-index.md#checkpointfirewall), [Cisco Firepower](asim-products-index.md#cisco-firepower), [Cisco ISE](asim-products-index.md#cisco-ise), [Cisco Meraki](asim-products-index.md#cisco-meraki), [CiscoASA](asim-products-index.md#ciscoasa), [Corelight Zeek](asim-products-index.md#corelight-zeek), [CrowdStrike Falcon Endpoint Protection](asim-products-index.md#crowdstrike-falcon-endpoint-protection), [ForcePointFirewall](asim-products-index.md#forcepointfirewall), [Fortinet FortiGate](asim-products-index.md#fortinet-fortigate), [Illumio SaaS Core](asim-products-index.md#illumio-saas-core), [M365 Defender for Endpoint](asim-products-index.md#m365-defender-for-endpoint), [Microsoft Defender for IoT](asim-products-index.md#microsoft-defender-for-iot), [Native](asim-products-index.md#native), [Palo Alto Cortex Data Lake](asim-products-index.md#palo-alto-cortex-data-lake), [Palo Alto PanOS](asim-products-index.md#palo-alto-panos), [SentinelOne](asim-products-index.md#sentinelone), [SonicWall](asim-products-index.md#sonicwall), [Sysmon for Linux](asim-products-index.md#sysmon-for-linux), [Vectra AI Streams](asim-products-index.md#vectra-ai-streams), [VMConnection](asim-products-index.md#vmconnection), [VMware Carbon Black Cloud](asim-products-index.md#vmware-carbon-black-cloud), [WatchGuard Fireware OS](asim-products-index.md#watchguard-fireware-os), [Windows Firewall](asim-products-index.md#windows-firewall), [Windows Sysmon](asim-products-index.md#windows-sysmon), [Zscaler ZIA Firewall](asim-products-index.md#zscaler-zia-firewall)

### Source Parsers

| Parser | Product | Solution | Version |
|:-------|:--------|:---------|:--------|
| [AWSVPC](asimnetworksessionawsvpc.md) | AWS VPC | [AWS VPC Flow Logs](../solutions/aws-vpc-flow-logs.md) | 0.3 |
| [AppGateSDP](asimnetworksessionappgatesdp.md) | AppGate SDP | [Syslog](../solutions/syslog.md) | 0.2 |
| [AzureFirewall](asimnetworksessionazurefirewall.md) | Azure Firewall | [Azure Batch Account](../solutions/azure-batch-account.md)<br>[Azure Cognitive Search](../solutions/azure-cognitive-search.md)<br>[Azure Data Lake Storage Gen1](../solutions/azure-data-lake-storage-gen1.md)<br>[Azure Event Hubs](../solutions/azure-event-hubs.md)<br>[Azure Key Vault](../solutions/azure-key-vault.md)<br>[Azure Logic Apps](../solutions/azure-logic-apps.md)<br>[Azure Service Bus](../solutions/azure-service-bus.md)<br>[Azure Stream Analytics](../solutions/azure-stream-analytics.md)<br>[MimecastTIRegional](../solutions/mimecasttiregional.md)<br>[SlashNext](../solutions/slashnext.md) | 0.2.0 |
| [AzureNSG](asimnetworksessionazurensg.md) | Azure NSG flows | [MimecastTIRegional](../solutions/mimecasttiregional.md) | 0.1.1 |
| [BarracudaCEF](asimnetworksessionbarracudacef.md) | Barracuda WAF | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.2.1 |
| [BarracudaWAF](asimnetworksessionbarracudawaf.md) | Barracuda WAF |  | 0.2.1 |
| [CheckPointFirewall](asimnetworksessioncheckpointfirewall.md) | CheckPointFirewall | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 1.2.0 |
| [CiscoASA](asimnetworksessionciscoasa.md) | CiscoASA | [CiscoASA](../solutions/ciscoasa.md)<br>[Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 1.1.0 |
| [CiscoFirepower](asimnetworksessionciscofirepower.md) | Cisco Firepower | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1.0 |
| [CiscoISE](asimnetworksessionciscoise.md) | Cisco ISE | [Syslog](../solutions/syslog.md) | 1.1.0 |
| [CiscoMeraki](asimnetworksessionciscomeraki.md) | Cisco Meraki | [CiscoMeraki](../solutions/ciscomeraki.md)<br>[CustomLogsAma](../solutions/customlogsama.md) | 1.2.2 |
| [CiscoMerakiSyslog](asimnetworksessionciscomerakisyslog.md) | Cisco Meraki | [Syslog](../solutions/syslog.md) | 1.2.2 |
| [CorelightZeek](asimnetworksessioncorelightzeek.md) | Corelight Zeek | [Corelight](../solutions/corelight.md) | 0.2 |
| [CrowdStrikeFalconHost](asimnetworksessioncrowdstrikefalconhost.md) | CrowdStrike Falcon Endpoint Protection | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1.0 |
| [ForcePointFirewall](asimnetworksessionforcepointfirewall.md) | ForcePointFirewall | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1 |
| [FortinetFortiGate](asimnetworksessionfortinetfortigate.md) | Fortinet FortiGate | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.6.0 |
| [IllumioSaaSCore](asimnetworksessionillumiosaascore.md) | Illumio SaaS Core | [IllumioSaaS](../solutions/illumiosaas.md) | 0.1.0 |
| [LinuxSysmon](asimnetworksessionlinuxsysmon.md) | Sysmon for Linux | [Syslog](../solutions/syslog.md) | 0.3.1 |
| [MD4IoTAgent](asimnetworksessionmd4iotagent.md) | Microsoft Defender for IoT |  | 0.2.1 |
| [MD4IoTSensor](asimnetworksessionmd4iotsensor.md) | Microsoft Defender for IoT |  | 0.1 |
| [Microsoft365Defender](asimnetworksessionmicrosoft365defender.md) | M365 Defender for Endpoint |  | 0.4 |
| [MicrosoftSecurityEventFirewall](asimnetworksessionmicrosoftsecurityeventfirewall.md) | Windows Firewall | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)<br>[MimecastTIRegional](../solutions/mimecasttiregional.md)<br>[Windows Security Events](../solutions/windows-security-events.md) | 0.5.0 |
| [MicrosoftSysmon](asimnetworksessionmicrosoftsysmon.md) | Windows Sysmon | [MimecastTIRegional](../solutions/mimecasttiregional.md) | 0.2.0 |
| [MicrosoftSysmonWindowsEvent](asimnetworksessionmicrosoftsysmonwindowsevent.md) | Windows Sysmon | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) | 0.2.1 |
| [MicrosoftWindowsEventFirewall](asimnetworksessionmicrosoftwindowseventfirewall.md) | Windows Firewall | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) | 0.5.0 |
| [NTANetAnalytics](asimnetworksessionntanetanalytics.md) | Azure NTANetAnalytics |  | 0.1.0 |
| [Native](asimnetworksessionnative.md) | Native | [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md)<br>[CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) | 0.3 |
| [PaloAltoCEF](asimnetworksessionpaloaltocef.md) | Palo Alto PanOS | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.7.1 |
| [PaloAltoCortexDataLake](asimnetworksessionpaloaltocortexdatalake.md) | Palo Alto Cortex Data Lake | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1.1 |
| [SentinelOne](asimnetworksessionsentinelone.md) | SentinelOne | [SentinelOne](../solutions/sentinelone.md) | 0.1.0 |
| [SonicWallFirewall](asimnetworksessionsonicwallfirewall.md) | SonicWall | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1.0 |
| [VMConnection](asimnetworksessionvmconnection.md) | VMConnection |  | 0.2.1 |
| [VMwareCarbonBlackCloud](asimnetworksessionvmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) | 0.1.1 |
| [VectraAI](asimnetworksessionvectraai.md) | Vectra AI Streams | [CustomLogsAma](../solutions/customlogsama.md)<br>[Vectra AI Stream](../solutions/vectra-ai-stream.md) | 0.2 |
| [WatchGuardFirewareOS](asimnetworksessionwatchguardfirewareos.md) | WatchGuard Fireware OS | [Syslog](../solutions/syslog.md) | 0.1.4 |
| [ZscalerZIA](asimnetworksessionzscalerzia.md) | Zscaler ZIA Firewall | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.4 |

## ProcessEvent

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version |
|:-------|:--------------|:--------|
| [ASimProcessEvent](asimprocessevent.md) | `_ASim_ProcessEvent` | 0.1.2 |
| [ASimProcessEventCreate](asimprocesseventcreate.md) | `_ASim_ProcessEvent_Create` | 0.1.1 |
| [ASimProcessEventTerminate](asimprocesseventterminate.md) | `_ASim_ProcessEvent_Terminate` | 0.1.1 |
| [imProcessCreate](improcesscreate.md) | `_Im_ProcessCreate` | 0.1.2 |
| [imProcessEvent](improcessevent.md) | `_Im_ProcessEvent` | 0.1.3 |
| [imProcessTerminate](improcessterminate.md) | `_Im_ProcessTerminate` | 0.1.2 |

### Supported Products

[Microsoft 365 Defender for endpoint](asim-products-index.md#microsoft-365-defender-for-endpoint), [Microsoft Defender for IoT](asim-products-index.md#microsoft-defender-for-iot), [Microsoft Windows Events Sysmon](asim-products-index.md#microsoft-windows-events-sysmon), [Native](asim-products-index.md#native), [Security Events](asim-products-index.md#security-events), [SentinelOne](asim-products-index.md#sentinelone), [Sysmon](asim-products-index.md#sysmon), [Sysmon for Linux](asim-products-index.md#sysmon-for-linux), [Trend Micro Vision One](asim-products-index.md#trend-micro-vision-one), [VMware Carbon Black Cloud](asim-products-index.md#vmware-carbon-black-cloud)

### Source Parsers

| Parser | Product | Solution | Version |
|:-------|:--------|:---------|:--------|
| [ProcessCreateLinuxSysmon](asimprocesscreatelinuxsysmon.md) | Sysmon for Linux | [Syslog](../solutions/syslog.md) | 0.2.1 |
| [ProcessCreateMicrosoftSecurityEvents](asimprocesscreatemicrosoftsecurityevents.md) | Security Events | [Windows Security Events](../solutions/windows-security-events.md) | 0.1.1 |
| [ProcessCreateMicrosoftWindowsEvents](asimprocesscreatemicrosoftwindowsevents.md) | Security Events | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) | 0.3 |
| [ProcessCreateSentinelOne](asimprocesscreatesentinelone.md) | SentinelOne | [SentinelOne](../solutions/sentinelone.md) | 0.1.0 |
| [ProcessCreateTrendMicroVisionOne](asimprocesscreatetrendmicrovisionone.md) | Trend Micro Vision One | [Trend Micro Vision One](../solutions/trend-micro-vision-one.md) | 0.1.0 |
| [ProcessCreateVMwareCarbonBlackCloud](asimprocesscreatevmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) | 0.1.1 |
| [CreateMicrosoftSysmon](asimprocesseventcreatemicrosoftsysmon.md) | Sysmon | [MimecastTIRegional](../solutions/mimecasttiregional.md) | 0.4.1 |
| [CreateMicrosoftSysmonWindowsEvent](asimprocesseventcreatemicrosoftsysmonwindowsevent.md) | Sysmon | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) | 0.4.1 |
| [MD4IoT](asimprocesseventmd4iot.md) | Microsoft Defender for IoT |  | 0.1.1 |
| [Microsoft365D](asimprocesseventmicrosoft365d.md) | Microsoft 365 Defender for endpoint |  | 0.2.0 |
| [Native](asimprocesseventnative.md) | Native | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) | 0.1.0 |
| [TerminateMicrosoftSysmon](asimprocesseventterminatemicrosoftsysmon.md) | Microsoft Windows Events Sysmon | [MimecastTIRegional](../solutions/mimecasttiregional.md) | 0.3.1 |
| [TerminateMicrosoftSysmonWindowsEvent](asimprocesseventterminatemicrosoftsysmonwindowsevent.md) | Microsoft Windows Events Sysmon | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) | 0.4.1 |
| [ProcessTerminateLinuxSysmon](asimprocessterminatelinuxsysmon.md) | Sysmon for Linux | [Syslog](../solutions/syslog.md) | 0.1.1 |
| [ProcessTerminateMicrosoftSecurityEvents](asimprocessterminatemicrosoftsecurityevents.md) | Security Events | [Windows Security Events](../solutions/windows-security-events.md) | 0.2 |
| [ProcessTerminateMicrosoftWindowsEvents](asimprocessterminatemicrosoftwindowsevents.md) | Security Events | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) | 0.2 |
| [ProcessTerminateVMwareCarbonBlackCloud](asimprocessterminatevmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) | 0.1.0 |

## RegistryEvent

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version |
|:-------|:--------------|:--------|
| [ASimRegistry](asimregistry.md) | `_ASim_RegistryEvent` | 0.1.3 |
| [imRegistry](imregistry.md) | `_Im_RegistryEvent` | 0.1.4 |

### Supported Products

[Microsoft 365 Defender for Endpoint](asim-products-index.md#microsoft-365-defender-for-endpoint), [Microsoft Sysmon](asim-products-index.md#microsoft-sysmon), [Native](asim-products-index.md#native), [Security Events](asim-products-index.md#security-events), [SentinelOne](asim-products-index.md#sentinelone), [Trend Micro Vision One](asim-products-index.md#trend-micro-vision-one), [VMware Carbon Black Cloud](asim-products-index.md#vmware-carbon-black-cloud)

### Source Parsers

| Parser | Product | Solution | Version |
|:-------|:--------|:---------|:--------|
| [Microsoft365D](asimregistryeventmicrosoft365d.md) | Microsoft 365 Defender for Endpoint | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) | 0.1.2 |
| [MicrosoftSecurityEvent](asimregistryeventmicrosoftsecurityevent.md) | Security Events | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)<br>[Windows Security Events](../solutions/windows-security-events.md) | 0.3.1 |
| [MicrosoftSysmon](asimregistryeventmicrosoftsysmon.md) | Microsoft Sysmon | [MimecastTIRegional](../solutions/mimecasttiregional.md) | 0.3.1 |
| [MicrosoftSysmonWindowsEvent](asimregistryeventmicrosoftsysmonwindowsevent.md) | Microsoft Sysmon | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) | 0.3.1 |
| [MicrosoftWindowsEvent](asimregistryeventmicrosoftwindowsevent.md) | Security Events | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) | 0.2.1 |
| [Native](asimregistryeventnative.md) | Native | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) | 0.1.0 |
| [SentinelOne](asimregistryeventsentinelone.md) | SentinelOne | [SentinelOne](../solutions/sentinelone.md) | 0.1.0 |
| [TrendMicroVisionOne](asimregistryeventtrendmicrovisionone.md) | Trend Micro Vision One | [Trend Micro Vision One](../solutions/trend-micro-vision-one.md) | 0.1.0 |
| [VMwareCarbonBlackCloud](asimregistryeventvmwarecarbonblackcloud.md) | VMware Carbon Black Cloud | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) | 0.1.1 |

## UserManagement

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version |
|:-------|:--------------|:--------|
| [ASimUserManagement](asimusermanagement.md) | `_ASim_UserManagement` | 0.1.2 |
| [imUserManagement](imusermanagement.md) | `_Im_UserManagement` | 0.1.3 |

### Supported Products

[Cisco ISE](asim-products-index.md#cisco-ise), [Microsoft](asim-products-index.md#microsoft), [Microsoft Security Event](asim-products-index.md#microsoft-security-event), [Microsoft Windows Event](asim-products-index.md#microsoft-windows-event), [Native](asim-products-index.md#native), [SentinelOne](asim-products-index.md#sentinelone)

### Source Parsers

| Parser | Product | Solution | Version |
|:-------|:--------|:---------|:--------|
| [CiscoISE](asimusermanagementciscoise.md) | Cisco ISE | [Syslog](../solutions/syslog.md) | 0.1.2 |
| [LinuxAuthpriv](asimusermanagementlinuxauthpriv.md) | Microsoft | [Syslog](../solutions/syslog.md) | 0.1.1 |
| [MicrosoftSecurityEvent](asimusermanagementmicrosoftsecurityevent.md) | Microsoft Security Event | [Windows Security Events](../solutions/windows-security-events.md) | 0.2.0 |
| [MicrosoftWindowsEvent](asimusermanagementmicrosoftwindowsevent.md) | Microsoft Windows Event | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) | 0.2.1 |
| [Native](asimusermanagementnative.md) | Native | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md) | 0.1.0 |
| [SentinelOne](asimusermanagementsentinelone.md) | SentinelOne | [SentinelOne](../solutions/sentinelone.md) | 0.1.1 |

## WebSession

### Union Parsers

These are the main entry points that combine all source parsers:

| Parser | Built-in Name | Version |
|:-------|:--------------|:--------|
| [ASimWebSession](asimwebsession.md) | `_ASim_WebSession` | 0.5.4 |
| [imWebSession](imwebsession.md) | `_Im_WebSession` | 0.6.2 |

### Supported Products

[Apache HTTP Server](asim-products-index.md#apache-http-server), [Azure Firewall](asim-products-index.md#azure-firewall), [Barracuda WAF](asim-products-index.md#barracuda-waf), [Cisco Firepower](asim-products-index.md#cisco-firepower), [Cisco Meraki](asim-products-index.md#cisco-meraki), [Citrix NetScaler](asim-products-index.md#citrix-netscaler), [F5 BIG-IP Application Security Manager (ASM)](asim-products-index.md#f5-big-ip-application-security-manager-asm), [Fortinet FortiGate](asim-products-index.md#fortinet-fortigate), [Internet Information Services (IIS)](asim-products-index.md#internet-information-services-iis), [Native](asim-products-index.md#native), [Palo Alto Cortex Data Lake](asim-products-index.md#palo-alto-cortex-data-lake), [Palo Alto Networks](asim-products-index.md#palo-alto-networks), [SonicWall](asim-products-index.md#sonicwall), [Squid Proxy](asim-products-index.md#squid-proxy), [Vectra AI Streams](asim-products-index.md#vectra-ai-streams), [Zscaler ZIA](asim-products-index.md#zscaler-zia)

### Source Parsers

| Parser | Product | Solution | Version |
|:-------|:--------|:---------|:--------|
| [ApacheHTTPServer](asimwebsessionapachehttpserver.md) | Apache HTTP Server | [CustomLogsAma](../solutions/customlogsama.md) | 0.1 |
| [AzureFirewall](asimwebsessionazurefirewall.md) | Azure Firewall |  | 0.1.0 |
| [BarracudaCEF](asimwebsessionbarracudacef.md) | Barracuda WAF | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.2.1 |
| [BarracudaWAF](asimwebsessionbarracudawaf.md) | Barracuda WAF |  | 0.2.2 |
| [CiscoFirepower](asimwebsessionciscofirepower.md) | Cisco Firepower | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1.0 |
| [CiscoMeraki](asimwebsessionciscomeraki.md) | Cisco Meraki | [Cisco SD-WAN](../solutions/cisco-sd-wan.md)<br>[CiscoMeraki](../solutions/ciscomeraki.md)<br>[CustomLogsAma](../solutions/customlogsama.md)<br>[Forescout (Legacy)](../solutions/forescout-legacy.md) | 0.1.1 |
| [CitrixNetScaler](asimwebsessioncitrixnetscaler.md) | Citrix NetScaler | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1.1 |
| [F5ASM](asimwebsessionf5asm.md) | F5 BIG-IP Application Security Manager (ASM) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1.0 |
| [FortinetFortiGate](asimwebsessionfortinetfortigate.md) | Fortinet FortiGate | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.3.0 |
| [IIS](asimwebsessioniis.md) | Internet Information Services (IIS) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md) | 0.2 |
| [Native](asimwebsessionnative.md) | Native | [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md) | 0.1 |
| [PaloAltoCEF](asimwebsessionpaloaltocef.md) | Palo Alto Networks | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.2 |
| [PaloAltoCortexDataLake](asimwebsessionpaloaltocortexdatalake.md) | Palo Alto Cortex Data Lake | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1.1 |
| [SonicWallFirewall](asimwebsessionsonicwallfirewall.md) | SonicWall | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.1.1 |
| [SquidProxy](asimwebsessionsquidproxy.md) | Squid Proxy | [CustomLogsAma](../solutions/customlogsama.md) | 0.4.0 |
| [VectraAI](asimwebsessionvectraai.md) | Vectra AI Streams | [CustomLogsAma](../solutions/customlogsama.md)<br>[Vectra AI Stream](../solutions/vectra-ai-stream.md) | 0.2 |
| [ZscalerZIA](asimwebsessionzscalerzia.md) | Zscaler ZIA | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) | 0.4.1 |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

