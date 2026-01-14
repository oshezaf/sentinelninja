# CyberArkAudit

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/CyberArk_Logo.svg" alt="CyberArkAudit Logo" width="75" height="75">

The integration between CyberArk Audit and Microsoft Sentinel aims to seamlessly connect the robust audit capabilities of CyberArk with the advanced security analytics and threat detection features of Microsoft Sentinel

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | CyberArk Support |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cyberark.com/services-support/technical-support-contact/](https://www.cyberark.com/services-support/technical-support-contact/) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | CyberArk Business Development - BizDevTech@cyberark.com |
| **First Published** | 2024-03-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArkAudit](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArkAudit) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [CyberArkAudit](../connectors/cyberarkaudit.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CyberArk_AuditEvents_CL`](../tables/cyberark-auditevents-cl.md) | [CyberArkAudit](../connectors/cyberarkaudit.md) | Analytics |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [CyberArk - High-Risk Actions Outside Business Hours](../content/cyberarkaudit-cyberark-high-risk-actions-outside-business-hours-3c9ee3ae.md) | High | DefenseEvasion | [`CyberArk_AuditEvents_CL`](../tables/cyberark-auditevents-cl.md) |
| [CyberArk - Multiple Failed Actions Followed by Success (15m)](../content/cyberarkaudit-cyberark-multiple-failed-actions-followed-by-success-15m-707982e9.md) | Medium | CredentialAccess | [`CyberArk_AuditEvents_CL`](../tables/cyberark-auditevents-cl.md) |
| [CyberArk - Sensitive Safe/Permission/Entitlement Changes (with customData)](../content/cyberarkaudit-cyberark-sensitive-safe-permission-entitlement-changes-with-customdata-8af89ccf.md) | Low | PrivilegeEscalation | [`CyberArk_AuditEvents_CL`](../tables/cyberark-auditevents-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                    |
|-------------|--------------------------------|-------------------------------------------------------|
| 3.0.2       | 16-10-2025                     | Add Analytics Rules.                                  |
| 3.0.1       | 29-04-2024                     | Configuration procedure update.      	              	 |  
| 3.0.0       | 03-04-2024                     | Initial Solution Release.        	              	     |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

