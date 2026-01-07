# Web Shells Threat Protection

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **First Published** | 2022-05-22 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Shells%20Threat%20Protection](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Shells%20Threat%20Protection) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **4 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Hunting |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | Hunting |
| [`SecurityEvent`](../tables/securityevent.md) | Analytics |
| [`W3CIISLog`](../tables/w3ciislog.md) | Analytics, Hunting |

## Content Items

This solution includes **9 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 6 |
| Analytic Rules | 3 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Identify SysAid Server web shell creation](../content/50eb4cbd-188f-44f4-b964-bab84dcdec10.md) | High | InitialAccess | [`SecurityEvent`](../tables/securityevent.md) |
| [Malicious web application requests linked with Microsoft Defender for Endpoint (formerly Microsoft Defender ATP) alerts](../content/fbfbf530-506b-49a4-81ad-4030885a195c.md) | Medium | Persistence | [`W3CIISLog`](../tables/w3ciislog.md) |
| [SUPERNOVA webshell](../content/2acc91c3-17c2-4388-938e-4eac2d5894e8.md) | High | Persistence, CommandAndControl | [`W3CIISLog`](../tables/w3ciislog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Exchange IIS Worker Dropping Webshells](../content/42e7df5b-80f6-49a5-946a-08026ec24807.md) | Execution, Persistence | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Possible Webshell usage attempt related to SpringShell(CVE-2022-22965)](../content/6911d1df-4204-43b2-a64c-3cb102551ddd.md) | Execution | [`AzureDiagnostics`](../tables/azurediagnostics.md) |
| [Possible webshell drop](../content/8f2a256f-c9f1-4f0a-941a-a5a131d4bf3b.md) | Initial access, Execution, Persistence | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [UMWorkerProcess Creating Webshell](../content/60d15bd4-1fad-4a70-bc3b-094dc1c5e554.md) | Execution, Persistence, Exploit | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Web Shell Activity](../content/e0c947c3-fe83-46ff-bbda-a43224a785fd.md) | Persistence, InitialAccess | [`W3CIISLog`](../tables/w3ciislog.md) |
| [Webshell Detection](../content/cc087e7c-4db0-4bf9-9e48-287a9c9c3fbc.md) | Persistence, PrivilegeEscalation | [`W3CIISLog`](../tables/w3ciislog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                            |
|-------------|--------------------------------|-------------------------------------------------------------------------------|
| 3.0.4       | 10-06-2024                     | Added missing AMA **Data Connector** reference in **Analytic rules**     |
| 3.0.3       | 12-04-2024                     | Updated Entity Mapping and Query of **Analytic Rule** Supernovawebshell.yaml and MaliciousAlertLinkedWebRequests.yaml                              |
| 3.0.2       | 22-02-2024                     | Tagged for dependent Solutions for deployment                                 |
| 3.0.1       | 25-10-2023                     | Changes for rebranding from Microsoft 365 Defender to Microsoft Defender XDR  |      
| 3.0.0       | 12-07-2023                     | Updated **Hunting Queries** descriptions to meet the 255 character limit.     |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
