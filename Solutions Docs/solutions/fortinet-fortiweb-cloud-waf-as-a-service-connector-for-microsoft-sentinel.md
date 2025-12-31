# Fortinet FortiWeb Cloud WAF-as-a-Service connector for Microsoft Sentinel

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **First Published** | 2022-05-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiWeb%20Cloud%20WAF-as-a-Service%20connector%20for%20Microsoft%20Sentinel](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiWeb%20Cloud%20WAF-as-a-Service%20connector%20for%20Microsoft%20Sentinel) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] Fortinet FortiWeb Web Application Firewall via Legacy Agent](../connectors/fortinetfortiweb.md)
- [Fortinet FortiWeb Web Application Firewall via AMA](../connectors/fortinetfortiwebama.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Fortinet FortiWeb Web Application Firewall via AMA](../connectors/fortinetfortiwebama.md), [[Deprecated] Fortinet FortiWeb Web Application Firewall via Legacy Agent](../connectors/fortinetfortiweb.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **7 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 2 |
| Playbooks | 2 |
| Analytic Rules | 1 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Fortiweb - WAF Allowed threat](../content/86e9409f-b9ea-4e9a-8b72-5132ba43bcae.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Fortiweb - Unexpected countries](../content/9fc7d945-0e82-4664-aca0-dc121a7rt5nt.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Fortiweb - identify owasp10 vulnerabilities](../content/3rg4d567-0e82-4664-aca0-dc121a7th3ht.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Fortiweb-workbook](../content/fortiweb-workbook-fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Block IP & URL on fortiweb cloud](../content/block-ip-&-url-on-fortiweb-cloud-fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel.md) | This Playbook Provides the automation on blocking the suspicious/malicious IP and URL on fortiweb cl... | - |
| [Fetch Threat Intel from fortiwebcloud](../content/fetch-threat-intel-from-fortiwebcloud-fortinet-fortiweb-cloud-waf-as-a-service-connector-for-microsoft-sentinel.md) | This playbook provides/updates the threat intel and essential details in comments section of trigger... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Fortiweb](../content/b24da091-25e9-40ee-a6da-091eef3517e8.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                | 
|-------------|--------------------------------|-------------------------------------------------------------------|
| 3.0.3       | 10-12-2024                     | Removed Deprecated **Data Connectors**                            |
| 3.0.2       | 30-04-2024                     | Repackaged for parser issue fix on reinstall                      |
| 3.0.1       | 26-02-2024                     |Addition of new Fortinet FortiWeb Cloud WAF AMA **Data Connector** |
| 3.0.0       | 11-07-2023                     |Updated the title and the description of the solution              |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
