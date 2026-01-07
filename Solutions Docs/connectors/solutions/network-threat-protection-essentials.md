# Network Threat Protection Essentials

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-11-16 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Network%20Threat%20Protection%20Essentials](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Network%20Threat%20Protection%20Essentials) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **2 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Hunting |
| [`UserAgentAll`](../tables/useragentall.md) | Analytics |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 3 |
| Analytic Rules | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Network endpoint to host executable correlation](../content/01f64465-b1ef-41ea-a7f5-31553a11ad43.md) | Medium | Execution | - |
| [New UserAgent observed in last 24 hours](../content/b725d62c-eb77-42ff-96f6-bdc6745fc6e0.md) | Low | InitialAccess, CommandAndControl, Execution | [`UserAgentAll`](../tables/useragentall.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Base64 encoded IPv4 address in request url](../content/39156a1d-c9e3-439e-967b-be7dcba918d9.md) | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Exploit and Pentest Framework User Agent](../content/df75ac6c-7b0b-40d2-82e4-191c012f1a07.md) | InitialAccess, CommandAndControl, Execution | - |
| [Risky base64 encoded command in URL](../content/c46eeb45-c324-4a84-9df1-248c6d1507bb.md) | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.0.1       | 23-02-2024                     | Tagged for dependent solutions for deployment                                  |
| 3.0.0       | 19-12-2023                     | Corrected typo mistake *Microsoft Windows DNS* to *Windows Server DNS*         |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
