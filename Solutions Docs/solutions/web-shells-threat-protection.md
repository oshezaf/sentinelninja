# Web Shells Threat Protection

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Web Shells Threat Protection Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Web Shells Threat Protection solution contains security content that helps proactive and reactive detection of Web Shells used by attackers. Web Shells are malicious scripts that attackers use to compromise internet facing servers. These are commonly used as a backdoor into the targeted web applications and servers. Microsoft Security Research has highlighted the threat, usage and detection of Web Shells in an enterprise environment in the following blogs: 

 - [Web shell attacks continue to rise](https://www.microsoft.com/en-us/security/blog/2021/02/11/web-shell-attacks-continue-to-rise/) 

 - [Analyzing attacks taking advantage of the Exchange Server vulnerabilities](https://www.microsoft.com/en-us/security/blog/2021/03/25/analyzing-attacks-taking-advantage-of-the-exchange-server-vulnerabilities/)

**Pre-requisites:**

 This is a [domain solution](https://learn.microsoft.com/en-us/azure/sentinel/sentinel-solutions-catalog#domain-solutions) and does not include any data connectors. The content in this solution supports the connectors listed below. Install one or more of the listed solutions, to unlock the value provided by this solution. 
 
 1. Microsoft Defender XDR 

 2. Windows Security Events 

 3. Azure Web Application Firewall

**Keywords:** WebDAV, SysAid, Mercury, CVE-2021-26855, CVE-2021-26857, CVE-2021-26858, CVE-2021-27065, SUPERNOVA, SpringShell, CVE-2022-22965

## Solution Information

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
| **Dependencies** | [Microsoft Defender XDR](microsoft-defender-xdr.md), [Windows Security Events](windows-security-events.md), [Azure Web Application Firewall (WAF)](azure-web-application-firewall-waf.md) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

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
| [Identify SysAid Server web shell creation](../content/web-shells-threat-protection-identify-sysaid-server-web-shell-creation-50eb4cbd-188f-44f4-b964-bab84dcdec10-5faaa2d1.md) | High | InitialAccess | [`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`SecurityEvent`](../tables/securityevent.md) |
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

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

