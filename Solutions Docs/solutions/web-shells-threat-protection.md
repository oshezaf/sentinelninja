# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Shells Threat Protection

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Web Shells Threat Protection Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.4 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-22 |
| **Solution Folder** | [Web Shells Threat Protection](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Shells%20Threat%20Protection) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-webshellsthreatprotection) |
| **Pre-requisites** | [Microsoft Defender XDR](microsoft-defender-xdr.md), [Windows Security Events](windows-security-events.md), [Azure Web Application Firewall (WAF)](azure-web-application-firewall-waf.md) |

The Web Shells Threat Protection solution contains security content that helps proactive and reactive detection of Web Shells used by attackers. Web Shells are malicious scripts that attackers use to compromise internet facing servers. These are commonly used as a backdoor into the targeted web applications and servers. Microsoft Security Research has highlighted the threat, usage and detection of Web Shells in an enterprise environment in the following blogs: 

 - [Web shell attacks continue to rise](https://www.microsoft.com/en-us/security/blog/2021/02/11/web-shell-attacks-continue-to-rise/) 

 - [Analyzing attacks taking advantage of the Exchange Server vulnerabilities](https://www.microsoft.com/en-us/security/blog/2021/03/25/analyzing-attacks-taking-advantage-of-the-exchange-server-vulnerabilities/)

For details on the data sources and ASIM parsers supported by this solution, see the [ASIM Pre-requisites](#asim-pre-requisites) section below.

**Keywords:** WebDAV, SysAid, Mercury, CVE-2021-26855, CVE-2021-26857, CVE-2021-26858, CVE-2021-27065, SUPERNOVA, SpringShell, CVE-2022-22965

## Contents

- [Pre-requisites](#pre-requisites)
- [ASIM Pre-requisites](#asim-pre-requisites)
- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Pre-requisites

This solution depends on **3 other solution(s)**:

| Solution | Details |
|:---------|:--------|
| [Azure Web Application Firewall (WAF)](azure-web-application-firewall-waf.md) | - |
| [Microsoft Defender XDR](microsoft-defender-xdr.md) | - |
| [Windows Security Events](windows-security-events.md) | Also provides ASIM schemas: FileEvent |

## <a id="asim-pre-requisites"></a><img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Pre-requisites

This solution uses the [`imFileEvent`](../asim/imfileevent.md) [ASIM (Advanced Security Information Model)](https://learn.microsoft.com/azure/sentinel/normalization) parser to provide normalized, source-agnostic data access, expanding detection coverage without modifying queries.

### Supported Products

| Product | Dependency Solution |
|:--------|:--------------------|
| [Google Workspace](../asim/asim-products-index.md#google-workspace) | - |
| [Microsoft 365 Defender for EndPoint](../asim/asim-products-index.md#microsoft-365-defender-for-endpoint) | - |
| [Microsoft Azure Blob Storage](../asim/asim-products-index.md#microsoft-azure-blob-storage) | [Azure Storage](azure-storage.md) |
| [Microsoft Azure File Storage](../asim/asim-products-index.md#microsoft-azure-file-storage) | [Azure Storage](azure-storage.md) |
| [Microsoft Azure Queue Storage](../asim/asim-products-index.md#microsoft-azure-queue-storage) | [Azure Storage](azure-storage.md) |
| [Microsoft Azure Table Storage](../asim/asim-products-index.md#microsoft-azure-table-storage) | [Azure Storage](azure-storage.md) |
| [Microsoft SharePoint](../asim/asim-products-index.md#microsoft-sharepoint) | - |
| [Microsoft Sysmon for Linux](../asim/asim-products-index.md#microsoft-sysmon-for-linux) | [Syslog](syslog.md) |
| [Microsoft Windows Events](../asim/asim-products-index.md#microsoft-windows-events) | [Windows Forwarded Events](windows-forwarded-events.md)<br>[Windows Security Events](windows-security-events.md) |
| [Native](../asim/asim-products-index.md#native) | [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](vmware-carbon-black-cloud.md) |
| [SentinelOne](../asim/asim-products-index.md#sentinelone) | [SentinelOne](sentinelone.md) |
| [VMware Carbon Black Cloud](../asim/asim-products-index.md#vmware-carbon-black-cloud) | [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md) |
| [Windows Sysmon](../asim/asim-products-index.md#windows-sysmon) | [Windows Forwarded Events](windows-forwarded-events.md) |

## Data Connectors

**This solution does not include its own data connectors** but uses connectors from dependency solutions:

- [Azure Storage Account](../connectors/azurestorageaccount.md) *(dependency on [Azure Storage](azure-storage.md))*
- [CrowdStrike API Data Connector (via Codeless Connector Framework)](../connectors/crowdstrikeapiconnector.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Adversary Intelligence ](../connectors/crowdstrikefalconadversaryintelligence.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [[Deprecated] CrowdStrike Falcon Endpoint Protection via Legacy Agent](../connectors/crowdstrikefalconendpointprotection.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [[Deprecated] CrowdStrike Falcon Endpoint Protection via AMA](../connectors/crowdstrikefalconendpointprotectionama.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Data Replicator (AWS S3) (via Codeless Connector Framework)](../connectors/crowdstrikefalcons3ccpdefinition.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3)](../connectors/crowdstrikereplicatorv2.md) *(dependency on [CrowdStrike Falcon Endpoint Protection](crowdstrike-falcon-endpoint-protection.md))*
- [Microsoft Defender XDR](../connectors/microsoftthreatprotection.md) *(dependency on [Microsoft Defender XDR](microsoft-defender-xdr.md))*
- [Security Events via Legacy Agent](../connectors/securityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*
- [SentinelOne](../connectors/sentinelone.md) *(dependency on [SentinelOne](sentinelone.md))*
- [SentinelOne](../connectors/sentineloneccp.md) *(dependency on [SentinelOne](sentinelone.md))*
- [Syslog via Legacy Agent](../connectors/syslog.md) *(dependency on [Syslog](syslog.md))*
- [Syslog via AMA](../connectors/syslogama.md) *(dependency on [Syslog](syslog.md))*
- [VMware Carbon Black Cloud](../connectors/vmwarecarbonblack.md) *(dependency on [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md))*
- [Azure Web Application Firewall (WAF)](../connectors/waf.md) *(dependency on [Azure Web Application Firewall (WAF)](azure-web-application-firewall-waf.md))*
- [Windows Forwarded Events](../connectors/windowsforwardedevents.md) *(dependency on [Windows Forwarded Events](windows-forwarded-events.md))*
- [Windows Security Events via AMA](../connectors/windowssecurityevents.md) *(dependency on [Windows Security Events](windows-security-events.md))*
- [VMware Carbon Black Cloud via AWS S3](../connectors/carbonblackawss3.md) *(dependency on [VMware Carbon Black Cloud](vmware-carbon-black-cloud.md))*

## Tables Used

This solution queries **4 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Hunting |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | Analytics, Hunting |
| [`SecurityEvent`](../tables/securityevent.md) | Analytics |
| [`W3CIISLog`](../tables/w3ciislog.md) | Analytics, Hunting |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | Analytics |

## Content Items

This solution includes **9 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 6 |
| Analytic Rules | 3 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [Identify SysAid Server web shell creation](../content/web-shells-threat-protection-identify-sysaid-server-web-shell-creation-50eb4cbd-188f-44f4-b964-bab84dcdec10-5faaa2d1.md) | High | InitialAccess | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`imFileEvent`](../asim/imfileevent.md)<br>[`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
| [Malicious web application requests linked with Microsoft Defender for Endpoint (formerly Microsoft Defender ATP) alerts](../content/web-shells-threat-protection-malicious-web-application-requests-linked-with-microsoft-defender-for-endpo-fbfbf530-506b-49a4-81ad-4030885a195c-8a9494a2.md) | Medium | Persistence | [`W3CIISLog`](../tables/w3ciislog.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [SUPERNOVA webshell](../content/web-shells-threat-protection-supernova-webshell-2acc91c3-17c2-4388-938e-4eac2d5894e8-79d870d5.md) | High | Persistence, CommandAndControl | [`W3CIISLog`](../tables/w3ciislog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Exchange IIS Worker Dropping Webshells](../content/web-shells-threat-protection-exchange-iis-worker-dropping-webshells-42e7df5b-80f6-49a5-946a-08026ec24807-918c2a7e.md) | Execution, Persistence | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Possible Webshell usage attempt related to SpringShell(CVE-2022-22965)](../content/web-shells-threat-protection-possible-webshell-usage-attempt-related-to-springshell-cve-2022-22965-6911d1df-4204-43b2-a64c-3cb102551ddd-8605b97e.md) | Execution | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Possible webshell drop](../content/web-shells-threat-protection-possible-webshell-drop-8f2a256f-c9f1-4f0a-941a-a5a131d4bf3b-5ddc946f.md) | Initial access, Execution, Persistence | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [UMWorkerProcess Creating Webshell](../content/web-shells-threat-protection-umworkerprocess-creating-webshell-60d15bd4-1fad-4a70-bc3b-094dc1c5e554-5e3339db.md) | Execution, Persistence, Exploit | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Web Shell Activity](../content/web-shells-threat-protection-web-shell-activity-e0c947c3-fe83-46ff-bbda-a43224a785fd-524bd9eb.md) | Persistence, InitialAccess | [`W3CIISLog`](../tables/w3ciislog.md) |
| [Webshell Detection](../content/web-shells-threat-protection-webshell-detection-cc087e7c-4db0-4bf9-9e48-287a9c9c3fbc-b4d60786.md) | Persistence, PrivilegeEscalation | [`W3CIISLog`](../tables/w3ciislog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                            |
|-------------|--------------------------------|-------------------------------------------------------------------------------|
| 3.0.4       | 10-06-2024                     | Added missing AMA **Data Connector** reference in **Analytic rules**     |
| 3.0.3       | 12-04-2024                     | Updated Entity Mapping and Query of **Analytic Rule** Supernovawebshell.yaml and MaliciousAlertLinkedWebRequests.yaml                              |
| 3.0.2       | 22-02-2024                     | Tagged for dependent Solutions for deployment                                 |
| 3.0.1       | 25-10-2023                     | Changes for rebranding from Microsoft 365 Defender to Microsoft Defender XDR  |      
| 3.0.0       | 12-07-2023                     | Updated **Hunting Queries** descriptions to meet the 255 character limit.     |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

