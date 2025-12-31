# Acronis Cyber Protect Cloud

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Acronis International GmbH |
| **Support Tier** | Partner |
| **Support Link** | [https://www.acronis.com/en/support](https://www.acronis.com/en/support) |
| **Categories** | domains,verticals |
| **First Published** | 2025-10-28 |
| **Last Updated** | 2025-10-28 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Acronis%20Cyber%20Protect%20Cloud](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Acronis%20Cyber%20Protect%20Cloud) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **1 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | Analytics, Hunting |

## Content Items

This solution includes **17 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 13 |
| Analytic Rules | 4 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Acronis - Login from Abnormal IP - Low Occurrence](../content/84037130-a623-46c2-9144-0c0955ac4112.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Multiple Endpoints Accessing Malicious URLs](../content/1385f0ce-69d9-4abf-8039-52080c8c7017.md) | Medium | Execution | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Multiple Endpoints Infected by Ransomware](../content/a783ade7-bf43-416d-b809-8f5b06d87790.md) | High | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Multiple Inboxes with Malicious Content Detected](../content/5090ad7b-4b47-4cab-9015-bffb43aecde8.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Acronis - ASZ defence: Unauthorized operation is detected and blocked](../content/39310cb8-53bc-47c1-86c4-2ff9f0d3cc5f.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Agent failed updating more than twice in a day](../content/b140b19a-0fcf-40f2-9284-5e0f58e1efd8.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Agents offline for 2 days or more](../content/7a981151-a648-4ff4-a827-fc98337a95ed.md) | DefenseEvasion | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Audit Log](../content/ce88b396-db24-44b6-babd-c431ee7a527f.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Cloud Connection Errors](../content/98d1abaf-6be8-4d20-8ff3-16b19bc616af.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Endpoints Accessing Malicious URLs](../content/29c1b194-50d1-418d-82a9-3db5e3dfc3bf.md) | Execution | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Endpoints Infected by Ransomware](../content/cc3a2ea1-2dbb-4e5e-acb1-866b9bffb85c.md) | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Endpoints with Backup issues](../content/51ac84a9-5e82-456a-b398-f2e7b9ea8611.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Endpoints with EDR Incidents](../content/55b6da0d-08c1-4af0-af2d-c4d14a1f6c3c.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Endpoints with high failed login attempts](../content/9657f70c-d7df-4232-937c-6045fffe4e3d.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Inboxes with Malicious Content](../content/1de4a0c7-4e72-45f3-b335-ab25f99ace3f.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Login from Abnormal IP - Low Occurrence](../content/362666d6-5e4f-4f84-958b-6237e766eb6d.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Protection Service Errors](../content/aaf57371-02c0-4bf5-8c03-dfeb6536e397.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.0       | 11-11-2025                     | Initial Solution Release. <br> The **publisherId** has been Updated.|

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
