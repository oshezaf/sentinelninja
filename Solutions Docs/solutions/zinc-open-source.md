# Zinc Open Source

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Zinc Open Source Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

Microsoft security research teams have detected a wide range of social engineering campaigns using weaponized legitimate open-source software by an actor tracked as ZINC.  ZINC employed traditional social engineering tactics by initially connecting with individuals on LinkedIn, followed by communication over WhatsApp, which acted as the means of delivery for their malicious payloads. ZINC was found weaponizing a wide range of open-source software including PuTTY, KiTTY, TightVNC, Sumatra PDF Reader etc. For more technical and in-depth information about the attack, please read the [Microsoft Security blog post](https://www.microsoft.com/security/blog/2022/09/29/zinc-weaponizing-open-source-software/).This solution provides content to detect and investigate signals related to the attack in Microsoft Sentinel.

**Pre-requisites:**

This is a [domain solution](https://learn.microsoft.com/azure/sentinel/sentinel-solutions-catalog#domain-solutions) and does not include any data connectors. The content in this solution supports the connectors listed below. Install one or more of the listed solutions, to unlock the value provided by this solution.

  1.Windows Security Events

  2.Microsoft Defender XDR

  3.Windows Server DNS

  4.F5 Advanced WAF

  5.Cisco ASA

  6.Palo Alto Networks

  7.Common Event Format

  8.Fortinet FortiGate

  9.Check Point

  10.Microsoft 365

  11.Azure Firewall

  12.Microsoft Windows Firewall

  13.Windows Forwarded Events

**Keywords:** Zinc, Open Source, ZetaNile , Putty, Kitty, TightVNC , EventHorizon, FoggyBrass, PhantomStar, threat actor, Adversary.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-10-03 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zinc%20Open%20Source](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zinc%20Open%20Source) |
| **Dependencies** | [Windows Security Events](windows-security-events.md), [Microsoft Defender XDR](microsoft-defender-xdr.md), [Windows Server DNS](windows-server-dns.md), [F5 Big-IP](f5-big-ip.md), [CiscoASA](ciscoasa.md), [PaloAlto-PAN-OS](paloalto-pan-os.md), [Common Event Format](common-event-format.md), [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md), [Check Point](check-point.md), [Microsoft 365](microsoft-365.md), [Azure Firewall](azure-firewall.md), [Windows Firewall](windows-firewall.md), [Windows Forwarded Events](windows-forwarded-events.md) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **12 table(s)** from its content items:

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
| [Zinc Actor IOCs files - October 2022](../content/zinc-open-source-zinc-actor-iocs-files-october-2022-9a7f6651-801b-491c-a548-8b454b356eaa-72407d32.md) | High | Persistence | [`DeviceEvents`](../tables/deviceevents.md)<br>[`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`Event`](../tables/event.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
| [[Deprecated] - Zinc Actor IOCs domains hashes IPs and useragent - October 2022](../content/zinc-open-source-[deprecated]-zinc-actor-iocs-domains-hashes-ips-and-useragent-october-2022-95543d6d-f00d-4193-a63f-4edeefb7ec36-8da482ab.md) | High | Persistence | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`DeviceEvents`](../tables/deviceevents.md)<br>[`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`DnsEvents`](../tables/dnsevents.md)<br>[`Event`](../tables/event.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`VMConnection`](../tables/vmconnection.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                            |
|-------------|--------------------------------|-------------------------------------------------------------------------------|
| 3.0.3       | 30-05-2024                     | Added missing AMA **Data Connector** reference in **Analytic rules**  |
| 3.0.2       | 27-02-2024                     | Tagged for dependent solutions for deployment                                 |
| 3.0.1       | 19-12-2023                     | Corrected typo mistake *Microsoft Windows DNS* to *Windows Server DNS*        |
| 3.0.0       | 25-10-2023                     | Changes for rebranding from Microsoft 365 Defender to Microsoft Defender XDR  |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

