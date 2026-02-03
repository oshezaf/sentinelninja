# Attacker Tools Threat Protection Essentials

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Attacker Tools Threat Protection Essentials Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The **Attacker Tools Threat Protection Essentials** solution contains security content that is relevant for detection of tools commonly used by attackers in various campaigns. These tools can be commercial, open-source, built-in or publicly available and have historically been seen used by adversaries in different phases of the ATTACK kill chain.  
 
 **Pre-requisites:** 
 
 This is a [domain solution](https://learn.microsoft.com/en-us/azure/sentinel/sentinel-solutions-catalog#domain-solutions) and does not include any data connectors. The content in this solution supports the connectors listed below. Install one or more of the listed solutions, to unlock the value provided by this solution. 
 
 1. Windows Security Events 
 2. Windows Server DNS 
 3. Windows Forwarded Events 
 4. Microsoft Entra ID 

**Keywords:** attack tools, penetration testing, Impacket, Powercat, Nishang, Cobalt Strike, ADFind, Credential Dumping, PowerShell Empire  

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-11-16 |
| **Solution Folder** | [Attacker Tools Threat Protection Essentials](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Attacker%20Tools%20Threat%20Protection%20Essentials) |
| **Dependencies** | [Windows Security Events](windows-security-events.md), [Windows Server DNS](windows-server-dns.md), [Windows Forwarded Events](windows-forwarded-events.md), [Microsoft Entra ID](microsoft-entra-id.md) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **6 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | Analytics |
| [`DnsEvents`](../tables/dnsevents.md) | Hunting |
| [`Event`](../tables/event.md) | Analytics |
| [`SecurityEvent`](../tables/securityevent.md) | Analytics, Hunting |
| [`VMConnection`](../tables/vmconnection.md) | Hunting |
| [`WindowsEvent`](../tables/windowsevent.md) | Analytics, Hunting |

## Content Items

This solution includes **6 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |
| Hunting Queries | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Credential Dumping Tools - File Artifacts](../content/attacker-tools-threat-protection-essentials-credential-dumping-tools-file-artifacts-32ffb19e-8ed8-40ed-87a0-1adb4746b7c4-38277ddb.md) | High | CredentialAccess | [`Event`](../tables/event.md) |
| [Credential Dumping Tools - Service Installation](../content/attacker-tools-threat-protection-essentials-credential-dumping-tools-service-installation-4ebbb5c2-8802-11ec-a8a3-0242ac120002-507654df.md) | High | CredentialAccess | [`Event`](../tables/event.md) |
| [Powershell Empire Cmdlets Executed in Command Line](../content/attacker-tools-threat-protection-essentials-powershell-empire-cmdlets-executed-in-command-line-ef88eb96-861c-43a0-ab16-f3835a97c928-001fa98c.md) | Medium | Collection, CommandAndControl, CredentialAccess, DefenseEvasion, Discovery, Execution, Exfiltration, LateralMovement, Persistence, PrivilegeEscalation | [`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |
| [Probable AdFind Recon Tool Usage](../content/attacker-tools-threat-protection-essentials-probable-adfind-recon-tool-usage-c63ae777-d5e0-4113-8c9a-c2c9d3d09fcd-3713de66.md) | High | Discovery | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Cobalt Strike DNS Beaconing](../content/attacker-tools-threat-protection-essentials-cobalt-strike-dns-beaconing-dde206fc-3f0b-4175-bb5d-42d2aae9d4c9-35f15bcd.md) | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md)<br>[`VMConnection`](../tables/vmconnection.md) |
| [Potential Impacket Execution](../content/attacker-tools-threat-protection-essentials-potential-impacket-execution-24ae555c-5e33-4b5d-827a-44206e39f6b4-04d0f42f.md) | CredentialAccess | [`SecurityEvent`](../tables/securityevent.md)<br>[`WindowsEvent`](../tables/windowsevent.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                        |
|-------------|--------------------------------|---------------------------------------------------------------------------|
| 3.0.3       | 06-06-2024                     | Added missing AMA **Data Connector** reference in **Analytic rules** and **Hunting Queries**|
| 3.0.2       | 07-02-2024                     | Tagged for dependent solutions for deployment                             |
| 3.0.1       | 23-01-2024                     | Added subTechniques in Template                                           |
| 3.0.0       | 06-11-2023                     | Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

