# CyberArk Audit for Microsoft Sentinel

*Solution: CyberArkAudit*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/CyberArk_Logo.svg" alt="CyberArkAudit Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | CyberArk Support |
| **Support Tier** | Partner |
| **Support Link** | [https://www.cyberark.com/services-support/technical-support-contact/](https://www.cyberark.com/services-support/technical-support-contact/) |
| **Categories** | domains |
| **Version** | 3.1.0 |
| **Author** | CyberArk Business Development - BizDevTech@cyberark.com |
| **First Published** | 2024-03-01 |
| **Last Updated** | 2026-03-05 |
| **Solution Folder** | [CyberArkAudit](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArkAudit) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/cyberark.cyberark_audit_sentinel) · Popularity: 🟢 High (89%) |

The integration between CyberArk Audit and Microsoft Sentinel aims to seamlessly connect the robust audit capabilities of CyberArk with the advanced security analytics and threat detection features of Microsoft Sentinel

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **2 data connector(s)**:

- [CyberArkAudit](../connectors/cyberarkaudit.md)
- [CyberArk Audit](../connectors/cyberarkauditccpdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CyberArk_AuditEvents_CL`](../tables/cyberark-auditevents-cl.md) | [CyberArk Audit](../connectors/cyberarkauditccpdefinition.md), [CyberArkAudit](../connectors/cyberarkaudit.md) | Analytics |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 3 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [CyberArk - High-Risk Actions Outside Business Hours](../content/cyberarkaudit-cyberark-high-risk-actions-outside-business-hours-3733e1ac-991b-4504-99e8-24ff4fbaf6e4-f02b1466.md) | High | DefenseEvasion | [`CyberArk_AuditEvents_CL`](../tables/cyberark-auditevents-cl.md) |
| [CyberArk - Multiple Failed Actions Followed by Success (15m)](../content/cyberarkaudit-cyberark-multiple-failed-actions-followed-by-success-15m-bdf3cf98-d64f-4c55-97e4-43483d6d3237-7585ad5d.md) | Medium | CredentialAccess | [`CyberArk_AuditEvents_CL`](../tables/cyberark-auditevents-cl.md) |
| [CyberArk - Sensitive Safe/Permission/Entitlement Changes (with customData)](../content/cyberarkaudit-cyberark-sensitive-safe-permission-entitlement-changes-with-customdata-30938118-8812-4b5f-afa4-a8d4ba2b5d86-5cd42d25.md) | Low | PrivilegeEscalation | [`CyberArk_AuditEvents_CL`](../tables/cyberark-auditevents-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                    |
|-------------|--------------------------------|-------------------------------------------------------|
| 3.1.0       | 13-03-2026                     | New Data Connector based on CCF.<br> added missing migration instructions and disclaimers.|
| 3.0.2       | 16-10-2025                     | Add Analytics Rules.                                  |
| 3.0.1       | 29-04-2024                     | Configuration procedure update.      	               |  
| 3.0.0       | 03-04-2024                     | Initial Solution Release.        	              	   |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

