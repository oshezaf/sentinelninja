# Acronis Cyber Protect Cloud

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Acronis.svg" alt="Acronis Cyber Protect Cloud Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Acronis Cyber Protect Cloud solution for Microsoft Sentinel enables companies to ingest Acronis alerts, events, and activities into Microsoft Sentinel. The data is initially stored on a device on the company network using the Acronis agent as a writer. [See Acronis SIEM Connector documentation here](https://www.acronis.com/en-us/support/documentation/CyberProtectionService/index.html#siem-plans.html) The integration includes custom Acronis detection rules and hunting queries to help companies proactively hunt for threats.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Acronis International GmbH |
| **Support Tier** | Partner |
| **Support Link** | [https://www.acronis.com/en/support](https://www.acronis.com/en/support) |
| **Categories** | domains,verticals |
| **Version** | 3.0.0 |
| **Author** | Acronis - support@acronis.com |
| **First Published** | 2025-10-28 |
| **Last Updated** | 2025-10-28 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Acronis%20Cyber%20Protect%20Cloud](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Acronis%20Cyber%20Protect%20Cloud) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

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
| [Acronis - Login from Abnormal IP - Low Occurrence](../content/acronis-cyber-protect-cloud-acronis-login-from-abnormal-ip-low-occurrence-84037130-a623-46c2-9144-0c0955ac4112-5d101d22.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Multiple Endpoints Accessing Malicious URLs](../content/acronis-cyber-protect-cloud-acronis-multiple-endpoints-accessing-malicious-urls-1385f0ce-69d9-4abf-8039-52080c8c7017-873d8b8f.md) | Medium | Execution | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Multiple Endpoints Infected by Ransomware](../content/acronis-cyber-protect-cloud-acronis-multiple-endpoints-infected-by-ransomware-a783ade7-bf43-416d-b809-8f5b06d87790-b918ffca.md) | High | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Multiple Inboxes with Malicious Content Detected](../content/acronis-cyber-protect-cloud-acronis-multiple-inboxes-with-malicious-content-detected-5090ad7b-4b47-4cab-9015-bffb43aecde8-54d81823.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Acronis - ASZ defence: Unauthorized operation is detected and blocked](../content/acronis-cyber-protect-cloud-acronis-asz-defence-unauthorized-operation-is-detected-and-blocked-39310cb8-53bc-47c1-86c4-2ff9f0d3cc5f-bcc0c583.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Agent failed updating more than twice in a day](../content/acronis-cyber-protect-cloud-acronis-agent-failed-updating-more-than-twice-in-a-day-b140b19a-0fcf-40f2-9284-5e0f58e1efd8-f580a535.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Agents offline for 2 days or more](../content/acronis-cyber-protect-cloud-acronis-agents-offline-for-2-days-or-more-7a981151-a648-4ff4-a827-fc98337a95ed-8a6f3996.md) | DefenseEvasion | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Audit Log](../content/acronis-cyber-protect-cloud-acronis-audit-log-ce88b396-db24-44b6-babd-c431ee7a527f-c15182ee.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Cloud Connection Errors](../content/acronis-cyber-protect-cloud-acronis-cloud-connection-errors-98d1abaf-6be8-4d20-8ff3-16b19bc616af-8bfb24e9.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Endpoints Accessing Malicious URLs](../content/acronis-cyber-protect-cloud-acronis-endpoints-accessing-malicious-urls-29c1b194-50d1-418d-82a9-3db5e3dfc3bf-78dba951.md) | Execution | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Endpoints Infected by Ransomware](../content/acronis-cyber-protect-cloud-acronis-endpoints-infected-by-ransomware-cc3a2ea1-2dbb-4e5e-acb1-866b9bffb85c-e2e1374f.md) | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Endpoints with Backup issues](../content/acronis-cyber-protect-cloud-acronis-endpoints-with-backup-issues-51ac84a9-5e82-456a-b398-f2e7b9ea8611-a0e4e0d0.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Endpoints with EDR Incidents](../content/acronis-cyber-protect-cloud-acronis-endpoints-with-edr-incidents-55b6da0d-08c1-4af0-af2d-c4d14a1f6c3c-e5dd2a41.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Endpoints with high failed login attempts](../content/acronis-cyber-protect-cloud-acronis-endpoints-with-high-failed-login-attempts-9657f70c-d7df-4232-937c-6045fffe4e3d-cdae21a2.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Inboxes with Malicious Content](../content/acronis-cyber-protect-cloud-acronis-inboxes-with-malicious-content-1de4a0c7-4e72-45f3-b335-ab25f99ace3f-3797908a.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Login from Abnormal IP - Low Occurrence](../content/acronis-cyber-protect-cloud-acronis-login-from-abnormal-ip-low-occurrence-362666d6-5e4f-4f84-958b-6237e766eb6d-752ce66b.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Acronis - Protection Service Errors](../content/acronis-cyber-protect-cloud-acronis-protection-service-errors-aaf57371-02c0-4bf5-8c03-dfeb6536e397-013c8a42.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.0       | 11-11-2025                     | Initial Solution Release. <br> The **publisherId** has been Updated.|

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

