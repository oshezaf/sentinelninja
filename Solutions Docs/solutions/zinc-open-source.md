# Zinc Open Source

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Zinc Open Source Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-10-03 |
| **Solution Folder** | [Zinc Open Source](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zinc%20Open%20Source) |
| **Pre-requisites** | [Windows Security Events](windows-security-events.md), [Microsoft Defender XDR](microsoft-defender-xdr.md), [Windows Server DNS](windows-server-dns.md), [F5 Big-IP](f5-big-ip.md), [CiscoASA](ciscoasa.md), [PaloAlto-PAN-OS](paloalto-pan-os.md), [Common Event Format](common-event-format.md), [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md), [Check Point](check-point.md), [Microsoft 365](microsoft-365.md), [Azure Firewall](azure-firewall.md), [Windows Firewall](windows-firewall.md), [Windows Forwarded Events](windows-forwarded-events.md) |

Microsoft security research teams have detected a wide range of social engineering campaigns using weaponized legitimate open-source software by an actor tracked as ZINC.  ZINC employed traditional social engineering tactics by initially connecting with individuals on LinkedIn, followed by communication over WhatsApp, which acted as the means of delivery for their malicious payloads. ZINC was found weaponizing a wide range of open-source software including PuTTY, KiTTY, TightVNC, Sumatra PDF Reader etc. For more technical and in-depth information about the attack, please read the [Microsoft Security blog post](https://www.microsoft.com/security/blog/2022/09/29/zinc-weaponizing-open-source-software/).This solution provides content to detect and investigate signals related to the attack in Microsoft Sentinel.

For details on the required solutions, see the [Pre-requisites](#pre-requisites) section below.

**Keywords:** Zinc, Open Source, ZetaNile , Putty, Kitty, TightVNC , EventHorizon, FoggyBrass, PhantomStar, threat actor, Adversary.

## Contents

- [Pre-requisites](#pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Pre-requisites

This solution depends on **13 other solution(s)**:

| Solution |
|:---------|
| [Azure Firewall](azure-firewall.md) |
| [Check Point](check-point.md) |
| [CiscoASA](ciscoasa.md) |
| [Common Event Format](common-event-format.md) |
| [F5 Big-IP](f5-big-ip.md) |
| [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md) |
| [Microsoft 365](microsoft-365.md) |
| [Microsoft Defender XDR](microsoft-defender-xdr.md) |
| [PaloAlto-PAN-OS](paloalto-pan-os.md) |
| [Windows Firewall](windows-firewall.md) |
| [Windows Forwarded Events](windows-forwarded-events.md) |
| [Windows Security Events](windows-security-events.md) |
| [Windows Server DNS](windows-server-dns.md) |

## Data Connectors

**This solution does not include its own data connectors** but uses connectors from dependency solutions:

- [Windows DNS Events via AMA](../connectors/asimdnsactivitylogs.md) *(dependency on [Windows Server DNS](windows-server-dns.md))*
- [Azure Firewall](../connectors/azurefirewall.md) *(dependency on [Azure Firewall](azure-firewall.md))*
- [Common Event Format (CEF)](../connectors/cef.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Common Event Format (CEF) via AMA](../connectors/cefama.md) *(dependency on [Common Event Format](common-event-format.md))*
- [Cisco ASA via Legacy Agent](../connectors/ciscoasa.md) *(dependency on [CiscoASA](ciscoasa.md))*
- [Cisco ASA/FTD via AMA](../connectors/ciscoasaama.md) *(dependency on [CiscoASA](ciscoasa.md))*
- [DNS](../connectors/dns.md) *(dependency on [Windows Server DNS](windows-server-dns.md))*
- [F5 BIG-IP](../connectors/f5bigip.md) *(dependency on [F5 Big-IP](f5-big-ip.md))*
- [[Deprecated] Fortinet via Legacy Agent](../connectors/fortinet.md) *(dependency on [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md))*
- [[Deprecated] Fortinet via AMA](../connectors/fortinetama.md) *(dependency on [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md))*
- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) *(dependency on [Microsoft Defender XDR](microsoft-defender-xdr.md))*
- [Microsoft 365 (formerly, Office 365)](../connectors/office365.md) *(dependency on [Microsoft 365](microsoft-365.md))*
- [[Deprecated] Palo Alto Networks (Firewall) via Legacy Agent](../connectors/paloaltonetworks.md) *(dependency on [PaloAlto-PAN-OS](paloalto-pan-os.md))*
- [[Deprecated] Palo Alto Networks (Firewall) via AMA](../connectors/paloaltonetworksama.md) *(dependency on [PaloAlto-PAN-OS](paloalto-pan-os.md))*
- [Security Events via Legacy Agent](../connectors/securityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*
- [Windows Firewall](../connectors/windowsfirewall.md) *(dependency on [Windows Firewall](windows-firewall.md))*
- [Windows Firewall Events via AMA](../connectors/windowsfirewallama.md) *(dependency on [Windows Firewall](windows-firewall.md))*
- [Windows Forwarded Events](../connectors/windowsforwardedevents.md) *(dependency on [Windows Forwarded Events](windows-forwarded-events.md))*
- [Windows Security Events via AMA](../connectors/windowssecurityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*

## Tables Used

This solution queries **13 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Analytics |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Analytics |
| [`DeviceEvents`](../tables/deviceevents.md) | Analytics |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | Analytics |
| [`DeviceInfo`](../tables/deviceinfo.md) | Analytics |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | Analytics |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | Analytics |
| [`DnsEvents`](../tables/dnsevents.md) | Analytics |
| [`Event`](../tables/event.md) | Analytics |
| [`Image`](../tables/image.md) | Analytics |
| [`OfficeActivity`](../tables/officeactivity.md) | Analytics |
| [`SecurityEvent`](../tables/securityevent.md) | Analytics |
| [`VMConnection`](../tables/vmconnection.md) | Analytics |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | Analytics |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [AV detections related to Zinc actors](../content/zinc-open-source-av-detections-related-to-zinc-actors-3705158d-e008-49c9-92dd-e538e1549090-62580aab.md) | High | Impact | [`DeviceInfo`](../tables/deviceinfo.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md) | High | Persistence | [`DeviceEvents`](../tables/deviceevents.md)<br>[`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`Event`](../tables/event.md)<br>[`Image`](../tables/image.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
| [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md) | High | Persistence | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`DeviceEvents`](../tables/deviceevents.md)<br>[`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`VMConnection`](../tables/vmconnection.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                            |
|-------------|--------------------------------|-------------------------------------------------------------------------------|
| 3.0.3       | 30-05-2024                     | Added missing AMA **Data Connector** reference in **Analytic rules**  |
| 3.0.2       | 27-02-2024                     | Tagged for dependent solutions for deployment                                 |
| 3.0.1       | 19-12-2023                     | Corrected typo mistake *Microsoft Windows DNS* to *Windows Server DNS*        |
| 3.0.0       | 25-10-2023                     | Changes for rebranding from Microsoft 365 Defender to Microsoft Defender XDR  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Solutions Index](../solutions-index.md)

