# Legacy IOC based Threat Protection

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Legacy IOC based Threat Protection Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.5 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-12-19 |
| **Solution Folder** | [Legacy IOC based Threat Protection](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Legacy%20IOC%20based%20Threat%20Protection) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-ioclegacy) · Popularity: 🔵 Medium (56%) |
| **Pre-requisites** | [SquidProxy](squidproxy.md), [Windows Server DNS](windows-server-dns.md), [CiscoASA](ciscoasa.md), [PaloAlto-PAN-OS](paloalto-pan-os.md), [Microsoft Defender XDR](microsoft-defender-xdr.md), [Azure Firewall](azure-firewall.md), zscaler1579058425289.zscaler_internet_access_mss, [Infoblox NIOS](infoblox-nios.md), [GoogleCloudPlatformDNS](googlecloudplatformdns.md), [NXLogDNSLogs](nxlogdnslogs.md), [CiscoUmbrella](ciscoumbrella.md), [Corelight](corelight.md), [Amazon Web Services](amazon-web-services.md), [Windows Forwarded Events](windows-forwarded-events.md), [Microsoft Sysmon For Linux](microsoft-sysmon-for-linux.md), [Microsoft 365](microsoft-365.md), [Windows Security Events](windows-security-events.md), [Microsoft Entra ID](microsoft-entra-id.md), [Azure Activity](azure-activity.md), [F5 Big-IP](f5-big-ip.md), [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md), [Check Point](check-point.md), [Common Event Format](common-event-format.md), [Windows Firewall](windows-firewall.md) |

Microsoft Security Research, based on ongoing trends and exploits creates content that help identify existence of known IOCs based on known prevalent attacks and threat actor tactics/techniques, such as Nobelium, Gallium, Solorigate, etc. This solution contains packaged content written on some legacy IOCs that have been prevalent in the past but may still be relevant.

