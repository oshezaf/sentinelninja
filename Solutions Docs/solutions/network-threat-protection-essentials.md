# Network Threat Protection Essentials

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Network Threat Protection Essentials Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-11-16 |
| **Solution Folder** | [Network Threat Protection Essentials](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Network%20Threat%20Protection%20Essentials) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-networkthreatdetection) |
| **Popularity** | 🔵 Medium (61%) |
| **Pre-requisites** | [Microsoft 365](microsoft-365.md), [Amazon Web Services](amazon-web-services.md), [Windows Server DNS](windows-server-dns.md), [Azure Firewall](azure-firewall.md), [Windows Forwarded Events](windows-forwarded-events.md), [Zscaler Internet Access](zscaler-internet-access.md), [PaloAlto-PAN-OS](paloalto-pan-os.md), [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md), [Check Point](check-point.md) |

The **Network Threat Protection Essentials** solution contain queries that identifies suspicious network behavior based on various data sources ingested in Sentinel. The solution contains queries to detect common network-based attacks - things like malicious user agents, mining pools, Base64 encoded IPv4 address in request URL etc. The solution will be constantly updated to add more detection/hunting query as well as other sentinel content.
 
For details on the required solutions, see the [Pre-requisites](#pre-requisites) section below.

**Keywords:** Malicious IP/User agent, DNS, TOR, mining

## Contents

- [Pre-requisites](#pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Pre-requisites

This solution depends on **9 other solution(s)**:

| Solution |
|:---------|
| [Amazon Web Services](amazon-web-services.md) |
| [Azure Firewall](azure-firewall.md) |
| [Check Point](check-point.md) |
| [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md) |
| [Microsoft 365](microsoft-365.md) |
| [PaloAlto-PAN-OS](paloalto-pan-os.md) |
| [Windows Forwarded Events](windows-forwarded-events.md) |
| [Windows Server DNS](windows-server-dns.md) |
| [Zscaler Internet Access](zscaler-internet-access.md) |

## Data Connectors

**This solution does not include its own data connectors** but uses connectors from dependency solutions:

- [Windows DNS Events via AMA](../connectors/asimdnsactivitylogs.md) *(dependency on [Windows Server DNS](windows-server-dns.md))*
- [Amazon Web Services](../connectors/aws.md) *(dependency on [Amazon Web Services](amazon-web-services.md))*
- [Amazon Web Services S3](../connectors/awss3.md) *(dependency on [Amazon Web Services](amazon-web-services.md))*
- [Amazon Web Services S3 WAF](../connectors/awss3wafccpdefinition.md) *(dependency on [Amazon Web Services](amazon-web-services.md))*
- [Azure Firewall](../connectors/azurefirewall.md) *(dependency on [Azure Firewall](azure-firewall.md))*
- [DNS](../connectors/dns.md) *(dependency on [Windows Server DNS](windows-server-dns.md))*
- [[Deprecated] Fortinet via Legacy Agent](../connectors/fortinet.md) *(dependency on [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md))*
- [[Deprecated] Fortinet via AMA](../connectors/fortinetama.md) *(dependency on [Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel](fortinet-fortigate-next-generation-firewall-connector-for-microsoft-sentinel.md))*
- [Microsoft 365 (formerly, Office 365)](../connectors/office365.md) *(dependency on [Microsoft 365](microsoft-365.md))*
- [[Deprecated] Palo Alto Networks (Firewall) via Legacy Agent](../connectors/paloaltonetworks.md) *(dependency on [PaloAlto-PAN-OS](paloalto-pan-os.md))*
- [[Deprecated] Palo Alto Networks (Firewall) via AMA](../connectors/paloaltonetworksama.md) *(dependency on [PaloAlto-PAN-OS](paloalto-pan-os.md))*
- [Windows Forwarded Events](../connectors/windowsforwardedevents.md) *(dependency on [Windows Forwarded Events](windows-forwarded-events.md))*
- [[Deprecated] Zscaler via Legacy Agent](../connectors/zscaler.md) *(dependency on [Zscaler Internet Access](zscaler-internet-access.md))*
- [[Deprecated] Zscaler via AMA](../connectors/zscalerama.md) *(dependency on [Zscaler Internet Access](zscaler-internet-access.md))*

## Tables Used

This solution queries **6 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AWSCloudTrail`](../tables/awscloudtrail.md) | Analytics, Hunting |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Analytics, Hunting |
| [`OfficeActivity`](../tables/officeactivity.md) | Analytics, Hunting |
| [`SecurityEvent`](../tables/securityevent.md) | Analytics |
| [`W3CIISLog`](../tables/w3ciislog.md) | Analytics, Hunting |
| [`WindowsEvent`](../tables/windowsevent.md) | Analytics |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 3 |
| Analytic Rules | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Network endpoint to host executable correlation](../content/network-threat-protection-essentials-network-endpoint-to-host-executable-correlation-01f64465-b1ef-41ea-a7f5-31553a11ad43-f4ed06da.md) | Medium | Execution | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [New UserAgent observed in last 24 hours](../content/network-threat-protection-essentials-new-useragent-observed-in-last-24-hours-b725d62c-eb77-42ff-96f6-bdc6745fc6e0-a94f1913.md) | Low | InitialAccess, CommandAndControl, Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`W3CIISLog`](../tables/w3ciislog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Base64 encoded IPv4 address in request url](../content/network-threat-protection-essentials-base64-encoded-ipv4-address-in-request-url-39156a1d-c9e3-439e-967b-be7dcba918d9-ac55ba03.md) | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Exploit and Pentest Framework User Agent](../content/network-threat-protection-essentials-exploit-and-pentest-framework-user-agent-df75ac6c-7b0b-40d2-82e4-191c012f1a07-77056d12.md) | InitialAccess, CommandAndControl, Execution | [`AWSCloudTrail`](../tables/awscloudtrail.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`W3CIISLog`](../tables/w3ciislog.md) |
| [Risky base64 encoded command in URL](../content/network-threat-protection-essentials-risky-base64-encoded-command-in-url-c46eeb45-c324-4a84-9df1-248c6d1507bb-5cdc18f9.md) | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.0.2       | 13-01-2026                  | Updated non-functional links from Exploit and Pentest Framework User Agent **Hunting query** |
| 3.0.1       | 23-02-2024                     | Tagged for dependent solutions for deployment                                  |
| 3.0.0       | 19-12-2023                     | Corrected typo mistake *Microsoft Windows DNS* to *Windows Server DNS*         |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