For details on the required solutions, see the [Pre-requisites](#pre-requisites) section below.

## Contents

- [Pre-requisites](#pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Pre-requisites

This solution depends on **23 other solution(s)**:

| Solution |
|:---------|
| [Amazon Web Services](amazon-web-services.md) |
| [Azure Activity](azure-activity.md) |
| [Azure Firewall](azure-firewall.md) |
| [Check Point](check-point.md) |
| [CiscoASA](ciscoasa.md) |
| [CiscoUmbrella](ciscoumbrella.md) |
| [Common Event Format](common-event-format.md) |
| [Corelight](corelight.md) |
| [F5 Big-IP](f5-big-ip.md) |
| [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md) |
| [GoogleCloudPlatformDNS](googlecloudplatformdns.md) |
| [Infoblox NIOS](infoblox-nios.md) |
| [Microsoft 365](microsoft-365.md) |
| [Microsoft Defender XDR](microsoft-defender-xdr.md) |
| [Microsoft Entra ID](microsoft-entra-id.md) |
| [Microsoft Sysmon For Linux](microsoft-sysmon-for-linux.md) |
| [NXLogDNSLogs](nxlogdnslogs.md) |
| [PaloAlto-PAN-OS](paloalto-pan-os.md) |
| [SquidProxy](squidproxy.md) |
| [Windows Firewall](windows-firewall.md) |
| [Windows Forwarded Events](windows-forwarded-events.md) |
| [Windows Security Events](windows-security-events.md) |
| [Windows Server DNS](windows-server-dns.md) |

## Data Connectors

**This solution does not include its own data connectors** but uses connectors from dependency solutions:

- [Windows DNS Events via AMA](../connectors/asimdnsactivitylogs.md) *(dependency on [Windows Server DNS](windows-server-dns.md))*
- [Amazon Web Services](../connectors/aws.md) *(dependency on [Amazon Web Services](amazon-web-services.md))*
- [Amazon Web Services S3](../connectors/awss3.md) *(dependency on [Amazon Web Services](amazon-web-services.md))*
- [Amazon Web Services S3 WAF](../connectors/awss3wafccpdefinition.md) *(dependency on [Amazon Web Services](amazon-web-services.md))*
- [Microsoft Entra ID](../connectors/azureactivedirectory.md) *(dependency on [Microsoft Entra ID](microsoft-entra-id.md))*
- [Azure Activity](../connectors/azureactivity.md) *(dependency on [Azure Activity](azure-activity.md))*
- [Azure Firewall](../connectors/azurefirewall.md) *(dependency on [Azure Firewall](azure-firewall.md))*
- [Common Event Format (CEF)](../connectors/cef.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Common Event Format (CEF) via AMA](../connectors/cefama.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md) *(dependency on [CiscoASA](ciscoasa.md))*
- [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) *(dependency on [CiscoASA](ciscoasa.md))*
- [Cisco Cloud Security](../connectors/ciscoumbrelladataconnector.md) *(dependency on [CiscoUmbrella](ciscoumbrella.md))*
- [Cisco Cloud Security (using elastic premium plan)](../connectors/ciscoumbrelladataconnectorelasticpremium.md) *(dependency on [CiscoUmbrella](ciscoumbrella.md))*
- [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) *(dependency on [Corelight](corelight.md))*
- [DNS](../connectors/dns.md) *(dependency on [Windows Server DNS](windows-server-dns.md))*
- [F5 BIG-IP](../connectors/f5bigip.md) *(dependency on [F5 Big-IP](f5-big-ip.md))*
- [[Deprecated] Fortinet via Legacy Agent](../connectors/fortinet.md) *(dependency on [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md))*
- [[Deprecated] Fortinet via AMA](../connectors/fortinetama.md) *(dependency on [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md))*
- [[DEPRECATED] Google Cloud Platform DNS](../connectors/gcpdnsdataconnector.md) *(dependency on [GoogleCloudPlatformDNS](googlecloudplatformdns.md))*
- [Google Cloud Platform DNS (via Codeless Connector Framework)](../connectors/gcpdnslogsccpdefinition.md) *(dependency on [GoogleCloudPlatformDNS](googlecloudplatformdns.md))*
- [[Deprecated] Infoblox NIOS](../connectors/infobloxnios.md) *(dependency on [Infoblox NIOS](infoblox-nios.md))*
- [[Deprecated] Microsoft Sysmon For Linux](../connectors/microsoftsysmonforlinux.md) *(dependency on [Microsoft Sysmon For Linux](microsoft-sysmon-for-linux.md))*
- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) *(dependency on [Microsoft Defender XDR](microsoft-defender-xdr.md))*
- [NXLog DNS Logs](../connectors/nxlogdnslogs.md) *(dependency on [NXLogDNSLogs](nxlogdnslogs.md))*
- [Microsoft 365 (formerly, Office 365)](../connectors/office365.md) *(dependency on [Microsoft 365](microsoft-365.md))*
- [[Deprecated] Palo Alto Networks (Firewall) via Legacy Agent](../connectors/paloaltonetworks.md) *(dependency on [PaloAlto-PAN-OS](paloalto-pan-os.md))*
- [[Deprecated] Palo Alto Networks (Firewall) via AMA](../connectors/paloaltonetworksama.md) *(dependency on [PaloAlto-PAN-OS](paloalto-pan-os.md))*
- [Security Events via Legacy Agent](../connectors/securityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*
- [[Deprecated] Squid Proxy](../connectors/squidproxy.md) *(dependency on [SquidProxy](squidproxy.md))*
- [Windows Firewall](../connectors/windowsfirewall.md) *(dependency on [Windows Firewall](windows-firewall.md))*
- [Windows Firewall Events via AMA](../connectors/windowsfirewallama.md) *(dependency on [Windows Firewall](windows-firewall.md))*
- [Windows Forwarded Events](../connectors/windowsforwardedevents.md) *(dependency on [Windows Forwarded Events](windows-forwarded-events.md))*
- [Windows Security Events via AMA](../connectors/windowssecurityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*

## Tables Used

This solution queries **9 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Hunting |
| [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md) | Hunting |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Hunting |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | Hunting |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | Hunting |
| [`Event`](../tables/event.md) | Hunting |
| [`SecurityEvent`](../tables/securityevent.md) | Hunting |
| [`VMConnection`](../tables/vmconnection.md) | Hunting |
| [`WindowsEvent`](../tables/windowsevent.md) | Hunting |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | Hunting |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 10 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Connection from external IP to OMI related Ports](../content/legacy-ioc-based-threat-protection-connection-from-external-ip-to-omi-related-ports-767b8f6d-8029-4c92-afe1-282167d9d49a-0ad0779a.md) | Reconnaissance, InitialAccess | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)<br>[`VMConnection`](../tables/vmconnection.md) |
| [Dev-0056 Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0056-command-line-activity-november-2021-e2629949-2043-4421-8064-bca23c8491dd-1cdb73c2.md) | CommandAndControl | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dev-0322 Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0322-command-line-activity-november-2021-78fa22f9-0c13-4847-bbe6-6a7aa1b47547-84856956.md) | Persistence, LateralMovement, CommandAndControl | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dev-0322 Command Line Activity November 2021 (ASIM Version)](../content/legacy-ioc-based-threat-protection-dev-0322-command-line-activity-november-2021-asim-version-6bfea14f-2122-46b3-8f8b-3947e0fb6d92-de921320.md) | Persistence, LateralMovement, CommandAndControl | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dev-0322 File Drop Activity November 2021](../content/legacy-ioc-based-threat-protection-dev-0322-file-drop-activity-november-2021-5bf2d4d8-ea03-4673-aaf8-716a61446022-414e8f6c.md) | Persistence, CommandAndControl | [`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Dev-0322 File Drop Activity November 2021 (ASIM Version)](../content/legacy-ioc-based-threat-protection-dev-0322-file-drop-activity-november-2021-asim-version-9b72769e-6ab1-4736-988b-018d92dc5e62-87c81fe1.md) | Persistence, CommandAndControl | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Known Nylon Typhoon Registry modifications patterns](../content/legacy-ioc-based-threat-protection-known-nylon-typhoon-registry-modifications-patterns-f090f8f4a-b986-42d2-b536-e0795c723e25-f442d105.md) | Persistence | [`Event`](../tables/event.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Nylon Typhoon Command Line Activity November 2021](../content/legacy-ioc-based-threat-protection-nylon-typhoon-command-line-activity-november-2021-bb30abbc-9af6-4a37-9536-e9207e023989-bdd1efea.md) | Collection | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Retrospective hunt for Forest Blizzard IP IOCs](../content/legacy-ioc-based-threat-protection-retrospective-hunt-for-forest-blizzard-ip-iocs-b8b7574f-1cd6-4308-822a-ab07256106f8-95c2528a.md) | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [SolarWinds Inventory](../content/legacy-ioc-based-threat-protection-solarwinds-inventory-278592b5-612b-48a4-bb38-4c01ff8ee2a5-c7f23741.md) | Execution | [`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`Event`](../tables/event.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.0.5       | 03-06-2024                     | Added missing AMA **Data Connector** reference in **Hunting Query**     |
| 3.0.4       | 22-02-2024                     | Tagged for dependent solutions for deployment                                  |
| 3.0.3       | 19-12-2023                     | Corrected typo mistake *Microsoft Windows DNS* to *Windows Server DNS*         |                           
| 3.0.2       | 12-12-2023                     | Removed deprecated **Analytical Rules**                                        |
| 3.0.1       | 07-11-2023                     | Changes for rebranding from Azure Active Directory to Microsoft Entra ID & Microsoft 365 Defender to Microsoft Defender XDR   |
| 3.0.0       | 19-05-2023                     | Deprecating outdated IOC Based **Analytic Rules** 		                        |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

